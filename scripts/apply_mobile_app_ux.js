const fs = require('fs');
const path = require('path');

const projectDir = __dirname;
const htmlFiles = [
  'index.html',
  'about.html',
  'programs.html',
  'impact.html',
  'team.html',
  'stories.html',
  'events.html',
  'album.html',
  'blog.html',
  'get-involved.html',
  'get-support.html',
  'contact.html'
];

const mobileMetaTags = `  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover">
  <meta name="theme-color" content="#1E3A2F">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="format-detection" content="telephone=no">`;

const mobileBottomBarMarkup = `
  <!-- ULTRA-PREMIUM MOBILE BOTTOM APP BAR (Dock façon App Native) -->
  <nav class="mobile-bottom-bar" aria-label="Mobile Bottom Navigation">
    <a href="index.html" class="mobile-bottom-tab" aria-label="Home">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
      <span data-i18n="nav.bottom_home">Home</span>
    </a>
    <a href="programs.html" class="mobile-bottom-tab" aria-label="Programs">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
      <span data-i18n="nav.bottom_programs">Programs</span>
    </a>
    <a href="album.html" class="mobile-bottom-tab" aria-label="Album">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
      <span data-i18n="nav.bottom_album">Album</span>
    </a>
    <a href="impact.html" class="mobile-bottom-tab" aria-label="Impact">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      <span data-i18n="nav.bottom_impact">Impact</span>
    </a>
    <a href="get-involved.html#donate" class="mobile-bottom-tab tab-donate" aria-label="Donate">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
      <span data-i18n="nav.bottom_donate">Donate</span>
    </a>
  </nav>
`;

let successCount = 0;

for (const file of htmlFiles) {
  const filePath = path.join(projectDir, file);
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${file}`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Inject meta viewport & PWA tags right after <head> if not already present
  if (!content.includes('viewport-fit=cover')) {
    // Remove any existing basic viewport
    content = content.replace(/<meta\s+name=["']viewport["'][^>]*>/gi, '');
    content = content.replace(/<meta\s+charset=["'][^>]*>/gi, '');

    content = content.replace(/<head>/i, `<head>\n${mobileMetaTags}`);
  }

  // 2. Remove old mobile-bottom-bar if exists to allow clean re-injection
  content = content.replace(/\s*<!-- ULTRA-PREMIUM MOBILE BOTTOM APP BAR[\s\S]*?<\/nav>/gi, '');

  // 3. Inject mobileBottomBarMarkup right before </body>
  content = content.replace(/<\/body>/i, `${mobileBottomBarMarkup}\n</body>`);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`[OK] Updated ${file} with viewport tags & Mobile Bottom Bar.`);
  successCount++;
}

console.log(`\nSuccessfully upgraded ${successCount} HTML files!`);
