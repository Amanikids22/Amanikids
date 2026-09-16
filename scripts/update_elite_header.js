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

const ELITE_HEADER_HTML = `  <!-- 1. FLOATING NAVIGATION ISLAND (ELITE EDITORIAL ARCHITECTURE) -->
  <header class="site-header" role="banner">
    <div class="nav-island">
      <a href="index.html" class="brand-logo notranslate" translate="no" aria-label="AMANI KIDS Home">
        <img src="images/amani_logo.png" alt="AMANI KIDS - Peace Love and Joy" class="site-logo-img">
      </a>

      <nav class="nav-links" role="navigation" aria-label="Main Navigation">
        <!-- 1. About Dropdown -->
        <div class="nav-item-dropdown">
          <button type="button" class="nav-link-dropdown" aria-expanded="false" aria-haspopup="true">
            <span data-i18n="nav.about">About</span>
            <span class="nav-chevron" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </span>
          </button>
          <div class="nav-dropdown-menu" role="menu">
            <a href="about.html" class="nav-dropdown-item" role="menuitem">
              <span class="nav-dropdown-title" data-i18n="nav.about_amani">About AMANI</span>
              <span class="nav-dropdown-desc">Mission, history & Charlotte roots</span>
            </a>
            <a href="team.html" class="nav-dropdown-item" role="menuitem">
              <span class="nav-dropdown-title" data-i18n="nav.team">Meet Our Team</span>
              <span class="nav-dropdown-desc">12 leadership & community advocates</span>
            </a>
            <a href="impact.html" class="nav-dropdown-item" role="menuitem">
              <span class="nav-dropdown-title" data-i18n="nav.verified_impact">Verified Impact</span>
              <span class="nav-dropdown-desc">Accountability, metrics & outcomes</span>
            </a>
          </div>
        </div>

        <!-- 2. Programs Dropdown -->
        <div class="nav-item-dropdown">
          <button type="button" class="nav-link-dropdown" aria-expanded="false" aria-haspopup="true">
            <span data-i18n="nav.programs">Programs</span>
            <span class="nav-chevron" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </span>
          </button>
          <div class="nav-dropdown-menu" role="menu">
            <a href="programs.html" class="nav-dropdown-item" role="menuitem">
              <span class="nav-dropdown-title" data-i18n="nav.all_programs">All Programs</span>
              <span class="nav-dropdown-desc">Education & family navigation</span>
            </a>
            <a href="programs.html#education" class="nav-dropdown-item" role="menuitem">
              <span class="nav-dropdown-title" data-i18n="nav.literacy_tutoring">After-School Tutoring</span>
              <span class="nav-dropdown-desc">Literacy, tutoring & homework lab</span>
            </a>
            <a href="programs.html#navigation" class="nav-dropdown-item" role="menuitem">
              <span class="nav-dropdown-title" data-i18n="nav.case_navigation">Family Case Navigation</span>
              <span class="nav-dropdown-desc">School enrollment & healthcare bridge</span>
            </a>
            <a href="programs.html#youth" class="nav-dropdown-item" role="menuitem">
              <span class="nav-dropdown-title" data-i18n="nav.cultural_enrichment">Youth Cultural Enrichment</span>
              <span class="nav-dropdown-desc">Creative arts & peer mentorship</span>
            </a>
          </div>
        </div>

        <!-- 3. Community Dropdown -->
        <div class="nav-item-dropdown">
          <button type="button" class="nav-link-dropdown" aria-expanded="false" aria-haspopup="true">
            <span data-i18n="nav.community">Community</span>
            <span class="nav-chevron" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </span>
          </button>
          <div class="nav-dropdown-menu" role="menu">
            <a href="stories.html" class="nav-dropdown-item" role="menuitem">
              <span class="nav-dropdown-title" data-i18n="nav.family_stories">Family Stories</span>
              <span class="nav-dropdown-desc">Firsthand resettlement journeys</span>
            </a>
            <a href="events.html" class="nav-dropdown-item" role="menuitem">
              <span class="nav-dropdown-title" data-i18n="nav.events_bisakana">Events & Festivals</span>
              <span class="nav-dropdown-desc">Bisakana Day & celebrations</span>
            </a>
            <a href="album.html" class="nav-dropdown-item" role="menuitem">
              <span class="nav-dropdown-title" data-i18n="nav.album">Community Album</span>
              <span class="nav-dropdown-desc">Moments of connection, pride & joy</span>
            </a>
            <a href="blog.html" class="nav-dropdown-item" role="menuitem">
              <span class="nav-dropdown-title" data-i18n="nav.journal_blog">Journal & Blog</span>
              <span class="nav-dropdown-desc">News, updates & family guides</span>
            </a>
          </div>
        </div>

        <!-- 4. Get Involved Dropdown -->
        <div class="nav-item-dropdown">
          <button type="button" class="nav-link-dropdown" aria-expanded="false" aria-haspopup="true">
            <span data-i18n="nav.get_involved">Get Involved</span>
            <span class="nav-chevron" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </span>
          </button>
          <div class="nav-dropdown-menu" role="menu">
            <a href="get-involved.html" class="nav-dropdown-item" role="menuitem">
              <span class="nav-dropdown-title" data-i18n="nav.ways_to_help">Ways to Support</span>
              <span class="nav-dropdown-desc">Overview of community pathways</span>
            </a>
            <a href="get-involved.html#donate" class="nav-dropdown-item" role="menuitem">
              <span class="nav-dropdown-title" data-i18n="nav.donate_item">Donate Financially</span>
              <span class="nav-dropdown-desc">100% tax-deductible contribution</span>
            </a>
            <a href="get-involved.html#volunteer" class="nav-dropdown-item" role="menuitem">
              <span class="nav-dropdown-title" data-i18n="nav.volunteer_item">Volunteer as Mentor</span>
              <span class="nav-dropdown-desc">Tutor youth & guide families</span>
            </a>
            <a href="get-involved.html#partner" class="nav-dropdown-item" role="menuitem">
              <span class="nav-dropdown-title" data-i18n="nav.partner_item">Partner with Us</span>
              <span class="nav-dropdown-desc">Schools & organizational alliances</span>
            </a>
          </div>
        </div>

        <!-- 5. Contact (Direct Link) -->
        <a href="contact.html" class="nav-link" data-i18n="nav.contact">Contact</a>
      </nav>

      <div class="nav-actions">
        <!-- Minimalist Luxury Language Switcher -->
        <div class="lang-selector" aria-label="Language Selector">
          <button type="button" class="lang-btn active" data-lang="en" aria-label="English">EN</button>
          <span class="lang-divider">/</span>
          <button type="button" class="lang-btn" data-lang="fr" aria-label="Français">FR</button>
        </div>

        <!-- Quiet Luxury Get Support Link -->
        <a href="get-support.html" class="nav-support-link" data-i18n="nav.get_support">Get Support</a>

        <!-- Elite Sculptural Donate CTA -->
        <a href="get-involved.html#donate" class="btn-elite-donate" data-i18n="nav.donate">
          <span>DONATE</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>

        <!-- Mobile Menu Toggle Button -->
        <button class="mobile-nav-toggle" aria-label="Open Mobile Menu" aria-expanded="false" aria-controls="mobile-drawer">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  </header>`;

const headerRegex = /<!--\s*1\.\s*(?:FLOATING\s+)?NAVIGATION\s+(?:ISLAND|BAR)[\s\S]*?-->\s*<header class="site-header"[\s\S]*?<\/header>/i;

let updatedCount = 0;

PAGES.forEach(filename => {
  const filePath = path.join(__dirname, filename);
  if (!fs.existsSync(filePath)) return;

  let html = fs.readFileSync(filePath, 'utf8');

  if (headerRegex.test(html)) {
    html = html.replace(headerRegex, ELITE_HEADER_HTML);
    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`✓ Updated elite header in ${filename}`);
    updatedCount++;
  } else {
    // Fallback: match <header class="site-header" ... </header>
    const fallbackRegex = /<header class="site-header"[\s\S]*?<\/header>/i;
    if (fallbackRegex.test(html)) {
      html = html.replace(fallbackRegex, ELITE_HEADER_HTML);
      fs.writeFileSync(filePath, html, 'utf8');
      console.log(`✓ Updated elite header (fallback) in ${filename}`);
      updatedCount++;
    } else {
      console.warn(`⚠ Could not find header in ${filename}`);
    }
  }
});

console.log(`Done! Successfully updated ${updatedCount} pages with the elite header.`);
