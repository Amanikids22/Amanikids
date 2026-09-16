const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
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

for (const file of htmlFiles) {
  const filePath = path.join(rootDir, file);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');

  // Ensure <base href="/"> is right after <head>
  if (!content.includes('<base href="/"')) {
    content = content.replace(/<head>/i, '<head>\n  <base href="/">');
  }

  // Ensure stylesheets have root-relative paths
  content = content.replace(/href=["']css\/style\.css["']/g, 'href="/css/style.css"');
  content = content.replace(/href=["']css\/responsive\.css["']/g, 'href="/css/responsive.css"');

  // Ensure favicon has root-relative path
  content = content.replace(/href=["']images\/favicon\.png["']/g, 'href="/images/favicon.png"');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`[OK] Secured asset paths in ${file}`);
}

console.log('All 12 pages updated with root-relative paths and <base href="/">!');
