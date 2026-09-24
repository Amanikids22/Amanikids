/**
 * AMANI KIDS — INTERNATIONALIZATION & TRANSLATION SYSTEM (Vanilla JS)
 * Automatic browser language detection, persistent storage, and instantaneous EN/FR switcher.
 */

const AMANI_I18N = {
  en: {
    'nav.home': 'Home',
    'nav.about_us': 'About Us',
    'nav.about': 'About',
    'nav.about_amani': 'About AMANI',
    'nav.why_exist': 'Why We Exist',
    'nav.mission_vision': 'Mission & Vision',
    'nav.programs': 'Programs',
    'nav.all_programs': 'All Programs',
    'nav.literacy_tutoring': 'After-School Tutoring',
    'nav.case_navigation': 'Family Case Navigation',
    'nav.cultural_enrichment': 'Youth Cultural Enrichment',
    'nav.impact': 'Impact',
    'nav.verified_impact': 'Verified Impact',
    'nav.community': 'Community',
    'nav.stories': 'Stories',
    'nav.family_stories': 'Family Stories',
    'nav.events': 'Events',
    'nav.events_bisakana': 'Events & Festivals',
    'nav.album': 'Album',
    'nav.photo_album': 'Community Album',
    'nav.blog': 'Blog',
    'nav.journal_blog': 'Journal & Blog',
    'nav.team': 'Meet Our Team',
    'nav.faq': 'Q&A',
    'nav.get_involved': 'Get Involved',
    'nav.ways_to_help': 'Ways to Support',
    'nav.donate_item': 'Donate Financially',
    'nav.volunteer_item': 'Volunteer as Mentor',
    'nav.partner_item': 'Partner with Us',
    'nav.get_support': 'Get Support',
    'nav.contact': 'Contact Us',
    'nav.donate': 'DONATE',
    'nav.donate_now': 'DONATE NOW',
    'nav.get_family_support': 'GET FAMILY SUPPORT',
    'nav.follow_amani': 'Follow AMANI KIDS',
    'nav.contact_us': 'Contact Us',
    'nav.bottom_home': 'Home',
    'nav.bottom_programs': 'Programs',
    'nav.bottom_album': 'Album',
    'nav.bottom_impact': 'Impact',
    'nav.bottom_donate': 'Donate',

    // Dropdown Descriptions (100% Pure English)
    'nav.desc_about': 'Mission, history & Charlotte roots',
    'nav.desc_team': '12 leadership & community advocates',
    'nav.desc_impact': 'Accountability, metrics & outcomes',
    'nav.desc_all_programs': 'Education & family navigation',
    'nav.desc_tutoring': 'Literacy, tutoring & homework lab',
    'nav.desc_case_nav': 'School enrollment & healthcare bridge',
    'nav.desc_youth': 'Creative arts & peer mentorship',
    'nav.desc_stories': 'Firsthand resettlement journeys',
    'nav.desc_events': 'Bisakana Day & celebrations',
    'nav.desc_album': 'Moments of connection, pride & joy',
    'nav.desc_blog': 'News, updates & family guides',
    'nav.desc_ways': 'Overview of community pathways',
    'nav.desc_donate': '100% tax-deductible contribution',
    'nav.desc_volunteer': 'Tutor youth & guide families',
    'nav.desc_partner': 'Schools & organizational alliances',

    // Hero (Exact wording from user)
    'hero.eyebrow': '501(C)(3) NONPROFIT CHARLOTTE',
    'hero.tagline': 'Learn, Connect, and Grow.',
    'hero.title_line1': 'Empowering Children.',
    'hero.title_line2': 'Strengthening Families.',
    'hero.title_part1': 'Empowering Children. Strengthening Families.',
    'hero.title_em': 'Building Communities.',
    'hero.lead': 'AMANI KIDS is an accredited 501(c)(3) nonprofit organization based in Charlotte, NC. We walk beside African refugee, immigrant, and newcomer families — bridging language access, school enrollment, and community resources with dignity, lived experience, and culturally rooted care.',
    'hero.highlight1': '100% Free Family Services',
    'hero.highlight2': '8+ Spoken Languages (Swahili, Lingala, French, English, Kirundi, Luba & more)',
    'hero.highlight3': 'Mecklenburg County Community Alliances',
    'hero.cta_support': 'GET FAMILY SUPPORT',
    'hero.cta_donate': 'SUPPORT AMANI KIDS',
    'hero.badge_active': 'ACTIVE IN CHARLOTTE',
    'hero.badge_lived': 'Rooted in Lived Experience',
    'hero.badge_desc': 'Founded by immigrants, serving with dignity',

    // Mission & Vision
    'mission.eyebrow': 'OUR FOUNDATIONAL COMPASS',
    'mission.title': 'Guided by Purpose. Driven by Community.',
    'mission.pillar': 'PILLAR 01 • PURPOSE',
    'mission.card_title': 'Our Mission',
    'mission.card_desc': 'Connect children and families of the African Diaspora, who are refugees, immigrants, and newcomers, to resources, opportunities and foster their wellbeing to thrive.',
    'vision.pillar': 'PILLAR 02 • COMMUNITY',
    'vision.card_title': 'Our Vision',
    'vision.card_desc': 'A Charlotte community where every African diaspora family is welcomed with dignity, equipped to navigate essential systems, and empowered to reach their fullest potential.',

    // Trust strip
    'trust.nonprofit': '501(c)(3) Nonprofit',
    'trust.nonprofit_sub': 'Tax-exempt charitable organization',
    'trust.charlotte': 'Charlotte, North Carolina',
    'trust.charlotte_sub': '3400 Shamrock Dr., Suite D',
    'trust.diaspora': 'African Diaspora Focus',
    'trust.diaspora_sub': 'Refugees, immigrants & newcomers',
    'trust.verified': 'Community Verified',
    'trust.verified_sub': 'Deep local roots & school alliances',

    // Challenge
    'challenge.eyebrow': 'THE REALITY OF RESETTLEMENT',
    'challenge.title': 'Starting over should not mean starting alone.',
    'challenge.lead': 'For African refugee, immigrant, and newcomer families arriving in the United States, resettlement brings both immense opportunity and profound hurdles. Without a trusted guide, families can face prolonged isolation.',
    'challenge.quote': '"When a family arrives in a new country, everything is unfamiliar. Having someone who speaks your language and understands your journey changes everything."',
    'challenge.card1_title': 'Language Barriers',
    'challenge.card1_desc': 'Navigating school registration, healthcare, and essential services without native-language support.',
    'challenge.card2_title': 'Unfamiliar Systems',
    'challenge.card2_desc': 'Deciphering complex American institutional processes that rarely come with clear roadmaps.',
    'challenge.card3_title': 'Social Isolation',
    'challenge.card3_desc': 'Leaving behind extended family, village networks, and familiar cultural safety nets.',
    'challenge.card4_title': 'Cultural Transition',
    'challenge.card4_desc': 'Preserving deep African heritage and dignity while children adapt to American classroom environments.',

    // How we help / solution
    'solution.eyebrow': 'HOW WE HELP',
    'solution.title': 'We help families find their way forward.',
    'solution.lead': 'Amani Kids serves as a trusted cultural bridge. We walk beside families through an intentional five-stage journey designed to foster dignity, self-reliance, and enduring peace.',
    'solution.step1_title': 'Listen',
    'solution.step1_desc': "We begin by hearing each family's specific story in their preferred language without judgment.",
    'solution.step2_title': 'Connect',
    'solution.step2_desc': 'We match families with trusted community programs, school enrollments, and vital resources.',
    'solution.step3_title': 'Support',
    'solution.step3_desc': 'We provide direct mentorship, academic assistance, and bilingual guidance through early challenges.',
    'solution.step4_title': 'Empower',
    'solution.step4_desc': 'Parents and youth develop systemic confidence to advocate for their own future with dignity.',
    'solution.step5_title': 'Thrive',
    'solution.step5_desc': 'Children succeed in school, families build wealth and belonging, becoming leaders for the next generation.',

    // Programs
    'programs.eyebrow': 'FLAGSHIP INITIATIVES',
    'programs.title': 'Four pillars designed for generational impact.',
    'programs.lead': 'From joyful cultural festivals to dedicated literacy and navigation hubs, our programs meet families where they are with authenticity and care.',
    'programs.bisakana_tag': 'SIGNATURE EXPERIENCE',
    'programs.bisakana_sub': '"Play and Have Fun" in Lingala',
    'programs.bisakana_desc': 'Bisakana Day is our signature cultural celebration that brings African newcomer families, neighbors, and community partners together. Through joyful games, sports and active play, trust-building activities, authentic food, and music, children experience uninhibited joy and cultural pride while parents access community resource tables staffed by bilingual navigators.',
    'programs.explore_bisakana': 'Explore Bisakana Day',
    'programs.sauti_title': 'SAUTI SAFE SPACE',
    'programs.sauti_sub': '"Voice" in Swahili • Twice a Month',
    'programs.sauti_desc': "Children's voices matter. Sauti Safe Space provides an uplifting community meeting twice a month where youth express themselves freely through bilingual French-English reading, building literacy, confidence, creativity, social-emotional skills, and special education support.",
    'programs.connect_title': 'AMANI CONNECT',
    'programs.connect_sub': 'Resource Navigation & Family Advocacy',
    'programs.connect_desc': 'A trusted resource hub connecting families with bilingual advocacy, schools registration, healthcare referrals, and community partnerships.',
    'programs.outreach_title': 'INTERNATIONAL OUTREACH',
    'programs.outreach_sub': 'Cross-Border Solidarity & Hope',
    'programs.outreach_desc': "Extending Amani Kids' mission through emergency assistance, student sponsorships, aid for orphans, and grassroots community projects in Africa.",
    'common.learn_more': 'Learn more',

    // Impact
    'impact.eyebrow': 'MEASURABLE OUTCOMES',
    'impact.title': 'Real people. Real connections. Real impact.',
    'impact.lead': 'We measure our success not through inflated claims, but through the genuine stability, academic advancement, and joy of the families we serve.',
    'impact.stat1_label': 'Participants Supported',
    'impact.stat1_desc': 'Refugee and newcomer children & parents reached through direct programming and resource navigation.',
    'impact.stat2_label': 'Community-Led',
    'impact.stat2_desc': 'Programs designed and guided by leaders with direct lived experience of immigrant resettlement.',
    'impact.stat3_label': '8+ Spoken Languages',
    'impact.stat3_desc': 'Multilingual navigation in Swahili, Lingala, French, Kirundi, Luba, Zambian languages, and English for accessible support.',
    'impact.stat4_label': 'Verified Nonprofit',
    'impact.stat4_desc': 'Accountable, transparent 501(c)(3) status operating with fiscal integrity in Charlotte, NC.',

    // Story
    'story.eyebrow': 'FAMILY PERSPECTIVES',
    'story.title': 'Behind every connection is a story.',
    'story.verified_tag': 'VERIFIED TESTIMONIAL',
    'story.quote': '"Amani Kids was a game-changer for our family. They connected our children with an after-school program that helped them dramatically with English and socialization. As parents navigating a completely new school system, having their guidance gave us peace of mind."',
    'story.author_role': 'Parent & Community Member • Charlotte, NC',

    // Founder
    'founder.eyebrow': 'OUR ORIGIN',
    'founder.title': 'A mission born from lived experience.',
    'founder.role': 'FOUNDER & EXECUTIVE DIRECTOR',
    'founder.lead': 'When Binti arrived in the United States from the Democratic Republic of the Congo, she confronted the disorienting maze of resettlement firsthand — the language shock, the unfamiliar schools, and the struggle to preserve cultural dignity.',
    'founder.step1_title': 'The Experience',
    'founder.step1_desc': 'Arriving in Charlotte as an immigrant, encountering how easily talented families can be sidelined by simple communication barriers.',
    'founder.step2_title': 'The Realization',
    'founder.step2_desc': 'Families do not lack capability or resolve; they lack culturally aligned guides who respect their dignity and speak their language.',
    'founder.step3_title': 'The Action',
    'founder.step3_desc': 'Founding Amani Kids as a 501(c)(3) nonprofit to ensure no newcomer child or parent walks the path of resettlement alone.',
    'founder.cta': 'Read Full Founder Story',

    // Values
    'values.eyebrow': 'OUR COMPASS',
    'values.title': 'The principles that anchor every action.',
    'values.lead': 'Click on each core value to explore how our African cultural heritage informs our day-to-day work with children and families.',

    // Community Photos
    'mosaic.eyebrow': 'COMMUNITY LIFE',
    'mosaic.title': 'This is Amani Kids.',
    'mosaic.lead': 'Moments of connection, learning, mentorship, and celebration across Charlotte. Authentic faces, real friendships, and shared triumphs.',

    // Alliances
    'alliances.eyebrow': 'COLLABORATION',
    'alliances.title': 'Trusted by community. Built on relationships.',
    'alliances.subtitle': 'We collaborate with respected educational institutions, grassroots initiatives, and cultural organizations across the Charlotte-Mecklenburg region to ensure coordinated care for newcomer families.',

    // Three Doors
    'doors.eyebrow': 'TAKE ACTION',
    'doors.title': 'Three doors into our mission.',
    'doors.lead': 'Whether you are a donor investing in human potential, a volunteer offering your time, or an organization seeking partnership, there is a clear place for you here.',
    'doors.door1_num': 'PATHWAY 01 • DONOR',
    'doors.door1_title': 'GIVE',
    'doors.door1_desc': 'Your tax-deductible contribution directly funds bilingual after-school tutoring, Bisakana cultural festivals, family transit support, and emergency resource navigation.',
    'doors.door1_cta': 'DONATE TO AMANI KIDS',
    'doors.door2_num': 'PATHWAY 02 • VOLUNTEER',
    'doors.door2_title': 'VOLUNTEER',
    'doors.door2_desc': 'Share your time as an academic mentor, multilingual interpreter, event organizer, or youth coach. Real relationships change lives on both sides.',
    'doors.door2_cta': 'VOLUNTEER WITH US',
    'doors.door3_num': 'PATHWAY 03 • PARTNER',
    'doors.door3_title': 'PARTNER',
    'doors.door3_desc': 'Collaborate with Amani Kids as a school district, healthcare provider, philanthropic foundation, or local enterprise committed to immigrant equity.',
    'doors.door3_cta': 'PARTNER WITH US',

    // Final CTA
    'cta.eyebrow': 'LOOKING FOR SUPPORT?',
    'cta.title': 'Every child deserves to feel safe, valued, and hopeful.',
    'cta.lead': 'If your family has recently arrived in Charlotte or is navigating school and community resources, we are here to walk with you in your native language.',
    'cta.btn_support': 'REQUEST FAMILY SUPPORT',
    'cta.btn_contact': 'CONTACT OUR TEAM',

    // Footer
    'footer.desc': 'Connecting African refugee, immigrant, and newcomer families with trusted resources, cultural belonging, and educational support to help them thrive in a new home.',
    'footer.status': 'System Operational • 501(c)(3) Nonprofit',
    'footer.org': 'Organization',
    'footer.action': 'Get Involved',
    'footer.office': 'Charlotte Office',
    'footer.direct_phone': 'Direct Phone:',
    'footer.email': 'Email:',
    'footer.rights': 'AMANI KIDS INC. All rights reserved. Registered 501(c)(3) public charity.',
    'footer.privacy': 'Privacy & Family Dignity',
    'footer.transparency': 'Financial Transparency',
    'footer.contact': 'Contact',

    // Team section
    'team.eyebrow': 'LEADERSHIP & COMMUNITY TEAM',
    'team.title': 'Meet the Hearts Behind Amani Kids.',
    'team.lead': 'Guided by lived refugee experience, multilingual fluency, and deep cultural love, our team walks beside African diaspora families at every step of their resettlement journey.',
    'team.cta_about': 'Meet Our Full Leadership & Board Governance',
        // Team (Exact 12 members from official records)
    'team.eyebrow': 'LEADERSHIP & COMMUNITY TEAM',
    'team.title': 'Meet the Hearts Behind Amani Kids.',
    'team.lead': 'Guided by lived refugee experience, multilingual fluency, and deep cultural love, our 12 team members walk beside African diaspora families at every step of their resettlement journey in Charlotte.',
    'team.filter_all': 'All Team (12)',
    'team.filter_exec': 'Executive & Governance',
    'team.filter_prog': 'Program Managers',
    'team.filter_comm': 'Education & Community',
    'team.count_badge': '12 Dedicated Leaders & Navigators',
    'team.languages_label': 'Languages:',

    'team.binti_role': 'Founder & Executive Director',
    'team.binti_sub': 'Visionary Leadership & Diaspora Advocacy',
    'team.binti_bio': 'Arriving from the Democratic Republic of the Congo, Binti turned the hardships of language barriers and resettlement into an enduring beacon of empowerment and educational advancement for newcomer families in North Carolina.',

    'team.divine_role': 'Secretary & Operations Coordinator',
    'team.divine_sub': 'Governance & Institutional Administration',
    'team.divine_bio': 'Coordinates organizational operations, board communications, and family intake documentation, ensuring every newcomer receives immediate, compassionate administrative guidance.',

    'team.cynthia_role': 'Social Worker, Head of Operations & Family Support Manager',
    'team.cynthia_sub': 'Family Resettlement & Holistic Care',
    'team.cynthia_bio': 'Brings dedicated social work expertise to assess family needs, navigate Mecklenburg County social safety nets, and deliver trauma-informed family stabilization services.',

    'team.samy_role': 'Director of Finance',
    'team.samy_sub': 'Fiscal Stewardship & 501(c)(3) Compliance',
    'team.samy_bio': 'Ensures rigorous financial integrity, institutional grant accounting, and transparent stewardship so every donor dollar directly strengthens educational and family programs.',

    'team.roger_role': 'Legal Advisor',
    'team.roger_sub': 'Regulatory Compliance & Civic Rights Advocacy',
    'team.roger_bio': 'Provides legal counsel on nonprofit governance, contractual agreements, and immigrant civil rights, helping families understand their legal rights and pathways in the U.S.',

    'team.hadley_role': 'Public Relations & Partnership Manager',
    'team.hadley_sub': 'Community Alliances & Institutional Outreach',
    'team.hadley_bio': 'Builds bridges with Charlotte civic leaders, local universities, corporate donors, and foundation partners to expand Amani Kids\' visibility and philanthropic resources.',

    'team.kianyi_role': 'Volunteer Coordinator',
    'team.kianyi_sub': 'Community Engagement & Youth Mentorship',
    'team.kianyi_bio': 'Recruits, trains, and mobilizes bilingual volunteers and mentors, connecting caring Charlotte residents with impactful after-school tutoring and cultural exchange programs.',

    'team.patricia_role': 'Family Education Coordinator',
    'team.patricia_sub': 'School Advocacy & Academic Integration',
    'team.patricia_bio': 'Liaises directly with schools, teachers, counselors, and ESL specialists to ensure diaspora children receive equitable academic support and accommodations.',

    'team.ruth_role': 'Bisakana Day Program Manager',
    'team.ruth_sub': 'Cultural Arts & Community Heritage Festivals',
    'team.ruth_bio': 'Leads the annual Bisakana Cultural Celebration and traditional music, dance, and storytelling workshops that instill cultural pride and joyous belonging in newcomer youth.',

    'team.priscilla_role': 'Amani Connect Program Manager',
    'team.priscilla_sub': 'Community Resource Navigation & Urgent Intake',
    'team.priscilla_bio': 'Guides families through essential housing, healthcare clinics, food pantry networks, and city services, breaking isolation through personalized bilingual casework.',

    'team.esther_role': 'Sauti Safe Space Program Manager',
    'team.esther_sub': 'Youth Mental Health, Literacy & Healing Circles',
    'team.esther_bio': 'Originally from Zambia, Esther directs the Sauti Safe Space program, creating protective, empowering peer circles where youth process trauma, build creative voices, and form lasting friendships in Swahili, Zambian languages, and English.',

    'team.yao_role': 'Educator & Admin Data Manager',
    'team.yao_sub': 'Academic Tutoring & Impact Analytics',
    'team.yao_bio': 'Delivers bilingual STEM and literacy instruction while managing program tracking data to measure learning gains, school attendance, and family progress.',

    // Partner Ribbon
    'partner_ribbon.title': 'Trusted Institutional & Community Alliances in Charlotte',

    // Split Layout Programs (Applied Pattern)
    'programs.bisakana_pill': 'SIGNATURE CULTURAL EXPERIENCE',
    'programs.bisakana_headline': 'Where Cultural Heritage Ignites Joy.',
    'programs.bisakana_badge': '+180 Families Reached',
    'programs.bisakana_check1': 'Multilingual celebration in Swahili, Lingala, French & English',
    'programs.bisakana_check2': 'Traditional Congolese & Pan-African dances, live music & cuisine',
    'programs.bisakana_check3': 'Joyful games, play, trust-building, and bilingual resource tables',
    
    'programs.sauti_pill': 'BILINGUAL LITERACY & EXPRESSION',
    'programs.sauti_headline': 'Where Children’s Voices Truly Matter.',
    'programs.sauti_badge': 'Twice a Month',
    'programs.sauti_check1': 'Bilingual French-English reading, literacy building & vocal expression',
    'programs.sauti_check2': 'Confidence, creativity, and social-emotional development workshops',
    'programs.sauti_check3': 'Dedicated special education support and caring individual mentorship',
    
    'programs.connect_pill': 'FAMILY ADVOCACY & RESOURCE ACCESS',
    'programs.connect_headline': 'No Family Navigates American Systems Alone.',
    'programs.connect_badge': '100% Free Family Advocacy',
    'programs.connect_check1': 'Bilingual schools registration and special accommodation support',
    'programs.connect_check2': 'Community healthcare navigation, medical appointments & Medicaid guidance',
    'programs.connect_check3': 'Cultural mediation, interpretation, and native-language navigation',
    
    'programs.outreach_pill': 'CROSS-BORDER SOLIDARITY',
    'programs.outreach_headline': 'Connecting Roots and Empathy Across Borders.',
    'programs.outreach_badge': 'Global Educational Solidarity',
    'programs.outreach_check1': 'Emergency assistance and rapid relief for vulnerable families',
    'programs.outreach_check2': 'Sponsor a student: tuition, books, and essential school supplies',
    'programs.outreach_check3': 'Aid for orphans and grassroots community development projects',

    // Quick-fire FAQ (Applied Pattern)
    'faq.eyebrow': 'FREQUENTLY ASKED QUESTIONS',
    'faq.title': 'Quick-fire answers about our work.',
    'faq.lead': 'Everything you need to know about our services, languages, tax-deductible donations, and community volunteer pathways.',
    'faq.q1': 'How does Amani Kids support newly arrived refugee and immigrant families?',
    'faq.a1': 'We provide comprehensive, culturally grounded navigation: bilingual school enrollment with Charlotte-Mecklenburg Schools, orientation to healthcare and social services, daily after-school homework tutoring, and community inclusion events like Bisakana Day. Every family is greeted by team members who speak their mother tongue and understand the resettlement process from personal experience.',
    'faq.q2': 'Are Amani Kids services completely free of charge for families?',
    'faq.a2': 'Yes, 100% free. No newcomer family ever pays for school enrollment advocacy, after-school literacy tutoring, cultural events, or family case navigation. Amani Kids is an independent 501(c)(3) public charity funded through compassionate individual donors, philanthropic grants, and community partners.',
    'faq.q3': 'What languages does your bilingual team speak?',
    'faq.a3': 'Our team natively speaks 8+ languages and regional dialects including Swahili, Lingala, French, English, Kirundi, Luba, and Zambian languages. We ensure that parents can ask sensitive questions and understand legal or educational documents in the language they feel most confident and respected in.',
    'faq.q4': 'Is my financial donation tax-deductible?',
    'faq.a4': 'Yes. Amani Kids Inc. is a registered 501(c)(3) non-profit organization recognized by the IRS. Contributions are tax-deductible to the fullest extent permitted by law. You receive an official tax receipt immediately following your donation for your tax records.',
    'faq.q5': 'How can I get involved as a volunteer or mentor in Charlotte?',
    'faq.a5': 'We actively welcome compassionate volunteers to mentor youth, assist with after-school reading circles, interpret, coordinate event logistics for Bisakana Day, or provide professional expertise. You can fill out our volunteer intake form or email us at info@amanikidsnc.org.',

    // High-Impact Conversion Banner (Applied Pattern)
    'conversion.tag': 'GET IN TOUCH • WE ARE HERE FOR YOU',
    'conversion.title': 'Ready to connect or make a lasting difference?',
    'conversion.lead': 'Whether your family needs immediate bilingual guidance in Charlotte or you want to invest in educational equity for newcomer children, your next step starts here.',
    'conversion.assurance1': '501(c)(3) Registered Public Charity',
    'conversion.assurance2': '100% Free Family Services',
    'conversion.assurance3': 'Bilingual & Culturally Grounded',

    // Volunteer Page
    'vol.eyebrow': 'PATHWAY 02 • SERVE',
    'vol.hero_title1': 'Volunteer with',
    'vol.hero_title2': 'Amani Kids.',
    'vol.hero_lead': 'Share your time, language skills, or mentorship to empower African refugee youth and their families right here in Charlotte.',
    'vol.badge': 'COMMUNITY SERVICE',
    'vol.form_title': 'Volunteer Application',
    'vol.label_name': 'Full Name *',
    'vol.label_email': 'Email Address *',
    'vol.label_phone': 'Phone Number *',
    'vol.label_how': 'How would you like to contribute?',
    'vol.opt_mentor': 'Youth literacy & homework mentor (Sauti Safe Space)',
    'vol.opt_translation': 'Language translation (Swahili, Lingala, French, Kirundi, Luba)',
    'vol.opt_bisakana': 'Bisakana Day sports & festival logistics crew',
    'vol.opt_admin': 'General administration & family transit support',
    'vol.label_exp': 'Tell us briefly about your experience or motivation.',
    'vol.btn_submit': 'Submit Volunteer Application',
    'vol.side_eyebrow': 'PATHWAY 02 • SERVE',
    'vol.side_title': 'Share Your Time, Skills & Presence',
    'vol.side_desc': 'Volunteering at Amani Kids is far more than a simple act of charity: it is about weaving authentic human connections. You will join an intergenerational family of mentors, cultural leaders, and community members, all devoted to youth potential.',
    'vol.side_quote': '“To mentor a newcomer child is to offer them the most precious gift of all: the certainty that they have a rightful place in Charlotte.”',
    'vol.pillar1_title': 'Welcoming Orientation',
    'vol.pillar1_desc': 'Complete a 45-minute cultural humility briefing and background check before mentoring.',
    'vol.pillar2_title': 'Flexible Scheduling',
    'vol.pillar2_desc': 'Choose bi-weekly Sauti Safe Space sessions, weekend sports, or festival logistics.',
    'vol.pillar3_title': 'Lifelong Impact',
    'vol.pillar3_desc': 'Watch a newcomer youth gain reading confidence, friendships, and pride in their identity.',

    // Partnerships Page
    'partner.eyebrow': 'PATHWAY 03 • COLLABORATE',
    'partner.hero_title1': 'Institutional',
    'partner.hero_title2': 'Partnerships.',
    'partner.hero_lead': 'Building systemic alliances with Charlotte-Mecklenburg schools, healthcare providers, corporate leaders, and civic foundations to champion newcomer families.',
    'partner.card_eyebrow': 'PATHWAY 03 • COLLABORATE',
    'partner.card_title': 'Institutional Partnerships',
    'partner.card_desc': 'We actively collaborate with Charlotte-Mecklenburg schools, health clinics, cultural institutions, corporate partners, and civic coalitions to create a seamless continuum of care for newly arrived families.',
    'partner.label_org': 'Organization Name *',
    'partner.label_contact': 'Contact Person *',
    'partner.label_email': 'Email Address *',
    'partner.label_area': 'Partnership Area',
    'partner.opt_education': 'Educational & Tutoring Collaboration',
    'partner.opt_health': 'Healthcare & Wellness Navigation',
    'partner.opt_sponsor': 'Corporate / Event Sponsorship (Bisakana Day)',
    'partner.opt_grant': 'Foundation / Philanthropic Grant',
    'partner.opt_other': 'Other Community Alliance',
    'partner.label_message': 'How would you like to collaborate?',
    'partner.btn_submit': 'Initiate Partnership Discussion',
    'partner.pillars_eyebrow': 'ALLIANCE FRAMEWORK',
    'partner.pillars_title': 'How We Collaborate with Institutions',
    'partner.pillars_lead': 'Amani Kids serves as a trusted, vetted bridge connecting institutions directly to newcomer communities.',
    'partner.collab1_title': 'School Districts',
    'partner.collab1_desc': 'Bilingual parent-teacher bridges, homework labs, and translation for IEP and enrollment procedures.',
    'partner.collab2_title': 'Health & Wellness',
    'partner.collab2_desc': 'Healthcare navigation, immunization records alignment, and culturally sensitive wellness workshops.',
    'partner.collab3_title': 'Corporate Sponsors',
    'partner.collab3_desc': 'Sponsor Bisakana Day festivals, underwrite youth literacy supplies, and engage employee volunteers.',
    'partner.collab4_title': 'Civic Coalitions',
    'partner.collab4_desc': 'Community coalitions fighting youth isolation, housing precarity, and supporting equitable resettlement.'
  },

  fr: {
    'nav.home': 'Accueil',
    'nav.about_us': 'À Propos',
    'nav.about': 'À Propos',
    'nav.about_amani': 'À Propos d\'AMANI',
    'nav.why_exist': 'Pourquoi Nous Existons',
    'nav.mission_vision': 'Mission & Vision',
    'nav.programs': 'Programmes',
    'nav.all_programs': 'Tous les Programmes',
    'nav.literacy_tutoring': 'Soutien Scolaire & Tutorat',
    'nav.case_navigation': 'Accompagnement des Familles',
    'nav.cultural_enrichment': 'Enrichissement Culturel',
    'nav.impact': 'Impact',
    'nav.verified_impact': 'Impact Vérifié',
    'nav.community': 'Communauté',
    'nav.stories': 'Histoires',
    'nav.family_stories': 'Témoignages de Familles',
    'nav.events': 'Événements',
    'nav.events_bisakana': 'Événements & Festivals',
    'nav.album': 'Album',
    'nav.photo_album': 'Album Photos',
    'nav.blog': 'Blog',
    'nav.journal_blog': 'Journal & Blog',
    'nav.team': 'Notre Équipe',
    'nav.faq': 'Q&R',
    'nav.get_involved': "S'impliquer",
    'nav.ways_to_help': 'Comment Nous Aider',
    'nav.donate_item': 'Faire un Don',
    'nav.volunteer_item': 'Devenir Mentor Bénévole',
    'nav.partner_item': 'Devenir Partenaire',
    'nav.get_support': 'Obtenir du Soutien',
    'nav.contact': 'Contact',
    'nav.donate': 'FAIRE UN DON',
    'nav.donate_now': 'FAIRE UN DON',
    'nav.get_family_support': 'DEMANDER DU SOUTIEN',
    'nav.follow_amani': 'Suivre AMANI KIDS',
    'nav.contact_us': 'Contactez-Nous',
    'nav.bottom_home': 'Accueil',
    'nav.bottom_programs': 'Programmes',
    'nav.bottom_album': 'Album',
    'nav.bottom_impact': 'Impact',
    'nav.bottom_donate': 'Donner',

    // Dropdown Descriptions (100% Pure French)
    'nav.desc_about': 'Mission, histoire & ancrage à Charlotte',
    'nav.desc_team': '12 leaders & médiateurs communautaires',
    'nav.desc_impact': 'Transparence, métriques & résultats',
    'nav.desc_all_programs': 'Éducation & accompagnement familial',
    'nav.desc_tutoring': 'Alphabétisation, tutorat & aide aux devoirs',
    'nav.desc_case_nav': 'Inscription scolaire & passerelle santé',
    'nav.desc_youth': 'Arts créatifs & mentorat entre pairs',
    'nav.desc_stories': 'Récits vécus de réinstallation',
    'nav.desc_events': 'Journée Bisakana & festivités',
    'nav.desc_album': 'Moments de partage, de fierté & de joie',
    'nav.desc_blog': 'Actualités, guides & réflexions',
    'nav.desc_ways': 'Aperçu des façons de nous soutenir',
    'nav.desc_donate': 'Don 100% déductible des impôts',
    'nav.desc_volunteer': 'Accompagner les jeunes & les familles',
    'nav.desc_partner': 'Écoles & alliances institutionnelles',

    // Hero (Exact wording from user image)
    'hero.eyebrow': 'ORGANISATION À BUT NON LUCRATIF 501(C)(3) • CHARLOTTE, NC',
    'hero.tagline': 'Apprendre, se connecter et évoluer.',
    'hero.title_line1': 'Autonomiser les enfants.',
    'hero.title_line2': 'Renforcer les familles.',
    'hero.title_part1': 'Autonomiser les enfants. Renforcer les familles.',
    'hero.title_em': 'Bâtir des communautés.',
    'hero.lead': 'AMANI KIDS est une organisation 501(c)(3) accréditée basée à Charlotte, Caroline du Nord. Nous accompagnons les familles réfugiées et immigrées de la diaspora africaine — reliant l’accès linguistique, l’inscription scolaire et les ressources communautaires avec dignité, expérience vécue et bienveillance.',
    'hero.highlight1': 'Services aux familles 100% gratuits',
    'hero.highlight2': '8+ langues parlées (swahili, lingala, français, anglais, kirundi, luba & plus)',
    'hero.highlight3': 'Alliances communautaires dans le comté de Mecklenburg',
    'hero.cta_support': 'DEMANDER DU SOUTIEN',
    'hero.cta_donate': 'SOUTENIR AMANI KIDS',
    'hero.badge_active': 'ACTIF À CHARLOTTE',
    'hero.badge_lived': 'Enraciné dans l’Expérience Vécue',
    'hero.badge_desc': 'Fondé par des immigrants, au service de la dignité',

    // Mission & Vision
    'mission.eyebrow': 'NOTRE BOUSSOLE FONDATRICE',
    'mission.title': 'Guidés par une mission. Portés par la communauté.',
    'mission.pillar': 'PILIER 01 • MISSION',
    'mission.card_title': 'Notre Mission',
    'mission.card_desc': "Connecter les enfants et les familles de la diaspora africaine — réfugiés, immigrés et nouveaux arrivants — aux ressources et aux opportunités, et favoriser leur bien-être pour leur permettre de s’épanouir.",
    'vision.pillar': 'PILIER 02 • COMMUNAUTÉ',
    'vision.card_title': 'Notre Vision',
    'vision.card_desc': "Une communauté à Charlotte où chaque famille de la diaspora africaine est accueillie avec dignité, outillée pour maîtriser les institutions et soutenue pour réaliser son plein potentiel.",

    // Trust strip
    'trust.nonprofit': 'Organisme 501(c)(3)',
    'trust.nonprofit_sub': 'Organisation caritative exonérée d’impôt',
    'trust.charlotte': 'Charlotte, Caroline du Nord',
    'trust.charlotte_sub': '3400 Shamrock Dr., Suite D',
    'trust.diaspora': 'Dédié à la Diaspora Africaine',
    'trust.diaspora_sub': 'Réfugiés, immigrants & nouveaux arrivants',
    'trust.verified': 'Ancrage Communautaire',
    'trust.verified_sub': 'Alliances scolaires & locales vérifiées',

    // Challenge
    'challenge.eyebrow': 'LA RÉALITÉ DE LA RÉINSTALLATION',
    'challenge.title': 'Recommencer à zéro ne devrait pas signifier être seul.',
    'challenge.lead': 'Pour les familles africaines de réfugiés et d’immigrants arrivant aux États-Unis, la réinstallation apporte à la fois de formidables opportunités et d’immenses défis. Sans repère de confiance, l’isolement peut peser lourdement.',
    'challenge.quote': '« Quand une famille arrive dans un nouveau pays, tout est inconnu. Avoir quelqu’un qui parle votre langue et comprend votre parcours transforme absolument tout. »',
    'challenge.card1_title': 'Barrières Linguistiques',
    'challenge.card1_desc': 'S’inscrire à l’école, accéder aux soins et aux services essentiels sans interprète de langue maternelle.',
    'challenge.card2_title': 'Systèmes Méconnus',
    'challenge.card2_desc': 'Déchiffrer les démarches institutionnelles américaines complexes sans repères préalables.',
    'challenge.card3_title': 'Isolement Social',
    'challenge.card3_desc': 'L’éloignement de la famille élargie, des réseaux de solidarité communautaires et des repères familiers.',
    'challenge.card4_title': 'Transition Culturelle',
    'challenge.card4_desc': 'Préserver l’héritage et la fierté africaine pendant que les enfants s’adaptent au système scolaire américain.',

    // How we help / solution
    'solution.eyebrow': 'NOTRE MÉTHODE D’ACCOMPAGNEMENT',
    'solution.title': 'Nous guidons les familles pas à pas.',
    'solution.lead': 'Amani Kids sert de pont culturel de confiance. Nous cheminons aux côtés des familles à travers un parcours structuré en 5 étapes, conçu pour cultiver la dignité, l’autonomie et une paix durable.',
    'solution.step1_title': 'Écouter',
    'solution.step1_desc': 'Nous commençons par écouter l’histoire unique de chaque famille dans sa langue préférée, sans aucun jugement.',
    'solution.step2_title': 'Connecter',
    'solution.step2_desc': 'Nous orientons les familles vers des programmes scolaires, des soins médicaux et des ressources locales adaptées.',
    'solution.step3_title': 'Soutenir',
    'solution.step3_desc': 'Nous offrons un tutorat scolaire direct, du mentorat et un accompagnement bilingue face aux premiers obstacles.',
    'solution.step4_title': 'Responsabiliser',
    'solution.step4_desc': 'Parents et jeunes développent l’assurance nécessaire pour faire valoir leurs droits et guider leur avenir.',
    'solution.step5_title': 'S’épanouir',
    'solution.step5_desc': 'Les enfants réussissent à l’école, les familles s’enracinent et deviennent à leur tour des piliers pour la communauté.',

    // Programs
    'programs.eyebrow': 'PROGRAMMES EMBLÉMATIQUES',
    'programs.title': 'Quatre piliers bâtis pour un impact générationnel.',
    'programs.lead': 'Des festivals culturels chaleureux aux cercles de littératie et d’orientation, nos programmes accompagnent les familles avec authenticité et dignité.',
    'programs.bisakana_tag': 'EXPÉRIENCE SIGNATURE',
    'programs.bisakana_sub': '« Jouer et s’amuser » en lingala',
    'programs.bisakana_desc': 'La Journée Bisakana est notre célébration culturelle phare. À travers jeux joyeux, activités sportives, renforcement de la confiance, mets authentiques et musiques, les enfants vivent une joie pure tandis que les parents découvrent les stands de ressources animés par nos référents bilingues.',
    'programs.explore_bisakana': 'Découvrir la Journée Bisakana',
    'programs.sauti_title': 'SAUTI SAFE SPACE',
    'programs.sauti_sub': '« La Voix » en swahili • Deux fois par mois',
    'programs.sauti_desc': 'La voix des enfants compte. Sauti Safe Space offre un espace chaleureux bimensuel où les jeunes s’expriment à travers la lecture bilingue français-anglais, développant littératie, confiance, créativité, compétences socio-émotionnelles et soutien à l’éducation spécialisée.',
    'programs.connect_title': 'AMANI CONNECT',
    'programs.connect_sub': 'Orientation vers les Ressources & Défense des Droits',
    'programs.connect_desc': 'Un guichet de confiance offrant accompagnement bilingue, inscription scolaire, accès aux soins et partenariats communautaires.',
    'programs.outreach_title': 'SOLIDARITÉ INTERNATIONALE',
    'programs.outreach_sub': 'Liens Transfrontaliers & Espoir',
    'programs.outreach_desc': 'Étendre la mission d’Amani Kids par l’aide d’urgence, le parrainage d’élèves, le soutien aux orphelins et des projets communautaires en Afrique.',
    'common.learn_more': 'En savoir plus',

    // Impact
    'impact.eyebrow': 'RÉSULTATS MESURABLES',
    'impact.title': 'De vraies personnes. De vrais liens. Un réel impact.',
    'impact.lead': 'Nous mesurons notre réussite non par des chiffres artificiels, mais par la stabilité durable, les progrès scolaires et la sérénité des familles.',
    'impact.stat1_label': 'Participants Accompagnés',
    'impact.stat1_desc': 'Enfants et parents réfugiés ou immigrants soutenus par nos programmes et notre orientation directe.',
    'impact.stat2_label': 'Dirigé par la Communauté',
    'impact.stat2_desc': 'Programmes pensés et animés par des leaders ayant vécu personnellement l’expérience de l’immigration.',
    'impact.stat3_label': '8+ Langues Parlées',
    'impact.stat3_desc': 'Soutien multilingue en swahili, lingala, français, kirundi, luba, langues zambiennes et anglais pour un accès sans barrière.',
    'impact.stat4_label': 'Organisme Certifié',
    'impact.stat4_desc': 'Statut caritatif officiel 501(c)(3) opérant avec une rigoureuse transparence financière à Charlotte.',

    // Story
    'story.eyebrow': 'RÉCITS DE FAMILLES',
    'story.title': 'Derrière chaque lien se trouve une histoire humaine.',
    'story.verified_tag': 'TÉMOIGNAGE VÉRIFIÉ',
    'story.quote': '« Amani Kids a été un véritable tournant pour notre famille. Ils ont connecté nos enfants avec un programme parascolaire qui les a énormément aidés pour l’anglais et la socialisation. En tant que parents découvrant un tout nouveau système scolaire, leur accompagnement nous a apporté une vraie paix d’esprit. »',
    'story.author_role': 'Parent & Membre de la Communauté • Charlotte, Caroline du Nord',

    // Founder
    'founder.eyebrow': 'NOS ORIGINES',
    'founder.title': 'Une mission née d’une expérience vécue.',
    'founder.role': 'FONDATRICE ET DIRECTRICE GÉNÉRALE',
    'founder.lead': 'Quand Binti est arrivée aux États-Unis en provenance de la République Démocratique du Congo, elle a fait face au labyrinthe de la réinstallation : le choc linguistique, l’école inconnue et le défi de préserver sa dignité culturelle.',
    'founder.step1_title': 'L’Expérience',
    'founder.step1_desc': 'Arriver à Charlotte comme immigrante et constater combien de familles talentueuses sont freinées par la barrière de la langue.',
    'founder.step2_title': 'La Prise de Conscience',
    'founder.step2_desc': 'Les familles ne manquent ni de volonté ni de courage ; elles manquent de repères culturels bienveillants parlant leur langue.',
    'founder.step3_title': 'L’Action',
    'founder.step3_desc': 'Fonder Amani Kids en tant qu’organisme 501(c)(3) pour que nul enfant ou parent ne traverse seul le chemin de l’intégration.',
    'founder.cta': 'Lire le Parcours de la Fondatrice',

    // Values
    'values.eyebrow': 'NOTRE BOUSSOLE',
    'values.title': 'Les principes qui ancrent chacune de nos actions.',
    'values.lead': 'Cliquez sur chaque valeur pour découvrir comment notre héritage africain éclaire notre travail quotidien auprès des enfants et familles.',

    // Community Photos
    'mosaic.eyebrow': 'VIE COMMUNAUTAIRE',
    'mosaic.title': 'Voici Amani Kids.',
    'mosaic.lead': 'Des moments de joie, d’apprentissage, de mentorat et de fraternité à Charlotte. Des visages authentiques et des victoires partagées.',

    // Alliances
    'alliances.eyebrow': 'COLLABORATIONS',
    'alliances.title': 'La confiance d’une communauté. Bâtie sur des liens durables.',
    'alliances.subtitle': 'Nous collaborons avec des établissements scolaires, des initiatives citoyennes et des associations culturelles de Charlotte-Mecklenburg pour un accompagnement concerté.',

    // Three Doors
    'doors.eyebrow': 'AGIR AVEC NOUS',
    'doors.title': 'Trois portes d’entrée dans notre mission.',
    'doors.lead': 'Que vous souhaitiez faire un don financier, consacrer de votre temps comme mentor ou bâtir un partenariat, vous avez toute votre place ici.',
    'doors.door1_num': 'VOIE 01 • DONATEUR',
    'doors.door1_title': 'FAIRE UN DON',
    'doors.door1_desc': 'Votre don déductible des impôts finance directement le soutien scolaire bilingue, les festivals Bisakana, le transport et les besoins urgents des familles.',
    'doors.door1_cta': 'DONNER À AMANI KIDS',
    'doors.door2_num': 'VOIE 02 • BÉNÉVOLE',
    'doors.door2_title': 'DEVENIR BÉNÉVOLE',
    'doors.door2_desc': 'Partagez votre temps comme mentor scolaire, interprète bénévole, animateur culturel ou entraîneur sportif. Les relations humaines changent la vie.',
    'doors.door2_cta': 'REJOINDRE L’ÉQUIPE BÉNÉVOLE',
    'doors.door3_num': 'VOIE 03 • PARTENAIRE',
    'doors.door3_title': 'DEVENIR PARTENAIRE',
    'doors.door3_desc': 'Collaborez avec Amani Kids en tant qu’école, centre médical, fondation caritative ou entreprise solidaire engagée pour l’équité.',
    'doors.door3_cta': 'INITIER UN PARTENARIAT',

    // Final CTA
    'cta.eyebrow': 'BESOIN D’ACCOMPAGNEMENT ?',
    'cta.title': 'Chaque enfant mérite de se sentir en sécurité et valorisé.',
    'cta.lead': 'Si votre famille vient d’arriver à Charlotte ou cherche des repères pour l’école et les services de santé, nous sommes là pour vous guider dans votre langue.',
    'cta.btn_support': 'DEMANDER UN SOUTIEN FAMILIAL',
    'cta.btn_contact': 'CONTACTER NOTRE ÉQUIPE',

    // Footer
    'footer.desc': 'Connecter les familles africaines réfugiées, immigrantes et nouvellement arrivées à des ressources fiables, un sentiment d’appartenance et un soutien éducatif pour s’épanouir dans leur nouveau foyer.',
    'footer.status': 'Système Opérationnel • Organisme 501(c)(3)',
    'footer.org': 'Organisation',
    'footer.action': 'Agir avec nous',
    'footer.office': 'Bureau de Charlotte',
    'footer.direct_phone': 'Téléphone Direct :',
    'footer.email': 'Courriel :',
    'footer.rights': 'AMANI KIDS INC. Tous droits réservés. Organisme caritatif 501(c)(3).',
    'footer.privacy': 'Confidentialité & Dignité',
    'footer.transparency': 'Transparence Financière',
    'footer.contact': 'Contact',

    // Team section
    'team.eyebrow': 'DIRIGEANTS & ÉQUIPE COMMUNAUTAIRE',
    'team.title': 'Rencontrez l’Équipe Dévouée d’Amani Kids.',
    'team.lead': 'Guidée par l’expérience vécue de la réinstallation, la maîtrise multilingue et un profond attachement culturel, notre équipe accompagne les familles africaines à chaque étape.',
    'team.cta_about': 'Découvrir Toute Notre Équipe & le Conseil d’Administration',
        // Team (Exact 12 members from official records)
    'team.eyebrow': 'DIRIGEANTS & ÉQUIPE COMMUNAUTAIRE',
    'team.title': 'Rencontrez les Cœurs d\'Amani Kids.',
    'team.lead': 'Guidés par l\'expérience vécue de l\'exil, le multilinguisme et un profond attachement culturel, nos 12 membres d\'équipe marchent aux côtés des familles de la diaspora africaine à chaque étape de leur réinstallation à Charlotte.',
    'team.filter_all': 'Toute l\'Équipe (12)',
    'team.filter_exec': 'Direction & Gouvernance',
    'team.filter_prog': 'Responsables de Programmes',
    'team.filter_comm': 'Éducation & Communauté',
    'team.count_badge': '12 Dirigeants, Éducateurs & Référents Dévoués',
    'team.languages_label': 'Langues parlées :',

    'team.binti_role': 'Fondatrice & Directrice Exécutive',
    'team.binti_sub': 'Leadership Visionnaire & Plaidoyer de la Diaspora',
    'team.binti_bio': 'Originaire de la République Démocratique du Congo, Binti a transformé les épreuves de la barrière de la langue et de la réinstallation en un phare d\'autonomisation et de réussite scolaire pour les familles arrivantes en Caroline du Nord.',

    'team.divine_role': 'Secrétaire Générale & Coordinatrice des Opérations',
    'team.divine_sub': 'Gouvernance & Administration Institutionnelle',
    'team.divine_bio': 'Supervise les opérations de l\'organisation, les communications du conseil et les dossiers des familles, veillant à ce que chaque arrivant bénéficie d\'un accueil rapide et bienveillant.',

    'team.cynthia_role': 'Travailleuse Sociale, Cheffe des Opérations & Resp. Soutien Familial',
    'team.cynthia_sub': 'Réinstallation Familiale & Accompagnement Holistique',
    'team.cynthia_bio': 'Apporte son expertise en travail social pour évaluer les besoins prioritaires, guider l\'accès aux aides publiques et offrir un accompagnement familial respectueux des traumatismes d\'exil.',

    'team.samy_role': 'Directeur des Finances',
    'team.samy_sub': 'Gestion Budgétaire & Conformité Fiscale 501(c)(3)',
    'team.samy_bio': 'Garantit une gestion financière rigoureuse, la comptabilité des subventions et une transparence totale pour que chaque don finance directement les programmes éducatifs.',

    'team.roger_role': 'Conseiller Juridique',
    'team.roger_sub': 'Conformité Légale & Droits Civiques',
    'team.roger_bio': 'Conseille l\'organisation sur la gouvernance légale, les contrats et les droits des immigrants, aidant les familles à s\'orienter dans les démarches juridiques américaines.',

    'team.hadley_role': 'Responsable Relations Publiques & Partenariats',
    'team.hadley_sub': 'Alliances Communautaires & Rayonnement Institutionnel',
    'team.hadley_bio': 'Développe des liens solides avec les institutions civiques, les universités locales et les fondations partenaires pour étendre le rayonnement et les ressources d\'Amani Kids.',

    'team.kianyi_role': 'Coordinatrice des Bénévoles',
    'team.kianyi_sub': 'Mobilisation Communautaire & Mentorat Jeunesse',
    'team.kianyi_bio': 'Recrute, forme et anime l\'équipe de bénévoles et de mentors bilingues, reliant les habitants engagés de Charlotte aux ateliers d\'aide aux devoirs et d\'échange culturel.',

    'team.patricia_role': 'Coordinatrice de l\'Éducation Familiale',
    'team.patricia_sub': 'Plaidoyer Scolaire & Intégration Pédagogique',
    'team.patricia_bio': 'Assure la liaison directe avec les écoles, les enseignants et les spécialistes ESL afin de garantir aux enfants de la diaspora un suivi pédagogique adapté et juste.',

    'team.ruth_role': 'Responsable du Programme Bisakana Day',
    'team.ruth_sub': 'Arts Culturels & Célébrations de la Diaspora',
    'team.ruth_bio': 'Dirige le festival culturel annuel Bisakana ainsi que les ateliers de musique, danse et contes traditionnels, cultivant la fierté de l\'héritage africain chez les jeunes.',

    'team.priscilla_role': 'Responsable du Programme Amani Connect',
    'team.priscilla_sub': 'Orientation vers les Ressources & Accueil d\'Urgence',
    'team.priscilla_bio': 'Oriente les familles vers les cliniques de santé, le logement, les banques alimentaires et les services municipaux, rompant l\'isolement grâce à un suivi personnalisé.',

    'team.esther_role': 'Responsable du Programme Sauti Safe Space',
    'team.esther_sub': 'Santé Mentale des Jeunes, Alphabétisation & Cercles de Parole',
    'team.esther_bio': 'Originaire de Zambie, Esther dirige le programme Sauti Safe Space, créant un cadre sécurisant où les jeunes réfugiés s\'épanouissent, surmontent les traumatismes et s\'expriment en swahili, langues zambiennes et anglais.',

    'team.yao_role': 'Éducateur & Responsable des Données Administratives',
    'team.yao_sub': 'Tutorat Académique & Suivi des Données d\'Impact',
    'team.yao_bio': 'Assure le tutorat bilingue en sciences et lecture tout en pilotant les indicateurs d\'impact pour mesurer les progrès scolaires et l\'autonomie des familles.',

    // Partner Ribbon
    'partner_ribbon.title': 'Partenaires institutionnels & alliances communautaires à Charlotte',

    // Split Layout Programs (Applied Pattern)
    'programs.bisakana_pill': 'EXPÉRIENCE CULTURELLE SIGNATURE',
    'programs.bisakana_headline': 'Où l’héritage culturel allume la joie.',
    'programs.bisakana_badge': '+180 Familles Accueillies',
    'programs.bisakana_check1': 'Célébration polyglotte en swahili, lingala, français et anglais',
    'programs.bisakana_check2': 'Danses traditionnelles, musiques et mets authentiques panafricains',
    'programs.bisakana_check3': 'Jeux joyeux, activités sportives, confiance et tables de ressources bilingues',
    
    'programs.sauti_pill': 'LITTÉRATIE BILINGUE & EXPRESSION',
    'programs.sauti_headline': 'Là où la voix des enfants compte vraiment.',
    'programs.sauti_badge': 'Deux Fois par Mois',
    'programs.sauti_check1': 'Lecture bilingue français-anglais, littératie et prise de parole valorisée',
    'programs.sauti_check2': 'Ateliers de créativité, confiance en soi et compétences socio-émotionnelles',
    'programs.sauti_check3': 'Soutien en éducation spécialisée et mentorat attentionné personnalisé',
    
    'programs.connect_pill': 'ACCOMPAGNEMENT & ORIENTATION FAMILIALE',
    'programs.connect_headline': 'Aucune famille ne chemine seule face aux institutions.',
    'programs.connect_badge': 'Accompagnement 100% Gratuit',
    'programs.connect_check1': 'Inscription scolaire bilingue et démarches d’aménagements scolaires',
    'programs.connect_check2': 'Accès aux soins médicaux, démarches d’assurance et orientation santé',
    'programs.connect_check3': 'Médiation interculturelle, interprétariat et accompagnement personnalisé',
    
    'programs.outreach_pill': 'SOLIDARITÉ INTERNATIONALE & HUMANITAIRE',
    'programs.outreach_headline': 'Relier les racines et agir concrètement par-delà les frontières.',
    'programs.outreach_badge': 'Solidarité Éducative & Secours',
    'programs.outreach_check1': 'Aide d’urgence et secours immédiat aux enfants et familles vulnérables',
    'programs.outreach_check2': 'Parrainage d’un élève : scolarité, manuels et fournitures complètes',
    'programs.outreach_check3': 'Soutien aux orphelins et projets de développement communautaire',

    // Quick-fire FAQ (Applied Pattern)
    'faq.eyebrow': 'QUESTIONS FRÉQUENTES',
    'faq.title': 'Des réponses claires sur notre mission.',
    'faq.lead': 'Tout ce que vous devez savoir sur nos services, nos langues, la déductibilité fiscale de vos dons et les opportunités bénévoles.',
    'faq.q1': 'Comment Amani Kids accompagne-t-il les familles réfugiées et immigrées nouvellement arrivées ?',
    'faq.a1': 'Nous offrons un accompagnement global et respectueux de chaque culture : inscription scolaire bilingue, orientation vers les services de santé, mentorat et grands événements d’intégration comme le Festival Bisakana. Chaque famille est accueillie par des référents qui parlent sa langue maternelle et partagent l’expérience de la réinstallation.',
    'faq.q2': 'Les services et programmes d’Amani Kids sont-ils entièrement gratuits pour les familles ?',
    'faq.a2': 'Oui, absolument 100% gratuits. Aucune famille nouvellement arrivée ne débourse un seul centime pour les démarches scolaires, le soutien pédagogique, les activités du festival ou l’orientation sociale. Amani Kids est un organisme caritatif 501(c)(3) financé par la générosité des donateurs, des subventions et des partenaires communautaires.',
    'faq.q3': 'Dans quelles langues votre équipe intervient-elle ?',
    'faq.a3': 'Notre équipe s’exprime couramment dans plus de 8 langues et dialectes, notamment le swahili, le lingala, le français, l’anglais, le kirundi, le luba et les langues zambiennes. Nous veillons à ce que les parents puissent poser leurs questions et appréhender les documents scolaires et administratifs dans la langue où ils se sentent le plus à l’aise.',
    'faq.q4': 'Mon don financier est-il déductible des impôts ?',
    'faq.a4': 'Oui. Amani Kids Inc. est une organisation à but non lucratif reconnue d’utilité publique sous le statut fiscal fédéral 501(c)(3). Tous les dons sont déductibles d’impôts conformément aux lois fiscales en vigueur. Un reçu officiel vous est immédiatement délivré.',
    'faq.q5': 'Comment puis-je m’engager comme bénévole ou mentor à Charlotte ?',
    'faq.a5': 'Nous accueillons avec grand plaisir des bénévoles engagés pour accompagner les jeunes, animer des cercles de lecture, assurer des missions d’interprétariat ou participer à l’organisation de nos événements communautaires. Remplissez simplement notre formulaire bénévole ou écrivez-nous à info@amanikidsnc.org.',

    // High-Impact Conversion Banner (Applied Pattern)
    'conversion.tag': 'CONTACT DIRECT • À VOS CÔTÉS',
    'conversion.title': 'Prêt à nous rejoindre ou à faire une différence durable ?',
    'conversion.lead': 'Que votre famille recherche un accompagnement bilingue bienveillant à Charlotte ou que vous souhaitiez soutenir l’égalité des chances éducatives, votre démarche commence ici.',
    'conversion.assurance1': 'Organisme caritatif 501(c)(3) certifié',
    'conversion.assurance2': 'Services familiaux 100% gratuits',
    'conversion.assurance3': 'Accompagnement multilingue et humain',

    // Volunteer Page (FR)
    'vol.eyebrow': 'VOIE 02 • SERVIR',
    'vol.hero_title1': 'Bénévolat chez',
    'vol.hero_title2': 'Amani Kids.',
    'vol.hero_lead': 'Partagez votre temps, vos compétences linguistiques ou votre mentorat pour soutenir les jeunes réfugiés africains et leurs familles à Charlotte.',
    'vol.badge': 'SERVICE COMMUNAUTAIRE',
    'vol.form_title': 'Demande de bénévolat',
    'vol.label_name': 'Nom et prénom *',
    'vol.label_email': 'Adresse courriel *',
    'vol.label_phone': 'Numéro de téléphone *',
    'vol.label_how': 'Comment souhaitez-vous contribuer ?',
    'vol.opt_mentor': 'Mentor en alphabétisation et devoirs pour les jeunes (Espace sûr Sauti)',
    'vol.opt_translation': 'Traduction de langues (swahili, lingala, français, kirundi, luba)',
    'vol.opt_bisakana': 'Équipe logistique du festival et des sports de Bisakana',
    'vol.opt_admin': 'Administration générale et transport Hôtellerie',
    'vol.label_exp': 'Parlez-nous brièvement de votre expérience ou de votre motivation.',
    'vol.btn_submit': 'Déposer une candidature de bénévolat',
    'vol.side_eyebrow': 'CHEMIN 02 • SERVIR',
    'vol.side_title': 'Partagez votre temps, vos compétences et votre présence',
    'vol.side_desc': 'Faire du bénévolat chez Amani Kids, c\'est bien plus qu\'un simple acte de charité : c\'est tisser des liens humains authentiques. Vous rejoindrez une famille intergénérationnelle de mentors, de responsables culturels et de membres de la communauté, tous dévoués au potentiel des jeunes.',
    'vol.side_quote': '« Être le mentor d\'un enfant nouvellement arrivé, c\'est lui offrir le plus précieux des cadeaux : la certitude qu\'il a sa place à Charlotte. »',
    'vol.pillar1_title': 'Orientation Chaleureuse',
    'vol.pillar1_desc': 'Séance d\'initiation à l\'humilité culturelle et vérification des antécédents avant l\'engagement.',
    'vol.pillar2_title': 'Horaires Flexibles',
    'vol.pillar2_desc': 'Choisissez les ateliers bimensuels Sauti, les sports du week-end ou la logistique événementielle.',
    'vol.pillar3_title': 'Impact Durable',
    'vol.pillar3_desc': 'Voyez un jeune acquérir l\'assurance en lecture, nouer des amitiés et être fier de son identité.',

    // Partnerships Page (FR)
    'partner.eyebrow': 'VOIE 03 • COLLABORER',
    'partner.hero_title1': 'Partenariats',
    'partner.hero_title2': 'Institutionnels.',
    'partner.hero_lead': 'Bâtir des alliances systémiques avec les écoles de Charlotte-Mecklenburg, les professionnels de santé, les entreprises et les fondations.',
    'partner.card_eyebrow': 'VOIE 03 • COLLABORER',
    'partner.card_title': 'Partenariats institutionnels',
    'partner.card_desc': 'Nous collaborons activement avec les écoles de Charlotte-Mecklenburg, les cliniques de soins de santé, les institutions culturelles, les entreprises partenaires et les coalitions civiques afin de créer un continuum de soins sans faille pour les familles nouvellement arrivées.',
    'partner.label_org': 'Nom de l\'organisation *',
    'partner.label_contact': 'Personne de contact *',
    'partner.label_email': 'Adresse courriel *',
    'partner.label_area': 'Zone de partenariat',
    'partner.opt_education': 'Collaboration en matière d\'éducation et de tutorat',
    'partner.opt_health': 'Accès aux soins de santé et bien-être',
    'partner.opt_sponsor': 'Parrainage d\'entreprise / événement (Journée Bisakana)',
    'partner.opt_grant': 'Subvention philanthropique ou de fondation',
    'partner.opt_other': 'Autre alliance civique et communautaire',
    'partner.label_message': 'Comment souhaiteriez-vous collaborer ?',
    'partner.btn_submit': 'Entamer une discussion sur le partenariat',
    'partner.pillars_eyebrow': 'CADRE D\'ALLIANCE',
    'partner.pillars_title': 'Comment Nous Collaborons avec les Institutions',
    'partner.pillars_lead': 'Amani Kids agit comme un pont de confiance reliant directement les institutions aux communautés nouvellement arrivées.',
    'partner.collab1_title': 'Districts Scolaires',
    'partner.collab1_desc': 'Ponts bilingues parents-enseignants, aide aux devoirs et traduction des démarches scolaires.',
    'partner.collab2_title': 'Santé & Bien-être',
    'partner.collab2_desc': 'Orientation médicale, mise à niveau vaccinale et ateliers bien-être adaptés.',
    'partner.collab3_title': 'Entreprises Partenaires',
    'partner.collab3_desc': 'Parrainez le festival Bisakana, financez des manuels bilingues et mobilisez vos équipes.',
    'partner.collab4_title': 'Coalitions Civiques',
    'partner.collab4_desc': 'Coalitions citoyennes luttant contre l\'isolement des jeunes et pour une réinstallation digne.'
  }
};

