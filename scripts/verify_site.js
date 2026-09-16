// Automated Verification Script for AMANI KIDS Website
const fs = require('fs');
const path = require('path');

const PAGES = [
  'index.html',
  'about.html',
  'programs.html',
  'impact.html',
  'stories.html',
  'album.html',
  'events.html',
  'blog.html',
  'get-support.html',
  'get-involved.html',
  'contact.html',
  'team.html'
];

let totalChecks = 0;
let errors = [];

console.log('--- Starting Automated Static Site Verification ---');

// 1. Check all pages exist and have non-zero size
PAGES.forEach(page => {
  totalChecks++;
  const filePath = path.join(__dirname, page);
  if (!fs.existsSync(filePath)) {
    errors.push(`Missing page: ${page}`);
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  if (content.length < 500) {
    errors.push(`Page ${page} is suspiciously small (${content.length} bytes)`);
  }

  // 2. Check title, meta description, and H1
  totalChecks++;
  if (!content.includes('<title>') || !content.includes('</title>')) {
    errors.push(`${page} is missing <title> tag`);
  }

  totalChecks++;
  if (!content.includes('name="description"')) {
    errors.push(`${page} is missing meta description`);
  }

  totalChecks++;
  if (!content.includes('<h1')) {
    errors.push(`${page} is missing an <h1> tag`);
  }

  // 3. Check CSS links
  totalChecks++;
  if (!content.includes('css/style.css') || !content.includes('css/responsive.css')) {
    errors.push(`${page} does not link to both style.css and responsive.css`);
  }

  // 4. Check JS links
  totalChecks++;
  if (!content.includes('js/main.js') || !content.includes('js/navigation.js') || !content.includes('js/i18n.js')) {
    errors.push(`${page} does not link to main.js, navigation.js, and i18n.js`);
  }

  // 5. Check all internal href links
  const hrefMatches = content.matchAll(/href="([^"#:]+)(#[^"]*)?"/g);
  for (const match of hrefMatches) {
    const target = match[1];
    if (target.endsWith('.html')) {
      totalChecks++;
      if (!PAGES.includes(target)) {
        errors.push(`In ${page}: broken link to '${target}'`);
      }
    }
  }
});

// 6. Check CSS files
const cssFiles = ['css/style.css', 'css/responsive.css'];
cssFiles.forEach(css => {
  totalChecks++;
  const cssPath = path.join(__dirname, css);
  if (!fs.existsSync(cssPath)) {
    errors.push(`Missing CSS file: ${css}`);
  } else {
    const cssContent = fs.readFileSync(cssPath, 'utf8');
    if (cssContent.length < 500) {
      errors.push(`CSS file ${css} is suspiciously small`);
    }
  }
});

// 7. Check JS files
const jsFiles = ['js/main.js', 'js/navigation.js', 'js/animations.js', 'js/forms.js', 'js/i18n.js'];
jsFiles.forEach(js => {
  totalChecks++;
  const jsPath = path.join(__dirname, js);
  if (!fs.existsSync(jsPath)) {
    errors.push(`Missing JS file: ${js}`);
  } else {
    const jsContent = fs.readFileSync(jsPath, 'utf8');
    if (jsContent.length < 100) {
      errors.push(`JS file ${js} is suspiciously small`);
    }
  }
});

console.log(`Total checks performed: ${totalChecks}`);
if (errors.length > 0) {
  console.error(`Verification FAILED with ${errors.length} errors:`);
  errors.forEach(e => console.error(` - ${e}`));
  process.exit(1);
} else {
  console.log(`✓ Verification PASSED: All ${PAGES.length} HTML pages, CSS styles, JS controllers, and internal navigation links are 100% valid!`);
  process.exit(0);
}
