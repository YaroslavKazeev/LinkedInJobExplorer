import puppeteer from "puppeteer";

async function setInputValue(page, selector, value, opts = {}) {
  const timeout = opts.timeout ?? 5000;
  // Wait for element to be present and visible
  await page.waitForSelector(selector, { visible: true, timeout });
  // Use page.evaluate to set value directly which avoids clickablePoint issues
  const setResult = await page.evaluate(
    ({ selector, value }) => {
      const el = document.querySelector(selector);
      if (!el)
        return { ok: false, message: `No element for selector ${selector}` };
      // Try to set value and fire input events
      el.focus?.();
      if (el.value !== undefined) el.value = value;
      el.dispatchEvent(new Event("input", { bubbles: true }));
      el.dispatchEvent(new Event("change", { bubbles: true }));
      return { ok: true };
    },
    { selector, value }
  );

  if (!setResult.ok)
    throw new Error(setResult.message || `Failed to set value for ${selector}`);
}

async function trySelectorsAndSet(page, selectors, value, opts = {}) {
  let lastErr = null;
  for (const sel of selectors) {
    try {
      await setInputValue(page, sel, value, opts);
      return;
    } catch (err) {
      lastErr = err;
      // continue to next selector
    }
  }
  // nothing worked
  throw lastErr || new Error(`No selectors provided`);
}

async function closeCookieBannerIfPresent(page) {
  // Try common cookie banner accept buttons or consent buttons
  const xpaths = [
    "//button[contains(., 'Accept')]",
    "//button[contains(., 'Agree')]",
    "//button[contains(., 'I agree')]",
    "//button[contains(., 'Allow all')]",
  ];
  for (const xp of xpaths) {
    try {
      const [btn] = await page.$x(xp);
      if (btn) {
        await btn.click();
        // small wait to allow overlay to disappear
        await page.waitForTimeout(500);
        return true;
      }
    } catch (_e) {
      // ignore
    }
  }
  return false;
}

export async function getLinkedInSearchURLs(keywords, location) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  // Use a regular user agent to reduce bot detection
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  );
  await page.setViewport({ width: 1280, height: 900 });

  // Go to LinkedIn job search page
  await page.goto(
    "https://www.linkedin.com/jobs/search?keywords=&location=Gelderland",
    {
      waitUntil: "networkidle2",
      timeout: 30000,
    }
  );

  // Attempt to close cookie/consent overlays that can cover inputs
  await closeCookieBannerIfPresent(page);

  // Try multiple selectors for the inputs since LinkedIn changes markup frequently
  const keywordSelectors = [
    "#job-search-bar-keywords",
    'input[aria-label="Search jobs"]',
    'input[placeholder*="Search jobs"]',
    'input[id*="keywords"]',
    'input[name*="keywords"]',
  ];
  const locationSelectors = [
    "#job-search-bar-location",
    'input[aria-label="Location"]',
    'input[placeholder*="Location"]',
    'input[id*="location"]',
    'input[id*="job-search-bar-location"]',
    'input[name*="location"]',
  ];

  try {
    await trySelectorsAndSet(page, keywordSelectors, keywords, {
      timeout: 7000,
    });
  } catch (err) {
    // Take a screenshot for debugging and include it in the error
    try {
      await page.screenshot({
        path: "debug-keywords-failure.png",
        fullPage: true,
      });
    } catch {
      console.debug("screenshot failed for keywords failure");
    }
    throw new Error(`Failed to set keywords input: ${err.message}`);
  }

  try {
    await trySelectorsAndSet(page, locationSelectors, location, {
      timeout: 7000,
    });
  } catch (err) {
    try {
      await page.screenshot({
        path: "debug-location-failure.png",
        fullPage: true,
      });
    } catch {
      console.debug("screenshot failed for location failure");
    }
    throw new Error(`Failed to set location input: ${err.message}`);
  }

  // Submit the form by clicking the submit button via DOM click to avoid clickablePoint
  try {
    await page.waitForSelector('button[type="submit"]', {
      visible: true,
      timeout: 5000,
    });
    await Promise.all([
      page.$eval('button[type="submit"]', (btn) => btn.click()),
      page.waitForNavigation({ waitUntil: "networkidle2", timeout: 30000 }),
    ]);
  } catch (err) {
    // try an alternative: press Enter in the keywords input
    try {
      await page.keyboard.press("Enter");
      await page.waitForNavigation({
        waitUntil: "networkidle2",
        timeout: 30000,
      });
    } catch (err2) {
      await page
        .screenshot({ path: "debug-submit-failure.png", fullPage: true })
        .catch(() => {
          console.debug("screenshot failed for submit");
        });
      throw new Error(
        `Failed to submit search: ${err.message}; fallback: ${err2.message}`
      );
    }
  }

  // Get the current URL (search results page)
  const resultsUrl = page.url();

  await browser.close();
  return resultsUrl;
}

// Quick manual test when running this file directly (top-level await is allowed for ESM)
// If run directly via `node src/getLinkedInSearchURL.js`, run a quick manual test.
// We avoid referencing `process` in top-level expressions for stricter environments.
const _proc =
  typeof globalThis !== "undefined" && globalThis["process"]
    ? globalThis["process"]
    : undefined;
const _thisFile = (_proc && _proc.argv && _proc.argv[1]) || "";
if (_thisFile && _thisFile.endsWith("getLinkedInSearchURL.js")) {
  try {
    const URL = await getLinkedInSearchURLs(
      "Web Developer",
      "Ede, Gelderland, Netherlands"
    );
    console.log("LinkedIn Search URL:", URL);
  } catch (e) {
    console.error(e);
    if (_proc && _proc.exit) _proc.exit(1);
  }
}