class AmaniLanguageManager {
  constructor() {
    this.currentLang = this.detectInitialLanguage();
    this.init();
  }

  detectInitialLanguage() {
    // 1. Explicit URL parameter support: ?lang=en or ?lang=fr
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (urlLang === 'en' || urlLang === 'fr') {
      sessionStorage.setItem('amani_lang_choice', urlLang);
      localStorage.setItem('amani_lang_choice', urlLang);
      return urlLang;
    }

    // 2. Explicit session selection (if user explicitly toggled during this browsing session)
    const sessionChoice = sessionStorage.getItem('amani_lang_choice');
    if (sessionChoice === 'fr') {
      return 'fr';
    }
    if (sessionChoice === 'en') {
      return 'en';
    }

    // 3. Explicit local storage choice
    const localChoice = localStorage.getItem('amani_lang_choice');
    if (localChoice === 'fr') {
      return 'fr';
    }
    if (localChoice === 'en') {
      return 'en';
    }

    // Clear legacy inconsistent keys
    try {
      localStorage.removeItem('amani_lang');
      localStorage.removeItem('amani_explicit_choice');
    } catch (e) {}

    // 4. Default language: strictly ENGLISH (Primary language of the organization)
    return 'en';
  }

  init() {
    this.applyLanguage(this.currentLang, false);
    this.setupEventListeners();
  }

