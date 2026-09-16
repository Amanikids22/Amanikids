const fs = require('fs');
const pages = [
  'index.html', 'about.html', 'programs.html', 'impact.html',
  'stories.html', 'album.html', 'events.html', 'blog.html',
  'get-support.html', 'get-involved.html', 'contact.html', 'team.html'
];

let i18nCode = fs.readFileSync('js/i18n.js', 'utf8');
i18nCode = i18nCode.replace(/class AmaniLanguageManager[\s\S]*$/, '');
const sandbox = {};
const dict = (new Function('window', i18nCode + '; return AMANI_I18N;'))(sandbox);

console.log('Total EN keys:', Object.keys(dict.en).length);
console.log('Total FR keys:', Object.keys(dict.fr).length);

// Check all data-i18n tags used in all pages
const allUsedKeys = new Set();
pages.forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  const matches = content.matchAll(/data-i18n=["']([^"']+)["']/g);
  for (const m of matches) {
    allUsedKeys.add(m[1]);
  }
});

console.log('Total unique data-i18n keys used in HTML:', allUsedKeys.size);

const missingInEn = [];
const missingInFr = [];
allUsedKeys.forEach(k => {
  if (!dict.en[k]) missingInEn.push(k);
  if (!dict.fr[k]) missingInFr.push(k);
});

console.log('Keys missing in EN:', missingInEn);
console.log('Keys missing in FR:', missingInFr);
