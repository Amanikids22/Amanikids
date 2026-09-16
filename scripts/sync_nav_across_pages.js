// Synchronize navbar, mobile drawer, and footer brand across all 11 pages
const fs = require('fs');
const path = require('path');

const ALL_PAGES = [
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
  'contact.html'
];

const svgMonogram = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M4 20L12 4l8 16"/>
            <path d="M7.5 14h9"/>
            <circle cx="12" cy="9" r="1.5" fill="currentColor"/>
          </svg>`;

const svgMonogramMobile = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M4 20L12 4l8 16"/>
            <path d="M7.5 14h9"/>
            <circle cx="12" cy="9" r="1.5" fill="currentColor"/>
          </svg>`;

const generateHeaderAndDrawer = (activePage) => `  <!-- 1. FLOATING NAVIGATION ISLAND -->
  <header class="site-header" role="banner">
    <div class="nav-island">
      <a href="index.html" class="brand-logo notranslate" translate="no" aria-label="Amani Kids Home">
        <div class="brand-symbol" aria-hidden="true">
          ${svgMonogram}
        </div>
        <div class="brand-text notranslate" translate="no">
          <span class="brand-name notranslate" translate="no">AMANI KIDS</span>
          <span class="brand-sub notranslate" translate="no">CHARLOTTE, NC</span>
        </div>
      </a>

      <nav class="nav-links" role="navigation" aria-label="Main Navigation">
        <a href="about.html" class="nav-link${activePage === 'about.html' ? ' active' : ''}" data-i18n="nav.about">About</a>
        <a href="programs.html" class="nav-link${activePage === 'programs.html' ? ' active' : ''}" data-i18n="nav.programs">Programs</a>
        <a href="impact.html" class="nav-link${activePage === 'impact.html' ? ' active' : ''}" data-i18n="nav.impact">Impact</a>
        <a href="stories.html" class="nav-link${activePage === 'stories.html' ? ' active' : ''}" data-i18n="nav.stories">Stories</a>
        <a href="album.html" class="nav-link${activePage === 'album.html' ? ' active' : ''}" data-i18n="nav.album">Album</a>
        <a href="events.html" class="nav-link${activePage === 'events.html' ? ' active' : ''}" data-i18n="nav.events">Events</a>
        <a href="blog.html" class="nav-link${activePage === 'blog.html' ? ' active' : ''}" data-i18n="nav.blog">Blog</a>
        <a href="get-involved.html" class="nav-link${activePage === 'get-involved.html' ? ' active' : ''}" data-i18n="nav.get_involved">Get Involved</a>
      </nav>

      <div class="nav-actions">
        <a href="get-support.html" class="nav-support-btn${activePage === 'get-support.html' ? ' active' : ''}" data-i18n="nav.get_support">Get Support</a>
        <div class="lang-selector" aria-label="Language Selector">
          <button type="button" class="lang-btn active" data-lang="en" aria-label="English">EN</button>
          <span class="lang-divider">/</span>
          <button type="button" class="lang-btn" data-lang="fr" aria-label="Français">FR</button>
        </div>
        <a href="get-involved.html#donate" class="btn btn-donate" data-i18n="nav.donate">DONATE</a>
        <button class="mobile-nav-toggle" aria-label="Open Mobile Menu" aria-expanded="false" aria-controls="mobile-drawer">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Drawer Backdrop & Drawer -->
  <div class="mobile-drawer-backdrop" aria-hidden="true"></div>
  <aside id="mobile-drawer" class="mobile-drawer" aria-hidden="true" role="dialog" aria-label="Mobile Navigation Drawer">
    <div class="mobile-drawer-header">
      <div class="brand-logo notranslate" translate="no">
        <div class="brand-symbol" aria-hidden="true">
          ${svgMonogramMobile}
        </div>
        <div class="brand-text notranslate" translate="no">
          <span class="brand-name notranslate" translate="no">AMANI KIDS</span>
          <span class="brand-sub notranslate" translate="no">CHARLOTTE, NC</span>
        </div>
      </div>
      
      <div class="lang-selector" aria-label="Mobile Language Selector">
        <button type="button" class="lang-btn active" data-lang="en">EN</button>
        <span class="lang-divider">/</span>
        <button type="button" class="lang-btn" data-lang="fr">FR</button>
      </div>
      <button class="mobile-close-btn" aria-label="Close Mobile Navigation">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>

    <nav class="mobile-nav-links" role="navigation">
      <a href="index.html" class="mobile-nav-link${activePage === 'index.html' ? ' active' : ''}">
        <div class="mobile-nav-item-left">
          <span class="mobile-nav-num">01</span>
          <span class="mobile-nav-title" data-i18n="nav.home">Home</span>
        </div>
        <span class="mobile-nav-arrow" aria-hidden="true">→</span>
      </a>
      <a href="about.html" class="mobile-nav-link${activePage === 'about.html' ? ' active' : ''}">
        <div class="mobile-nav-item-left">
          <span class="mobile-nav-num">02</span>
          <span class="mobile-nav-title" data-i18n="nav.about">About Our Mission</span>
        </div>
        <span class="mobile-nav-arrow" aria-hidden="true">→</span>
      </a>
      <a href="programs.html" class="mobile-nav-link${activePage === 'programs.html' ? ' active' : ''}">
        <div class="mobile-nav-item-left">
          <span class="mobile-nav-num">03</span>
          <span class="mobile-nav-title" data-i18n="nav.programs">Our Programs</span>
        </div>
        <span class="mobile-nav-arrow" aria-hidden="true">→</span>
      </a>
      <a href="impact.html" class="mobile-nav-link${activePage === 'impact.html' ? ' active' : ''}">
        <div class="mobile-nav-item-left">
          <span class="mobile-nav-num">04</span>
          <span class="mobile-nav-title" data-i18n="nav.impact">Verified Impact</span>
        </div>
        <span class="mobile-nav-arrow" aria-hidden="true">→</span>
      </a>
      <a href="stories.html" class="mobile-nav-link${activePage === 'stories.html' ? ' active' : ''}">
        <div class="mobile-nav-item-left">
          <span class="mobile-nav-num">05</span>
          <span class="mobile-nav-title" data-i18n="nav.stories">Family Stories</span>
        </div>
        <span class="mobile-nav-arrow" aria-hidden="true">→</span>
      </a>
      <a href="album.html" class="mobile-nav-link${activePage === 'album.html' ? ' active' : ''}">
        <div class="mobile-nav-item-left">
          <span class="mobile-nav-num">06</span>
          <span class="mobile-nav-title" data-i18n="nav.album">Community Album</span>
        </div>
        <span class="mobile-nav-arrow" aria-hidden="true">→</span>
      </a>
      <a href="events.html" class="mobile-nav-link${activePage === 'events.html' ? ' active' : ''}">
        <div class="mobile-nav-item-left">
          <span class="mobile-nav-num">07</span>
          <span class="mobile-nav-title" data-i18n="nav.events">Events & Gatherings</span>
        </div>
        <span class="mobile-nav-arrow" aria-hidden="true">→</span>
      </a>
      <a href="blog.html" class="mobile-nav-link${activePage === 'blog.html' ? ' active' : ''}">
        <div class="mobile-nav-item-left">
          <span class="mobile-nav-num">08</span>
          <span class="mobile-nav-title" data-i18n="nav.blog">Journal & Blog</span>
        </div>
        <span class="mobile-nav-arrow" aria-hidden="true">→</span>
      </a>
      <a href="get-involved.html" class="mobile-nav-link${activePage === 'get-involved.html' ? ' active' : ''}">
        <div class="mobile-nav-item-left">
          <span class="mobile-nav-num">09</span>
          <span class="mobile-nav-title" data-i18n="nav.get_involved">Get Involved</span>
        </div>
        <span class="mobile-nav-arrow" aria-hidden="true">→</span>
      </a>
      <a href="get-support.html" class="mobile-nav-link${activePage === 'get-support.html' ? ' active' : ''}">
        <div class="mobile-nav-item-left">
          <span class="mobile-nav-num">10</span>
          <span class="mobile-nav-title" data-i18n="nav.get_support">Get Support</span>
        </div>
        <span class="mobile-nav-arrow" aria-hidden="true">→</span>
      </a>
      <a href="contact.html" class="mobile-nav-link${activePage === 'contact.html' ? ' active' : ''}">
        <div class="mobile-nav-item-left">
          <span class="mobile-nav-num">11</span>
          <span class="mobile-nav-title" data-i18n="nav.contact">Contact Us</span>
        </div>
        <span class="mobile-nav-arrow" aria-hidden="true">→</span>
      </a>
    </nav>

    <div class="mobile-drawer-footer">
      <a href="get-involved.html#donate" class="btn btn-accent btn-lg" style="width: 100%;" data-i18n="nav.donate_now">DONATE NOW</a>
      <a href="get-support.html" class="btn btn-outline btn-lg" style="width: 100%;" data-i18n="nav.get_family_support">GET FAMILY SUPPORT</a>
      <div class="mobile-drawer-contact">
        <p class="notranslate" translate="no"><strong>AMANI KIDS</strong> • 501(c)(3) Nonprofit</p>
        <p class="notranslate" translate="no">3400 Shamrock Dr., Suite D, Charlotte, NC</p>
        <p><a href="tel:+17049129379" class="notranslate" translate="no">+1 (704) 912-9379</a></p>
      </div>
    </div>
  </aside>`;

