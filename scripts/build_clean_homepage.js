const fs = require('fs');

const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AMANI KIDS — Helping African Children & Families Thrive in a New Home</title>
  <meta name="description" content="Amani Kids is an accredited 501(c)(3) nonprofit in Charlotte, NC connecting African refugee, immigrant, and newcomer families with trusted resources, educational support, and community belonging.">
  <meta name="keywords" content="Amani Kids, Amani Kids Charlotte, African immigrant families Charlotte, African refugee families Charlotte, African diaspora children Charlotte, newcomer families Charlotte, Bisakana Day">
  
  <!-- Open Graph / Meta -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="AMANI KIDS — Helping African Children & Families Thrive">
  <meta property="og:description" content="Connecting African refugee, immigrant, and newcomer families with trusted resources, cultural belonging, and educational support in Charlotte, NC.">
  <meta property="og:url" content="https://www.amanikidsnc.org/">
  
  <!-- Google Fonts: Plus Jakarta Sans, Cormorant Garamond, JetBrains Mono -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,400;1,600&family=JetBrains+Mono:wght@500;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  
  <!-- Core Stylesheets -->
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/responsive.css">
</head>
<body>

  <!-- SVG Noise Filter for Organic Texture -->
  <svg class="noise-overlay" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <filter id="noiseFilter">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/>
    </filter>
    <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
  </svg>

  <!-- 1. FLOATING NAVIGATION ISLAND -->
  <header class="site-header" role="banner">
    <div class="nav-island">
      <a href="index.html" class="brand-logo notranslate" translate="no" aria-label="Amani Kids Home">
        <div class="brand-symbol" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M4 20L12 4l8 16"/>
            <path d="M7.5 14h9"/>
            <circle cx="12" cy="9" r="1.5" fill="currentColor"/>
          </svg>
        </div>
        <div class="brand-text notranslate" translate="no">
          <span class="brand-name notranslate" translate="no">AMANI KIDS</span>
          <span class="brand-sub notranslate" translate="no">CHARLOTTE, NC</span>
        </div>
      </a>

      <nav class="nav-links" role="navigation" aria-label="Main Navigation">
        <a href="#why-we-exist" class="nav-link" data-i18n="nav.why_exist">Why We Exist</a>
        <a href="#mission-vision" class="nav-link" data-i18n="nav.mission_vision">Mission & Vision</a>
        <a href="#our-team" class="nav-link" data-i18n="nav.team">Our Team</a>
        <a href="#faq" class="nav-link" data-i18n="nav.faq">Q&A</a>
        <a href="programs.html" class="nav-link" data-i18n="nav.programs">Programs</a>
        <a href="get-involved.html" class="nav-link" data-i18n="nav.get_involved">Get Involved</a>
      </nav>

      <div class="nav-actions">
        <!-- Language Selector -->
        <div class="lang-selector" aria-label="Language Selector">
          <span class="lang-icon" aria-hidden="true">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          </span>
          <button type="button" class="lang-btn active" data-lang="en" aria-label="English">EN</button>
          <span class="lang-divider">/</span>
          <button type="button" class="lang-btn" data-lang="fr" aria-label="Français">FR</button>
        </div>

        <a href="get-support.html" class="btn btn-outline btn-sm" data-i18n="nav.get_support">GET SUPPORT</a>
        <a href="get-involved.html#donate" class="btn btn-accent btn-sm" data-i18n="nav.donate">DONATE</a>
        
        <button class="mobile-toggle-btn" aria-label="Open Navigation Menu" aria-expanded="false">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
    </div>
  </header>

  <!-- MOBILE NAVIGATION DRAWER -->
  <div class="mobile-drawer-backdrop" aria-hidden="true"></div>
  <aside class="mobile-drawer" aria-label="Mobile Navigation Menu" aria-hidden="true">
    <div class="mobile-drawer-header">
      <div class="brand-logo notranslate" translate="no">
        <div class="brand-symbol" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M4 20L12 4l8 16"/>
            <path d="M7.5 14h9"/>
            <circle cx="12" cy="9" r="1.5" fill="currentColor"/>
          </svg>
        </div>
        <div class="brand-text notranslate" translate="no">
          <span class="brand-name notranslate" translate="no">AMANI KIDS</span>
          <span class="brand-sub notranslate" translate="no">CHARLOTTE, NC</span>
        </div>
      </div>
      
      <div class="lang-selector" aria-label="Mobile Language Selector">
        <span class="lang-icon" aria-hidden="true">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
        </span>
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
      <a href="#why-we-exist" class="mobile-nav-link">
        <div class="mobile-nav-item-left">
          <span class="mobile-nav-num">01</span>
          <span class="mobile-nav-title" data-i18n="nav.why_exist">Why We Exist</span>
        </div>
        <span class="mobile-nav-arrow" aria-hidden="true">→</span>
      </a>
      <a href="#mission-vision" class="mobile-nav-link">
        <div class="mobile-nav-item-left">
          <span class="mobile-nav-num">02</span>
          <span class="mobile-nav-title" data-i18n="nav.mission_vision">Mission & Vision</span>
        </div>
        <span class="mobile-nav-arrow" aria-hidden="true">→</span>
      </a>
      <a href="#our-team" class="mobile-nav-link">
        <div class="mobile-nav-item-left">
          <span class="mobile-nav-num">03</span>
          <span class="mobile-nav-title" data-i18n="nav.team">Our Team</span>
        </div>
        <span class="mobile-nav-arrow" aria-hidden="true">→</span>
      </a>
      <a href="#faq" class="mobile-nav-link">
        <div class="mobile-nav-item-left">
          <span class="mobile-nav-num">04</span>
          <span class="mobile-nav-title" data-i18n="nav.faq">Q&A</span>
        </div>
        <span class="mobile-nav-arrow" aria-hidden="true">→</span>
      </a>
      <a href="programs.html" class="mobile-nav-link">
        <div class="mobile-nav-item-left">
          <span class="mobile-nav-num">05</span>
          <span class="mobile-nav-title" data-i18n="nav.programs">Our Programs</span>
        </div>
        <span class="mobile-nav-arrow" aria-hidden="true">→</span>
      </a>
      <a href="impact.html" class="mobile-nav-link">
        <div class="mobile-nav-item-left">
          <span class="mobile-nav-num">06</span>
          <span class="mobile-nav-title" data-i18n="nav.impact">Verified Impact</span>
        </div>
        <span class="mobile-nav-arrow" aria-hidden="true">→</span>
      </a>
      <a href="get-support.html" class="mobile-nav-link">
        <div class="mobile-nav-item-left">
          <span class="mobile-nav-num">07</span>
          <span class="mobile-nav-title" data-i18n="nav.get_support">Get Support</span>
        </div>
        <span class="mobile-nav-arrow" aria-hidden="true">→</span>
      </a>
      <a href="contact.html" class="mobile-nav-link">
        <div class="mobile-nav-item-left">
          <span class="mobile-nav-num">08</span>
          <span class="mobile-nav-title" data-i18n="nav.contact">Contact Us</span>
        </div>
        <span class="mobile-nav-arrow" aria-hidden="true">→</span>
      </a>
    </nav>

    <div class="mobile-drawer-footer">
      <a href="get-involved.html#donate" class="btn btn-accent btn-lg" style="width: 100%;" data-i18n="nav.donate_now">DONATE NOW</a>
      <a href="get-support.html" class="btn btn-outline btn-lg" style="width: 100%; margin-top: 0.75rem;" data-i18n="nav.get_family_support">GET FAMILY SUPPORT</a>
      <div class="mobile-drawer-contact">
        <p class="notranslate" translate="no"><strong>AMANI KIDS</strong> • 501(c)(3) Nonprofit</p>
        <p class="notranslate" translate="no">3400 Shamrock Dr., Suite D, Charlotte, NC</p>
        <p><a href="tel:+17049129379" class="notranslate" translate="no">+1 (704) 912-9379</a></p>
      </div>
    </div>
  </aside>

  <main id="main-content">
    
    <!-- 2. HERO SECTION (SQUARE, AUTHORITATIVE, HIGH-FIDELITY) -->
    <section class="hero-section" aria-labelledby="hero-headline">
      <div class="container">
        <div class="hero-grid">
          
          <div class="hero-content fade-up">
            <div class="hero-eyebrow-badge">
              <span class="hero-badge-status-dot"></span>
              <span data-i18n="hero.eyebrow">501(C)(3) NONPROFIT • CHARLOTTE, NC</span>
            </div>

            <div class="hero-tagline" data-i18n="hero.tagline">
              Learn, Connect, and Grow.
            </div>
            
            <h1 id="hero-headline" class="display-title">
              <span data-i18n="hero.title_part1">Empowering Children. Strengthening Families.</span>
              <span class="serif-em" data-i18n="hero.title_em">Building Communities.</span>
            </h1>
            
            <div class="hero-subtitle-box">
              <p class="hero-lead-text" data-i18n="hero.lead">
                AMANI KIDS is an accredited 501(c)(3) nonprofit organization based in Charlotte, NC. We walk beside African refugee, immigrant, and newcomer families — bridging language access, school enrollment, and community resources with dignity, lived experience, and culturally rooted care.
              </p>
              
              <div class="hero-highlights-row">
                <div class="hero-highlight-pill">
                  <span class="highlight-check">✓</span>
                  <span data-i18n="hero.highlight1">100% Free Family Services</span>
                </div>
                <div class="hero-highlight-pill">
                  <span class="highlight-check">✓</span>
                  <span data-i18n="hero.highlight2">5 Spoken Languages (Swahili, Lingala, French, English, Kinyarwanda)</span>
                </div>
                <div class="hero-highlight-pill">
                  <span class="highlight-check">✓</span>
                  <span data-i18n="hero.highlight3">Mecklenburg County Community Alliances</span>
                </div>
              </div>
            </div>

            <div class="hero-actions">
              <a href="get-support.html" class="btn btn-accent btn-lg" data-i18n="hero.cta_support">
                GET FAMILY SUPPORT
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
              <a href="get-involved.html#donate" class="btn btn-outline btn-lg" data-i18n="hero.cta_donate">
                SUPPORT AMANI KIDS
              </a>
            </div>
          </div>

          <div class="hero-media-wrapper fade-up">
            <div class="hero-image-card">
              <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop" 
                   alt="Joyful young African child smiling warmly during an educational community activity in Charlotte" 
                   width="600" height="750" loading="eager">
              
              <div class="hero-tag-top">
                <span class="pulse-dot"></span>
                <span data-i18n="hero.badge_active">ACTIVE IN CHARLOTTE</span>
              </div>

              <div class="hero-floating-badge">
                <div class="badge-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div>
                  <div class="badge-text-primary" data-i18n="hero.badge_lived">Rooted in Lived Experience</div>
                  <div class="badge-text-secondary" data-i18n="hero.badge_desc">Founded by immigrants, serving with dignity</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 3. HERO CREDIBILITY STRIP -->
    <section class="credibility-strip" aria-label="Verified Trust Elements">
      <div class="container">
        <div class="credibility-grid">
          <div class="credibility-item">
            <div class="credibility-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <div class="credibility-text">
              <strong data-i18n="trust.nonprofit">501(c)(3) Nonprofit</strong>
              <span data-i18n="trust.nonprofit_sub">Tax-exempt charitable organization</span>
            </div>
          </div>

          <div class="credibility-divider"></div>

          <div class="credibility-item">
            <div class="credibility-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <div class="credibility-text">
              <strong data-i18n="trust.charlotte">Charlotte, North Carolina</strong>
              <span data-i18n="trust.charlotte_sub">3400 Shamrock Dr., Suite D</span>
            </div>
          </div>

          <div class="credibility-divider"></div>

          <div class="credibility-item">
            <div class="credibility-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </div>
            <div class="credibility-text">
              <strong data-i18n="trust.diaspora">African Diaspora Focus</strong>
              <span data-i18n="trust.diaspora_sub">Refugees, immigrants & newcomers</span>
            </div>
          </div>

          <div class="credibility-divider"></div>

          <div class="credibility-item">
            <div class="credibility-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <div class="credibility-text">
              <strong data-i18n="trust.verified">Community Verified</strong>
              <span data-i18n="trust.verified_sub">Deep local roots & school alliances</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. WHY WE EXIST (RESETTLEMENT REALITY) -->
    <section id="why-we-exist" class="section-padding" aria-labelledby="challenge-title">
      <div class="container">
        <div class="challenge-grid">
          
          <div class="challenge-media fade-up">
            <img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1000&auto=format&fit=crop" 
                 alt="Young African newcomer child looking forward with hope and curiosity" 
                 width="500" height="480" loading="lazy">
            <div class="challenge-quote-overlay">
              <p class="challenge-quote-text" data-i18n="challenge.quote">"When a family arrives in a new country, everything is unfamiliar. Having someone who speaks your language and understands your journey changes everything."</p>
            </div>
          </div>

          <div class="challenge-content fade-up">
            <div class="eyebrow" data-i18n="challenge.eyebrow">THE REALITY OF RESETTLEMENT</div>
            <h2 id="challenge-title" class="section-title" data-i18n="challenge.title">
              Starting over should not mean starting alone.
            </h2>
            <p class="lead-text" data-i18n="challenge.lead">
              For African refugee, immigrant, and newcomer families arriving in the United States, resettlement brings both immense opportunity and profound hurdles. Without a trusted guide, families can face prolonged isolation.
            </p>

            <div class="challenge-cards">
              <div class="challenge-card">
                <div class="challenge-card-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <h4 data-i18n="challenge.card1_title">Language Barriers</h4>
                <p data-i18n="challenge.card1_desc">Navigating school registration, healthcare, and essential services without native-language support.</p>
              </div>

              <div class="challenge-card">
                <div class="challenge-card-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 4.24 4.24"></path><path d="m14.83 9.17 4.24-4.24"></path><path d="m14.83 14.83 4.24 4.24"></path><path d="m9.17 14.83-4.24 4.24"></path></svg>
                </div>
                <h4 data-i18n="challenge.card2_title">Unfamiliar Systems</h4>
                <p data-i18n="challenge.card2_desc">Deciphering complex American institutional processes that rarely come with clear roadmaps.</p>
              </div>

              <div class="challenge-card">
                <div class="challenge-card-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" y1="8" x2="19" y2="14"></line><line x1="22" y1="11" x2="16" y2="11"></line></svg>
                </div>
                <h4 data-i18n="challenge.card3_title">Social Isolation</h4>
                <p data-i18n="challenge.card3_desc">Leaving behind extended family, village networks, and familiar cultural safety nets.</p>
              </div>

              <div class="challenge-card">
                <div class="challenge-card-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                </div>
                <h4 data-i18n="challenge.card4_title">Cultural Transition</h4>
                <p data-i18n="challenge.card4_desc">Preserving deep African heritage and dignity while children adapt to American classroom environments.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 5. OUR MISSION & OUR VISION (DUAL ARCHITECTURAL CARDS) -->
    <section id="mission-vision" class="section-padding bg-warm-alt" aria-labelledby="mission-vision-title">
      <div class="container">
        <div class="section-header text-center fade-up">
          <div class="eyebrow eyebrow-pill" data-i18n="mission.eyebrow">OUR FOUNDATIONAL COMPASS</div>
          <h2 id="mission-vision-title" class="section-title" data-i18n="mission.title">
            Guided by Purpose. Driven by Community.
          </h2>
        </div>

        <div class="mission-vision-grid fade-up">
          <!-- Mission Card -->
          <article class="mission-card">
            <div class="eyebrow" style="color: var(--color-accent); margin-bottom: 0.5rem;" data-i18n="mission.card_title">OUR MISSION</div>
            <h3 style="font-size: clamp(1.75rem, 2.5vw, 2.25rem); color: var(--color-primary); margin-bottom: 1.25rem; letter-spacing: -0.02em;" data-i18n="mission.card_title">Our Mission</h3>
            <p data-i18n="mission.card_desc">
              To empower African refugee, immigrant, and newcomer youth and families through education, language access, after-school enrichment, and holistic guidance — fostering self-reliance and lifelong belonging.
            </p>
            <div style="margin-top: 1.5rem; display: flex; align-items: center; gap: 0.5rem; font-family: var(--font-mono); font-size: 0.8125rem; color: var(--color-accent); font-weight: 700;">
              <span>01 • PURPOSE & EMPOWERMENT</span>
            </div>
          </article>

          <!-- Vision Card -->
          <article class="vision-card">
            <div class="eyebrow" style="color: var(--color-gold); margin-bottom: 0.5rem;" data-i18n="vision.card_title">OUR VISION</div>
            <h3 style="font-size: clamp(1.75rem, 2.5vw, 2.25rem); color: #FFFFFF; margin-bottom: 1.25rem; letter-spacing: -0.02em;" data-i18n="vision.card_title">Our Vision</h3>
            <p data-i18n="vision.card_desc">
              A Charlotte community where every African diaspora family is welcomed with dignity, equipped to navigate essential systems, and empowered to reach their fullest potential.
            </p>
            <div style="margin-top: 1.5rem; display: flex; align-items: center; gap: 0.5rem; font-family: var(--font-mono); font-size: 0.8125rem; color: var(--color-gold); font-weight: 700;">
              <span>02 • COMMUNITY & BELONGING</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- 6. OUR TEAM (ALL 12 REAL MEMBERS WITH CATEGORY FILTERS) -->
    <section id="our-team" class="section-padding" aria-labelledby="team-headline">
      <div class="container">
        <div class="section-header text-center fade-up">
          <div class="eyebrow eyebrow-pill" data-i18n="team.eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            LEADERSHIP & COMMUNITY TEAM
          </div>
          <h2 id="team-headline" class="section-title" data-i18n="team.title">
            Meet the Hearts Behind Amani Kids.
          </h2>
          <p class="lead-text" data-i18n="team.lead">
            Guided by lived refugee experience, multilingual fluency, and deep cultural love, our team walks beside African diaspora families at every step of their resettlement journey.
          </p>
        </div>

        <!-- Filter Controls -->
        <div class="team-filters-bar fade-up" role="tablist" aria-label="Team Categories">
          <button type="button" class="team-filter-btn active" data-filter="all" role="tab" aria-selected="true" data-i18n="team.filter_all">All Team (12)</button>
          <button type="button" class="team-filter-btn" data-filter="exec" role="tab" aria-selected="false" data-i18n="team.filter_exec">Executive & Governance</button>
          <button type="button" class="team-filter-btn" data-filter="prog" role="tab" aria-selected="false" data-i18n="team.filter_prog">Program Managers</button>
          <button type="button" class="team-filter-btn" data-filter="comm" role="tab" aria-selected="false" data-i18n="team.filter_comm">Education & Community</button>
        </div>

        <div class="team-grid fade-up" id="team-grid-container">
          
          <!-- Team Member 1: Binti Muzuri Amisi -->
          <article class="team-card" data-category="exec">
            <div class="team-portrait-wrapper">
              <img src="images/team/binti_muzuri_amisi.jpeg" 
                   alt="Binti Muzuri Amisi, Founder and Executive Director of Amani Kids" 
                   class="team-portrait-img" loading="lazy">
              <span class="team-badge-role notranslate" translate="no" data-i18n="team.binti_role">Founder & Executive Director</span>
            </div>
            <div class="team-card-body">
              <h3 class="team-member-name notranslate" translate="no">Binti Muzuri Amisi</h3>
              <div class="team-member-subtitle" data-i18n="team.binti_sub">Visionary Leadership & Diaspora Advocacy</div>
              <p class="team-member-bio" data-i18n="team.binti_bio">
                Arriving from the Democratic Republic of the Congo, Binti turned the hardships of language barriers and resettlement into an enduring beacon of empowerment and educational advancement for newcomer families in North Carolina.
              </p>
              <div class="team-languages-strip notranslate" translate="no">
                <span class="team-lang-dot"></span>
                <span>Swahili • Lingala • French • English</span>
              </div>
            </div>
          </article>

          <!-- Team Member 2: Divine Nambaya -->
          <article class="team-card" data-category="exec">
            <div class="team-portrait-wrapper">
              <img src="images/team/divine_nambaya.jpeg" 
                   alt="Divine Nambaya, Secretary and Operations Coordinator at Amani Kids" 
                   class="team-portrait-img" loading="lazy">
              <span class="team-badge-role notranslate" translate="no" data-i18n="team.divine_role">Secretary & Operations Coordinator</span>
            </div>
            <div class="team-card-body">
              <h3 class="team-member-name notranslate" translate="no">Divine Nambaya</h3>
              <div class="team-member-subtitle" data-i18n="team.divine_sub">Governance & Institutional Administration</div>
              <p class="team-member-bio" data-i18n="team.divine_bio">
                Coordinates organizational operations, board communications, and family intake documentation, ensuring every newcomer receives immediate, compassionate administrative guidance.
              </p>
              <div class="team-languages-strip notranslate" translate="no">
                <span class="team-lang-dot"></span>
                <span>French • Swahili • English</span>
              </div>
            </div>
          </article>

          <!-- Team Member 3: Cynthia Mwangaza -->
          <article class="team-card" data-category="exec prog">
            <div class="team-portrait-wrapper">
              <img src="images/team/cynthia_mwangaza.jpeg" 
                   alt="Cynthia Mwangaza, Social Worker, Head of Operations and Family Support Manager at Amani Kids" 
                   class="team-portrait-img" loading="lazy">
              <span class="team-badge-role notranslate" translate="no" data-i18n="team.cynthia_role">Social Worker, Head of Operations & Family Support Manager</span>
            </div>
            <div class="team-card-body">
              <h3 class="team-member-name notranslate" translate="no">Cynthia Mwangaza</h3>
              <div class="team-member-subtitle" data-i18n="team.cynthia_sub">Family Resettlement & Holistic Care</div>
              <p class="team-member-bio" data-i18n="team.cynthia_bio">
                Brings dedicated social work expertise to assess family needs, navigate Mecklenburg County social safety nets, and deliver trauma-informed family stabilization services.
              </p>
              <div class="team-languages-strip notranslate" translate="no">
                <span class="team-lang-dot"></span>
                <span>Swahili • French • English</span>
              </div>
            </div>
          </article>

          <!-- Team Member 4: Samy Bajangi -->
          <article class="team-card" data-category="exec">
            <div class="team-portrait-wrapper">
              <img src="images/team/samy_bajangi.jpeg" 
                   alt="Samy Bajangi, Director of Finance at Amani Kids" 
                   class="team-portrait-img" loading="lazy">
              <span class="team-badge-role notranslate" translate="no" data-i18n="team.samy_role">Director of Finance</span>
            </div>
            <div class="team-card-body">
              <h3 class="team-member-name notranslate" translate="no">Samy Bajangi</h3>
              <div class="team-member-subtitle" data-i18n="team.samy_sub">Fiscal Stewardship & 501(c)(3) Compliance</div>
              <p class="team-member-bio" data-i18n="team.samy_bio">
                Ensures rigorous financial integrity, institutional grant accounting, and transparent stewardship so every donor dollar directly strengthens educational and family programs.
              </p>
              <div class="team-languages-strip notranslate" translate="no">
                <span class="team-lang-dot"></span>
                <span>French • English • Swahili</span>
              </div>
            </div>
          </article>

          <!-- Team Member 5: Roger Dinanga -->
          <article class="team-card" data-category="exec">
            <div class="team-portrait-wrapper">
              <img src="images/team/roger_dinanga.jpeg" 
                   alt="Roger Dinanga, Legal Advisor at Amani Kids" 
                   class="team-portrait-img" loading="lazy">
              <span class="team-badge-role notranslate" translate="no" data-i18n="team.roger_role">Legal Advisor</span>
            </div>
            <div class="team-card-body">
              <h3 class="team-member-name notranslate" translate="no">Roger Dinanga</h3>
              <div class="team-member-subtitle" data-i18n="team.roger_sub">Regulatory Compliance & Civic Rights Advocacy</div>
              <p class="team-member-bio" data-i18n="team.roger_bio">
                Provides legal counsel on nonprofit governance, contractual agreements, and immigrant civil rights, helping families understand their legal rights and pathways in the U.S.
              </p>
              <div class="team-languages-strip notranslate" translate="no">
                <span class="team-lang-dot"></span>
                <span>French • Lingala • English</span>
              </div>
            </div>
          </article>

          <!-- Team Member 6: Hadley Duquette -->
          <article class="team-card" data-category="comm">
            <div class="team-portrait-wrapper">
              <img src="images/team/hadley_duquette.jpeg" 
                   alt="Hadley Duquette, Public Relations and Partnership Manager at Amani Kids" 
                   class="team-portrait-img" loading="lazy">
              <span class="team-badge-role notranslate" translate="no" data-i18n="team.hadley_role">Public Relations & Partnership Manager</span>
            </div>
            <div class="team-card-body">
              <h3 class="team-member-name notranslate" translate="no">Hadley Duquette</h3>
              <div class="team-member-subtitle" data-i18n="team.hadley_sub">Community Alliances & Institutional Outreach</div>
              <p class="team-member-bio" data-i18n="team.hadley_bio">
                Builds bridges with Charlotte civic leaders, local universities, corporate donors, and foundation partners to expand Amani Kids' visibility and philanthropic resources.
              </p>
              <div class="team-languages-strip notranslate" translate="no">
                <span class="team-lang-dot"></span>
                <span>English • French</span>
              </div>
            </div>
          </article>

          <!-- Team Member 7: Kianyi Norwood -->
          <article class="team-card" data-category="comm">
            <div class="team-portrait-wrapper">
              <img src="images/team/kianyi_norwood.jpeg" 
                   alt="Kianyi Norwood, Volunteer Coordinator at Amani Kids" 
                   class="team-portrait-img" loading="lazy">
              <span class="team-badge-role notranslate" translate="no" data-i18n="team.kianyi_role">Volunteer Coordinator</span>
            </div>
            <div class="team-card-body">
              <h3 class="team-member-name notranslate" translate="no">Kianyi Norwood</h3>
              <div class="team-member-subtitle" data-i18n="team.kianyi_sub">Community Engagement & Youth Mentorship</div>
              <p class="team-member-bio" data-i18n="team.kianyi_bio">
                Recruits, trains, and mobilizes bilingual volunteers and mentors, connecting caring Charlotte residents with impactful after-school tutoring and cultural exchange programs.
              </p>
              <div class="team-languages-strip notranslate" translate="no">
                <span class="team-lang-dot"></span>
                <span>English</span>
              </div>
            </div>
          </article>

          <!-- Team Member 8: Patricia Mouboua -->
          <article class="team-card" data-category="comm">
            <div class="team-portrait-wrapper">
              <img src="images/team/patricia_mouboua.jpeg" 
                   alt="Patricia Mouboua, Family Education Coordinator at Amani Kids" 
                   class="team-portrait-img" loading="lazy">
              <span class="team-badge-role notranslate" translate="no" data-i18n="team.patricia_role">Family Education Coordinator</span>
            </div>
            <div class="team-card-body">
              <h3 class="team-member-name notranslate" translate="no">Patricia Mouboua</h3>
              <div class="team-member-subtitle" data-i18n="team.patricia_sub">School Advocacy & Academic Integration</div>
              <p class="team-member-bio" data-i18n="team.patricia_bio">
                Liaises directly with Charlotte-Mecklenburg Schools (CMS) teachers, counselors, and ESL specialists to ensure diaspora children receive equitable academic support and accommodations.
              </p>
              <div class="team-languages-strip notranslate" translate="no">
                <span class="team-lang-dot"></span>
                <span>French • Regional Dialects • English</span>
              </div>
            </div>
          </article>

          <!-- Team Member 9: Ruth Luzangi -->
          <article class="team-card" data-category="prog">
            <div class="team-portrait-wrapper">
              <img src="images/team/ruth_luzangi.jpeg" 
                   alt="Ruth Luzangi, Bisakana Day Program Manager at Amani Kids" 
                   class="team-portrait-img" loading="lazy">
              <span class="team-badge-role notranslate" translate="no" data-i18n="team.ruth_role">Bisakana Day Program Manager</span>
            </div>
            <div class="team-card-body">
              <h3 class="team-member-name notranslate" translate="no">Ruth Luzangi</h3>
              <div class="team-member-subtitle" data-i18n="team.ruth_sub">Cultural Arts & Community Heritage Festivals</div>
              <p class="team-member-bio" data-i18n="team.ruth_bio">
                Leads the annual Bisakana Cultural Celebration and traditional music, dance, and storytelling workshops that instill cultural pride and joyous belonging in newcomer youth.
              </p>
              <div class="team-languages-strip notranslate" translate="no">
                <span class="team-lang-dot"></span>
                <span>Lingala • French • English</span>
              </div>
            </div>
          </article>

          <!-- Team Member 10: Priscilla Ngomba -->
          <article class="team-card" data-category="prog">
            <div class="team-portrait-wrapper">
              <img src="images/team/priscilla_ngomba.jpeg" 
                   alt="Priscilla Ngomba, Amani Connect Program Manager at Amani Kids" 
                   class="team-portrait-img" loading="lazy">
              <span class="team-badge-role notranslate" translate="no" data-i18n="team.priscilla_role">Amani Connect Program Manager</span>
            </div>
            <div class="team-card-body">
              <h3 class="team-member-name notranslate" translate="no">Priscilla Ngomba</h3>
              <div class="team-member-subtitle" data-i18n="team.priscilla_sub">Community Resource Navigation & Urgent Intake</div>
              <p class="team-member-bio" data-i18n="team.priscilla_bio">
                Guides families through essential housing, healthcare clinics, food pantry networks, and city services, breaking isolation through personalized bilingual casework.
              </p>
              <div class="team-languages-strip notranslate" translate="no">
                <span class="team-lang-dot"></span>
                <span>French • Lingala • English</span>
              </div>
            </div>
          </article>

          <!-- Team Member 11: Esther Mwanza -->
          <article class="team-card" data-category="prog">
            <div class="team-portrait-wrapper">
              <img src="images/team/esther_mwanza.jpeg" 
                   alt="Esther Mwanza, Sauti Safe Space Program Manager at Amani Kids" 
                   class="team-portrait-img" loading="lazy">
              <span class="team-badge-role notranslate" translate="no" data-i18n="team.esther_role">Sauti Safe Space Program Manager</span>
            </div>
            <div class="team-card-body">
              <h3 class="team-member-name notranslate" translate="no">Esther Mwanza</h3>
              <div class="team-member-subtitle" data-i18n="team.esther_sub">Youth Mental Health, Literacy & Healing Circles</div>
              <p class="team-member-bio" data-i18n="team.esther_bio">
                Directs the Sauti Safe Space program, creating protective, empowering weekly peer circles where refugee youth process trauma, build creative voices, and form lasting friendships.
              </p>
              <div class="team-languages-strip notranslate" translate="no">
                <span class="team-lang-dot"></span>
                <span>Swahili • French • English</span>
              </div>
            </div>
          </article>

          <!-- Team Member 12: Yao Djaka -->
          <article class="team-card" data-category="comm">
            <div class="team-portrait-wrapper">
              <img src="images/team/yao_djaka.jpeg" 
                   alt="Yao Djaka, Educator and Admin Data Manager at Amani Kids" 
                   class="team-portrait-img" loading="lazy">
              <span class="team-badge-role notranslate" translate="no" data-i18n="team.yao_role">Educator & Admin Data Manager</span>
            </div>
            <div class="team-card-body">
              <h3 class="team-member-name notranslate" translate="no">Yao Djaka</h3>
              <div class="team-member-subtitle" data-i18n="team.yao_sub">Program Analytics, Educational Metrics & IT</div>
              <p class="team-member-bio" data-i18n="team.yao_bio">
                Tracks educational growth, attendance metrics, and family survey outcomes, ensuring that Amani Kids' interventions are rigorously evidence-based and responsive to community needs.
              </p>
              <div class="team-languages-strip notranslate" translate="no">
                <span class="team-lang-dot"></span>
                <span>French • Ewe • English</span>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>

    <!-- 7. QUICK-FIRE QUESTIONS ACCORDION (Q&A / FAQ) -->
    <section id="faq" class="faq-section bg-warm-alt" aria-labelledby="faq-title">
      <div class="container faq-container">
        <div class="section-header text-center fade-up">
          <div class="eyebrow eyebrow-pill" data-i18n="faq.eyebrow">FREQUENTLY ASKED QUESTIONS</div>
          <h2 id="faq-title" class="section-title" data-i18n="faq.title">
            Quick-fire answers about our work.
          </h2>
          <p class="lead-text" style="max-width: 680px; margin: 0 auto;" data-i18n="faq.lead">
            Everything you need to know about our services, languages, tax-deductible donations, and community volunteer pathways.
          </p>
        </div>

        <div class="faq-accordion fade-up">
          
          <!-- FAQ 1 -->
          <div class="faq-item active">
            <button class="faq-question" type="button" aria-expanded="true" aria-controls="faq-ans-1">
              <span data-i18n="faq.q1">How does Amani Kids support newly arrived refugee and immigrant families?</span>
              <span class="faq-toggle-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </span>
            </button>
            <div id="faq-ans-1" class="faq-answer" style="max-height: 350px;">
              <div class="faq-answer-inner" data-i18n="faq.a1">
                We provide comprehensive, culturally grounded navigation: bilingual school enrollment with Charlotte-Mecklenburg Schools, orientation to healthcare and social services, daily after-school homework tutoring, and community inclusion events like Bisakana Day. Every family is greeted by team members who speak their mother tongue and understand the resettlement process from personal experience.
              </div>
            </div>
          </div>

          <!-- FAQ 2 -->
          <div class="faq-item">
            <button class="faq-question" type="button" aria-expanded="false" aria-controls="faq-ans-2">
              <span data-i18n="faq.q2">Are Amani Kids services completely free of charge for families?</span>
              <span class="faq-toggle-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </span>
            </button>
            <div id="faq-ans-2" class="faq-answer">
              <div class="faq-answer-inner" data-i18n="faq.a2">
                Yes, 100% free. No newcomer family ever pays for school enrollment advocacy, after-school literacy tutoring, cultural events, or family case navigation. Amani Kids is an independent 501(c)(3) public charity funded through compassionate individual donors, philanthropic grants, and community partners.
              </div>
            </div>
          </div>

          <!-- FAQ 3 -->
          <div class="faq-item">
            <button class="faq-question" type="button" aria-expanded="false" aria-controls="faq-ans-3">
              <span data-i18n="faq.q3">What languages does your bilingual team speak?</span>
              <span class="faq-toggle-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </span>
            </button>
            <div id="faq-ans-3" class="faq-answer">
              <div class="faq-answer-inner" data-i18n="faq.a3">
                Our team natively speaks Swahili, Lingala, French, English, and Kinyarwanda. We ensure that parents can ask sensitive questions and understand legal or educational documents in the language they feel most confident and respected in.
              </div>
            </div>
          </div>

          <!-- FAQ 4 -->
          <div class="faq-item">
            <button class="faq-question" type="button" aria-expanded="false" aria-controls="faq-ans-4">
              <span data-i18n="faq.q4">Is my financial donation tax-deductible?</span>
              <span class="faq-toggle-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </span>
            </button>
            <div id="faq-ans-4" class="faq-answer">
              <div class="faq-answer-inner" data-i18n="faq.a4">
                Yes. Amani Kids Inc. is a registered 501(c)(3) non-profit organization recognized by the IRS. Contributions are tax-deductible to the fullest extent permitted by law. You receive an official tax receipt immediately following your donation for your tax records.
              </div>
            </div>
          </div>

          <!-- FAQ 5 -->
          <div class="faq-item">
            <button class="faq-question" type="button" aria-expanded="false" aria-controls="faq-ans-5">
              <span data-i18n="faq.q5">How can I get involved as a volunteer or mentor in Charlotte?</span>
              <span class="faq-toggle-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </span>
            </button>
            <div id="faq-ans-5" class="faq-answer">
              <div class="faq-answer-inner" data-i18n="faq.a5">
                We actively welcome compassionate volunteers to mentor youth, assist with after-school reading circles, interpret, coordinate event logistics for Bisakana Day, or provide professional expertise. You can fill out our volunteer intake form or email us at info@amanikidsnc.org.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 8. HIGH-IMPACT DUAL CONVERSION BANNER -->
    <section id="start" class="conversion-banner-section" aria-labelledby="conversion-title">
      <div class="container">
        <div class="conversion-banner-card fade-up">
          <div class="conversion-banner-content">
            <span class="conversion-banner-tag" data-i18n="conversion.tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              GET IN TOUCH • WE ARE HERE FOR YOU
            </span>
            <h2 id="conversion-title" class="conversion-banner-title" data-i18n="conversion.title">
              Ready to connect or make a lasting difference?
            </h2>
            <p class="conversion-banner-lead" data-i18n="conversion.lead">
              Whether your family needs immediate bilingual guidance in Charlotte or you want to invest in educational equity for newcomer children, your next step starts here.
            </p>
            <div class="conversion-buttons">
              <a href="get-support.html" class="btn btn-accent btn-lg" data-i18n="cta.btn_support">
                REQUEST FAMILY SUPPORT
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
              <a href="get-involved.html#donate" class="btn btn-outline-white btn-lg" data-i18n="doors.door1_cta">
                DONATE TO AMANI KIDS
              </a>
            </div>
            <div class="conversion-assurances">
              <div class="assurance-item">
                <span class="assurance-dot" aria-hidden="true"></span>
                <span data-i18n="conversion.assurance1">501(c)(3) Registered Public Charity</span>
              </div>
              <div class="assurance-item">
                <span class="assurance-dot" aria-hidden="true"></span>
                <span data-i18n="conversion.assurance2">100% Free Family Services</span>
              </div>
              <div class="assurance-item">
                <span class="assurance-dot" aria-hidden="true"></span>
                <span data-i18n="conversion.assurance3">Bilingual & Culturally Grounded</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- 9. INSTITUTIONAL FOOTER -->
  <footer class="site-footer" role="contentinfo">
    <div class="container">
      <div class="footer-grid">
        
        <!-- Brand & Mission Column -->
        <div class="footer-brand">
          <a href="index.html" class="brand-logo notranslate" translate="no" style="filter: brightness(0) invert(1);">
            <div class="brand-symbol" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M4 20L12 4l8 16"/>
                <path d="M7.5 14h9"/>
                <circle cx="12" cy="9" r="1.5" fill="currentColor"/>
              </svg>
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
        </div>

        <!-- Quick Navigation -->
        <div>
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
        </div>

        <!-- Action Pathways -->
        <div>
          <h4 class="footer-heading" data-i18n="footer.action">Get Involved</h4>
          <ul class="footer-nav-list">
            <li><a href="get-involved.html#donate">Donate Financially</a></li>
            <li><a href="get-involved.html#volunteer">Volunteer As Mentor</a></li>
            <li><a href="get-involved.html#partner">Organizational Partnerships</a></li>
            <li><a href="get-support.html">Request Family Support</a></li>
            <li><a href="events.html#bisakana">Bisakana Day Festival</a></li>
            <li><a href="contact.html">Send a Message</a></li>
          </ul>
        </div>

        <!-- Official Coordinates -->
        <div>
          <h4 class="footer-heading" data-i18n="footer.contact">Headquarters</h4>
          <div class="footer-contact-info notranslate" translate="no">
            <p>
              <strong>Amani Kids Inc.</strong><br>
              3400 Shamrock Dr., Suite D<br>
              Charlotte, NC 28215
            </p>
            <p>
              <strong>Direct Phone:</strong><br>
              <a href="tel:+17049129379">+1 (704) 912-9379</a>
            </p>
            <p>
              <strong>Email:</strong><br>
              <a href="mailto:info@amanikidsnc.org">info@amanikidsnc.org</a>
            </p>
          </div>
        </div>

      </div>

      <!-- Legal & Copyright -->
      <div class="footer-bottom">
        <div>
          &copy; <span class="current-year">2026</span> AMANI KIDS INC. All rights reserved. Registered 501(c)(3) public charity.
        </div>
        <div class="footer-bottom-links">
          <a href="get-support.html">Privacy & Family Dignity</a>
          <a href="get-involved.html">Financial Transparency</a>
          <a href="contact.html">Contact</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Core Scripts -->
  <script src="js/main.js"></script>
  <script src="js/navigation.js"></script>
  <script src="js/animations.js"></script>
  <script src="js/forms.js"></script>
  <script src="js/i18n.js"></script>
</body>
</html>
`;

fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('Successfully generated streamlined index.html');
