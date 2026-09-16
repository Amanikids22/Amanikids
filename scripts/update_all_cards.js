const fs = require('fs');

const teamMembers = [
  {
    category: "exec",
    img: "binti_muzuri_amisi.jpeg",
    alt: "Binti Muzuri Amisi, Founder and Executive Director of Amani Kids",
    roleKey: "team.binti_role",
    roleText: "Founder & Executive Director",
    name: "Binti Muzuri Amisi",
    subKey: "team.binti_sub",
    subText: "Visionary Leadership & Diaspora Advocacy",
    bioKey: "team.binti_bio",
    bioText: "Arriving from the Democratic Republic of the Congo, Binti turned the hardships of language barriers and resettlement into an enduring beacon of empowerment and educational advancement for newcomer families in North Carolina.",
    langs: "Swahili • Lingala • French • English"
  },
  {
    category: "exec",
    img: "divine_nambaya.jpeg",
    alt: "Divine Nambaya, Secretary and Operations Coordinator at Amani Kids",
    roleKey: "team.divine_role",
    roleText: "Secretary & Operations Coordinator",
    name: "Divine Nambaya",
    subKey: "team.divine_sub",
    subText: "Governance & Institutional Administration",
    bioKey: "team.divine_bio",
    bioText: "Coordinates organizational operations, board communications, and family intake documentation, ensuring every newcomer receives immediate, compassionate administrative guidance.",
    langs: "French • Swahili • English"
  },
  {
    category: "exec prog",
    img: "cynthia_mwangaza.jpeg",
    alt: "Cynthia Mwangaza, Social Worker, Head of Operations and Family Support Manager at Amani Kids",
    roleKey: "team.cynthia_role",
    roleText: "Social Worker, Head of Operations & Family Support Manager",
    name: "Cynthia Mwangaza",
    subKey: "team.cynthia_sub",
    subText: "Family Resettlement & Holistic Care",
    bioKey: "team.cynthia_bio",
    bioText: "Brings dedicated social work expertise to assess family needs, navigate Mecklenburg County social safety nets, and deliver trauma-informed family stabilization services.",
    langs: "Swahili • French • English"
  },
  {
    category: "exec",
    img: "samy_bajangi.jpeg",
    alt: "Samy Bajangi, Director of Finance at Amani Kids",
    roleKey: "team.samy_role",
    roleText: "Director of Finance",
    name: "Samy Bajangi",
    subKey: "team.samy_sub",
    subText: "Fiscal Stewardship & 501(c)(3) Compliance",
    bioKey: "team.samy_bio",
    bioText: "Ensures rigorous financial integrity, institutional grant accounting, and transparent stewardship so every donor dollar directly strengthens educational and family programs.",
    langs: "French • English • Swahili"
  },
  {
    category: "exec",
    img: "roger_dinanga.jpeg",
    alt: "Roger Dinanga, Legal Advisor at Amani Kids",
    roleKey: "team.roger_role",
    roleText: "Legal Advisor",
    name: "Roger Dinanga",
    subKey: "team.roger_sub",
    subText: "Regulatory Compliance & Civic Rights Advocacy",
    bioKey: "team.roger_bio",
    bioText: "Provides legal counsel on nonprofit governance, contractual agreements, and immigrant civil rights, helping families understand their legal rights and pathways in the U.S.",
    langs: "French • Lingala • English"
  },
  {
    category: "comm",
    img: "hadley_duquette.jpeg",
    alt: "Hadley Duquette, Public Relations and Partnership Manager at Amani Kids",
    roleKey: "team.hadley_role",
    roleText: "Public Relations & Partnership Manager",
    name: "Hadley Duquette",
    subKey: "team.hadley_sub",
    subText: "Community Alliances & Institutional Outreach",
    bioKey: "team.hadley_bio",
    bioText: "Builds bridges with Charlotte civic leaders, local universities, corporate donors, and foundation partners to expand Amani Kids' visibility and philanthropic resources.",
    langs: "English • French"
  },
  {
    category: "comm",
    img: "kianyi_norwood.jpeg",
    alt: "Kianyi Norwood, Volunteer Coordinator at Amani Kids",
    roleKey: "team.kianyi_role",
    roleText: "Volunteer Coordinator",
    name: "Kianyi Norwood",
    subKey: "team.kianyi_sub",
    subText: "Community Engagement & Youth Mentorship",
    bioKey: "team.kianyi_bio",
    bioText: "Recruits, trains, and mobilizes bilingual volunteers and mentors, connecting caring Charlotte residents with impactful after-school tutoring and cultural exchange programs.",
    langs: "English"
  },
  {
    category: "comm",
    img: "patricia_mouboua.jpeg",
    alt: "Patricia Mouboua, Family Education Coordinator at Amani Kids",
    roleKey: "team.patricia_role",
    roleText: "Family Education Coordinator",
    name: "Patricia Mouboua",
    subKey: "team.patricia_sub",
    subText: "School Advocacy & Academic Integration",
    bioKey: "team.patricia_bio",
    bioText: "Liaises directly with Charlotte-Mecklenburg Schools (CMS) teachers, counselors, and ESL specialists to ensure diaspora children receive equitable academic support and accommodations.",
    langs: "French • Regional Dialects • English"
  },
  {
    category: "prog",
    img: "ruth_luzangi.jpeg",
    alt: "Ruth Luzangi, Bisakana Day Program Manager at Amani Kids",
    roleKey: "team.ruth_role",
    roleText: "Bisakana Day Program Manager",
    name: "Ruth Luzangi",
    subKey: "team.ruth_sub",
    subText: "Cultural Arts & Community Heritage Festivals",
    bioKey: "team.ruth_bio",
    bioText: "Leads the annual Bisakana Cultural Celebration and traditional music, dance, and storytelling workshops that instill cultural pride and joyous belonging in newcomer youth.",
    langs: "Lingala • French • English"
  },
  {
    category: "prog",
    img: "priscilla_ngomba.jpeg",
    alt: "Priscilla Ngomba, Amani Connect Program Manager at Amani Kids",
    roleKey: "team.priscilla_role",
    roleText: "Amani Connect Program Manager",
    name: "Priscilla Ngomba",
    subKey: "team.priscilla_sub",
    subText: "Community Resource Navigation & Urgent Intake",
    bioKey: "team.priscilla_bio",
    bioText: "Guides families through essential housing, healthcare clinics, food pantry networks, and city services, breaking isolation through personalized bilingual casework.",
    langs: "French • Lingala • English"
  },
  {
    category: "prog",
    img: "esther_mwanza.jpeg",
    alt: "Esther Mwanza, Sauti Safe Space Program Manager at Amani Kids",
    roleKey: "team.esther_role",
    roleText: "Sauti Safe Space Program Manager",
    name: "Esther Mwanza",
    subKey: "team.esther_sub",
    subText: "Youth Mental Health, Literacy & Healing Circles",
    bioKey: "team.esther_bio",
    bioText: "Directs the Sauti Safe Space program, creating protective, empowering weekly peer circles where refugee youth process trauma, build creative voices, and form lasting friendships.",
    langs: "Swahili • French • English"
  },
  {
    category: "comm",
    img: "yao_djaka.jpeg",
    alt: "Yao Djaka, Educator and Admin Data Manager at Amani Kids",
    roleKey: "team.yao_role",
    roleText: "Educator & Admin Data Manager",
    name: "Yao Djaka",
    subKey: "team.yao_sub",
    subText: "Program Analytics, Educational Metrics & IT",
    bioKey: "team.yao_bio",
    bioText: "Tracks educational growth, attendance metrics, and family survey outcomes, ensuring that Amani Kids' interventions are rigorously evidence-based and responsive to community needs.",
    langs: "French • Ewe • English"
  }
];

