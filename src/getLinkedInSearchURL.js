import puppeteer from "puppeteer";

export async function getLinkedInSearchURLs(keywords, location) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });

  await page.goto(
    `https://www.linkedin.com/jobs/search?keywords=${keywords}&location=${location}`,
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      waitUntil: "networkidle2",
      timeout: 30000,
    }
  );

  const resultsUrl = page.url();
  await browser.close();
  return resultsUrl;
}

const URL = await getLinkedInSearchURLs("Web Developer", "Gelderland");
console.log("LinkedIn Search URL:", URL);