  setLanguage(lang) {
    if (lang !== 'en' && lang !== 'fr') return;
    this.currentLang = lang;
    sessionStorage.setItem('amani_lang_choice', lang);
    localStorage.setItem('amani_lang_choice', lang);
    this.applyLanguage(lang, true);

    // Dispatch global event for any components that need to re-render
    window.dispatchEvent(new CustomEvent('amani:languageChanged', { detail: { lang } }));
  }

  toggleLanguage() {
    const nextLang = this.currentLang === 'en' ? 'fr' : 'en';
    this.setLanguage(nextLang);
  }

  applyLanguage(lang, animate = true) {
    document.documentElement.lang = lang;

    // Update active state on all language selector buttons (header, drawer, floating pill)
    const langButtons = document.querySelectorAll('.lang-btn, .floating-lang-btn');
    langButtons.forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === lang) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });

    const dict = AMANI_I18N[lang];
    if (!dict) return;

    // 1. Translate all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        if (animate) {
          el.style.transition = 'opacity 0.08s ease';
          el.style.opacity = '0.75';
          setTimeout(() => {
            el.innerHTML = dict[key];
            el.style.opacity = '1';
          }, 60);
        } else {
          el.innerHTML = dict[key];
        }
      }
    });

    // 2. Translate input placeholders
    const inputs = document.querySelectorAll('[data-i18n-placeholder]');
    inputs.forEach(input => {
      const key = input.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        input.placeholder = dict[key];
      }
    });

    // 3. Translate untagged nodes via phrase dictionary
    this.translateUntaggedNodes(lang);

    console.log(`[Amani I18n] Language active: ${lang.toUpperCase()} (Primary default: EN)`);
  }

  translateUntaggedNodes(lang) {
    const isFr = lang === 'fr';
    const phraseMap = [
      // Nav & Actions
      ['Get Support', 'Obtenir du Soutien'],
      ['GET SUPPORT', 'DEMANDER DU SOUTIEN'],
      ['SUPPORT AMANI KIDS', 'SOUTENIR AMANI KIDS'],
      ['DONATE NOW', 'FAIRE UN DON'],
      ['GET FAMILY SUPPORT', 'DEMANDER DU SOUTIEN'],
      ['Meet Our Full Leadership & Board Governance', 'Découvrir Toute Notre Équipe & le Conseil'],
      ['Explore Bisakana Day', 'Découvrir le Festival Bisakana'],
      ['Explore Amani Connect', 'Découvrir Amani Connect'],
      ['Explore Sauti Safe Space', 'Découvrir l\'Espace Sauti'],
      ['Explore International Outreach', 'Découvrir l\'Action Internationale'],
      ['Read Full Founder Story', 'Lire le Parcours de la Fondatrice'],
      ['REQUEST FAMILY SUPPORT', 'DEMANDER UN SOUTIEN FAMILIAL'],
      ['CONTACT OUR TEAM', 'CONTACTER NOTRE ÉQUIPE'],
      ['VOLUNTEER WITH US', 'DEVENIR BÉNÉVOLE'],
      ['PARTNER WITH US', 'INITIER UN PARTENARIAT'],
      ['DONATE TO AMANI KIDS', 'FAIRE UN DON À AMANI KIDS'],
      ['Contact Us', 'Contactez-Nous'],

      // Dropdown Titles & Sub-elements
      ['About AMANI', 'À Propos d\'AMANI'],
      ['Meet Our Team', 'Notre Équipe'],
      ['Verified Impact', 'Impact Vérifié'],
      ['All Programs', 'Tous les Programmes'],
      ['After-School Tutoring', 'Soutien Scolaire & Tutorat'],
      ['Family Case Navigation', 'Accompagnement des Familles'],
      ['Youth Cultural Enrichment', 'Enrichissement Culturel'],
      ['Family Stories', 'Témoignages de Familles'],
      ['Events & Festivals', 'Événements & Festivals'],
      ['Community Album', 'Album Photos'],
      ['Journal & Blog', 'Journal & Blog'],
      ['Ways to Support', 'Comment Nous Aider'],
      ['Donate Financially', 'Faire un Don'],
      ['Volunteer as Mentor', 'Devenir Mentor Bénévole'],
      ['Partner with Us', 'Devenir Partenaire'],
      ['Follow AMANI KIDS', 'Suivre AMANI KIDS'],

      // Dropdown Descriptions
      ['Mission, history & Charlotte roots', 'Mission, histoire & ancrage à Charlotte'],
      ['12 leadership & community advocates', '12 leaders & médiateurs communautaires'],
      ['Accountability, metrics & outcomes', 'Transparence, métriques & résultats'],
      ['Education & family navigation', 'Éducation & accompagnement familial'],
      ['Literacy, tutoring & homework lab', 'Alphabétisation, tutorat & aide aux devoirs'],
      ['School enrollment & healthcare bridge', 'Inscription scolaire & passerelle santé'],
      ['Creative arts & peer mentorship', 'Arts créatifs & mentorat entre pairs'],
      ['Firsthand resettlement journeys', 'Récits vécus de réinstallation'],
      ['Bisakana Day & celebrations', 'Journée Bisakana & festivités'],
      ['Moments of connection, pride & joy', 'Moments de partage, de fierté & de joie'],
      ['News, updates & family guides', 'Actualités, guides & réflexions'],
      ['Overview of community pathways', 'Aperçu des façons de nous soutenir'],
      ['100% tax-deductible contribution', 'Don 100% déductible des impôts'],
      ['Tutor youth & guide families', 'Accompagner les jeunes & les familles'],
      ['Schools & organizational alliances', 'Écoles & alliances institutionnelles'],

      // Challenges
      ['Language Barriers', 'Barrières Linguistiques'],
      ['Unfamiliar Systems', 'Systèmes Inconnus'],
      ['Social Isolation', 'Isolement Social'],
      ['Cultural Transition', 'Transition Culturelle'],
      // Process
      ['Listen', 'Écouter'],
      ['Connect', 'Connecter'],
      ['Support', 'Accompagner'],
      ['Empower', 'Autonomiser'],
      ['Thrive', 'S\'épanouir'],
      // Headings & Labels
      ['THE REALITY OF RESETTLEMENT', 'LA RÉALITÉ DE LA RÉINSTALLATION'],
      ['HOW WE HELP', 'COMMENT NOUS AIDONS'],
      ['FLAGSHIP INITIATIVES', 'PROGRAMMES PHARES'],
      ['MEASURABLE OUTCOMES', 'RÉSULTATS MESURABLES'],
      ['FAMILY PERSPECTIVES', 'TÉMOIGNAGES DE FAMILLES'],
      ['OUR ORIGIN', 'NOTRE ORIGINE'],
      ['LEADERSHIP & COMMUNITY TEAM', 'DIRIGEANTS & ÉQUIPE COMMUNAUTAIRE'],
      ['OUR COMPASS', 'NOTRE BOUSSOLE'],
      ['COMMUNITY LIFE', 'VIE COMMUNAUTAIRE'],
      ['COLLABORATION', 'COLLABORATIONS'],
      ['TAKE ACTION', 'AGIR AVEC NOUS'],
      ['FREQUENTLY ASKED QUESTIONS', 'QUESTIONS FRÉQUENTES'],
      ['Participants Supported', 'Bénéficiaires Accompagnés'],
      ['Community-Led', 'Dirigé par la Communauté'],
      ['Primary Languages', 'Langues Principales'],
      ['Verified Nonprofit', 'Organisme Vérifié']
    ];

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while ((node = walker.nextNode())) {
      const parent = node.parentElement;
      if (!parent || parent.closest('.notranslate') || parent.hasAttribute('data-i18n') || parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE' || parent.closest('.floating-lang-pill') || parent.closest('.lang-selector')) {
        continue;
      }
      const text = node.nodeValue.trim();
      if (!text) continue;

      phraseMap.forEach(([enText, frText]) => {
        if (isFr) {
          if (node.nodeValue.includes(enText)) {
            node.nodeValue = node.nodeValue.replace(enText, frText);
          }
        } else {
          if (node.nodeValue.includes(frText)) {
            node.nodeValue = node.nodeValue.replace(frText, enText);
          }
        }
      });
    }
  }

  setupEventListeners() {
    document.addEventListener('click', (e) => {
      // 1. Direct click on a language button (navbar, mobile drawer, floating pill)
      const langBtn = e.target.closest('.lang-btn, .floating-lang-btn');
      if (langBtn) {
        e.preventDefault();
        e.stopPropagation();
        const selectedLang = langBtn.getAttribute('data-lang');
        if (selectedLang) {
          this.setLanguage(selectedLang);
        }
        return;
      }

      // 2. Click on the container wrapper toggles between languages
      const selectorBox = e.target.closest('.lang-selector');
      if (selectorBox && !e.target.closest('.lang-btn')) {
        e.preventDefault();
        this.toggleLanguage();
      }
    });
  }
}

// Immediate robust instantiation
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.amaniI18n = new AmaniLanguageManager();
  });
} else {
  window.amaniI18n = new AmaniLanguageManager();
}
