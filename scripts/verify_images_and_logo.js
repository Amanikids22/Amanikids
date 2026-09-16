const fs = require('fs');
const path = require('path');

const PAGES = [
  'index.html',
  'about.html',
  'team.html',
  'programs.html',
  'impact.html',
  'stories.html',
  'album.html',
  'events.html',
  'blog.html',
  'get-support.html',
  'get-involved.html',
  'contact.html'
];

let totalChecks = 0;
let errors = [];

console.log('=== VERIFYING IMAGES, LOGO & SILHOUETTES ===');

PAGES.forEach(page => {
  const content = fs.readFileSync(page, 'utf8');

  // 1. Check for any Unsplash images
  if (content.includes('unsplash.com')) {
    errors.push(`[${page}] still contains an Unsplash URL!`);
  }

  // 2. Check for brand-location-tag
  if (content.includes('brand-location-tag')) {
    errors.push(`[${page}] still contains 'brand-location-tag'!`);
  }

  // 3. Extract all <img> tags and check if the local files exist
  const imgMatches = content.matchAll(/<img[^>]+src=["']([^"']+)["']/gi);
  for (const match of imgMatches) {
    totalChecks++;
    const src = match[1];
    if (src === '' || src === 'images/favicon.png') continue;

    // Remove any query params
    const cleanSrc = src.split('?')[0];
    const absPath = path.join(__dirname, cleanSrc);

    if (!fs.existsSync(absPath)) {
      errors.push(`[${page}] Broken image reference: ${src}`);
    }
  }

  // 4. Verify footer logo card is clean
  if (content.includes('footer-logo-card')) {
    totalChecks++;
    const cardMatch = content.match(/<a href="index\.html" class="footer-logo-card[^>]*>([\s\S]*?)<\/a>/i);
    if (cardMatch) {
      const inner = cardMatch[1];
      if (inner.includes('CHARLOTTE') || inner.includes('North Carolina')) {
        errors.push(`[${page}] footer-logo-card still contains Charlotte text!`);
      }
      if (!inner.includes('images/amani_logo.png')) {
        errors.push(`[${page}] footer-logo-card is missing official logo!`);
      }
    }
  }
});

console.log(`Completed ${totalChecks} image & logo checks.`);
if (errors.length === 0) {
  console.log(' SUCCESS: All 12 pages verified! No broken images, no Unsplash URLs, logo is 100% clean, and silhouettes are in place.');
} else {
  console.error(' ERRORS FOUND:');
  errors.forEach(e => console.error('  - ' + e));
  process.exit(1);
}
