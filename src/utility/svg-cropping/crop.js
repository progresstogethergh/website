const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const inputDir = path.join(__dirname, 'input');
const outputDir = path.join(__dirname, 'output');

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.svg'));

  for (const file of files) {
    const filePath = path.join(inputDir, file);
    const svgContent = fs.readFileSync(filePath, 'utf8');

    // Load SVG into a real browser environment
    await page.setContent(`
      <!DOCTYPE html>
      <html>
        <head><style>html, body { margin: 0; padding: 0; }</style></head>
        <body>${svgContent}</body>
      </html>
    `);

    // Calculate real rendered bounding box
    const result = await page.evaluate(() => {
      const svg = document.querySelector('svg');
      if (!svg) return null;

      // getBBox() gives the exact coordinates of rendered paths/strokes
      const bbox = svg.getBBox();

      // Update viewBox to fit tightly around elements
      svg.setAttribute('viewBox', `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
      svg.removeAttribute('width');
      svg.removeAttribute('height');

      return svg.outerHTML;
    });

    if (result) {
      fs.writeFileSync(path.join(outputDir, file), result);
      console.log(`Cropped: ${file}`);
    } else {
      console.error(`Skipping ${file}: Invalid SVG`);
    }
  }

  await browser.close();
  console.log('All SVGs cropped successfully.');
})();