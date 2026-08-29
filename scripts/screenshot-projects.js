const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const PROJECTS = [
  { name: "lungdetox", url: "https://lungdetox.royalswag.in" },
  { name: "amazora", url: "https://amazora.com.au" },
  { name: "silkroom", url: "https://silkroom.shop" },
  { name: "apnatree", url: "https://apnatree.vercel.app" },
  { name: "inventory-ai", url: "https://inventory-ai-mocha.vercel.app" },
  { name: "biodata-maker", url: "https://biodata-maker-silk.vercel.app" },
  { name: "smitcard", url: "https://smitcard.vercel.app" },
];

const OUT_DIR = path.join(__dirname, "../public/screenshots");
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

(async () => {
  let browser;
  try {
    browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  } catch (e) {
    console.warn("Puppeteer unavailable, skipping screenshots:", e.message);
    process.exit(0);
  }

  for (const project of PROJECTS) {
    try {
      const page = await browser.newPage();
      await page.setViewport({ width: 1280, height: 800 });
      await page.goto(project.url, { waitUntil: "networkidle2", timeout: 60000 });
      await page.screenshot({
        path: path.join(OUT_DIR, `${project.name}.png`),
        clip: { x: 0, y: 0, width: 1280, height: 800 },
      });
      console.log(`✓ Screenshot: ${project.name}`);
      await page.close();
    } catch (e) {
      console.error(`✗ Failed: ${project.name} — ${e.message}`);
    }
  }
  await browser.close();
  console.log("Done.");
})();
