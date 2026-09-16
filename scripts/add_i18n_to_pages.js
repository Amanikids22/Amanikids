// Script to inject language selectors, data-i18n attributes, and i18n.js across all pages
const fs = require('fs');
const path = require('path');

const PAGES = [
  'index.html',
  'about.html',
  'programs.html',
  'impact.html',
  'stories.html',
  'events.html',
  'get-support.html',
  'get-involved.html',
  'contact.html'
];

const langSelectorDesktop = `
        <div class="lang-selector" aria-label="Language Selector">
          <button type="button" class="lang-btn active" data-lang="en" aria-label="English">EN</button>
          <span class="lang-divider">/</span>
          <button type="button" class="lang-btn" data-lang="fr" aria-label="Français">FR</button>
        </div>`;

const langSelectorMobile = `
      <div class="lang-selector" aria-label="Mobile Language Selector">
        <button type="button" class="lang-btn active" data-lang="en">EN</button>
        <span class="lang-divider">/</span>
        <button type="button" class="lang-btn" data-lang="fr">FR</button>
      </div>`;

PAGES.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Add lang selector to desktop nav-actions if not already present
  if (!content.includes('class="lang-selector"')) {
    content = content.replace(
      '<div class="nav-actions">',
      `<div class="nav-actions">${langSelectorDesktop}`
    );

    // 2. Add lang selector to mobile-drawer-header
    content = content.replace(
      '<button class="mobile-close-btn"',
      `${langSelectorMobile}\n      <button class="mobile-close-btn"`
    );
  }

  // 3. Add data-i18n to nav links
  content = content.replace(
    /<a href="about\.html" class="nav-link(.*?)>About<\/a>/g,
    '<a href="about.html" class="nav-link$1 data-i18n="nav.about">About</a>'
  );
  content = content.replace(
    /<a href="programs\.html" class="nav-link(.*?)>Programs<\/a>/g,
    '<a href="programs.html" class="nav-link$1 data-i18n="nav.programs">Programs</a>'
  );
  content = content.replace(
    /<a href="impact\.html" class="nav-link(.*?)>Impact<\/a>/g,
    '<a href="impact.html" class="nav-link$1 data-i18n="nav.impact">Impact</a>'
  );
  content = content.replace(
    /<a href="stories\.html" class="nav-link(.*?)>Stories<\/a>/g,
    '<a href="stories.html" class="nav-link$1 data-i18n="nav.stories">Stories</a>'
  );
  content = content.replace(
    /<a href="events\.html" class="nav-link(.*?)>Events<\/a>/g,
    '<a href="events.html" class="nav-link$1 data-i18n="nav.events">Events</a>'
  );
  content = content.replace(
    /<a href="get-involved\.html" class="nav-link(.*?)>Get Involved<\/a>/g,
    '<a href="get-involved.html" class="nav-link$1 data-i18n="nav.get_involved">Get Involved</a>'
  );
  content = content.replace(
    /<a href="get-support\.html" class="nav-link(.*?)>Get Support<\/a>/g,
    '<a href="get-support.html" class="nav-link$1 data-i18n="nav.get_support">Get Support</a>'
  );
  content = content.replace(
    /<a href="get-involved\.html#donate" class="btn btn-donate">DONATE<\/a>/g,
    '<a href="get-involved.html#donate" class="btn btn-donate" data-i18n="nav.donate">DONATE</a>'
  );

  // Mobile nav links
  content = content.replace(
    /<a href="index\.html" class="mobile-nav-link(.*?)>Home<\/a>/g,
    '<a href="index.html" class="mobile-nav-link$1 data-i18n="nav.home">Home</a>'
  );
  content = content.replace(
    /<a href="about\.html" class="mobile-nav-link(.*?)>About Our Mission<\/a>/g,
    '<a href="about.html" class="mobile-nav-link$1 data-i18n="nav.about">About Our Mission</a>'
  );
  content = content.replace(
    /<a href="programs\.html" class="mobile-nav-link(.*?)>Our Programs<\/a>/g,
    '<a href="programs.html" class="mobile-nav-link$1 data-i18n="nav.programs">Our Programs</a>'
  );
  content = content.replace(
    /<a href="impact\.html" class="mobile-nav-link(.*?)>Verified Impact<\/a>/g,
    '<a href="impact.html" class="mobile-nav-link$1 data-i18n="nav.impact">Verified Impact</a>'
  );
  content = content.replace(
    /<a href="stories\.html" class="mobile-nav-link(.*?)>Family Stories<\/a>/g,
    '<a href="stories.html" class="mobile-nav-link$1 data-i18n="nav.stories">Family Stories</a>'
  );
  content = content.replace(
    /<a href="events\.html" class="mobile-nav-link(.*?)>Events & Gathering<\/a>/g,
    '<a href="events.html" class="mobile-nav-link$1 data-i18n="nav.events">Events & Gathering</a>'
  );
  content = content.replace(
    /<a href="get-involved\.html" class="mobile-nav-link(.*?)>Get Involved<\/a>/g,
    '<a href="get-involved.html" class="mobile-nav-link$1 data-i18n="nav.get_involved">Get Involved</a>'
  );
  content = content.replace(
    /<a href="get-support\.html" class="mobile-nav-link(.*?)>Get Support<\/a>/g,
    '<a href="get-support.html" class="mobile-nav-link$1 data-i18n="nav.get_support">Get Support</a>'
  );
  content = content.replace(
    /<a href="contact\.html" class="mobile-nav-link(.*?)>Contact Us<\/a>/g,
    '<a href="contact.html" class="mobile-nav-link$1 data-i18n="nav.contact">Contact Us</a>'
  );

  // Footer labels
  content = content.replace(
    /<h4 class="footer-heading">Organization<\/h4>/g,
    '<h4 class="footer-heading" data-i18n="footer.org">Organization</h4>'
  );
  content = content.replace(
    /<h4 class="footer-heading">Get Involved<\/h4>/g,
    '<h4 class="footer-heading" data-i18n="footer.action">Get Involved</h4>'
  );
  content = content.replace(
    /<h4 class="footer-heading">Charlotte Office<\/h4>/g,
    '<h4 class="footer-heading" data-i18n="footer.office">Charlotte Office</h4>'
  );

  // 4. Inject js/i18n.js before closing body if missing
  if (!content.includes('js/i18n.js')) {
    content = content.replace(
      '</body>',
      '  <script src="js/i18n.js"></script>\n</body>'
    );
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated i18n support in ${file}`);
});
