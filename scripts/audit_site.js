const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const htmlFiles = fs.readdirSync(ROOT_DIR).filter(f => f.endsWith('.html'));

console.log(`Auditing ${htmlFiles.length} HTML files in ${ROOT_DIR}...\n`);

let totalIssues = 0;

htmlFiles.forEach(file => {
  const filePath = path.join(ROOT_DIR, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const issues = [];

  // 1. Check title and meta
  if (!content.includes('<title>')) issues.push('Missing <title>');
  if (!content.includes('name="description"')) issues.push('Missing meta description');

  // 2. Check for broken internal links
  const hrefRegex = /href=["']([^"']+)["']/g;
  let match;
  while ((match = hrefRegex.exec(content)) !== null) {
    const url = match[1];
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('tel:') || url.startsWith('mailto:') || url.startsWith('javascript:')) {
      continue;
    }
    const cleanUrl = url.split('#')[0].split('?')[0];
    if (cleanUrl && !cleanUrl.startsWith('/') && !cleanUrl.endsWith('.css') && !cleanUrl.endsWith('.png') && !cleanUrl.endsWith('.jpg') && !cleanUrl.endsWith('.svg') && !cleanUrl.endsWith('.ico')) {
      const targetPath = path.join(ROOT_DIR, cleanUrl);
      if (!fs.existsSync(targetPath)) {
        issues.push(`Broken internal link: ${url}`);
      }
    }
  }

  // 3. Check for broken images
  const imgSrcRegex = /src=["']([^"']+)["']/g;
  while ((match = imgSrcRegex.exec(content)) !== null) {
    const src = match[1];
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) {
      continue;
    }
    const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
    const targetImg = path.join(ROOT_DIR, cleanSrc);
    if (!fs.existsSync(targetImg)) {
      issues.push(`Broken image source: ${src}`);
    }
  }

  // 4. Check for obsolete or empty href="#"
  const emptyHashMatches = content.match(/href="#"/g);
  if (emptyHashMatches) {
    issues.push(`Found ${emptyHashMatches.length} empty href="#" link(s)`);
  }

  // 5. Check forms for recipient email
  const formMatches = content.match(/<form[^>]*>/g);
  if (formMatches) {
    formMatches.forEach(f => {
      if (f.includes('action=') && !f.includes('info@amanikidsnc.org') && !f.includes('#')) {
        issues.push(`Form action not routing to info@amanikidsnc.org: ${f}`);
      }
    });
  }

  if (issues.length > 0) {
    console.log(`❌ ${file}:`);
    issues.forEach(i => console.log(`   - ${i}`));
    totalIssues += issues.length;
  } else {
    console.log(`✅ ${file}: All links, images, and structure valid.`);
  }
});

console.log(`\nAudit complete. Total issues flagged: ${totalIssues}`);
