// Add granular data-i18n tags to index.html
const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(indexPath, 'utf8');

// Hero tags
content = content.replace(
  '<div class="eyebrow eyebrow-pill">\n              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>\n              AMANI KIDS • 501(C)(3) NONPROFIT\n            </div>',
  '<div class="eyebrow eyebrow-pill" data-i18n="hero.eyebrow">\n              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>\n              AMANI KIDS • 501(C)(3) NONPROFIT\n            </div>'
);

content = content.replace(
  '<h1 id="hero-headline" class="display-title">\n              Helping African children and families thrive <span class="serif-em">in a new home.</span>\n            </h1>',
  '<h1 id="hero-headline" class="display-title">\n              <span data-i18n="hero.title_part1">Helping African children and families thrive</span> <span class="serif-em" data-i18n="hero.title_em">in a new home.</span>\n            </h1>'
);

content = content.replace(
  '<p class="lead-text">\n              We connect refugee, immigrant, and newcomer families of the African diaspora with trusted resources, meaningful support, and community connections that help them thrive.\n            </p>',
  '<p class="lead-text" data-i18n="hero.lead">\n              We connect refugee, immigrant, and newcomer families of the African diaspora with trusted resources, meaningful support, and community connections that help them thrive.\n            </p>'
);

content = content.replace(
  '<a href="get-support.html" class="btn btn-accent btn-lg">\n                GET SUPPORT',
  '<a href="get-support.html" class="btn btn-accent btn-lg" data-i18n="hero.cta_support">\n                GET SUPPORT'
);

content = content.replace(
  '<a href="get-involved.html" class="btn btn-outline btn-lg">\n                SUPPORT AMANI KIDS\n              </a>',
  '<a href="get-involved.html" class="btn btn-outline btn-lg" data-i18n="hero.cta_donate">\n                SUPPORT AMANI KIDS\n              </a>'
);

content = content.replace(
  '<div class="hero-tag-top">\n                <span class="pulse-dot"></span>\n                ACTIVE COMMUNITY\n              </div>',
  '<div class="hero-tag-top">\n                <span class="pulse-dot"></span>\n                <span data-i18n="hero.badge_active">ACTIVE COMMUNITY</span>\n              </div>'
);

content = content.replace(
  '<div class="badge-text-primary">Rooted in Lived Experience</div>\n                  <div class="badge-text-secondary">Founded by immigrants, serving with dignity</div>',
  '<div class="badge-text-primary" data-i18n="hero.badge_lived">Rooted in Lived Experience</div>\n                  <div class="badge-text-secondary" data-i18n="hero.badge_desc">Founded by immigrants, serving with dignity</div>'
);

// Challenge section
content = content.replace(
  '<div class="eyebrow">THE REALITY OF RESETTLEMENT</div>',
  '<div class="eyebrow" data-i18n="challenge.eyebrow">THE REALITY OF RESETTLEMENT</div>'
);

content = content.replace(
  '<h2 id="challenge-title" class="section-title">\n              Starting over should not mean starting alone.\n            </h2>',
  '<h2 id="challenge-title" class="section-title" data-i18n="challenge.title">\n              Starting over should not mean starting alone.\n            </h2>'
);

content = content.replace(
  '<p class="challenge-quote-text">"When a family arrives in a new country, everything is unfamiliar. Having someone who speaks your language and understands your journey changes everything."</p>',
  '<p class="challenge-quote-text" data-i18n="challenge.quote">"When a family arrives in a new country, everything is unfamiliar. Having someone who speaks your language and understands your journey changes everything."</p>'
);

// Solution section
content = content.replace(
  '<div class="eyebrow">HOW WE HELP</div>\n          <h2 id="solution-title" class="section-title">\n            We help families find their way forward.\n          </h2>',
  '<div class="eyebrow" data-i18n="solution.eyebrow">HOW WE HELP</div>\n          <h2 id="solution-title" class="section-title" data-i18n="solution.title">\n            We help families find their way forward.\n          </h2>'
);

// Programs section
content = content.replace(
  '<div class="eyebrow">FLAGSHIP INITIATIVES</div>\n          <h2 id="programs-title" class="section-title">\n            Four pillars designed for generational impact.\n          </h2>',
  '<div class="eyebrow" data-i18n="programs.eyebrow">FLAGSHIP INITIATIVES</div>\n          <h2 id="programs-title" class="section-title" data-i18n="programs.title">\n            Four pillars designed for generational impact.\n          </h2>'
);

content = content.replace(
  '<span class="program-tag">SIGNATURE EXPERIENCE</span>',
  '<span class="program-tag" data-i18n="programs.bisakana_tag">SIGNATURE EXPERIENCE</span>'
);

