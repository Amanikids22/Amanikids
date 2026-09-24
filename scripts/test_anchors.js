const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const files = fs.readdirSync(ROOT_DIR).filter(f => f.endsWith('.html'));

let missingCount = 0;

files.forEach(f => {
  const content = fs.readFileSync(path.join(ROOT_DIR, f), 'utf8');
  const internalAnchors = [...content.matchAll(/href=["']#([a-zA-Z0-9_-]+)["']/g)].map(m => m[1]);
  internalAnchors.forEach(id => {
    const hasId = content.includes(`id="${id}"`) || content.includes(`id='${id}'`) || content.includes(`name="${id}"`);
    if (!hasId) {
      console.warn(`[${f}] Missing internal anchor target: #${id}`);
      missingCount++;
    }
  });

  // Cross-page anchors: href="page.html#anchor"
  const crossAnchors = [...content.matchAll(/href=["']([a-zA-Z0-9_-]+\.html)#([a-zA-Z0-9_-]+)["']/g)];
  crossAnchors.forEach(m => {
    const targetFile = m[1];
    const targetAnchor = m[2];
    const targetPath = path.join(ROOT_DIR, targetFile);
    if (fs.existsSync(targetPath)) {
      const targetContent = fs.readFileSync(targetPath, 'utf8');
      const hasTargetAnchor = targetContent.includes(`id="${targetAnchor}"`) || targetContent.includes(`id='${targetAnchor}'`);
      if (!hasTargetAnchor) {
        console.warn(`[${f}] Link to ${targetFile}#${targetAnchor} has MISSING anchor on target page!`);
        missingCount++;
      }
    } else {
      console.warn(`[${f}] Link to nonexistent target file: ${targetFile}`);
      missingCount++;
    }
  });
});

console.log(`Scan finished. Missing anchors: ${missingCount}`);
