import puppeteer from "puppeteer";
const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 900 });

export async function getLinkedInSearchURL(page, jobTitle, province) {
  await page.goto(
    `https://www.linkedin.com/jobs/search?keywords=${jobTitle}&location=${province}`,
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      waitUntil: "networkidle2",
      timeout: 30000,
    }
  );
  return page.url();
}

const URL = await getLinkedInSearchURL(page, "Web Developer", "Gelderland");
console.log("LinkedIn Search URL:", URL);

await browser.close();