content = content.replace(
  '<div class="program-feature-subtitle">"Play and Have Fun" in Lingala</div>',
  '<div class="program-feature-subtitle" data-i18n="programs.bisakana_sub">"Play and Have Fun" in Lingala</div>'
);

// Impact section
content = content.replace(
  '<div class="eyebrow">MEASURABLE OUTCOMES</div>\n          <h2 id="impact-title" class="section-title">\n            Real people. Real connections. Real impact.\n          </h2>',
  '<div class="eyebrow" data-i18n="impact.eyebrow">MEASURABLE OUTCOMES</div>\n          <h2 id="impact-title" class="section-title" data-i18n="impact.title">\n            Real people. Real connections. Real impact.\n          </h2>'
);

// Story section
content = content.replace(
  '<span class="story-quote-tag">VERIFIED TESTIMONIAL</span>',
  '<span class="story-quote-tag" data-i18n="story.verified_tag">VERIFIED TESTIMONIAL</span>'
);

content = content.replace(
  '<p class="story-quote-text">\n                "Amani Kids was a game-changer for our family. They connected our children with an after-school program that helped them dramatically with English and socialization. As parents navigating a completely new school system, having their guidance gave us peace of mind."\n              </p>',
  '<p class="story-quote-text" data-i18n="story.quote">\n                "Amani Kids was a game-changer for our family. They connected our children with an after-school program that helped them dramatically with English and socialization. As parents navigating a completely new school system, having their guidance gave us peace of mind."\n              </p>'
);

// Founder section
content = content.replace(
  '<div class="eyebrow">OUR ORIGIN</div>\n            <h2 id="founder-title" class="section-title">\n              A mission born from lived experience.\n            </h2>',
  '<div class="eyebrow" data-i18n="founder.eyebrow">OUR ORIGIN</div>\n            <h2 id="founder-title" class="section-title" data-i18n="founder.title">\n              A mission born from lived experience.\n            </h2>'
);

// Three doors
content = content.replace(
  '<div class="eyebrow">TAKE ACTION</div>\n          <h2 id="doors-title" class="section-title">\n            Three doors into our mission.\n          </h2>',
  '<div class="eyebrow" data-i18n="doors.eyebrow">TAKE ACTION</div>\n          <h2 id="doors-title" class="section-title" data-i18n="doors.title">\n            Three doors into our mission.\n          </h2>'
);

content = content.replace(
  '<div class="door-number">PATHWAY 01 • DONOR</div>\n            <h3>GIVE</h3>',
  '<div class="door-number" data-i18n="doors.door1_num">PATHWAY 01 • DONOR</div>\n            <h3 data-i18n="doors.door1_title">GIVE</h3>'
);

content = content.replace(
  '<div class="door-number">PATHWAY 02 • VOLUNTEER</div>\n            <h3>VOLUNTEER</h3>',
  '<div class="door-number" data-i18n="doors.door2_num">PATHWAY 02 • VOLUNTEER</div>\n            <h3 data-i18n="doors.door2_title">VOLUNTEER</h3>'
);

content = content.replace(
  '<div class="door-number">PATHWAY 03 • PARTNER</div>\n            <h3>PARTNER</h3>',
  '<div class="door-number" data-i18n="doors.door3_num">PATHWAY 03 • PARTNER</div>\n            <h3 data-i18n="doors.door3_title">PARTNER</h3>'
);

// Final CTA
content = content.replace(
  '<div class="eyebrow eyebrow-pill eyebrow-dark">LOOKING FOR SUPPORT?</div>\n        <h2 id="cta-banner-title" class="display-title" style="color: #FAF8F5;">\n          Every child deserves to feel safe, valued, and hopeful.\n        </h2>',
  '<div class="eyebrow eyebrow-pill eyebrow-dark" data-i18n="cta.eyebrow">LOOKING FOR SUPPORT?</div>\n        <h2 id="cta-banner-title" class="display-title" style="color: #FAF8F5;" data-i18n="cta.title">\n          Every child deserves to feel safe, valued, and hopeful.\n        </h2>'
);

content = content.replace(
  '<a href="get-support.html" class="btn btn-accent btn-lg">\n            REQUEST FAMILY SUPPORT\n          </a>',
  '<a href="get-support.html" class="btn btn-accent btn-lg" data-i18n="cta.btn_support">\n            REQUEST FAMILY SUPPORT\n          </a>'
);

content = content.replace(
  '<a href="contact.html" class="btn btn-outline-white btn-lg">\n            CONTACT OUR TEAM\n          </a>',
  '<a href="contact.html" class="btn btn-outline-white btn-lg" data-i18n="cta.btn_contact">\n            CONTACT OUR TEAM\n          </a>'
);

fs.writeFileSync(indexPath, content, 'utf8');
console.log('Successfully tagged index.html with granular data-i18n attributes!');