const footerBrandReplacement = `<div class="footer-brand">
          <a href="index.html" class="brand-logo notranslate" translate="no" style="filter: brightness(0) invert(1);">
            <div class="brand-symbol" aria-hidden="true">
              ${svgMonogram}
            </div>
            <div class="brand-text notranslate" translate="no">
              <span class="brand-name notranslate" translate="no" style="color: #FFFFFF;">AMANI KIDS</span>
              <span class="brand-sub notranslate" translate="no" style="color: #D49B35;">CHARLOTTE, NC</span>
            </div>
          </a>
          <p>
            Connecting African refugee, immigrant, and newcomer families with trusted resources, cultural belonging, and educational support to help them thrive in a new home.
          </p>
          <div class="footer-status notranslate" translate="no">
            <span class="pulse-dot"></span>
            System Operational • 501(c)(3) Nonprofit
          </div>
        </div>`;

const standardFooterOrg = `<div>
          <h4 class="footer-heading" data-i18n="footer.org">Organization</h4>
          <ul class="footer-nav-list">
            <li><a href="about.html" data-i18n="nav.about">About Us</a></li>
            <li><a href="about.html#team" data-i18n="nav.team">Our Team</a></li>
            <li><a href="programs.html" data-i18n="nav.programs">Our Programs</a></li>
            <li><a href="impact.html" data-i18n="nav.impact">Verified Impact</a></li>
            <li><a href="stories.html" data-i18n="nav.stories">Family Stories</a></li>
            <li><a href="album.html" data-i18n="nav.album">Community Album</a></li>
            <li><a href="events.html" data-i18n="nav.events">Events & Festivals</a></li>
            <li><a href="blog.html" data-i18n="nav.blog">Journal & Blog</a></li>
          </ul>
        </div>`;

