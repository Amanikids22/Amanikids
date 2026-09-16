const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');
const keys = [...content.matchAll(/data-i18n="([^"]+)"/g)].map(m => m[1]);

let i18nCode = fs.readFileSync('js/i18n.js', 'utf8');
const endOfObj = i18nCode.indexOf('class AmaniLanguageManager');
i18nCode = i18nCode.slice(0, endOfObj).replace('const AMANI_I18N', 'global.AMANI_I18N');
eval(i18nCode);

console.log('--- Checking all i18n keys in index.html ---');
const uniqueKeys = [...new Set(keys)];
let missingEn = 0;
let missingFr = 0;

uniqueKeys.forEach(k => {
  const enVal = global.AMANI_I18N.en[k];
  const frVal = global.AMANI_I18N.fr[k];

  if (!enVal) {
    console.log(`MISSING IN EN: ${k}`);
    missingEn++;
  }
  if (!frVal) {
    console.log(`MISSING IN FR: ${k}`);
    missingFr++;
  }
  if (k.startsWith('nav.')) {
    console.log(`NAV KEY: ${k} | EN: "${enVal}" | FR: "${frVal}"`);
  }
});

console.log(`Summary: ${uniqueKeys.length} total keys. Missing in EN: ${missingEn}, Missing in FR: ${missingFr}`);
