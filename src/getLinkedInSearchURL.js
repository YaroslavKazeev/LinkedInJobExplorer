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

export async function getLinkedInSearchURLs(keywords) {
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

  // Try multiple selectors for the inputs since LinkedIn changes markup frequently
  const keywordSelectors = [
    "#job-search-bar-keywords",
    'input[aria-label="Search jobs"]',
    'input[placeholder*="Search jobs"]',
    'input[id*="keywords"]',
    'input[name*="keywords"]',
  ];

  try {
    await trySelectorsAndSet(page, keywordSelectors, keywords, {
      timeout: 7000,
    });
  } catch (err) {
    console.log(err);
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
    console.log(err);
    console.log("\nSubmit button click failed, trying Enter keypress");
    try {
      await page.keyboard.press("Enter");
      await page.waitForNavigation({
        waitUntil: "networkidle2",
        timeout: 30000,
      });
    } catch (err2) {
      console.log(err2);
      console.log("\nSubmit Enter keypress fallback also failed");
    }
  }

  const resultsUrl = page.url();
  await browser.close();
  return resultsUrl;
}

const URL = await getLinkedInSearchURLs("Web Developer");
console.log("LinkedIn Search URL:", URL);