ALL_PAGES.forEach(page => {
  const filePath = path.join(__dirname, page);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // Replace header and mobile drawer
  const headerRegex = /<!--\s*(?:1\.\s*FLOATING NAVIGATION ISLAND|NAVIGATION)\s*-->[\s\S]*?<\/aside>/i;
  if (headerRegex.test(content)) {
    content = content.replace(headerRegex, generateHeaderAndDrawer(page));
  } else {
    // Fallback: replace from <header class="site-header" to </aside>
    const fallbackRegex = /<header class="site-header"[\s\S]*?<\/aside>/i;
    if (fallbackRegex.test(content)) {
      content = content.replace(fallbackRegex, generateHeaderAndDrawer(page));
    }
  }

  // Replace footer brand
  const specificFooterBrandRegex = /<div class="footer-brand">[\s\S]*?<div class="footer-status"[\s\S]*?<\/div>\s*<\/div>/i;
  if (specificFooterBrandRegex.test(content)) {
    content = content.replace(specificFooterBrandRegex, footerBrandReplacement);
  }

  // Replace footer org list
  const footerOrgRegex = /<div>\s*<h4 class="footer-heading"[^>]*>Organization[\s\S]*?<\/div>/i;
  if (footerOrgRegex.test(content)) {
    content = content.replace(footerOrgRegex, standardFooterOrg);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Synced header, drawer, footer brand & Our Team link in ${page}`);
});