function generateTeamCardsHtml() {
  return teamMembers.map((m, idx) => `
          <!-- Team Member ${idx + 1}: ${m.name} -->
          <article class="team-card" data-category="${m.category}">
            <div class="team-portrait-wrapper">
              <img src="images/team/${m.img}" 
                   alt="${m.alt}" 
                   class="team-portrait-img" loading="lazy">
            </div>
            <div class="team-card-body">
              <div class="team-badge-role-inline notranslate" translate="no" data-i18n="${m.roleKey}">${m.roleText}</div>
              <h3 class="team-member-name notranslate" translate="no">${m.name}</h3>
              <div class="team-member-subtitle" data-i18n="${m.subKey}">${m.subText}</div>
              <p class="team-member-bio" data-i18n="${m.bioKey}">
                ${m.bioText}
              </p>
              <div class="team-languages-strip notranslate" translate="no">
                <span class="team-lang-dot"></span>
                <span>${m.langs}</span>
              </div>
            </div>
          </article>`).join('\n');
}

// 1. Update index.html
let indexContent = fs.readFileSync('index.html', 'utf8');

// Replace hero image with authentic African diaspora children photo
indexContent = indexContent.replace(
  /<img src="https:\/\/images\.unsplash\.com\/photo-[^"]*"/g,
  '<img src="images/amani_hero_children.jpg"'
);
indexContent = indexContent.replace(
  /alt="Joyful young African child smiling warmly during an educational community activity in Charlotte"/g,
  'alt="Two smiling African diaspora children holding open storybooks in a vibrant community learning center in Charlotte"'
);

// Replace team grid inside index.html
const teamGridStart = indexContent.indexOf('<div class="team-grid fade-up" id="team-grid-container">');
if (teamGridStart !== -1) {
  const teamGridEnd = indexContent.indexOf('</div>\n      </div>\n    </section>\n\n    <!-- 7. QUICK-FIRE QUESTIONS', teamGridStart);
  if (teamGridEnd !== -1) {
    const newGrid = `<div class="team-grid fade-up" id="team-grid-container">\n${generateTeamCardsHtml()}\n        </div>`;
    indexContent = indexContent.substring(0, teamGridStart) + newGrid + indexContent.substring(teamGridEnd + 15);
  }
}

fs.writeFileSync('index.html', indexContent, 'utf8');
console.log('Updated index.html with new hero photo and clean team cards!');

// 2. Update about.html
let aboutContent = fs.readFileSync('about.html', 'utf8');
const aboutGridStart = aboutContent.indexOf('<div class="team-grid fade-up" id="team-grid-container">');
if (aboutGridStart !== -1) {
  const aboutGridEnd = aboutContent.indexOf('</div>\n      </div>\n    </section>', aboutGridStart);
  if (aboutGridEnd !== -1) {
    const newAboutGrid = `<div class="team-grid fade-up" id="team-grid-container">\n${generateTeamCardsHtml()}\n        </div>`;
    aboutContent = aboutContent.substring(0, aboutGridStart) + newAboutGrid + aboutContent.substring(aboutGridEnd + 15);
  }
}
fs.writeFileSync('about.html', aboutContent, 'utf8');
console.log('Updated about.html with clean team cards!');
