const fs = require('fs');
const path = require('path');

const ALL_PAGES = [
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

const HEADER_LOGO_HTML = `<a href="index.html" class="brand-logo notranslate" translate="no" aria-label="AMANI KIDS Home">
        <img src="images/amani_logo.png" alt="AMANI KIDS - Peace Love and Joy" class="site-logo-img">
        </a>`;

const DRAWER_LOGO_HTML = `<a href="index.html" class="brand-logo notranslate" translate="no" aria-label="AMANI KIDS Home">
        <img src="images/amani_logo.png" alt="AMANI KIDS - Peace Love and Joy" class="site-logo-img" style="height: 38px;">
        </a>`;

const FOOTER_LOGO_HTML = `<a href="index.html" class="footer-logo-card notranslate" translate="no" aria-label="AMANI KIDS Home">
            <img src="images/amani_logo.png" alt="AMANI KIDS - Peace Love and Joy" class="site-logo-img">
            </a>`;

ALL_PAGES.forEach(filename => {
  const filePath = path.join(__dirname, filename);
  if (!fs.existsSync(filePath)) return;
  let html = fs.readFileSync(filePath, 'utf8');

  // 1. Favicon in <head>
  if (!html.includes('href="images/favicon.png"')) {
    html = html.replace(
      /(<head>[\s\S]*?<title>)/,
      `<head>\n  <link rel="icon" type="image/png" href="images/favicon.png">\n  <link rel="apple-touch-icon" href="images/favicon.png">\n  <title>`
    );
  }

  // 2. Header Brand Logo
  // Match the first brand-logo link inside site-header / nav-island
  html = html.replace(
    /<a href="index\.html" class="brand-logo notranslate" translate="no">[\s\S]*?<\/a>/,
    HEADER_LOGO_HTML
  );

  // 3. Mobile Drawer Brand Logo
  // Inside mobile-drawer-header
  html = html.replace(
    /(<div class="mobile-drawer-header">\s*)<a href="index\.html"[^>]*>[\s\S]*?<\/a>/,
    `$1${DRAWER_LOGO_HTML}`
  );

  // 4. Footer Brand Logo
  // Inside footer-brand
  html = html.replace(
    /(<div class="footer-brand">\s*)<a href="index\.html"[^>]*>[\s\S]*?<\/a>/,
    `$1${FOOTER_LOGO_HTML}`
  );

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`✓ Integrated official logo into ${filename}`);
});
