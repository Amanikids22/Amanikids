/**
 * AMANI KIDS — INTERNATIONALIZATION & TRANSLATION SYSTEM (Vanilla JS)
 * Strict 100% Language Consistency (EN / FR), SEO Metadata Localization,
 * Browser Translation Compatibility, and Persistent Language State.
 */

const AMANI_I18N = {
  en: {
    // Navigation & Global Header / Drawer / Bottom Dock
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
    'nav.partner_item': 'Institutional Partnerships',
    'nav.get_support': 'Get Support',
    'nav.contact': 'Contact',
    'nav.donate': 'DONATE',
    'nav.donate_now': 'DONATE NOW',
    'nav.get_family_support': 'GET FAMILY SUPPORT',
    'nav.follow_amani': 'Follow AMANI KIDS',
    'nav.contact_us': 'Contact Us',
    'nav.drawer_nonprofit': '501(c)(3) Nonprofit',
    'nav.bottom_home': 'Home',
    'nav.bottom_programs': 'Programs',
    'nav.bottom_album': 'Album',
    'nav.bottom_impact': 'Impact',
    'nav.bottom_donate': 'Donate',

    // Dropdown Descriptions
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

    // Homepage Hero
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

    // Homepage Mission & Vision
    'mission.eyebrow': 'OUR FOUNDATIONAL COMPASS',
    'mission.title': 'Guided by Purpose. Driven by Community.',
    'mission.pillar': 'PILLAR 01 • PURPOSE',
    'mission.card_title': 'Our Mission',
    'mission.card_desc': 'Connect children and families of the African Diaspora, who are refugees, immigrants, and newcomers, to resources, opportunities and foster their wellbeing to thrive.',
    'mission.footer_tag': '01 • PURPOSE & EMPOWERMENT',
    'vision.pillar': 'PILLAR 02 • COMMUNITY',
    'vision.card_title': 'Our Vision',
    'vision.card_desc': 'A Charlotte community where every African diaspora family is welcomed with dignity, equipped to navigate essential systems, and empowered to reach their fullest potential.',
    'vision.footer_tag': '02 • COMMUNITY & BELONGING',

    // Trust Strip
    'trust.nonprofit': '501(c)(3) Nonprofit',
    'trust.nonprofit_sub': 'Tax-exempt charitable organization',
    'trust.charlotte': 'Charlotte, North Carolina',
    'trust.charlotte_sub': '3400 Shamrock Dr., Suite D',
    'trust.diaspora': 'African Diaspora Focus',
    'trust.diaspora_sub': 'Refugees, immigrants & newcomers',
    'trust.verified': 'Community Verified',
    'trust.verified_sub': 'Deep local roots & school alliances',

    // Challenge Section
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

    // Solution / 5-Step Journey
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

    // Homepage Programs
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

    // Homepage Impact
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

    // Homepage Story
    'story.eyebrow': 'FAMILY PERSPECTIVES',
    'story.title': 'Behind every connection is a story.',
    'story.verified_tag': 'VERIFIED TESTIMONIAL',
    'story.quote': '"Amani Kids was a game-changer for our family. They connected our children with an after-school program that helped them dramatically with English and socialization. As parents navigating a completely new school system, having their guidance gave us peace of mind."',
    'story.author_role': 'Parent & Community Member • Charlotte, NC',

    // Homepage Founder
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

    // Values & Mosaic & Alliances & Doors
    'values.eyebrow': 'OUR COMPASS',
    'values.title': 'The principles that anchor every action.',
    'values.lead': 'Click on each core value to explore how our African cultural heritage informs our day-to-day work with children and families.',
    'mosaic.eyebrow': 'COMMUNITY LIFE',
    'mosaic.title': 'This is Amani Kids.',
    'mosaic.lead': 'Moments of connection, learning, mentorship, and celebration across Charlotte. Authentic faces, real friendships, and shared triumphs.',
    'alliances.eyebrow': 'COLLABORATION',
    'alliances.title': 'Trusted by community. Built on relationships.',
    'alliances.subtitle': 'We collaborate with respected educational institutions, grassroots initiatives, and cultural organizations across the Charlotte-Mecklenburg region to ensure coordinated care for newcomer families.',
    'partner_ribbon.title': 'Trusted Institutional & Community Alliances in Charlotte',

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

    'cta.eyebrow': 'LOOKING FOR SUPPORT?',
    'cta.title': 'Every child deserves to feel safe, valued, and hopeful.',
    'cta.lead': 'If your family has recently arrived in Charlotte or is navigating school and community resources, we are here to walk with you in your native language.',
    'cta.btn_support': 'REQUEST FAMILY SUPPORT',
    'cta.btn_contact': 'CONTACT OUR TEAM',

    // FAQ
    'faq.eyebrow': 'FREQUENTLY ASKED QUESTIONS',
    'faq.title': 'Quick-fire answers about our work.',
    'faq.lead': 'Everything you need to know about our services, languages, tax-deductible donations, and community volunteer pathways.',
    'faq.q1': 'How does Amani Kids support newly arrived refugee and immigrant families?',
    'faq.a1': 'We provide comprehensive, culturally grounded navigation: bilingual school enrollment with Schools, orientation to healthcare and social services, daily after-school homework tutoring, and community inclusion events like Bisakana Day. Every family is greeted by team members who speak their mother tongue and understand the resettlement process from personal experience.',
    'faq.q2': 'Are Amani Kids services completely free of charge for families?',
    'faq.a2': 'Yes, 100% free. No newcomer family ever pays for school enrollment advocacy, after-school literacy tutoring, cultural events, or family case navigation. Amani Kids is an independent 501(c)(3) public charity funded through compassionate individual donors, philanthropic grants, and community partners.',
    'faq.q3': 'What languages does your bilingual team speak?',
    'faq.a3': 'Our team natively speaks 8+ languages and regional dialects including Swahili, Lingala, French, English, Kirundi, Luba, and Zambian languages. We ensure that parents can ask sensitive questions and understand legal or educational documents in the language they feel most confident and respected in.',
    'faq.q4': 'Is my financial donation tax-deductible?',
    'faq.a4': 'Yes. Amani Kids Inc. is a registered 501(c)(3) non-profit organization recognized by the IRS. Contributions are tax-deductible to the fullest extent permitted by law. You receive an official tax receipt immediately following your donation for your tax records.',
    'faq.q5': 'How can I get involved as a volunteer or mentor in Charlotte?',
    'faq.a5': 'We actively welcome compassionate volunteers to mentor youth, assist with after-school reading circles, interpret, coordinate event logistics for Bisakana Day, or provide professional expertise. You can fill out our volunteer intake form or email us at amanikids@amanikidsnc.org.',

    // Conversion & Community Action Banners
    'conversion.tag': 'GET IN TOUCH • WE ARE HERE FOR YOU',
    'conversion.title': 'Ready to connect or make a lasting difference?',
    'conversion.lead': 'Whether your family needs immediate bilingual guidance in Charlotte or you want to invest in educational equity for newcomer children, your next step starts here.',
    'conversion.assurance1': '501(c)(3) Registered Public Charity',
    'conversion.assurance2': '100% Free Family Services',
    'conversion.assurance3': 'Bilingual & Culturally Grounded',

    'action.pill': 'COMMUNITY ACTION • CHARLOTTE NC',
    'action.title': 'Every child deserves dignity, belonging, and a community that walks beside them.',
    'action.lead': 'Join our network of passionate mentors, bilingual volunteers, and community partners making a tangible daily difference for African refugee, immigrant, and newcomer families in Charlotte, NC.',
    'action.btn_volunteer': 'VOLUNTEER WITH US',
    'action.btn_support': 'GET FAMILY SUPPORT',

    // Global Footer
    'footer.desc': 'Connecting African refugee, immigrant, and newcomer families with trusted resources, cultural belonging, and educational support to help them thrive in Charlotte, NC.',
    'footer.status': '501(c)(3) Nonprofit • Serving Charlotte Families',
    'footer.social_heading': 'Follow Our Journey',
    'footer.hq_title': 'Headquarters & Contacts',
    'footer.address_label': 'Our Address',
    'footer.phone_label': 'Direct Phone',
    'footer.email_label': 'Official Email',
    'footer.rights_short': 'All rights reserved. 501(c)(3) Nonprofit.',
    'footer.link_privacy': 'Privacy & Dignity',
    'footer.link_donate': 'Donate',
    'footer.link_volunteer': 'Volunteer',
    'footer.link_partnerships': 'Partnerships',
    'footer.link_contact': 'Contact Us',
    'footer.org': 'Organization',
    'footer.action': 'Get Involved',
    'footer.office': 'Charlotte Office',
    'footer.direct_phone': 'Direct Phone:',
    'footer.email': 'Email:',
    'footer.rights': 'AMANI KIDS INC. All rights reserved. Registered 501(c)(3) public charity.',
    'footer.privacy': 'Privacy & Family Dignity',
    'footer.transparency': 'Financial Transparency',
    'footer.contact': 'Contact',

    // Team Page & Team Section
    'team.eyebrow': 'LEADERSHIP & COMMUNITY TEAM',
    'team.title': 'Meet the Hearts Behind Amani Kids.',
    'team.lead': 'Guided by lived refugee experience, multilingual fluency, and deep cultural love, our 12 team members walk beside African diaspora families at every step of their resettlement journey in Charlotte.',
    'team.cta_about': 'Meet Our Full Leadership & Board Governance',
    'team.filter_all': 'All Team (12)',
    'team.filter_exec': 'Executive & Governance',
    'team.filter_prog': 'Program Managers',
    'team.filter_comm': 'Education & Community',
    'team.count_badge': '12 Dedicated Leaders & Navigators',
    'team.languages_label': 'Languages:',
    'team.langs_sw_ln_fr_en': 'Swahili • Lingala • French • English',
    'team.langs_fr_sw_en': 'French • Swahili • English',
    'team.langs_sw_fr_en': 'Swahili • French • English',
    'team.langs_sw_lu_fr_en': 'Swahili • Luba • French • English',
    'team.langs_lu_ln_fr_en': 'Luba • Lingala • French • English',
    'team.langs_en': 'English',
    'team.langs_ln_fr_reg_en': 'Lingala • French • Regional Dialects • English',
    'team.langs_ln_fr_en': 'Lingala • French • English',
    'team.langs_sw_zm_en': 'Swahili • Zambian Languages • English',
    'team.langs_fr_ewe_en': 'French • Ewe • English',

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

    // About Page
    'about.hero_eyebrow': 'WHO WE ARE',
    'about.hero_title': 'Rooted in <span class="serif-italic text-accent">Peace.</span>',
    'about.hero_lead': 'Amani Kids is a 501(c)(3) nonprofit built from lived experience to ensure that African refugee, immigrant, and newcomer families arriving in Charlotte find understanding, belonging, and the tools to flourish.',
    'about.mission_eyebrow': 'OUR MISSION',
    'about.mission_title': 'Why We Exist',
    'about.mission_desc': 'Connect children and families of the African Diaspora, who are refugees, immigrants, and newcomers, to resources, opportunities and foster their wellbeing to thrive.',
    'about.vision_eyebrow': 'OUR VISION',
    'about.vision_title': 'The Future We Build',
    'about.vision_desc': 'A welcoming community where newcomer African families are never isolated by language or culture; where children celebrate their dual heritage with pride; and where every immigrant parent has equal access to opportunity, education, and peace.',
    'about.founder_eyebrow': "FOUNDER'S STORY",
    'about.founder_title': '"I lived this journey. That is why Amani Kids exists."',
    'about.founder_p1': 'Binti Muzuri Amisi founded Amani Kids not out of an academic exercise in social work, but out of the raw reality of arriving in the United States from the Democratic Republic of the Congo.',
    'about.founder_p2': 'Like thousands of newcomers, she found that the transition was filled with unexpected friction: forms written only in English, school enrollment systems with no Swahili or Lingala translations, medical appointments where vital questions went unasked, and an aching absence of cultural community.',
    'about.founder_p3': 'She observed brilliant African children struggling in classrooms simply because language bridges were absent, and hard-working parents feeling disempowered. She resolved to create the organization she wished had existed when she arrived: a trusted, compassionate bridge that honors the dignity and cultural richness of the African diaspora.',
    'about.founder_quote': '"Amani means Peace in Swahili. When you take away the fear of the unknown, families can finally exhale, heal, and begin to flourish."',
    'about.values_eyebrow': 'GUIDING ETHICS',
    'about.values_title': 'The Eight Anchors of Amani Kids',
    'about.values_lead': 'Our principles are woven into every program, volunteer training, and family conversation.',
    'about.val1_title': 'Peace',
    'about.val1_desc': 'Cultivating emotional safety, restful environments, and peaceful transitions for families who have lived through displacement.',
    'about.val2_title': 'Love',
    'about.val2_desc': 'Approaching every child and caregiver with deep kindness, patience, and unwavering personal respect.',
    'about.val3_title': 'Joy',
    'about.val3_desc': 'Celebrating through dance, play, food, and laughter as powerful vehicles for healing, resilience, and connection.',
    'about.val4_title': 'Respect',
    'about.val4_desc': 'Honoring the traditions, wisdom, resilience, and unique cultural backgrounds of African newcomer families.',
    'about.val5_title': 'Diversity',
    'about.val5_desc': 'Celebrating the multi-ethnic, multilingual richness of Africa without flattening distinct cultures into a monolith.',
    'about.val6_title': 'Inclusion',
    'about.val6_desc': 'Ensuring an open table where all newcomers have a seat, a voice, and an advocate by their side.',
    'about.val7_title': 'Equity',
    'about.val7_desc': 'Striving to ensure every child and family has fair access to educational opportunities, resources, and community representation.',
    'about.val8_title': 'Collaboration',
    'about.val8_desc': 'We believe stronger communities are built by working together with families, partners, and volunteers.',
    'about.gov_eyebrow': 'GOVERNANCE & ACCOUNTABILITY',
    'about.gov_title': 'Institutional Integrity You Can Trust',
    'about.gov_lead': 'Amani Kids operates as a fully incorporated 501(c)(3) tax-exempt public charity headquartered in Charlotte, North Carolina. We are committed to transparency, responsible fiscal stewardship, and measurable community outcomes.',
    'about.gov_btn_support': 'Support Our Mission',
    'about.gov_btn_contact': 'Connect With Leadership',

    // Programs Page
    'prog.hero_eyebrow': 'HOLISTIC CARE',
    'prog.hero_title': 'Programs Designed for <span class="serif-italic text-accent">Belonging & Growth.</span>',
    'prog.hero_lead': 'Our initiatives address the whole ecosystem of newcomer family life: cultural joy, academic acceleration, systemic advocacy, and generational empowerment.',
    'prog.p1_quote': '"Bisakana means \'Play and Have Fun\' in Lingala. Joy is not a luxury; it is the root of healing."',
    'prog.p1_eyebrow': 'PROGRAM 01 • SIGNATURE CULTURAL EXPERIENCE',
    'prog.p1_title': 'Bisakana Day',
    'prog.p1_lead': 'A vibrant community festival celebrating African heritage, play, and intergenerational joy while serving as a warm entry point to essential family resources.',
    'prog.p1_b1_title': 'Who It Serves',
    'prog.p1_b1_desc': 'African refugee and newcomer children, parents, elders, and the wider Charlotte community.',
    'prog.p1_b2_title': 'What Happens',
    'prog.p1_b2_desc': 'Joyful games, sports and active play, trust-building activities, authentic cultural cuisine and music, and community resource tables staffed by bilingual navigators.',
    'prog.p1_b3_title': 'Why It Matters',
    'prog.p1_b3_desc': 'It dismantles the isolation of resettlement. In a celebratory festival atmosphere, families build lasting bonds, honor their roots, and effortlessly connect with schools, healthcare, and community partners.',
    'prog.p1_dates_heading': 'Upcoming Festival Dates (2027)',
    'prog.p1_save_dates': 'SAVE THE DATES',
    'prog.p1_spring_title': 'Spring Bisakana Day',
    'prog.p1_spring_time': 'April 11, 2027 • 3:00 PM – 8:00 PM',
    'prog.p1_spring_loc': 'East Charlotte Community Park',
    'prog.p1_summer_title': 'Summer Bisakana Day',
    'prog.p1_summer_time': 'August 1, 2027 • 3:00 PM – 8:00 PM',
    'prog.p1_winter_title': 'Winter Bisakana Day',
    'prog.p1_winter_time': 'December 19, 2027 • 3:00 PM – 6:00 PM',
    'prog.p1_btn_rsvp': 'RSVP for Bisakana Day',
    'prog.p1_btn_vol': 'Volunteer at Bisakana',
    'prog.p2_quote': '"Sauti means \'Voice\' in Swahili. When children feel safe and heard, their confidence transforms everything."',
    'prog.p2_eyebrow': 'PROGRAM 02 • BILINGUAL LITERACY & EXPRESSION',
    'prog.p2_title': 'Sauti Safe Space',
    'prog.p2_schedule': 'SCHEDULE: TWICE A MONTH',
    'prog.p2_lead': "Children's voices matter. Sauti Safe Space provides an uplifting community where youth express themselves freely through bilingual reading in French and English, building literacy, confidence, creativity, and essential social-emotional skills, supported by dedicated special education assistance.",
    'prog.p2_b1_title': 'Bilingual Reading (French & English)',
    'prog.p2_b1_desc': 'Nurturing youth literacy and expressive confidence through rich bilingual reading circles, storybooks, and active comprehension dialogues.',
    'prog.p2_b2_title': 'Confidence, Creativity & Social-Emotional Skills',
    'prog.p2_b2_desc': 'Storytelling circles, creative art, theater, and peer connection activities that foster self-worth, emotional resilience, and cultural pride.',
    'prog.p2_b3_title': 'Special Education Support & Caring Mentorship',
    'prog.p2_b3_desc': 'Patient, individual academic guidance and specialized learning accommodations ensuring every unique child receives the care they need.',
    'prog.p2_btn_enroll': 'Enroll a Student',
    'prog.p2_btn_mentor': 'Become a Youth Mentor',
    'prog.p3_eyebrow': 'PROGRAM 03 • RESOURCE NAVIGATION & ADVOCACY',
    'prog.p3_title': 'Amani Connect',
    'prog.p3_lead': 'A compassionate, multilingual bridge connecting families with critical social, medical, legal, and educational resources in Charlotte.',
    'prog.p3_b1_title': 'Language Support',
    'prog.p3_b1_desc': 'Intake and guidance offered in Swahili, Lingala, French, Kirundi, Luba, and English by trusted cultural navigators.',
    'prog.p3_b2_title': 'System Navigation',
    'prog.p3_b2_desc': 'Direct accompaniment for schools registration, immunization records, doctor appointments, and utility support.',
    'prog.p3_b3_title': 'Family Dignity & Self-Advocacy',
    'prog.p3_b3_desc': 'We never treat families as passive recipients of charity, but as active partners building their self-advocacy capacity and independence.',
    'prog.p3_btn_support': 'Request Amani Connect Support',
    'prog.p4_eyebrow': 'PROGRAM 04 • GLOBAL SOLIDARITY & HUMANITARIAN AID',
    'prog.p4_title': 'International Outreach',
    'prog.p4_lead': 'Extending our commitment to hope and dignity through emergency assistance, educational sponsorships, and grassroots community projects connecting diaspora youth in the United States with communities in Africa.',
    'prog.p4_b1_title': 'Emergency Assistance',
    'prog.p4_b1_desc': 'Providing rapid humanitarian relief and emergency assistance to vulnerable children and families facing acute crises and urgent hardship.',
    'prog.p4_b2_title': 'Sponsor a Student',
    'prog.p4_b2_desc': 'Direct sponsorships funding school tuition, uniforms, textbooks, and essential learning materials to keep vulnerable children in school.',
    'prog.p4_b3_title': 'Aid for Orphans & Community Projects',
    'prog.p4_b3_desc': 'Compassionate aid for orphans and collaborative support for grassroots community projects, clean water, hygiene, and local empowerment.',
    'prog.p4_b4_title': 'Educational Resources & Cultural Memory',
    'prog.p4_b4_desc': 'Coordinating learning materials while youth in Charlotte maintain deep appreciation and unbroken bonds with their ancestral roots.',
    'prog.p4_btn_partner': 'Partner on Outreach',
    'prog.p4_btn_donate': 'Support Outreach Projects',
    'prog.p4_quote': '"Cross-border solidarity: connecting roots and sharing hope with vulnerable children and schools in Africa."',
    'prog.access_eyebrow': 'HOW TO ACCESS PROGRAMS',
    'prog.access_title': 'Free, Welcoming, and Confidential',
    'prog.access_lead': 'All Amani Kids core programs are provided completely free of charge to eligible refugee and newcomer families. No complex paperwork or bureaucracy required.',
    'prog.access_btn_req': 'Request Program Access',
    'prog.access_btn_call': 'Call Us: (704) 866-2930',

    // Impact Page
    'imp.hero_eyebrow': 'ACCOUNTABILITY & EVIDENCE',
    'imp.hero_title': 'Real Impact, <span class="serif-italic text-accent">Measured in Human Dignity.</span>',
    'imp.hero_lead': 'We hold ourselves to rigorous standards of community transparency. Every metric represents a family welcomed, a child supported, and a barrier overcome.',
    'imp.stat1_label': 'Families & Youth Reached',
    'imp.stat1_desc': 'Direct beneficiaries of after-school academic help, cultural festivals, and family counseling.',
    'imp.stat2_label': 'Lived Experience Leadership',
    'imp.stat2_desc': 'Rooted in authentic immigrant leadership from the Democratic Republic of the Congo and the diaspora.',
    'imp.stat3_label': 'Language Pathways',
    'imp.stat3_desc': 'Bridging language divides with native Swahili, Lingala, French, Kirundi, Luba, Zambian languages, and English support.',
    'imp.stat4_label': 'Charity Accreditation',
    'imp.stat4_desc': 'Incorporated nonprofit operating with complete public governance and transparency.',
    'imp.pillars_eyebrow': 'DOMAINS OF TRANSFORMATION',
    'imp.pillars_title': 'Where We See Lasting Change',
    'imp.pillars_lead': 'Our programs track outcomes across three vital dimensions of family life.',
    'imp.p1_title': '1. Academic & Language Acceleration',
    'imp.p1_desc': 'Newcomer children face steep linguistic hurdles. By partnering with organizations like Ourbridge for Kids, we connect students to immersive after-school English literacy, reading comprehension circles, and homework coaching.',
    'imp.p1_outcome': 'Outcome: Children achieve grade-level reading readiness and renewed classroom confidence.',
    'imp.p2_title': '2. Social Cohesion & Emotional Health',
    'imp.p2_desc': 'Displacement disrupts identity. Through Bisakana Day and Sauti Safe Space, children express grief, joy, and hope through art and music, while parents build mutual support circles with fellow African families in Charlotte.',
    'imp.p2_outcome': 'Outcome: 0% isolated families; deep belonging, restored cultural pride, and community safety nets.',
    'imp.p3_title': '3. Systemic Self-Advocacy',
    'imp.p3_desc': 'Rather than creating dependency, Amani Connect educates parents on American public school portals, healthcare rights, and legal documentation so they become independent champions for their households.',
    'imp.p3_outcome': 'Outcome: Parents comfortably attend parent-teacher conferences and navigate civic systems.',
    'imp.stew_eyebrow': 'STEWARDSHIP',
    'imp.stew_title': 'Our Commitment to Donors & Supporters',
    'imp.stew_lead': 'Following the highest standards of nonprofit governance modeled by leading institutions like Allegro Foundation, Amani Kids ensures every dollar received is steward-led and directly applied to programming, family translation, youth literacy, and community gatherings.',
    'imp.stew_li1': '<strong>100% Tax-Deductible:</strong> All financial gifts qualify for full charitable deduction under IRS 501(c)(3) tax exemption.',
    'imp.stew_li2': '<strong>Transparent Reporting:</strong> Public Form 990 filings and annual programmatic reviews available for institutional partners.',
    'imp.stew_li3': '<strong>Community Direct Impact:</strong> Contributions directly purchase books, art supplies, event permits, and multilingual navigational support.',
    'imp.stew_btn_donate': 'Invest in Our Impact',
    'imp.stew_btn_report': 'Request Annual Report',

            // Stories Page — "Our Impact: Real Families, Real Stories"
    'st.hero_eyebrow': 'OUR IMPACT • REAL STORIES',
    'st.hero_title': 'Our Impact: <span class="serif-italic text-accent">Real Families, Real Stories.</span>',
    'st.hero_sub': 'Every family has a story. Every child deserves an opportunity to thrive.',
    'st.hero_p1': 'At Amani Kids, we believe that no child should be left behind because of language barriers, limited resources, disabilities, or unfamiliar systems. Every day, immigrant and refugee families face challenges that can affect their children\'s education, well-being, and opportunities.',
    'st.hero_p2': 'Sometimes, making a difference starts with something simple: helping a parent understand a school letter, finding an after-school program, connecting a family with food and school supplies, or helping a child access the education they deserve.',
    'st.hero_p3': 'Our work goes beyond providing resources. We listen, build relationships, connect families to opportunities, and walk alongside them as they navigate unfamiliar systems.',
    'st.hero_p4': 'Here are five stories that reflect the heart of our work and the difference Amani Kids is making in the lives of children and families.',

    // Story 01
    'st.s1_num': 'STORY 01',
    'st.s1_pillar': 'EDUCATION & LITERACY',
    'st.s1_title': 'Breaking Language Barriers, Opening Doors to Learning',
    'st.s1_intro': 'When language becomes a barrier, children can miss opportunities to succeed.',
    'st.s1_p1': 'A family reached out to Amani Kids because their children were struggling in school. As non-English speakers, the children faced difficulties understanding and communicating in English, making it challenging to fully participate in their educational experience.',
    'st.s1_p2': 'Amani Kids listened to the family\'s concerns and helped connect the children to an after-school program in Charlotte dedicated to supporting immigrant children.',
    'st.s1_p3': 'Through this connection, the children gained access to additional learning support and an environment where they could continue developing their language skills and building confidence.',
    'st.s1_impact_label': 'THE IMPACT',
    'st.s1_impact_text': 'By connecting families with the right educational resources, we help children overcome barriers and create pathways toward academic success.',

    // Story 02
    'st.s2_num': 'STORY 02',
    'st.s2_pillar': 'FAMILY & SCHOOL ENGAGEMENT',
    'st.s2_title': 'Making Sure No Child Is Left Out',
    'st.s2_intro': 'Sometimes, one translated letter can make a world of difference.',
    'st.s2_p1': 'A family with five children was having difficulty keeping up with school communications because the parents did not speak English. Important announcements, school notices, and permission forms were arriving home, but the parents could not understand what they meant or what actions were required.',
    'st.s2_p2': 'During a home visit, Amani Kids took the time to sit with the family and review the children\'s school backpacks. We found several letters and notices that required parental attention.',
    'st.s2_p3': 'We translated the information, explained the school announcements, and walked the parents through completing and signing a field trip permission form.',
    'st.s2_p4': 'What might have seemed like a small task became an important opportunity to make sure their children could participate in school activities alongside their classmates.',
    'st.s2_impact_label': 'THE IMPACT',
    'st.s2_impact_text': 'By helping parents understand school communications, we strengthen family-school connections and help ensure that language barriers do not prevent children from participating in important educational experiences.',

    // Story 03
    'st.s3_num': 'STORY 03',
    'st.s3_pillar': 'EVERYDAY SUPPORT & SPECIAL NEEDS ADVOCACY',
    'st.s3_title': 'Supporting Families Through Everyday Challenges',
    'st.s3_intro': 'Sometimes, families need someone who can help them find the next step.',
    'st.s3_p1': 'Starting a new life in an unfamiliar community can be overwhelming, especially for parents trying to meet their children\'s basic needs while navigating new systems.',
    'st.s3_p2': 'Amani Kids has supported families facing difficult circumstances, including a newcomer mother who did not have enough food or school supplies for her children.',
    'st.s3_p3': 'Rather than allowing the family to navigate these challenges alone, we listened to her needs and connected her with community resources that could provide assistance.',
    'st.s3_p4': 'In another situation, a father believed that his young son, who is non-speaking and has behavioral support needs, could not attend school. The family did not know what educational opportunities or support might be available for their child.',
    'st.s3_p5': 'Amani Kids helped the family navigate the situation and connect with appropriate support. Today, that little boy is attending school.',
    'st.s3_p6': 'These experiences remind us that families sometimes need more than information. They need someone who will listen, advocate, and help them find a way forward.',
    'st.s3_impact_label': 'THE IMPACT',
    'st.s3_impact_text': 'From connecting families to food and school supplies to helping children with disabilities access education, we work to ensure that every child has the opportunity to learn, grow, and thrive.',

    // Story 04
    'st.s4_num': 'STORY 04',
    'st.s4_pillar': 'YOUTH RESILIENCE & COLLEGE ACCESS',
    'st.s4_title': 'Salama: From Language Barriers to College Dreams',
    'st.s4_intro': 'Her journey reminds us that a difficult beginning does not have to determine a child\'s future.',
    'st.s4_p1': 'When Salama arrived in Charlotte as a young refugee, she faced the challenge of starting over in a new country without speaking English.',
    'st.s4_p2': 'She enrolled in a Charlotte-Mecklenburg Schools high school but struggled academically while trying to learn a new language and adjust to an unfamiliar educational system.',
    'st.s4_p3': 'As graduation approached, she was at risk of not completing high school. Without the right support and encouragement, it would have been easy for her to give up on her education.',
    'st.s4_p4': 'We were especially concerned about the barriers that can cause some refugee girls to leave school early and face pressure to take on adult responsibilities before having the opportunity to pursue their dreams.',
    'st.s4_p5': 'Amani Kids stood alongside Salama, offering encouragement, guidance, and support as she worked toward her educational goals.',
    'st.s4_p6': 'Salama did not give up.',
    'st.s4_p7': '<strong>Today, she is a high school graduate and a student at Central Piedmont Community College (CPCC).</strong>',
    'st.s4_p8': 'Her journey is a powerful reminder that when young refugee women receive encouragement, guidance, and opportunities, they can overcome barriers and build the futures they dream of.',
    'st.s4_impact_label': 'THE IMPACT',
    'st.s4_impact_text': 'We believe every refugee girl deserves the opportunity to complete her education, discover her potential, and pursue her dreams. Salama\'s story represents the importance of investing in young women and reminding them that their future is full of possibilities.',

    // Story 05
    'st.s5_num': 'STORY 05',
    'st.s5_pillar': 'HEALTHCARE NAVIGATION & REBUILDING LIFE',
    'st.s5_title': 'From Surviving to Rebuilding Her Life',
    'st.s5_intro': 'Sometimes, changing a life begins with showing up when the need is real.',
    'st.s5_p1': 'Shortly after arriving in the United States, Judith experienced a devastating car accident. She did not speak English and had very little support or understanding of how to navigate the healthcare system.',
    'st.s5_p2': 'She spent several months in the hospital recovering from her injuries.',
    'st.s5_p3': 'When we met Judith, she had returned home in a wheelchair. She was physically recovering, emotionally traumatized, and facing more than $60,000 in medical bills without knowing where to turn for assistance.',
    'st.s5_p4': 'Her situation was overwhelming. She needed more than encouragement; she needed someone to help her navigate unfamiliar systems and connect her with the support necessary to rebuild her life.',
    'st.s5_p5': 'Amani Kids stepped in and helped connect Judith with community resources. Through these connections, she was able to access mental health support, physical therapy, and assistance with her medical bills.',
    'st.s5_p6': 'Her recovery took time, strength, and determination.',
    'st.s5_p7': '<strong>Today, Judith is walking again, has returned to school, is married, and is the proud mother of a baby girl.</strong>',
    'st.s5_p8': 'Her journey is a powerful example of resilience, hope, and what can happen when a person receives the right support during one of the most difficult moments of their life.',
    'st.s5_impact_label': 'THE IMPACT',
    'st.s5_impact_text': 'Judith\'s story reminds us that newcomers should not have to face life\'s unexpected challenges alone. With compassion, community connections, and access to resources, families can begin to rebuild their lives and look toward a brighter future.',

    // Closing Organizational Message
    'st.close_eyebrow': 'OUR COMMITMENT',
    'st.close_title': 'More Than Support. A Community That Cares.',
    'st.close_p1': 'These five stories represent just a few of the families Amani Kids has had the privilege of supporting.',
    'st.close_p2': 'Our work is not always about providing a big program or organizing a major event. Sometimes, it is about showing up at a family\'s home, translating a school document, making a phone call, finding resources, or helping a parent understand that their child has a right to an education.',
    'st.close_p3': 'Amani Kids was born from our founder\'s own immigrant experience. After navigating language barriers and unfamiliar systems herself, she understood how overwhelming it can be to start over in a new country. That experience inspired her to create an organization where families feel supported, welcomed, and never alone.',
    'st.close_p4': 'At Amani Kids, we are building a community where children are supported, parents are empowered, and every family feels seen, heard, and valued.',
    'st.close_quote': 'Because every child matters. Every family deserves support. And no family should have to navigate the journey alone.',
    'st.close_final': 'Together, we are building bridges, creating opportunities, and changing lives—one family at a time.',

    // Call to Action
    'st.cta_eyebrow': 'JOIN OUR EFFORT',
    'st.cta_title': 'Be Part of a Community That Makes a Difference.',
    'st.cta_desc': 'Every child deserves the opportunity to thrive. Every family deserves to feel supported. Discover how Amani Kids is building stronger communities and helping immigrant and refugee families move forward.',
    'st.cta_btn_programs': 'Explore Our Programs',
    'st.cta_btn_contact': 'Get in Touch',
    'st.cta_btn_donate': 'Support Our Mission',


    // Events Page
    'ev.hero_eyebrow': 'COMMUNITY CALENDAR',
    'ev.hero_title': 'Where Culture & <span class="serif-italic text-accent">Connection Converge.</span>',
    'ev.hero_lead': 'Our gatherings are joyful, welcoming, and open to all. Come celebrate African heritage, connect with friends, and discover community resources.',
    'ev.feat_badge': 'FEATURED UPCOMING GATHERING',
    'ev.feat_title': 'Annual Bisakana Day Cultural Festival',
    'ev.feat_sub': '"Play, Dance, Taste, Belong" • Lingala: Bisakana',
    'ev.spring_label': 'SPRING BISAKANA DAY',
    'ev.summer_label': 'SUMMER BISAKANA DAY',
    'ev.winter_label': 'WINTER BISAKANA DAY',
    'ev.feat_desc': 'Join hundreds of neighbors and diaspora families for our signature cultural celebrations. Experience joyful games, sports and active play, trust-building activities, authentic Central and East African food tastings, traditional drumming and dancing, and community resource tables staffed by dedicated bilingual navigators.',
    'ev.btn_rsvp': 'RSVP (Free Admission)',
    'ev.btn_vol': 'Volunteer at Festival',
    'ev.w_eyebrow': 'WORKSHOPS & CIRCLES',
    'ev.w_title': 'Upcoming Community Gatherings',
    'ev.w_lead': 'Intimate circles designed for learning, family support, and mutual empowerment.',
    'ev.w1_date': 'OCTOBER 24',
    'ev.w1_time': '5:30 PM – 7:30 PM',
    'ev.w1_title': 'Sauti Youth Creative Arts & Poetry',
    'ev.w1_desc': 'An evening where newcomer middle and high school students present creative writing, poetry, and storytelling celebrating identity and hope.',
    'ev.w1_loc': 'Amani Kids Center, Suite D',
    'ev.w_register': 'Register',
    'ev.w2_date': 'NOVEMBER 07',
    'ev.w2_time': '10:00 AM – 1:00 PM',
    'ev.w2_title': 'Parent School Navigation Circle',
    'ev.w2_desc': 'Multilingual workshop in Swahili, French, English, and any African language in need, guiding parents on how to read report cards, communicate with teachers, and request student accommodations.',
    'ev.w2_loc': 'Virtual or In-Person',
    'ev.w3_date': 'NOVEMBER 21',
    'ev.w3_time': '6:00 PM – 7:30 PM',
    'ev.w3_title': 'Mentor & Volunteer Orientation',
    'ev.w3_desc': 'Learn best practices in culturally respectful mentorship, trauma-informed guidance, and academic coaching for African newcomer youth.',
    'ev.w3_loc': 'Virtual & In-Person',
    'ev.rsvp_eyebrow': 'JOIN US',
    'ev.rsvp_title': 'Event RSVP & Community Registration',
    'ev.rsvp_lead': 'All Amani Kids events are completely free to attend. Please let us know you are coming so we can prepare adequate food and materials!',
    'ev.label_name': 'Full Name *',
    'ev.ph_name': 'Your name',
    'ev.label_email': 'Email Address *',
    'ev.label_phone': 'Phone Number',
    'ev.label_event': 'Select Event *',
    'ev.opt_spring': 'Spring Bisakana Day (April 11, 2027 • 3 PM - 8 PM)',
    'ev.opt_summer': 'Summer Bisakana Day (August 1, 2027 • 3 PM - 8 PM)',
    'ev.opt_winter': 'Winter Bisakana Day (December 19, 2027 • 3 PM - 6 PM)',
    'ev.opt_sauti': 'Sauti Safe Space (Twice a Month)',
    'ev.opt_parent': 'Parent School Navigation Circle (Nov 07)',
    'ev.opt_mentor': 'Mentor & Volunteer Orientation (Nov 21)',
    'ev.label_attendees': 'Number of Family Members Attending',
    'ev.btn_submit': 'Confirm My RSVP',

    // Album Page
    'alb.hero_eyebrow': 'PHOTO ARCHIVE & MEMORIES',
    'alb.hero_title': 'Our Living <span class="serif-italic text-accent">Community Album.</span>',
    'alb.hero_lead': 'Authentic moments of joy, education, play, and solidarity captured across our Charlotte programs, Bisakana festivals, and family mentorship circles.',
    'alb.filter_all': 'All Moments',
    'alb.filter_bisakana': 'Bisakana Day',
    'alb.filter_sauti': 'Sauti Safe Space',
    'alb.filter_family': 'Family & Community',
    'alb.filter_sports': 'Sports & Play',
    'alb.c1_tag': 'Bisakana Day',
    'alb.c1_title': 'Joy & Outdoor Play in Community',
    'alb.c2_tag': 'Bisakana Day',
    'alb.c2_title': 'Welcome to Bisakana Day',
    'alb.c3_tag': 'Bisakana Day',
    'alb.c3_title': 'Community Celebration & Trophy Pride',
    'alb.c4_tag': 'Bisakana Day',
    'alb.c4_title': 'Face Painting & Childhood Joy',
    'alb.c5_tag': 'Bisakana Day',
    'alb.c5_title': 'Community Gathering & Fellowship',
    'alb.c6_tag': 'Sauti Safe Space',
    'alb.c6_title': 'Literacy Circles & Storytelling Hour',
    'alb.c7_tag': 'Mentorship & Community',
    'alb.c7_title': 'Intergenerational Guidance & Trust',
    'alb.c8_tag': 'Global Solidarity',
    'alb.c8_title': 'International Outreach & Solidarity',
    'alb.c9_tag': 'Amani Connect',
    'alb.c9_title': 'Bilingual Navigation & Family Solidarity',
    'alb.contrib_eyebrow': 'CONTRIBUTE TO OUR ARCHIVE',
    'alb.contrib_title': 'Do you have community photos to share?',
    'alb.contrib_lead': 'If you attended Bisakana Day, a Sauti youth session, or a community circle, send your high-resolution photos to our media archive team.',
    'alb.contrib_btn': 'Submit Community Photos',

    // Blog Page
    'blog.hero_eyebrow': 'JOURNAL & EDITORIAL VOICES',
    'blog.hero_title': 'The Amani <span class="serif-italic text-accent">Journal.</span>',
    'blog.hero_lead': 'Essays on resettlement, practical family guides for Charlotte schools, cultural reflections, and inspiring updates from our programs.',
    'blog.feat_badge': 'FEATURED REFLECTION',
    'blog.feat_date': 'OCTOBER 2026',
    'blog.feat_read': '6 MIN READ',
    'blog.feat_title': "Celebrating 180+ Families: The Generational Journey of Charlotte's African Diaspora",
    'blog.feat_desc': 'When newcomer families step off airplanes into North Carolina, they carry centuries of oral history, resilience, and boundless hope. But they also confront systems that can render them invisible. How community-rooted mentorship is rewriting the immigrant story in East Charlotte.',
    'blog.feat_author': 'By Binti Muzuri Amisi',
    'blog.feat_role': 'Founder & Executive Director',
    'blog.feat_btn': 'Read Full Essay',
    'blog.c1_tag': 'CULTURAL PSYCHOLOGY',
    'blog.c1_read_time': '4 MIN READ',
    'blog.c1_title': 'How Bisakana Day Restores Joy to Resettlement',
    'blog.c1_desc': "Why uninhibited play, Congolese rumba, and sharing ancestral food isn't just entertainment, but a profound form of collective trauma healing.",
    'blog.read_btn': 'Read Article',
    'blog.c2_tag': 'FAMILY GUIDES',
    'blog.c2_read_time': '5 MIN READ',
    'blog.c2_title': 'Navigating the First Report Card in CMS Schools',
    'blog.c2_desc': 'A clear, step-by-step bilingual guide for newcomer parents to decipher North Carolina grading scales, attendance rules, and teacher conferences.',
    'blog.c3_tag': 'EDUCATION & LITERACY',
    'blog.c3_read_time': '3 MIN READ',
    'blog.c3_title': 'The Power of Sauti: Why Storytelling Builds Strong Readers',
    'blog.c3_desc': 'How encouraging African newcomer youth to write and speak in their authentic voices accelerates English language acquisition.',
    'blog.c4_tag': 'GLOBAL SOLIDARITY',
    'blog.c4_read_time': '5 MIN READ',
    'blog.c4_title': 'Building Bridges Beyond Borders: International Outreach',
    'blog.c4_desc': 'Connecting diaspora youth in the Carolinas with grassroots educational projects in Central Africa to cultivate lifelong cultural solidarity.',
    'blog.c5_tag': 'LEADERSHIP INSIGHT',
    'blog.c5_read_time': '6 MIN READ',
    'blog.c5_title': 'From DRC to Charlotte: Turning Struggle into Service',
    'blog.c5_desc': 'An intimate conversation with Binti Muzuri Amisi on navigating immigration friction and why dignity must anchor all nonprofit assistance.',
    'blog.c6_tag': 'HERITAGE & DIASPORA',
    'blog.c6_read_time': '4 MIN READ',
    'blog.c6_title': 'Language as an Anchor: Preserving Heritage in America',
    'blog.c6_desc': "Why speaking Swahili, Lingala, Kirundi, or Luba at home accelerates, rather than hinders, children's cognitive growth and self-esteem.",
    'blog.news_eyebrow': 'STAY INFORMED',
    'blog.news_title': 'Subscribe to the Amani Community Dispatch',
    'blog.news_lead': 'Receive quarterly reflections, program recaps, and invitations to upcoming Bisakana Day festivals directly in your inbox.',
    'blog.news_ph': 'Enter your email address...',
    'blog.news_btn': 'Subscribe',
    'blog.mod_support': 'Get Support',
    'blog.mod_donate': 'Support This Mission',
    'blog.mod_close': 'Close Reader',

    // Donate & Get-Involved Pages
    'don.eyebrow': '501(c)(3) TAX-DEDUCTIBLE GIVING',
    'don.title': 'Support <span class="serif-italic text-accent">Amani Kids.</span>',
    'don.lead': 'Your gift provides newcomer African refugee youth in Charlotte with bilingual education, literacy coaching, and emergency family stability.',
    'don.zelle_badge': 'OFFICIAL ZELLE® GIVING • 100% FEE-FREE',
    'don.qr_btn': 'Open in Banking App',
    'don.qr_caption': 'Scan with your smartphone camera or mobile banking app (Chase, Bank of America, Wells Fargo, etc.) to give instantly.',
    'don.label_recipient': 'Zelle® Recipient Email',
    'don.btn_copy': 'Copy',
    'don.label_reg_name': 'Official Registered Name',
    'don.label_memo': 'Memo / Note (Recommended)',
    'don.val_memo': 'Donation - [Your Name]',
    'don.label_tax': 'Tax-Exempt Status',
    'don.val_tax': '501(c)(3) Public Charity • 100% Tax Deductible',
    'don.step1': '<strong>Open Your Bank App</strong><br>Log into Chase, Bank of America, Wells Fargo, etc.',
    'don.step2': '<strong>Send Money with Zelle®</strong><br>Enter <code style="font-family: var(--font-mono); color: var(--color-primary); font-weight: 700;">amanikids22@gmail.com</code>',
    'don.step3': '<strong>Confirm Amani Kids Inc</strong><br>Send any amount fee-free with 100% direct impact.',
    'don.form_title': 'Need an Official IRS Tax Deduction Receipt?',
    'don.form_desc': 'If you just sent a gift via Zelle, enter your name and email below so our treasurer can issue an official 501(c)(3) tax receipt.',
    'don.f_name': 'Your Full Name *',
    'don.ph_name': 'Full Name as shown on Zelle',
    'don.f_email': 'Email for Tax Receipt *',
    'don.f_amount': 'Amount Donated via Zelle ($ USD) *',
    'don.ph_amount': 'e.g. 50',
    'don.f_note': 'Optional Program Dedication',
    'don.ph_note': 'e.g. Sauti Safe Space, Bisakana Day',
    'don.f_submit': 'Submit Receipt Request',
    'don.other_ways': 'Other independent pathways to engage:',
    'don.link_vol': 'Volunteer as Mentor →',
    'don.link_partner': 'Institutional Partnerships →',

    // Volunteer Page
    'vol.eyebrow': 'PATHWAY 02 • SERVE',
    'vol.hero_title1': 'Volunteer with',
    'vol.hero_title2': 'Amani Kids.',
    'vol.hero_lead': 'Share your time, language skills, or mentorship to empower African refugee youth and their families right here in Charlotte.',
    'vol.badge': 'COMMUNITY SERVICE',
    'vol.form_title': 'Volunteer Application',
    'vol.label_name': 'Full Name *',
    'vol.ph_name': 'Your full name',
    'vol.label_email': 'Email Address *',
    'vol.ph_email': 'you@example.com',
    'vol.label_phone': 'Phone Number *',
    'vol.ph_phone': '(704) 000-0000',
    'vol.label_how': 'How would you like to contribute?',
    'vol.opt_mentor': 'Youth literacy & homework mentor (Sauti Safe Space)',
    'vol.opt_translation': 'Language translation (Swahili, Lingala, French, Kirundi, Luba)',
    'vol.opt_bisakana': 'Bisakana Day sports & festival logistics crew',
    'vol.opt_admin': 'General administration & family transit support',
    'vol.label_exp': 'Tell us briefly about your experience or motivation.',
    'vol.ph_exp': 'What brings you to Amani Kids?',
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
    'vol.other_ways': 'Other ways to support our mission:',
    'vol.btn_donate': 'Make a Tax-Deductible Donation →',
    'vol.btn_partner': 'Institutional Partnerships →',

    // Partnerships Page
    'partner.eyebrow': 'PATHWAY 03 • COLLABORATE',
    'partner.hero_title1': 'Institutional',
    'partner.hero_title2': 'Partnerships.',
    'partner.hero_lead': 'Building systemic alliances with schools, healthcare providers, corporate leaders, and civic foundations to champion newcomer families.',
    'partner.card_eyebrow': 'PATHWAY 03 • COLLABORATE',
    'partner.card_title': 'Institutional Partnerships',
    'partner.card_desc': 'We actively collaborate with schools, health clinics, cultural institutions, corporate partners, and civic coalitions to create a seamless continuum of care for newly arrived families.',
    'partner.label_org': 'Organization Name *',
    'partner.ph_org': 'Company, school, or agency',
    'partner.label_contact': 'Contact Person *',
    'partner.ph_contact': 'Your name and title',
    'partner.label_email': 'Email Address *',
    'partner.ph_email': 'partner@domain.org',
    'partner.label_area': 'Partnership Area',
    'partner.opt_education': 'Educational & Tutoring Collaboration',
    'partner.opt_health': 'Healthcare & Wellness Navigation',
    'partner.opt_sponsor': 'Corporate / Event Sponsorship (Bisakana Day)',
    'partner.opt_grant': 'Foundation / Philanthropic Grant',
    'partner.opt_other': 'Other Community Alliance',
    'partner.label_message': 'How would you like to collaborate?',
    'partner.ph_message': 'Describe your proposed collaboration...',
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
    'partner.collab4_desc': 'Community coalitions fighting youth isolation, housing precarity, and supporting equitable resettlement.',
    'partner.other_ways': 'Other ways to support our mission:',
    'partner.btn_volunteer': 'Volunteer as Mentor →',

    // Get Support Page
    'sup.hero_eyebrow': 'FAMILY WELCOME PORTAL',
    'sup.hero_title': 'Looking for support? <span class="serif-italic text-accent">You are not alone.</span>',
    'sup.hero_lead': 'Whether your family arrived in Charlotte last week or several years ago, Amani Kids is here to walk beside you with patience, dignity, and native language understanding.',
    'sup.welcome_en': '<strong>English:</strong> You are welcome here.',
    'sup.welcome_fr': '<strong>Français :</strong> Bienvenue, nous sommes là pour vous guider.',
    'sup.exp_eyebrow': 'WHAT TO EXPECT',
    'sup.exp_title': 'How Amani Kids Walks With You',
    'sup.exp_lead': 'We know that reaching out for help can feel overwhelming. At Amani Kids, you will find a warm, welcoming community, complete confidentiality, and 100% free support.',
    'sup.s1_title': 'We Listen in Your Language',
    'sup.s1_desc': 'A trusted cultural coordinator speaks with you by phone or in person in the language you feel most comfortable using.',
    'sup.s2_title': 'Direct Resource Connection',
    'sup.s2_desc': 'We accompany you to school registration, match children with after-school tutoring, or connect you with healthcare clinics.',
    'sup.s3_title': 'An Ongoing Community Safety Net',
    'sup.s3_desc': 'You are invited to Bisakana Day festivals, family circles, and social networks where lifelong friendships take root.',
    'sup.call_title': 'Prefer to Call Directly?',
    'sup.call_desc': 'You are always welcome to call our Charlotte office directly to speak with a community advocate.',
    'sup.form_title': 'Tell Us How We Can Help',
    'sup.form_desc': 'Fill out this simple, confidential note. An Amani Kids coordinator will reach out to you within 24–48 hours.',
    'sup.f_name': 'Your Name (Parent or Guardian) *',
    'sup.ph_name': 'Full Name',
    'sup.f_phone': 'Phone / WhatsApp *',
    'sup.f_email': 'Email Address',
    'sup.ph_email': 'Optional email',
    'sup.f_lang': 'Preferred Language *',
    'sup.opt_sw': 'Kiswahili (Swahili)',
    'sup.opt_ln': 'Lingala',
    'sup.opt_fr': 'Français (French)',
    'sup.opt_ki': 'Kirundi',
    'sup.opt_lu': 'Tshiluba (Luba)',
    'sup.opt_en': 'English',
    'sup.opt_other': 'Other African Language',
    'sup.f_help': 'What kind of support is your family looking for? (Select all that apply)',
    'sup.chk1': 'School registration & homework/reading tutoring (Sauti Safe Space)',
    'sup.chk2': 'Healthcare navigation (finding bilingual doctors, dental care)',
    'sup.chk3': 'Meeting other African families & attending Bisakana Day',
    'sup.chk4': 'Understanding community paperwork & translation',
    'sup.f_children': 'Children in Household (Ages or Grades)',
    'sup.ph_children': 'e.g. 2 children (Ages 7 and 11)',
    'sup.f_story': 'Any specific questions or details? (Optional)',
    'sup.ph_story': 'Feel free to write in whatever language you prefer...',
    'sup.f_submit': 'Send Confidential Request',

    // Contact Page
    'con.hero_eyebrow': 'REACH OUT',
    'con.hero_title': 'We Are Here to <span class="serif-italic text-accent">Listen & Connect.</span>',
    'con.hero_lead': 'Have a question, an inquiry about programs, or want to explore an alliance? Connect with our team in Charlotte, North Carolina.',
    'con.off_eyebrow': 'HEADQUARTERS',
    'con.off_title': 'Visit Our Community Space',
    'con.off_lead': 'Our doors are located in East Charlotte, serving as a peaceful hub for family intake, student tutoring, and community coordination.',
    'con.addr_title': 'Physical Address',
    'con.phone_title': 'Telephone',
    'con.phone_sub': 'Bilingual staff available',
    'con.email_title': 'Electronic Mail',
    'con.hours_title': 'Community Office Hours',
    'con.hours_val': 'Monday – Friday: 9:00 AM – 5:30 PM<br>Saturday: Program & Event specific<br>Sunday: Closed',
    'con.follow_title': 'Follow & Connect',
    'con.follow_sub': 'Official social channels',
    'con.form_title': 'Send a Direct Message',
    'con.form_desc': 'We welcome questions from community members, educators, volunteers, and potential partners.',
    'con.f_name': 'Full Name *',
    'con.ph_name': 'Jane Doe',
    'con.f_email': 'Email Address *',
    'con.f_phone': 'Phone Number',
    'con.f_subj': 'Inquiry Topic',
    'con.opt_gen': 'General Information',
    'con.opt_prog': 'Program Inquiries (Bisakana / Sauti)',
    'con.opt_vol': 'Volunteering & Mentoring',
    'con.opt_part': 'Institutional Partnership',
    'con.opt_media': 'Media & Community Speaking',
    'con.f_msg': 'Message *',
    'con.ph_msg': 'How can we assist you?',
    'con.f_submit': 'Send Message'
  },
  fr: {
    // Navigation & Global Header / Drawer / Bottom Dock
    'nav.home': 'Accueil',
    'nav.about_us': 'À Propos',
    'nav.about': 'À Propos',
    'nav.about_amani': "À Propos d'AMANI",
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
    'nav.photo_album': 'Album Communautaire',
    'nav.blog': 'Blog',
    'nav.journal_blog': 'Journal & Blog',
    'nav.team': 'Notre Équipe',
    'nav.faq': 'Q&R',
    'nav.get_involved': "S'impliquer",
    'nav.ways_to_help': 'Comment Nous Aider',
    'nav.donate_item': 'Faire un Don Financier',
    'nav.volunteer_item': 'Devenir Mentor Bénévole',
    'nav.partner_item': 'Partenariats Institutionnels',
    'nav.get_support': 'Obtenir du Soutien',
    'nav.contact': 'Contact',
    'nav.donate': 'FAIRE UN DON',
    'nav.donate_now': 'FAIRE UN DON',
    'nav.get_family_support': 'DEMANDER DU SOUTIEN',
    'nav.follow_amani': 'Suivre AMANI KIDS',
    'nav.contact_us': 'Contactez-Nous',
    'nav.drawer_nonprofit': 'Organisme à but non lucratif 501(c)(3)',
    'nav.bottom_home': 'Accueil',
    'nav.bottom_programs': 'Programmes',
    'nav.bottom_album': 'Album',
    'nav.bottom_impact': 'Impact',
    'nav.bottom_donate': 'Donner',

    // Dropdown Descriptions
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
    'nav.desc_donate': 'Don 100 % déductible des impôts',
    'nav.desc_volunteer': 'Accompagner les jeunes & les familles',
    'nav.desc_partner': 'Écoles & alliances institutionnelles',

    // Homepage Hero
    'hero.eyebrow': 'ORGANISATION À BUT NON LUCRATIF 501(C)(3) • CHARLOTTE, NC',
    'hero.tagline': 'Apprendre, se connecter et évoluer.',
    'hero.title_line1': 'Autonomiser les enfants.',
    'hero.title_line2': 'Renforcer les familles.',
    'hero.title_part1': 'Autonomiser les enfants. Renforcer les familles.',
    'hero.title_em': 'Bâtir des communautés.',
    'hero.lead': 'AMANI KIDS est une organisation à but non lucratif 501(c)(3) accréditée basée à Charlotte, en Caroline du Nord. Nous accompagnons les familles réfugiées, immigrées et nouvellement arrivées de la diaspora africaine — en facilitant l’accès linguistique, l’inscription scolaire et l’orientation vers les ressources communautaires avec dignité, expérience vécue et bienveillance.',
    'hero.highlight1': 'Services aux familles 100 % gratuits',
    'hero.highlight2': '8+ langues parlées (swahili, lingala, français, anglais, kirundi, tshiluba & plus)',
    'hero.highlight3': 'Alliances communautaires dans le comté de Mecklenburg',
    'hero.cta_support': 'DEMANDER DU SOUTIEN',
    'hero.cta_donate': 'SOUTENIR AMANI KIDS',
    'hero.badge_active': 'ACTIF À CHARLOTTE',
    'hero.badge_lived': 'Enraciné dans l’Expérience Vécue',
    'hero.badge_desc': 'Fondé par des immigrants, au service de la dignité',

    // Homepage Mission & Vision
    'mission.eyebrow': 'NOTRE BOUSSOLE FONDATRICE',
    'mission.title': 'Guidés par une mission. Portés par la communauté.',
    'mission.pillar': 'PILIER 01 • MISSION',
    'mission.card_title': 'Notre Mission',
    'mission.card_desc': 'Connecter les enfants et les familles de la diaspora africaine — réfugiés, immigrés et nouveaux arrivants — aux ressources et aux opportunités, et favoriser leur bien-être pour leur permettre de s’épanouir.',
    'mission.footer_tag': '01 • MISSION & AUTONOMISATION',
    'vision.pillar': 'PILIER 02 • COMMUNAUTÉ',
    'vision.card_title': 'Notre Vision',
    'vision.card_desc': 'Une communauté à Charlotte où chaque famille de la diaspora africaine est accueillie avec dignité, outillée pour maîtriser les systèmes essentiels et soutenue pour réaliser son plein potentiel.',
    'vision.footer_tag': '02 • COMMUNAUTÉ & APPARTENANCE',

    // Trust Strip
    'trust.nonprofit': 'Organisme 501(c)(3)',
    'trust.nonprofit_sub': 'Organisation caritative exonérée d’impôt',
    'trust.charlotte': 'Charlotte, Caroline du Nord',
    'trust.charlotte_sub': '3400 Shamrock Dr., Suite D',
    'trust.diaspora': 'Dédié à la Diaspora Africaine',
    'trust.diaspora_sub': 'Réfugiés, immigrants & nouveaux arrivants',
    'trust.verified': 'Ancrage Communautaire',
    'trust.verified_sub': 'Alliances scolaires & locales vérifiées',

    // Challenge Section
    'challenge.eyebrow': 'LA RÉALITÉ DE LA RÉINSTALLATION',
    'challenge.title': 'Recommencer à zéro ne devrait pas signifier être seul.',
    'challenge.lead': 'Pour les familles africaines réfugiées, immigrées et nouvellement arrivées aux États-Unis, la réinstallation apporte à la fois d’immenses opportunités et de profonds défis. Sans un guide de confiance, les familles peuvent faire face à un isolement prolongé.',
    'challenge.quote': '« Quand une famille arrive dans un nouveau pays, tout est inconnu. Avoir quelqu’un qui parle votre langue et comprend votre parcours transforme absolument tout. »',
    'challenge.card1_title': 'Barrières Linguistiques',
    'challenge.card1_desc': 'S’inscrire à l’école, accéder aux soins de santé et aux services essentiels sans soutien dans sa langue maternelle.',
    'challenge.card2_title': 'Systèmes Méconnus',
    'challenge.card2_desc': 'Déchiffrer des démarches institutionnelles américaines complexes qui offrent rarement des repères clairs.',
    'challenge.card3_title': 'Isolement Social',
    'challenge.card3_desc': 'L’éloignement de la famille élargie, des réseaux communautaires et des filets de sécurité culturels familiers.',
    'challenge.card4_title': 'Transition Culturelle',
    'challenge.card4_desc': 'Préserver l’héritage africain et la dignité culturelle pendant que les enfants s’adaptent à l’environnement scolaire américain.',

    // Solution / 5-Step Journey
    'solution.eyebrow': 'COMMENT NOUS AIDONS',
    'solution.title': 'Nous guidons les familles pas à pas.',
    'solution.lead': 'Amani Kids sert de pont culturel de confiance. Nous cheminons aux côtés des familles à travers un parcours intentionnel en cinq étapes, conçu pour cultiver la dignité, l’autonomie et une paix durable.',
    'solution.step1_title': 'Écouter',
    'solution.step1_desc': 'Nous commençons par écouter l’histoire unique de chaque famille dans sa langue préférée, sans aucun jugement.',
    'solution.step2_title': 'Connecter',
    'solution.step2_desc': 'Nous mettons les familles en relation avec des programmes communautaires fiables, les inscriptions scolaires et les ressources vitales.',
    'solution.step3_title': 'Soutenir',
    'solution.step3_desc': 'Nous offrons un mentorat direct, un soutien scolaire et un accompagnement bilingue face aux premiers obstacles.',
    'solution.step4_title': 'Autonomiser',
    'solution.step4_desc': 'Les parents et les jeunes développent la confiance nécessaire pour défendre leur propre avenir avec dignité.',
    'solution.step5_title': 'S’épanouir',
    'solution.step5_desc': 'Les enfants réussissent à l’école, les familles construisent leur stabilité et deviennent des leaders pour la génération suivante.',

    // Homepage Programs
    'programs.eyebrow': 'INITIATIVES PHARES',
    'programs.title': 'Quatre piliers conçus pour un impact générationnel.',
    'programs.lead': 'Des festivals culturels chaleureux aux espaces dédiés à la littératie et à l’orientation, nos programmes vont à la rencontre des familles avec authenticité et bienveillance.',
    'programs.bisakana_tag': 'EXPÉRIENCE SIGNATURE',
    'programs.bisakana_sub': '« Jouer et s’amuser » en lingala',
    'programs.bisakana_desc': 'Le Bisakana Day est notre célébration culturelle phare qui rassemble les familles africaines nouvellement arrivées, les voisins et les partenaires communautaires. À travers des jeux joyeux, du sport, des activités de confiance, des plats authentiques et de la musique, les enfants vivent une joie pure et une fierté culturelle tandis que les parents accèdent à des tables de ressources animées par des accompagnateurs bilingues.',
    'programs.explore_bisakana': 'Découvrir le Bisakana Day',
    'programs.sauti_title': 'ESPACE SAUTI (SAUTI SAFE SPACE)',
    'programs.sauti_sub': '« La Voix » en swahili • Deux fois par mois',
    'programs.sauti_desc': 'La voix des enfants compte. L’Espace Sauti propose une rencontre communautaire bimensuelle bienveillante où les jeunes s’expriment librement par la lecture bilingue français-anglais, développant la littératie, la confiance, la créativité, les compétences socio-émotionnelles et le soutien en éducation spécialisée.',
    'programs.connect_title': 'AMANI CONNECT',
    'programs.connect_sub': 'Orientation vers les Ressources & Plaidoyer Familial',
    'programs.connect_desc': 'Un pôle de ressources fiable reliant les familles à un accompagnement bilingue, à l’inscription scolaire, aux orientations médicales et aux partenariats communautaires.',
    'programs.outreach_title': 'SOLIDARITÉ INTERNATIONALE',
    'programs.outreach_sub': 'Solidarité Transfrontalière & Espoir',
    'programs.outreach_desc': 'Étendre la mission d’Amani Kids par l’aide d’urgence, le parrainage d’élèves, le soutien aux orphelins et des projets communautaires de terrain en Afrique.',
    'common.learn_more': 'En savoir plus',

    'programs.bisakana_pill': 'EXPÉRIENCE CULTURELLE SIGNATURE',
    'programs.bisakana_headline': 'Là où l’héritage culturel éveille la joie.',
    'programs.bisakana_badge': '+180 Familles Accompagnées',
    'programs.bisakana_check1': 'Célébration multilingue en swahili, lingala, français et anglais',
    'programs.bisakana_check2': 'Danses traditionnelles congolaises et panafricaines, musique live et cuisine',
    'programs.bisakana_check3': 'Jeux joyeux, sport, activités de confiance et tables de ressources bilingues',

    'programs.sauti_pill': 'LITTÉRATIE BILINGUE & EXPRESSION',
    'programs.sauti_headline': 'Là où la voix des enfants compte vraiment.',
    'programs.sauti_badge': 'Deux Fois par Mois',
    'programs.sauti_check1': 'Lecture bilingue français-anglais, renforcement de la littératie et expression orale',
    'programs.sauti_check2': 'Ateliers de confiance en soi, de créativité et de développement socio-émotionnel',
    'programs.sauti_check3': 'Soutien dédié en éducation spécialisée et mentorat individuel bienveillant',

    'programs.connect_pill': 'PLAIDOYER FAMILIAL & ACCÈS AUX RESSOURCES',
    'programs.connect_headline': 'Aucune famille ne navigue seule dans les systèmes américains.',
    'programs.connect_badge': 'Accompagnement Familial 100 % Gratuit',
    'programs.connect_check1': 'Inscription scolaire bilingue et soutien aux aménagements particuliers',
    'programs.connect_check2': 'Orientation vers les soins de santé, rendez-vous médicaux et accompagnement Medicaid',
    'programs.connect_check3': 'Médiation culturelle, interprétation et orientation en langue maternelle',

    'programs.outreach_pill': 'SOLIDARITÉ TRANSFRONTALIÈRE',
    'programs.outreach_headline': 'Relier les racines et l’empathie par-delà les frontières.',
    'programs.outreach_badge': 'Solidarité Éducative Mondiale',
    'programs.outreach_check1': 'Aide d’urgence et secours rapide pour les familles vulnérables',
    'programs.outreach_check2': 'Parrainer un élève : frais de scolarité, manuels et fournitures scolaires essentielles',
    'programs.outreach_check3': 'Soutien aux orphelins et projets de développement communautaire de terrain',

    // Homepage Impact
    'impact.eyebrow': 'RÉSULTATS MESURABLES',
    'impact.title': 'De vraies personnes. De vrais liens. Un réel impact.',
    'impact.lead': 'Nous mesurons notre réussite non par des chiffres exagérés, mais par la stabilité réelle, la progression scolaire et la joie des familles que nous servons.',
    'impact.stat1_label': 'Participants Accompagnés',
    'impact.stat1_desc': 'Enfants et parents réfugiés et nouvellement arrivés soutenus par nos programmes directs et notre orientation vers les ressources.',
    'impact.stat2_label': 'Dirigé par la Communauté',
    'impact.stat2_desc': 'Programmes conçus et guidés par des dirigeants ayant l’expérience directe de la réinstallation.',
    'impact.stat3_label': '8+ Langues Parlées',
    'impact.stat3_desc': 'Orientation multilingue en swahili, lingala, français, kirundi, tshiluba, langues zambiennes et anglais pour un soutien accessible.',
    'impact.stat4_label': 'Organisme Vérifié',
    'impact.stat4_desc': 'Statut officiel 501(c)(3) opérant avec responsabilité, transparence et intégrité financière à Charlotte, NC.',

    // Homepage Story
    'story.eyebrow': 'TÉMOIGNAGES DE FAMILLES',
    'story.title': 'Derrière chaque lien se trouve une histoire.',
    'story.verified_tag': 'TÉMOIGNAGE VÉRIFIÉ',
    'story.quote': '« Amani Kids a tout changé pour notre famille. Ils ont inscrit nos enfants à un programme après l’école qui les a énormément aidés en anglais et dans leur socialisation. En tant que parents découvrant un système scolaire totalement nouveau, leur accompagnement nous a apporté la paix de l’esprit. »',
    'story.author_role': 'Parent & Membre de la Communauté • Charlotte, NC',

    // Homepage Founder
    'founder.eyebrow': 'NOS ORIGINES',
    'founder.title': 'Une mission née de l’expérience vécue.',
    'founder.role': 'FONDATRICE & DIRECTRICE EXÉCUTIVE',
    'founder.lead': 'Lorsque Binti est arrivée aux États-Unis depuis la République démocratique du Congo, elle a été confrontée personnellement au labyrinthe déroutant de la réinstallation — le choc linguistique, les écoles inconnues et la lutte pour préserver la dignité culturelle.',
    'founder.step1_title': 'L’Expérience',
    'founder.step1_desc': 'Arriver à Charlotte en tant qu’immigrante et constater à quel point des familles talentueuses peuvent être isolées par de simples barrières de communication.',
    'founder.step2_title': 'La Prise de Conscience',
    'founder.step2_desc': 'Les familles ne manquent ni de capacités ni de détermination ; elles manquent de guides culturellement proches qui respectent leur dignité et parlent leur langue.',
    'founder.step3_title': 'L’Action',
    'founder.step3_desc': 'Fonder Amani Kids en tant qu’organisme à but non lucratif 501(c)(3) afin qu’aucun enfant ou parent nouvellement arrivé ne parcoure seul le chemin de la réinstallation.',
    'founder.cta': 'Lire l’Histoire Complète de la Fondatrice',

    // Values & Mosaic & Alliances & Doors
    'values.eyebrow': 'NOTRE BOUSSOLE',
    'values.title': 'Les principes qui ancrent chacune de nos actions.',
    'values.lead': 'Cliquez sur chaque valeur fondamentale pour découvrir comment notre héritage culturel africain guide notre travail quotidien auprès des enfants et des familles.',
    'mosaic.eyebrow': 'VIE COMMUNAUTAIRE',
    'mosaic.title': 'Voici Amani Kids.',
    'mosaic.lead': 'Des moments de connexion, d’apprentissage, de mentorat et de célébration à travers Charlotte. Des visages authentiques, de vraies amitiés et des réussites partagées.',
    'alliances.eyebrow': 'COLLABORATION',
    'alliances.title': 'Reconnu par la communauté. Bâti sur la confiance.',
    'alliances.subtitle': 'Nous collaborons avec des institutions éducatives respectées, des initiatives citoyennes et des organisations culturelles de la région de Charlotte-Mecklenburg pour assurer un accompagnement coordonné aux familles nouvellement arrivées.',
    'partner_ribbon.title': 'Partenaires Institutionnels & Alliances Communautaires de Confiance à Charlotte',

    'doors.eyebrow': 'AGIR AVEC NOUS',
    'doors.title': 'Trois portes d’entrée dans notre mission.',
    'doors.lead': 'Que vous soyez un donateur investissant dans le potentiel humain, un bénévole offrant son temps ou une organisation souhaitant établir un partenariat, vous avez votre place ici.',
    'doors.door1_num': 'VOIE 01 • DONATEUR',
    'doors.door1_title': 'DONNER',
    'doors.door1_desc': 'Votre contribution déductible des impôts finance directement le tutorat bilingue après l’école, les festivals culturels Bisakana, l’aide au transport familial et l’orientation d’urgence.',
    'doors.door1_cta': 'FAIRE UN DON À AMANI KIDS',
    'doors.door2_num': 'VOIE 02 • BÉNÉVOLE',
    'doors.door2_title': 'DEVENIR BÉNÉVOLE',
    'doors.door2_desc': 'Partagez votre temps comme mentor scolaire, interprète multilingue, organisateur d’événements ou animateur jeunesse. Les vraies relations transforment des vies des deux côtés.',
    'doors.door2_cta': 'DEVENIR BÉNÉVOLE',
    'doors.door3_num': 'VOIE 03 • PARTENAIRE',
    'doors.door3_title': 'DEVENIR PARTENAIRE',
    'doors.door3_desc': 'Collaborez avec Amani Kids en tant que district scolaire, établissement de santé, fondation philanthropique ou entreprise locale engagée pour l’équité.',
    'doors.door3_cta': 'DEVENIR PARTENAIRE',

    'cta.eyebrow': 'BESOIN DE SOUTIEN ?',
    'cta.title': 'Chaque enfant mérite de se sentir en sécurité, valorisé et plein d’espoir.',
    'cta.lead': 'Si votre famille est récemment arrivée à Charlotte ou cherche à s’orienter parmi les ressources scolaires et communautaires, nous sommes là pour marcher à vos côtés dans votre langue maternelle.',
    'cta.btn_support': 'DEMANDER UN SOUTIEN FAMILIAL',
    'cta.btn_contact': 'CONTACTER NOTRE ÉQUIPE',

    // FAQ
    'faq.eyebrow': 'QUESTIONS FRÉQUENTES',
    'faq.title': 'Des réponses claires sur notre action.',
    'faq.lead': 'Tout ce que vous devez savoir sur nos services, les langues parlées, les dons déductibles des impôts et les parcours de bénévolat communautaire.',
    'faq.q1': 'Comment Amani Kids soutient-il les familles réfugiées et immigrées nouvellement arrivées ?',
    'faq.a1': 'Nous offrons un accompagnement complet et culturellement ancré : inscription scolaire bilingue, orientation vers les soins de santé et les services sociaux, soutien scolaire après l’école et événements d’inclusion communautaire comme le Bisakana Day. Chaque famille est accueillie par des membres de l’équipe qui parlent sa langue maternelle et comprennent le parcours de réinstallation par expérience vécue.',
    'faq.q2': 'Les services d’Amani Kids sont-ils entièrement gratuits pour les familles ?',
    'faq.a2': 'Oui, 100 % gratuits. Aucune famille nouvellement arrivée ne paie jamais pour l’aide à l’inscription scolaire, le tutorat en lecture après l’école, les événements culturels ou l’accompagnement social. Amani Kids est un organisme caritatif public indépendant 501(c)(3) financé par des donateurs individuels bienveillants, des subventions philanthropiques et des partenaires communautaires.',
    'faq.q3': 'Quelles langues parle votre équipe bilingue ?',
    'faq.a3': 'Notre équipe parle couramment plus de 8 langues et dialectes régionaux, dont le swahili, le lingala, le français, l’anglais, le kirundi, le tshiluba et les langues zambiennes. Nous veillons à ce que les parents puissent poser des questions importantes et comprendre les documents juridiques ou scolaires dans la langue où ils se sentent le plus en confiance et respectés.',
    'faq.q4': 'Mon don financier est-il déductible des impôts ?',
    'faq.a4': 'Oui. Amani Kids Inc. est une organisation à but non lucratif 501(c)(3) enregistrée et reconnue par l’IRS. Les contributions sont déductibles des impôts dans toute la mesure permise par la loi. Vous recevez un reçu fiscal officiel pour vos déclarations.',
    'faq.q5': 'Comment puis-je m’impliquer comme bénévole ou mentor à Charlotte ?',
    'faq.a5': 'Nous accueillons chaleureusement les bénévoles souhaitant accompagner les jeunes, animer des cercles de lecture après l’école, assurer l’interprétation, coordonner la logistique du Bisakana Day ou apporter une expertise professionnelle. Vous pouvez remplir notre formulaire de bénévolat ou nous écrire à amanikids@amanikidsnc.org.',

    // Conversion & Community Action Banners
    'conversion.tag': 'CONTACTEZ-NOUS • NOUS SOMMES LÀ POUR VOUS',
    'conversion.title': 'Prêt à échanger ou à faire une différence durable ?',
    'conversion.lead': 'Que votre famille ait besoin d’un accompagnement bilingue immédiat à Charlotte ou que vous souhaitiez investir dans l’équité éducative pour les enfants nouvellement arrivés, votre prochaine étape commence ici.',
    'conversion.assurance1': 'Organisme Caritatif Public 501(c)(3) Enregistré',
    'conversion.assurance2': 'Services aux Familles 100 % Gratuits',
    'conversion.assurance3': 'Bilingue & Culturellement Ancré',

    'action.pill': 'ACTION COMMUNAUTAIRE • CHARLOTTE NC',
    'action.title': 'Chaque enfant mérite la dignité, l’appartenance et une communauté qui marche à ses côtés.',
    'action.lead': 'Rejoignez notre réseau de mentors passionnés, de bénévoles bilingues et de partenaires communautaires qui font chaque jour une différence concrète pour les familles africaines réfugiées, immigrées et nouvellement arrivées à Charlotte, NC.',
    'action.btn_volunteer': 'DEVENIR BÉNÉVOLE',
    'action.btn_support': 'DEMANDER DU SOUTIEN',

    // Global Footer
    'footer.desc': 'Relier les familles africaines réfugiées, immigrées et nouvellement arrivées à des ressources fiables, un sentiment d’appartenance culturelle et un soutien éducatif pour les aider à s’épanouir à Charlotte, NC.',
    'footer.status': 'Organisme 501(c)(3) • Au Service des Familles de Charlotte',
    'footer.social_heading': 'Suivez Notre Parcours',
    'footer.hq_title': 'Siège & Coordonnées',
    'footer.address_label': 'Notre Adresse',
    'footer.phone_label': 'Téléphone Direct',
    'footer.email_label': 'Courriel Officiel',
    'footer.rights_short': 'Tous droits réservés. Organisme à but non lucratif 501(c)(3).',
    'footer.link_privacy': 'Confidentialité & Dignité',
    'footer.link_donate': 'Faire un Don',
    'footer.link_volunteer': 'Bénévolat',
    'footer.link_partnerships': 'Partenariats',
    'footer.link_contact': 'Contactez-Nous',
    'footer.org': 'Organisation',
    'footer.action': "S'impliquer",
    'footer.office': 'Bureau de Charlotte',
    'footer.direct_phone': 'Téléphone Direct :',
    'footer.email': 'Courriel :',
    'footer.rights': 'AMANI KIDS INC. Tous droits réservés. Organisme caritatif public enregistré 501(c)(3).',
    'footer.privacy': 'Confidentialité & Dignité Familiale',
    'footer.transparency': 'Transparence Financière',
    'footer.contact': 'Contact',

    // Team Page & Team Section
    'team.eyebrow': 'DIRECTION & ÉQUIPE COMMUNAUTAIRE',
    'team.title': 'Rencontrez les Cœurs d’Amani Kids.',
    'team.lead': 'Guidés par l’expérience vécue de la réinstallation, la maîtrise de plusieurs langues et un profond amour culturel, nos 12 membres d’équipe accompagnent les familles de la diaspora africaine à chaque étape de leur parcours à Charlotte.',
    'team.cta_about': 'Découvrir Toute Notre Équipe de Direction & Gouvernance',
    'team.filter_all': 'Toute l’Équipe (12)',
    'team.filter_exec': 'Direction & Gouvernance',
    'team.filter_prog': 'Responsables de Programmes',
    'team.filter_comm': 'Éducation & Communauté',
    'team.count_badge': '12 Dirigeants & Accompagnateurs Dévoués',
    'team.languages_label': 'Langues :',
    'team.langs_sw_ln_fr_en': 'Swahili • Lingala • Français • Anglais',
    'team.langs_fr_sw_en': 'Français • Swahili • Anglais',
    'team.langs_sw_fr_en': 'Swahili • Français • Anglais',
    'team.langs_sw_lu_fr_en': 'Swahili • Tshiluba • Français • Anglais',
    'team.langs_lu_ln_fr_en': 'Tshiluba • Lingala • Français • Anglais',
    'team.langs_en': 'Anglais',
    'team.langs_ln_fr_reg_en': 'Lingala • Français • Dialectes Régionaux • Anglais',
    'team.langs_ln_fr_en': 'Lingala • Français • Anglais',
    'team.langs_sw_zm_en': 'Swahili • Langues Zambiennes • Anglais',
    'team.langs_fr_ewe_en': 'Français • Éwé • Anglais',

    'team.binti_role': 'Fondatrice & Directrice Exécutive',
    'team.binti_sub': 'Leadership Visionnaire & Plaidoyer de la Diaspora',
    'team.binti_bio': 'Arrivée de la République démocratique du Congo, Binti a transformé les épreuves des barrières linguistiques et de la réinstallation en un phare durable d’autonomisation et de réussite éducative pour les familles nouvellement arrivées en Caroline du Nord.',
    'team.divine_role': 'Secrétaire Générale & Coordinatrice des Opérations',
    'team.divine_sub': 'Gouvernance & Administration Institutionnelle',
    'team.divine_bio': 'Coordonne les opérations de l’organisation, les communications du conseil et les dossiers d’accueil des familles, veillant à ce que chaque nouvel arrivant reçoive un accompagnement administratif immédiat et bienveillant.',
    'team.cynthia_role': 'Travailleuse Sociale, Cheffe des Opérations & Responsable du Soutien Familial',
    'team.cynthia_sub': 'Réinstallation Familiale & Accompagnement Global',
    'team.cynthia_bio': 'Apporte son expertise en travail social pour évaluer les besoins des familles, orienter vers les aides sociales du comté de Mecklenburg et offrir des services de stabilisation familiale attentifs aux traumatismes.',
    'team.samy_role': 'Directeur des Finances',
    'team.samy_sub': 'Gestion Financière & Conformité 501(c)(3)',
    'team.samy_bio': 'Garantit une intégrité financière rigoureuse, le suivi comptable des subventions et une gestion transparente afin que chaque dollar donné renforce directement les programmes éducatifs et familiaux.',
    'team.roger_role': 'Conseiller Juridique',
    'team.roger_sub': 'Conformité Réglementaire & Défense des Droits Civiques',
    'team.roger_bio': 'Fournit des conseils juridiques sur la gouvernance associative, les accords contractuels et les droits civiques des immigrants, aidant les familles à comprendre leurs droits et démarches aux États-Unis.',
    'team.hadley_role': 'Responsable des Relations Publiques & des Partenariats',
    'team.hadley_sub': 'Alliances Communautaires & Rayonnement Institutionnel',
    'team.hadley_bio': 'Bâtit des ponts avec les dirigeants civiques de Charlotte, les universités locales, les entreprises mécènes et les fondations partenaires pour développer la visibilité et les ressources philanthropiques d’Amani Kids.',
    'team.kianyi_role': 'Coordinatrice des Bénévoles',
    'team.kianyi_sub': 'Engagement Communautaire & Mentorat Jeunesse',
    'team.kianyi_bio': 'Recrute, forme et mobilise les bénévoles et mentors bilingues, reliant les habitants engagés de Charlotte à nos programmes de tutorat après l’école et d’échange culturel.',
    'team.patricia_role': 'Coordinatrice de l’Éducation Familiale',
    'team.patricia_sub': 'Plaidoyer Scolaire & Intégration Académique',
    'team.patricia_bio': 'Assure la liaison directe avec les écoles, les enseignants, les conseillers d’orientation et les spécialistes ESL afin de garantir aux enfants de la diaspora un soutien académique équitable et adapté.',
    'team.ruth_role': 'Responsable du Programme Bisakana Day',
    'team.ruth_sub': 'Arts Culturels & Festivals du Patrimoine Communautaire',
    'team.ruth_bio': 'Dirige la célébration culturelle annuelle Bisakana ainsi que les ateliers de musique, de danse et de contes traditionnels qui insufflent la fierté culturelle et la joie d’appartenir chez les jeunes nouvellement arrivés.',
    'team.priscilla_role': 'Responsable du Programme Amani Connect',
    'team.priscilla_sub': 'Orientation vers les Ressources Communautaires & Accueil d’Urgence',
    'team.priscilla_bio': 'Guide les familles vers le logement, les cliniques de santé, les banques alimentaires et les services municipaux essentiels, brisant l’isolement grâce à un accompagnement bilingue personnalisé.',
    'team.esther_role': 'Responsable du Programme Sauti Safe Space',
    'team.esther_sub': 'Bien-être des Jeunes, Littératie & Cercles d’Expression',
    'team.esther_bio': 'Originaire de Zambie, Esther dirige le programme Sauti Safe Space, créant des cercles protecteurs et valorisants où les jeunes surmontent les épreuves, développent leur voix créative et nouent des amitiés durables en swahili, langues zambiennes et anglais.',
    'team.yao_role': 'Éducateur & Responsable des Données Administratives',
    'team.yao_sub': 'Tutorat Académique & Analyse d’Impact',
    'team.yao_bio': 'Assure l’enseignement bilingue en sciences (STEM) et en lecture tout en gérant les données de suivi des programmes pour mesurer les progrès d’apprentissage, l’assiduité scolaire et l’évolution des familles.',

    // About Page
    'about.hero_eyebrow': 'QUI NOUS SOMMES',
    'about.hero_title': 'Enracinés dans la <span class="serif-italic text-accent">Paix.</span>',
    'about.hero_lead': 'Amani Kids est une organisation à but non lucratif 501(c)(3) née de l’expérience vécue afin que les familles africaines réfugiées, immigrées et nouvellement arrivées à Charlotte trouvent écoute, appartenance et outils pour s’épanouir.',
    'about.mission_eyebrow': 'NOTRE MISSION',
    'about.mission_title': 'Pourquoi Nous Existons',
    'about.mission_desc': 'Connecter les enfants et les familles de la diaspora africaine — réfugiés, immigrés et nouveaux arrivants — aux ressources et aux opportunités, et favoriser leur bien-être pour leur permettre de s’épanouir.',
    'about.vision_eyebrow': 'NOTRE VISION',
    'about.vision_title': 'L’Avenir Que Nous Bâtissons',
    'about.vision_desc': 'Une communauté accueillante où les familles africaines nouvellement arrivées ne sont jamais isolées par la langue ou la culture ; où les enfants célèbrent leur double héritage avec fierté ; et où chaque parent immigrant dispose d’un accès égal aux opportunités, à l’éducation et à la paix.',
    'about.founder_eyebrow': 'L’HISTOIRE DE LA FONDATRICE',
    'about.founder_title': '« J’ai vécu ce parcours. C’est pourquoi Amani Kids existe. »',
    'about.founder_p1': 'Binti Muzuri Amisi a fondé Amani Kids non pas à partir d’un exercice théorique de travail social, mais à partir de la réalité directe de son arrivée aux États-Unis depuis la République démocratique du Congo.',
    'about.founder_p2': 'Comme des milliers de nouveaux arrivants, elle a découvert une transition semée d’obstacles inattendus : des formulaires rédigés uniquement en anglais, des systèmes d’inscription scolaire sans traduction en swahili ou en lingala, des rendez-vous médicaux où des questions essentielles restaient sans réponse, et une douloureuse absence de communauté culturelle.',
    'about.founder_p3': 'Elle a vu de brillants enfants africains en difficulté en classe simplement parce que les ponts linguistiques manquaient, et des parents travailleurs se sentir démunis. Elle a alors décidé de créer l’organisation qu’elle aurait aimé trouver à son arrivée : un pont fiable et bienveillant qui honore la dignité et la richesse culturelle de la diaspora africaine.',
    'about.founder_quote': '« Amani signifie Paix en swahili. Lorsque vous dissipez la peur de l’inconnu, les familles peuvent enfin respirer, guérir et commencer à s’épanouir. »',
    'about.values_eyebrow': 'ÉTHIQUE DIRECTRICE',
    'about.values_title': 'Les Huit Piliers d’Amani Kids',
    'about.values_lead': 'Nos principes sont tissés dans chaque programme, chaque formation de bénévoles et chaque échange avec les familles.',
    'about.val1_title': 'Paix',
    'about.val1_desc': 'Cultiver la sécurité émotionnelle, des environnements apaisants et des transitions sereines pour les familles ayant vécu le déplacement.',
    'about.val2_title': 'Amour',
    'about.val2_desc': 'Aborder chaque enfant et chaque parent avec une profonde bienveillance, de la patience et un respect personnel inébranlable.',
    'about.val3_title': 'Joie',
    'about.val3_desc': 'Célébrer par la danse, le jeu, les repas partagés et le rire comme de puissants vecteurs de guérison, de résilience et de lien.',
    'about.val4_title': 'Respect',
    'about.val4_desc': 'Honorer les traditions, la sagesse, la résilience et les parcours culturels uniques des familles africaines nouvellement arrivées.',
    'about.val5_title': 'Diversité',
    'about.val5_desc': 'Célébrer la richesse multiethnique et multilingue de l’Afrique en valorisant la singularité de chaque culture.',
    'about.val6_title': 'Inclusion',
    'about.val6_desc': 'Garantir une table ouverte où chaque nouvel arrivant dispose d’une place, d’une voix et d’un allié à ses côtés.',
    'about.val7_title': 'Équité',
    'about.val7_desc': 'Œuvrer pour que chaque enfant et chaque famille ait un accès juste aux opportunités éducatives, aux ressources et à la représentation communautaire.',
    'about.val8_title': 'Collaboration',
    'about.val8_desc': 'Nous croyons que des communautés plus fortes se bâtissent en travaillant main dans la main avec les familles, les partenaires et les bénévoles.',
    'about.gov_eyebrow': 'GOUVERNANCE & RESPONSABILITÉ',
    'about.gov_title': 'Une Intégrité Institutionnelle Digne de Confiance',
    'about.gov_lead': 'Amani Kids agit en tant qu’organisme caritatif public 501(c)(3) exonéré d’impôt, dont le siège est situé à Charlotte, en Caroline du Nord. Nous nous engageons à la transparence, à une gestion financière responsable et à des résultats communautaires mesurables.',
    'about.gov_btn_support': 'Soutenir Notre Mission',
    'about.gov_btn_contact': 'Contacter la Direction',

    // Programs Page
    'prog.hero_eyebrow': 'ACCOMPAGNEMENT GLOBAL',
    'prog.hero_title': 'Des Programmes Conçus pour <span class="serif-italic text-accent">l’Appartenance & l’Épanouissement.</span>',
    'prog.hero_lead': 'Nos initiatives prennent en compte l’ensemble de la vie des familles nouvellement arrivées : joie culturelle, réussite scolaire, défense des droits et autonomisation générationnelle.',
    'prog.p1_quote': '« Bisakana signifie "Jouer et s’amuser" en lingala. La joie n’est pas un luxe ; c’est la racine de la guérison. »',
    'prog.p1_eyebrow': 'PROGRAMME 01 • EXPÉRIENCE CULTURELLE SIGNATURE',
    'prog.p1_title': 'Bisakana Day',
    'prog.p1_lead': 'Un festival communautaire vibrant célébrant l’héritage africain, le jeu et la joie intergénérationnelle tout en offrant une porte d’entrée chaleureuse vers les ressources familiales essentielles.',
    'prog.p1_b1_title': 'À Qui Il S’adresse',
    'prog.p1_b1_desc': 'Aux enfants, parents et aînés africains réfugiés et nouvellement arrivés, ainsi qu’à l’ensemble de la communauté de Charlotte.',
    'prog.p1_b2_title': 'Au Programme',
    'prog.p1_b2_desc': 'Jeux joyeux, activités sportives et plein air, ateliers de confiance, cuisine et musique culturelles authentiques, et tables de ressources communautaires animées par des accompagnateurs bilingues.',
    'prog.p1_b3_title': 'Pourquoi C’est Essentiel',
    'prog.p1_b3_desc': 'Il brise l’isolement lié à la réinstallation. Dans une atmosphère de fête chaleureuse, les familles tissent des liens durables, honorent leurs racines et entrent facilement en contact avec les écoles, les services de santé et les partenaires locaux.',
    'prog.p1_dates_heading': 'Prochaines Dates du Festival (2027)',
    'prog.p1_save_dates': 'RETENEZ LES DATES',
    'prog.p1_spring_title': 'Bisakana Day de Printemps',
    'prog.p1_spring_time': '11 avril 2027 • 15h00 – 20h00',
    'prog.p1_spring_loc': 'Parc Communautaire d’East Charlotte',
    'prog.p1_summer_title': 'Bisakana Day d’Été',
    'prog.p1_summer_time': '1er août 2027 • 15h00 – 20h00',
    'prog.p1_winter_title': 'Bisakana Day d’Hiver',
    'prog.p1_winter_time': '19 décembre 2027 • 15h00 – 18h00',
    'prog.p1_btn_rsvp': 'S’inscrire au Bisakana Day',
    'prog.p1_btn_vol': 'Être Bénévole au Bisakana',
    'prog.p2_quote': '« Sauti signifie "La Voix" en swahili. Quand les enfants se sentent en sécurité et écoutés, leur confiance transforme tout. »',
    'prog.p2_eyebrow': 'PROGRAMME 02 • LITTÉRATIE BILINGUE & EXPRESSION',
    'prog.p2_title': 'Espace Sauti (Sauti Safe Space)',
    'prog.p2_schedule': 'RYTHME : DEUX FOIS PAR MOIS',
    'prog.p2_lead': 'La voix des enfants compte. L’Espace Sauti offre une communauté bienveillante où les jeunes s’expriment librement à travers la lecture bilingue en français et en anglais, développant la littératie, la confiance en soi, la créativité et les compétences socio-émotionnelles essentielles, avec un soutien dédié en éducation spécialisée.',
    'prog.p2_b1_title': 'Lecture Bilingue (Français & Anglais)',
    'prog.p2_b1_desc': 'Cultiver le goût de lire et l’aisance d’expression des jeunes grâce à des cercles de lecture bilingues, des contes illustrés et des échanges actifs de compréhension.',
    'prog.p2_b2_title': 'Confiance, Créativité & Compétences Socio-Émotionnelles',
    'prog.p2_b2_desc': 'Cercles de contes, arts créatifs, théâtre et activités entre pairs qui renforcent l’estime de soi, la résilience émotionnelle et la fierté culturelle.',
    'prog.p2_b3_title': 'Soutien en Éducation Spécialisée & Mentorat Bienveillant',
    'prog.p2_b3_desc': 'Un accompagnement scolaire individuel patient et des aménagements d’apprentissage adaptés garantissant à chaque enfant l’attention dont il a besoin.',
    'prog.p2_btn_enroll': 'Inscrire un Élève',
    'prog.p2_btn_mentor': 'Devenir Mentor Jeunesse',
    'prog.p3_eyebrow': 'PROGRAMME 03 • ORIENTATION & PLAIDOYER FAMILIAL',
    'prog.p3_title': 'Amani Connect',
    'prog.p3_lead': 'Un pont multilingue et bienveillant reliant les familles aux ressources sociales, médicales, juridiques et éducatives essentielles à Charlotte.',
    'prog.p3_b1_title': 'Soutien Linguistique',
    'prog.p3_b1_desc': 'Accueil et accompagnement proposés en swahili, lingala, français, kirundi, tshiluba et anglais par des médiateurs culturels de confiance.',
    'prog.p3_b2_title': 'Orientation dans les Démarches',
    'prog.p3_b2_desc': 'Accompagnement direct pour l’inscription scolaire, les carnets de vaccination, les rendez-vous médicaux et les démarches de première nécessité.',
    'prog.p3_b3_title': 'Dignité Familiale & Autonomie',
    'prog.p3_b3_desc': 'Nous ne traitons jamais les familles comme des bénéficiaires passifs, mais comme des partenaires actifs qui développent leur capacité à défendre leurs droits en toute autonomie.',
    'prog.p3_btn_support': 'Demander l’Accompagnement Amani Connect',
    'prog.p4_eyebrow': 'PROGRAMME 04 • SOLIDARITÉ MONDIALE & AIDE HUMANITAIRE',
    'prog.p4_title': 'Solidarité Internationale',
    'prog.p4_lead': 'Prolonger notre engagement pour l’espoir et la dignité à travers l’aide d’urgence, les parrainages scolaires et des projets communautaires de terrain reliant les jeunes de la diaspora aux États-Unis aux communautés d’Afrique.',
    'prog.p4_b1_title': 'Aide d’Urgence',
    'prog.p4_b1_desc': 'Apporter un secours humanitaire rapide et une aide d’urgence aux enfants et familles vulnérables confrontés à des crises aiguës.',
    'prog.p4_b2_title': 'Parrainer un Élève',
    'prog.p4_b2_desc': 'Parrainages directs finançant les frais de scolarité, les uniformes, les manuels et le matériel essentiel pour maintenir les enfants vulnérables à l’école.',
    'prog.p4_b3_title': 'Soutien aux Orphelins & Projets Communautaires',
    'prog.p4_b3_desc': 'Aide bienveillante aux orphelins et soutien collaboratif aux projets communautaires locaux, à l’accès à l’eau potable, à l’hygiène et à l’autonomisation locale.',
    'prog.p4_b4_title': 'Ressources Éducatives & Mémoire Culturelle',
    'prog.p4_b4_desc': 'Coordonner l’envoi de matériel pédagogique tout en permettant aux jeunes de Charlotte de cultiver des liens vivants avec leurs racines ancestrales.',
    'prog.p4_btn_partner': 'Devenir Partenaire Solidarité',
    'prog.p4_btn_donate': 'Soutenir les Projets Internationaux',
    'prog.p4_quote': '« Solidarité transfrontalière : relier nos racines et partager l’espoir avec les enfants et les écoles vulnérables en Afrique. »',
    'prog.access_eyebrow': 'COMMENT ACCÉDER AUX PROGRAMMES',
    'prog.access_title': 'Gratuit, Accueillant et Confidentiel',
    'prog.access_lead': 'Tous les programmes principaux d’Amani Kids sont offerts entièrement gratuitement aux familles réfugiées et nouvellement arrivées éligibles. Aucune démarche bureaucratique complexe n’est requise.',
    'prog.access_btn_req': 'Demander l’Accès à un Programme',
    'prog.access_btn_call': 'Appelez-Nous : (704) 866-2930',

    // Impact Page
    'imp.hero_eyebrow': 'TRANSPARENCE & RÉSULTATS',
    'imp.hero_title': 'Un Impact Réel, <span class="serif-italic text-accent">Mesuré en Dignité Humaine.</span>',
    'imp.hero_lead': 'Nous nous imposons des normes rigoureuses de transparence communautaire. Chaque indicateur représente une famille accueillie, un enfant soutenu et un obstacle surmonté.',
    'imp.stat1_label': 'Familles & Jeunes Accompagnés',
    'imp.stat1_desc': 'Bénéficiaires directs du soutien scolaire après l’école, des festivals culturels et de l’accompagnement familial.',
    'imp.stat2_label': 'Direction Issue de l’Expérience Vécue',
    'imp.stat2_desc': 'Ancré dans un leadership immigrant authentique originaire de la République démocratique du Congo et de la diaspora.',
    'imp.stat3_label': 'Passerelles Linguistiques',
    'imp.stat3_desc': 'Combler les fossés linguistiques grâce à un accompagnement natif en swahili, lingala, français, kirundi, tshiluba, langues zambiennes et anglais.',
    'imp.stat4_label': 'Accréditation Caritative',
    'imp.stat4_desc': 'Organisation à but non lucratif enregistrée opérant avec une gouvernance publique et une transparence totales.',
    'imp.pillars_eyebrow': 'DOMAINES DE TRANSFORMATION',
    'imp.pillars_title': 'Là Où Nous Observons un Changement Durable',
    'imp.pillars_lead': 'Nos programmes suivent les résultats à travers trois dimensions essentielles de la vie familiale.',
    'imp.p1_title': '1. Accélération Scolaire & Linguistique',
    'imp.p1_desc': 'Les enfants nouvellement arrivés font face à d’importants défis linguistiques. En partenariat avec des organisations comme Ourbridge for Kids, nous relions les élèves à des ateliers intensifs d’anglais après l’école, des cercles de lecture et de l’aide aux devoirs.',
    'imp.p1_outcome': 'Résultat : Les enfants atteignent le niveau de lecture requis et retrouvent confiance en classe.',
    'imp.p2_title': '2. Cohésion Sociale & Bien-être Émotionnel',
    'imp.p2_desc': 'Le déplacement bouleverse les repères identitaires. À travers le Bisakana Day et l’Espace Sauti, les enfants expriment leurs émotions, leur joie et leur espoir par l’art et la musique, tandis que les parents tissent des cercles d’entraide avec d’autres familles africaines de Charlotte.',
    'imp.p2_outcome': 'Résultat : 0 % de familles isolées ; un profond sentiment d’appartenance, une fierté culturelle restaurée et un réseau d’entraide.',
    'imp.p3_title': '3. Autonomie & Défense des Droits',
    'imp.p3_desc': 'Plutôt que de créer une dépendance, Amani Connect forme les parents à l’utilisation des portails scolaires américains, à leurs droits en matière de santé et aux démarches administratives afin qu’ils deviennent les défenseurs autonomes de leur foyer.',
    'imp.p3_outcome': 'Résultat : Les parents participent sereinement aux réunions parents-professeurs et maîtrisent les démarches civiques.',
    'imp.stew_eyebrow': 'GESTION RESPONSABLE',
    'imp.stew_title': 'Notre Engagement envers les Donateurs & Partenaires',
    'imp.stew_lead': 'Selon les normes les plus élevées de gouvernance associative, Amani Kids veille à ce que chaque dollar reçu soit géré avec rigueur et directement consacré aux programmes, à la traduction pour les familles, à la littératie des jeunes et aux rassemblements communautaires.',
    'imp.stew_li1': '<strong>100 % Déductible des Impôts :</strong> Tous les dons financiers ouvrent droit à une déduction fiscale complète au titre de l’exonération IRS 501(c)(3).',
    'imp.stew_li2': '<strong>Rapports Transparents :</strong> Déclarations publiques Form 990 et bilans annuels des programmes disponibles pour les partenaires institutionnels.',
    'imp.stew_li3': '<strong>Impact Communautaire Direct :</strong> Les contributions financent directement l’achat de livres, de matériel artistique, les autorisations d’événements et l’accompagnement multilingue.',
    'imp.stew_btn_donate': 'Investir dans Notre Impact',
    'imp.stew_btn_report': 'Demander le Rapport Annuel',

    // Stories Page — "Our Impact: Real Families, Real Stories"
    'st.hero_eyebrow': 'NOTRE IMPACT • VRAIS RÉCITS',
    'st.hero_title': 'Notre Impact : <span class="serif-italic text-accent">Vraies Familles, Vrais Récits.</span>',
    'st.hero_sub': 'Chaque famille a une histoire. Chaque enfant mérite une chance de s’épanouir.',
    'st.hero_p1': 'Chez Amani Kids, nous croyons qu\'aucun enfant ne devrait être laissé pour compte en raison de barrières linguistiques, de ressources limitées, de handicaps ou de systèmes administratifs inconnus. Chaque jour, les familles immigrées et réfugiées font face à des défis susceptibles d\'affecter l\'éducation, le bien-être et l\'avenir de leurs enfants.',
    'st.hero_p2': 'Parfois, faire une réelle différence commence par un geste simple : aider un parent à comprendre un courrier scolaire, trouver un programme après l\'école, procurer à une famille de la nourriture et des fournitures scolaires, ou aider un enfant à accéder à l\'éducation qu\'il mérite.',
    'st.hero_p3': 'Notre mission va bien au-delà de la fourniture de ressources. Nous écoutons, tissons des liens de confiance, connectons les familles aux opportunités et marchons à leurs côtés pour les aider à s\'orienter dans des rouages complexes.',
    'st.hero_p4': 'Voici cinq récits qui illustrent le cœur de notre action et la différence tangible qu\'Amani Kids apporte au quotidien dans la vie des enfants et de leurs familles.',

    // Story 01
    'st.s1_num': 'RÉCIT 01',
    'st.s1_pillar': 'ÉDUCATION & ALPHABÉTISATION',
    'st.s1_title': 'Briser les Barrières Linguistiques, Ouvrir les Portes du Savoir',
    'st.s1_intro': 'Lorsque la langue devient un obstacle, les enfants risquent de manquer des occasions de réussir.',
    'st.s1_p1': 'Une famille a sollicité Amani Kids parce que ses enfants rencontraient d\'importantes difficultés scolaires. Ne parlant pas anglais, les enfants peinaient à comprendre et à s\'exprimer, ce qui rendait difficile leur pleine participation aux apprentissages en classe.',
    'st.s1_p2': 'Amani Kids a pris le temps d\'écouter les préoccupations des parents et a orienté les enfants vers un programme périscolaire à Charlotte spécialement dédié au soutien des enfants issus de l\'immigration.',
    'st.s1_p3': 'Grâce à ce relais, les enfants ont pu bénéficier d\'un accompagnement pédagogique renforcé et d\'un environnement bienveillant où ils ont continué à développer leurs compétences linguistiques et à reprendre confiance en eux.',
    'st.s1_impact_label': 'L’IMPACT RÉALISÉ',
    'st.s1_impact_text': 'En reliant les familles aux ressources éducatives adaptées, nous aidons les enfants à surmonter les obstacles et nous ouvrons des voies durables vers la réussite scolaire.',

    // Story 02
    'st.s2_num': 'RÉCIT 02',
    'st.s2_pillar': 'ENGAGEMENT FAMILIAL & SCOLAIRE',
    'st.s2_title': 'Veiller à ce Qu’aucun Enfant ne Soit Laissé Pour Compte',
    'st.s2_intro': 'Parfois, la traduction d\'une simple lettre peut changer tout un univers.',
    'st.s2_p1': 'Une famille de cinq enfants éprouvait de grandes difficultés à suivre les communications scolaires, les parents ne maîtrisant pas l\'anglais. Des annonces importantes, des notes d\'information et des autorisations parentales arrivaient à la maison, sans que les parents ne puissent en saisir le sens ni les démarches à accomplir.',
    'st.s2_p2': 'Lors d\'une visite à domicile, l\'équipe d\'Amani Kids a pris le temps de s\'asseoir avec les parents pour examiner ensemble le contenu des cartables des enfants. Nous y avons découvert plusieurs courriers et avis officiels qui nécessitaient une réponse urgente des parents.',
    'st.s2_p3': 'Nous avons traduit les documents, expliqué en détail les annonces scolaires et guidé pas à pas les parents pour remplir et signer une autorisation de sortie pédagogique.',
    'st.s2_p4': 'Ce qui aurait pu sembler être une simple formalité administrative s\'est transformé en une opportunité essentielle : permettre aux enfants de prendre part aux activités éducatives aux côtés de tous leurs camarades.',
    'st.s2_impact_label': 'L’IMPACT RÉALISÉ',
    'st.s2_impact_text': 'En aidant les parents à comprendre les communications de l\'école, nous renforçons les liens famille-école et veillons à ce que la barrière de la langue n\'empêche jamais un enfant de participer à des expériences éducatives enrichissantes.',

    // Story 03
    'st.s3_num': 'RÉCIT 03',
    'st.s3_pillar': 'SOUTIEN DU QUOTIDIEN & BESOINS SPÉCIFIQUES',
    'st.s3_title': 'Accompagner les Familles Face aux Défis du Quotidien',
    'st.s3_intro': 'Parfois, les familles ont simplement besoin de quelqu\'un pour les guider vers la prochaine étape.',
    'st.s3_p1': 'Recommencer sa vie dans une communauté inconnue peut être déstabilisant, en particulier pour des parents qui s\'efforcent de subvenir aux besoins fondamentaux de leurs enfants tout en découvrant de nouveaux systèmes administratifs.',
    'st.s3_p2': 'Amani Kids a apporté son soutien à des familles confrontées à des situations d\'urgence, notamment une mère nouvellement arrivée qui manquait de nourriture et de fournitures scolaires pour ses enfants.',
    'st.s3_p3': 'Plutôt que de laisser cette famille affronter ces épreuves dans la solitude, nous avons écouté ses besoins prioritaires et l\'avons mise en relation avec des ressources communautaires capables de lui apporter une aide concrète.',
    'st.s3_p4': 'Dans une autre situation, un père de famille était convaincu que son jeune fils, non verbal et ayant des besoins particuliers d\'accompagnement comportemental, ne pourrait jamais aller à l\'école. La famille ignorait totalement quelles opportunités éducatives et quels dispositifs d\'aide existaient pour leur enfant.',
    'st.s3_p5': 'Amani Kids a guidé la famille dans ses démarches et l\'a connectée aux structures et professionnels adaptés. Aujourd\'hui, ce petit garçon est scolarisé et fréquente l\'école.',
    'st.s3_p6': 'Ces expériences nous rappellent que les familles ont souvent besoin de bien plus que de simples renseignements. Elles ont besoin d\'une présence attentive qui écoute, défend leurs droits et les aide à tracer un chemin d\'avenir.',
    'st.s3_impact_label': 'L’IMPACT RÉALISÉ',
    'st.s3_impact_text': 'Qu\'il s\'agisse de fournir de l\'aide alimentaire et des fournitures scolaires ou de permettre à des enfants en situation de handicap d\'accéder à l\'école, nous œuvrons pour que chaque enfant ait l\'opportunité d\'apprendre, de grandir et de s\'épanouir.',

    // Story 04
    'st.s4_num': 'RÉCIT 04',
    'st.s4_pillar': 'RÉSILIENCE JEUNESSE & ÉTUDES SUPÉRIEURES',
    'st.s4_title': 'Salama : De la Barrière de la Langue aux Études Supérieures',
    'st.s4_intro': 'Son parcours nous rappelle qu\'un début difficile ne doit jamais sceller le destin d\'un jeune.',
    'st.s4_p1': 'Lorsque Salama est arrivée à Charlotte en tant que jeune réfugiée, elle a dû relever le défi de tout recommencer dans un nouveau pays sans parler un mot d\'anglais.',
    'st.s4_p2': 'Inscrite dans un lycée du district de Charlotte-Mecklenburg Schools, elle a rencontré de lourdes difficultés scolaires tout en s\'efforçant d\'apprendre une nouvelle langue et de s\'adapter à un système éducatif totalement inconnu.',
    'st.s4_p3': 'À l\'approche de la fin de sa scolarité, elle risquait de ne pas obtenir son diplôme d\'études secondaires. Sans un encadrement adapté et des encouragements soutenus, il aurait été facile d\'abandonner ses études.',
    'st.s4_p4': 'Nous étions particulièrement attentifs aux obstacles qui poussent certaines jeunes filles réfugiées à quitter l\'école prématurément et à assumer des responsabilités d\'adultes avant même d\'avoir pu réaliser leurs propres aspirations.',
    'st.s4_p5': 'Amani Kids s\'est tenue aux côtés de Salama, lui offrant conseils, orientation et un soutien constant alors qu\'elle travaillait sans relâche pour atteindre ses objectifs éducatifs.',
    'st.s4_p6': 'Salama n\'a rien lâché.',
    'st.s4_p7': '<strong>Aujourd\'hui, elle est diplômée du secondaire et poursuit ses études universitaires au Central Piedmont Community College (CPCC).</strong>',
    'st.s4_p8': 'Son parcours est une démonstration éclatante que lorsque les jeunes femmes réfugiées reçoivent encouragements, accompagnement et opportunités, elles peuvent surmonter tous les obstacles et bâtir l\'avenir auquel elles aspirent.',
    'st.s4_impact_label': 'L’IMPACT RÉALISÉ',
    'st.s4_impact_text': 'Nous croyons que chaque jeune fille réfugiée mérite de mener ses études à leur terme, de découvrir son potentiel et de poursuivre ses rêves. L\'histoire de Salama incarne l\'importance d\'investir dans la jeunesse féminine et de lui rappeler que son avenir regorge de promesses.',

    // Story 05
    'st.s5_num': 'RÉCIT 05',
    'st.s5_pillar': 'SANTÉ & RECONSTRUCTION D’UNE VIE',
    'st.s5_title': 'De la Survie à la Reconstruction d’une Vie',
    'st.s5_intro': 'Parfois, changer une vie commence par être présent quand le besoin est criant.',
    'st.s5_p1': 'Peu de temps après son arrivée aux États-Unis, Judith a été victime d\'un terrible accident de voiture. Elle ne parlait pas anglais, n\'avait pratiquement aucun soutien et ne comprenait pas le fonctionnement du système de santé américain.',
    'st.s5_p2': 'Elle a passé plusieurs mois à l\'hôpital pour se remettre de ses graves blessures.',
    'st.s5_p3': 'Lorsque nous avons rencontré Judith, elle était rentrée chez elle en fauteuil roulant. Physiquement affaiblie, profondément traumatisée sur le plan émotionnel, elle se retrouvait face à plus de 60 000 dollars de factures médicales sans savoir vers qui se tourner pour obtenir de l\'aide.',
    'st.s5_p4': 'Sa situation était accablante. Elle avait besoin de bien plus que de simples encouragements : il lui fallait quelqu\'un pour l\'orienter dans des systèmes médico-sociaux complexes et la relier aux ressources indispensables pour reconstruire sa vie.',
    'st.s5_p5': 'Amani Kids s\'est mobilisée et a connecté Judith aux ressources communautaires appropriées. Grâce à ces passerelles, elle a pu bénéficier d\'un soutien psychologique, de séances de kinésithérapie et d\'un accompagnement pour gérer ses lourdes factures médicales.',
    'st.s5_p6': 'Sa rééducation a demandé du temps, du courage et une immense détermination.',
    'st.s5_p7': '<strong>Aujourd\'hui, Judith marche à nouveau, a repris ses études, s\'est mariée et est la fière maman d\'une petite fille.</strong>',
    'st.s5_p8': 'Son cheminement est un puissant témoignage de résilience, d\'espoir et de ce qui devient possible lorsqu\'une personne reçoit un soutien adapté au moment le plus éprouvant de son existence.',
    'st.s5_impact_label': 'L’IMPACT RÉALISÉ',
    'st.s5_impact_text': 'L\'histoire de Judith nous rappelle que les nouveaux arrivants ne devraient jamais affronter seuls les drames imprévus de l\'existence. Grâce à la compassion, aux solidarités locales et à l\'accès aux ressources, les familles peuvent reconstruire leur vie et regarder vers un avenir plus radieux.',

    // Closing Organizational Message
    'st.close_eyebrow': 'NOTRE ENGAGEMENT',
    'st.close_title': 'Bien Plus Qu’un Soutien. Une Communauté Solidaire.',
    'st.close_p1': 'Ces cinq récits ne représentent qu\'un modeste aperçu des nombreuses familles qu\'Amani Kids a eu le privilège d\'accompagner.',
    'st.close_p2': 'Notre travail ne consiste pas uniquement à déployer de grands programmes ou à organiser des événements majeurs. Parfois, il s\'agit simplement de se rendre au domicile d\'une famille, de traduire un formulaire scolaire, de passer un appel téléphonique crucial, de trouver des ressources d\'urgence ou d\'aider un parent à comprendre que son enfant a droit à une éducation pleine et entière.',
    'st.close_p3': 'Amani Kids est née de l\'expérience personnelle d\'immigration de sa fondatrice. Ayant elle-même dû surmonter la barrière de la langue et la complexité des systèmes administratifs, elle a mesuré à quel point recommencer à zéro dans un pays étranger peut être vertigineux. C\'est cette épreuve qui l\'a incitée à créer une organisation où chaque famille se sent accueillie, épaulée et jamais abandonnée.',
    'st.close_p4': 'Chez Amani Kids, nous bâtissons une communauté où les enfants sont encouragés, les parents renforcés dans leur rôle, et où chaque famille se sent véritablement vue, entendue et valorisée.',
    'st.close_quote': 'Parce que chaque enfant compte. Chaque famille mérite un soutien. Et aucune famille ne devrait avoir à parcourir ce chemin dans la solitude.',
    'st.close_final': 'Ensemble, nous construisons des ponts, créons des opportunités et transformons des vies — une famille à la fois.',

    // Call to Action
    'st.cta_eyebrow': 'REJOIGNEZ NOTRE ACTION',
    'st.cta_title': 'Rejoignez une Communauté Qui Fait la Différence.',
    'st.cta_desc': 'Chaque enfant mérite la chance de s’épanouir. Chaque famille a le droit de se sentir soutenue. Découvrez comment Amani Kids tisse des communautés plus fortes et accompagne les familles immigrées et réfugiées vers l\'avenir.',
    'st.cta_btn_programs': 'Découvrir Nos Programmes',
    'st.cta_btn_contact': 'Nous Contacter',
    'st.cta_btn_donate': 'Soutenir Notre Mission',


    // Events Page
    'ev.hero_eyebrow': 'CALENDRIER COMMUNAUTAIRE',
    'ev.hero_title': 'Là Où Culture & <span class="serif-italic text-accent">Connexion Convergent.</span>',
    'ev.hero_lead': 'Nos rassemblements sont joyeux, chaleureux et ouverts à tous. Venez célébrer l’héritage africain, tisser des liens d’amitié et découvrir les ressources de la communauté.',
    'ev.feat_badge': 'GRAND RASSEMBLEMENT À LA UNE',
    'ev.feat_title': 'Festival Culturel Annuel Bisakana Day',
    'ev.feat_sub': '« Jouer, Danser, Déguster, Appartenir » • Lingala : Bisakana',
    'ev.spring_label': 'BISAKANA DAY DE PRINTEMPS',
    'ev.summer_label': 'BISAKANA DAY D’ÉTÉ',
    'ev.winter_label': 'BISAKANA DAY D’HIVER',
    'ev.feat_desc': 'Rejoignez des centaines de voisins et de familles de la diaspora lors de nos célébrations culturelles phares. Au programme : jeux joyeux, tournois sportifs et activités de plein air, ateliers de confiance, dégustations de spécialités d’Afrique centrale et de l’Est, percussions et danses traditionnelles, ainsi que des stands de ressources animés par nos accompagnateurs bilingues.',
    'ev.btn_rsvp': 'S’inscrire (Entrée Gratuite)',
    'ev.btn_vol': 'Être Bénévole au Festival',
    'ev.w_eyebrow': 'ATELIERS & CERCLES',
    'ev.w_title': 'Prochaines Rencontres Communautaires',
    'ev.w_lead': 'Des cercles conviviaux pensés pour l’apprentissage, le soutien familial et l’entraide.',
    'ev.w1_date': '24 OCTOBRE',
    'ev.w1_time': '17h30 – 19h30',
    'ev.w1_title': 'Arts Créatifs & Poésie Jeunesse Sauti',
    'ev.w1_desc': 'Une soirée au cours de laquelle les collégiens et lycéens nouvellement arrivés présentent leurs textes créatifs, poèmes et récits célébrant l’identité et l’espoir.',
    'ev.w1_loc': 'Centre Amani Kids, Suite D',
    'ev.w_register': 'S’inscrire',
    'ev.w2_date': '07 NOVEMBRE',
    'ev.w2_time': '10h00 – 13h00',
    'ev.w2_title': 'Cercle d’Orientation Scolaire des Parents',
    'ev.w2_desc': 'Atelier multilingue en swahili, français, anglais et toute langue africaine demandée, guidant les parents pour lire les bulletins scolaires, dialoguer avec les enseignants et demander des aménagements pédagogiques.',
    'ev.w2_loc': 'En Ligne ou En Présentiel',
    'ev.w3_date': '21 NOVEMBRE',
    'ev.w3_time': '18h00 – 19h30',
    'ev.w3_title': 'Session d’Accueil des Mentors & Bénévoles',
    'ev.w3_desc': 'Découvrez les meilleures pratiques de mentorat respectueux des cultures, d’accompagnement bienveillant et de soutien scolaire pour les jeunes africains nouvellement arrivés.',
    'ev.w3_loc': 'En Ligne & En Présentiel',
    'ev.rsvp_eyebrow': 'REJOIGNEZ-NOUS',
    'ev.rsvp_title': 'Inscription aux Événements Communautaires',
    'ev.rsvp_lead': 'Tous les événements d’Amani Kids sont entièrement gratuits. Merci de nous indiquer votre présence afin que nous puissions prévoir les repas et le matériel en quantité suffisante !',
    'ev.label_name': 'Nom Complet *',
    'ev.ph_name': 'Votre nom',
    'ev.label_email': 'Adresse Courriel *',
    'ev.label_phone': 'Numéro de Téléphone',
    'ev.label_event': 'Choisir l’Événement *',
    'ev.opt_spring': 'Bisakana Day de Printemps (11 avril 2027 • 15h - 20h)',
    'ev.opt_summer': 'Bisakana Day d’Été (1er août 2027 • 15h - 20h)',
    'ev.opt_winter': 'Bisakana Day d’Hiver (19 décembre 2027 • 15h - 18h)',
    'ev.opt_sauti': 'Espace Sauti (Deux fois par mois)',
    'ev.opt_parent': 'Cercle d’Orientation Scolaire des Parents (07 nov.)',
    'ev.opt_mentor': 'Session d’Accueil des Mentors & Bénévoles (21 nov.)',
    'ev.label_attendees': 'Nombre de Participants de la Famille',
    'ev.btn_submit': 'Confirmer Mon Inscription',

    // Album Page
    'alb.hero_eyebrow': 'ARCHIVES PHOTOS & SOUVENIRS',
    'alb.hero_title': 'Notre <span class="serif-italic text-accent">Album Communautaire</span> Vivant.',
    'alb.hero_lead': 'Des instants authentiques de joie, d’éducation, de jeu et de solidarité capturés à travers nos programmes à Charlotte, nos festivals Bisakana et nos cercles de mentorat familial.',
    'alb.filter_all': 'Tous les Moments',
    'alb.filter_bisakana': 'Bisakana Day',
    'alb.filter_sauti': 'Espace Sauti',
    'alb.filter_family': 'Famille & Communauté',
    'alb.filter_sports': 'Sports & Jeux',
    'alb.c1_tag': 'Bisakana Day',
    'alb.c1_title': 'Joie & Jeux en Plein Air en Communauté',
    'alb.c2_tag': 'Bisakana Day',
    'alb.c2_title': 'Bienvenue au Bisakana Day',
    'alb.c3_tag': 'Bisakana Day',
    'alb.c3_title': 'Célébration Communautaire & Fierté des Trophées',
    'alb.c4_tag': 'Bisakana Day',
    'alb.c4_title': 'Maquillage Artistique & Joie d’Enfance',
    'alb.c5_tag': 'Bisakana Day',
    'alb.c5_title': 'Rassemblement Communautaire & Fraternité',
    'alb.c6_tag': 'Espace Sauti',
    'alb.c6_title': 'Cercles de Lecture & Heure du Conte',
    'alb.c7_tag': 'Mentorat & Communauté',
    'alb.c7_title': 'Accompagnement Intergénérationnel & Confiance',
    'alb.c8_tag': 'Solidarité Mondiale',
    'alb.c8_title': 'Action Internationale & Solidarité',
    'alb.c9_tag': 'Amani Connect',
    'alb.c9_title': 'Accompagnement Bilingue & Solidarité Familiale',
    'alb.contrib_eyebrow': 'CONTRIBUER À NOS ARCHIVES',
    'alb.contrib_title': 'Avez-vous des photos communautaires à partager ?',
    'alb.contrib_lead': 'Si vous avez participé au Bisakana Day, à une séance jeunesse Sauti ou à une rencontre communautaire, envoyez vos photos haute résolution à notre équipe des archives médias.',
    'alb.contrib_btn': 'Envoyer des Photos Communautaires',

    // Blog Page
    'blog.hero_eyebrow': 'JOURNAL & VOIX ÉDITORIALES',
    'blog.hero_title': 'Le Journal <span class="serif-italic text-accent">Amani.</span>',
    'blog.hero_lead': 'Essais sur la réinstallation, guides pratiques pour les familles dans les écoles de Charlotte, réflexions culturelles et actualités inspirantes de nos programmes.',
    'blog.feat_badge': 'RÉFLEXION À LA UNE',
    'blog.feat_date': 'OCTOBRE 2026',
    'blog.feat_read': '6 MIN DE LECTURE',
    'blog.feat_title': 'Célébrer plus de 180 familles : Le parcours générationnel de la diaspora africaine de Charlotte',
    'blog.feat_desc': 'Lorsque les familles nouvellement arrivées descendent d’avion en Caroline du Nord, elles portent en elles des siècles d’histoire orale, de résilience et d’espoir infini. Mais elles se heurtent aussi à des systèmes qui peuvent les rendre invisibles. Découvrez comment le mentorat ancré dans la communauté réécrit l’histoire de l’immigration dans l’est de Charlotte.',
    'blog.feat_author': 'Par Binti Muzuri Amisi',
    'blog.feat_role': 'Fondatrice & Directrice Exécutive',
    'blog.feat_btn': 'Lire l’Essai Complet',
    'blog.c1_tag': 'PSYCHOLOGIE CULTURELLE',
    'blog.c1_read_time': '4 MIN DE LECTURE',
    'blog.c1_title': 'Comment le Bisakana Day redonne de la joie à la réinstallation',
    'blog.c1_desc': 'Pourquoi le jeu libre, la rumba congolaise et le partage de plats ancestraux ne sont pas un simple divertissement, mais une forme profonde de guérison collective.',
    'blog.read_btn': 'Lire l’Article',
    'blog.c2_tag': 'GUIDES FAMILIAUX',
    'blog.c2_read_time': '5 MIN DE LECTURE',
    'blog.c2_title': 'Comprendre le premier bulletin scolaire dans les écoles CMS',
    'blog.c2_desc': 'Un guide bilingue clair, étape par étape, pour aider les parents nouvellement arrivés à comprendre les barèmes de notation de Caroline du Nord, les règles d’assiduité et les réunions parents-professeurs.',
    'blog.c3_tag': 'ÉDUCATION & LITTÉRATIE',
    'blog.c3_read_time': '3 MIN DE LECTURE',
    'blog.c3_title': 'La force de Sauti : Pourquoi le conte forme de grands lecteurs',
    'blog.c3_desc': 'Comment encourager les jeunes africains nouvellement arrivés à écrire et à s’exprimer avec leur voix authentique accélère l’apprentissage de l’anglais.',
    'blog.c4_tag': 'SOLIDARITÉ MONDIALE',
    'blog.c4_read_time': '5 MIN DE LECTURE',
    'blog.c4_title': 'Bâtir des ponts au-delà des frontières : Solidarité internationale',
    'blog.c4_desc': 'Relier les jeunes de la diaspora dans les Carolines à des projets éducatifs de terrain en Afrique centrale pour cultiver une solidarité culturelle durable.',
    'blog.c5_tag': 'REGARD DE DIRECTION',
    'blog.c5_read_time': '6 MIN DE LECTURE',
    'blog.c5_title': 'De la RDC à Charlotte : Transformer l’épreuve en engagement',
    'blog.c5_desc': 'Un entretien intime avec Binti Muzuri Amisi sur les défis de l’immigration et les raisons pour lesquelles la dignité doit être au cœur de toute aide associative.',
    'blog.c6_tag': 'HÉRITAGE & DIASPORA',
    'blog.c6_read_time': '4 MIN DE LECTURE',
    'blog.c6_title': 'La langue comme ancre : Préserver son héritage en Amérique',
    'blog.c6_desc': 'Pourquoi parler le swahili, le lingala, le kirundi ou le tshiluba à la maison accélère, au lieu de freiner, le développement cognitif et l’estime de soi des enfants.',
    'blog.news_eyebrow': 'RESTEZ INFORMÉS',
    'blog.news_title': 'Abonnez-vous au Bulletin Communautaire Amani',
    'blog.news_lead': 'Recevez nos réflexions trimestrielles, les bilans de nos programmes et les invitations aux prochains festivals Bisakana Day directement dans votre boîte de réception.',
    'blog.news_ph': 'Entrez votre adresse courriel...',
    'blog.news_btn': "S'abonner",
    'blog.mod_support': 'Obtenir du Soutien',
    'blog.mod_donate': 'Soutenir Cette Mission',
    'blog.mod_close': 'Fermer la Lecture',

    // Donate & Get-Involved Pages
    'don.eyebrow': 'DON DÉDUCTIBLE DES IMPÔTS 501(c)(3)',
    'don.title': 'Soutenir <span class="serif-italic text-accent">Amani Kids.</span>',
    'don.lead': 'Votre don offre aux jeunes réfugiés africains nouvellement arrivés à Charlotte une éducation bilingue, un accompagnement en lecture et une stabilité familiale d’urgence.',
    'don.zelle_badge': 'DON OFFICIEL ZELLE® • 100 % SANS FRAIS',
    'don.qr_btn': 'Ouvrir dans l’Application Bancaire',
    'don.qr_caption': 'Scannez avec l’appareil photo de votre téléphone ou votre application bancaire mobile (Chase, Bank of America, Wells Fargo, etc.) pour donner instantanément.',
    'don.label_recipient': 'Courriel du Destinataire Zelle®',
    'don.btn_copy': 'Copier',
    'don.label_reg_name': 'Nom Officiel Enregistré',
    'don.label_memo': 'Mémo / Note (Recommandé)',
    'don.val_memo': 'Don - [Votre Nom]',
    'don.label_tax': 'Statut d’Exonération Fiscale',
    'don.val_tax': 'Organisme Caritatif Public 501(c)(3) • 100 % Déductible des Impôts',
    'don.step1': '<strong>Ouvrez Votre Application Bancaire</strong><br>Connectez-vous à Chase, Bank of America, Wells Fargo, etc.',
    'don.step2': '<strong>Envoyez avec Zelle®</strong><br>Saisissez <code style="font-family: var(--font-mono); color: var(--color-primary); font-weight: 700;">amanikids22@gmail.com</code>',
    'don.step3': '<strong>Confirmez Amani Kids Inc</strong><br>Envoyez le montant de votre choix sans frais pour un impact direct à 100 %.',
    'don.form_title': 'Besoin d’un Reçu Fiscal Officiel IRS ?',
    'don.form_desc': 'Si vous venez d’effectuer un don via Zelle, indiquez votre nom et votre courriel ci-dessous afin que notre trésorier puisse vous délivrer un reçu fiscal officiel 501(c)(3).',
    'don.f_name': 'Votre Nom Complet *',
    'don.ph_name': 'Nom complet tel qu’affiché sur Zelle',
    'don.f_email': 'Courriel pour le Reçu Fiscal *',
    'don.f_amount': 'Montant Donné via Zelle ($ USD) *',
    'don.ph_amount': 'ex. 50',
    'don.f_note': 'Affectation Optionnelle à un Programme',
    'don.ph_note': 'ex. Espace Sauti, Bisakana Day',
    'don.f_submit': 'Demander Mon Reçu Fiscal',
    'don.other_ways': 'Autres voies indépendantes pour vous engager :',
    'don.link_vol': 'Devenir Mentor Bénévole →',
    'don.link_partner': 'Partenariats Institutionnels →',

    // Volunteer Page
    'vol.eyebrow': 'VOIE 02 • SERVIR',
    'vol.hero_title1': 'Bénévolat avec',
    'vol.hero_title2': 'Amani Kids.',
    'vol.hero_lead': 'Partagez votre temps, vos compétences linguistiques ou votre mentorat pour soutenir les jeunes réfugiés africains et leurs familles ici même à Charlotte.',
    'vol.badge': 'ENGAGEMENT COMMUNAUTAIRE',
    'vol.form_title': 'Candidature de Bénévolat',
    'vol.label_name': 'Nom Complet *',
    'vol.ph_name': 'Votre nom complet',
    'vol.label_email': 'Adresse Courriel *',
    'vol.ph_email': 'vous@exemple.com',
    'vol.label_phone': 'Numéro de Téléphone *',
    'vol.ph_phone': '(704) 000-0000',
    'vol.label_how': 'Comment souhaitez-vous contribuer ?',
    'vol.opt_mentor': 'Mentor en lecture & aide aux devoirs (Espace Sauti)',
    'vol.opt_translation': 'Traduction & interprétation (swahili, lingala, français, kirundi, tshiluba)',
    'vol.opt_bisakana': 'Équipe logistique & sportive du festival Bisakana Day',
    'vol.opt_admin': 'Administration générale & aide au transport des familles',
    'vol.label_exp': 'Parlez-nous brièvement de votre expérience ou de votre motivation.',
    'vol.ph_exp': 'Qu’est-ce qui vous motive à rejoindre Amani Kids ?',
    'vol.btn_submit': 'Envoyer Ma Candidature Bénévole',
    'vol.side_eyebrow': 'VOIE 02 • SERVIR',
    'vol.side_title': 'Partagez Votre Temps, Vos Compétences & Votre Présence',
    'vol.side_desc': 'Faire du bénévolat chez Amani Kids est bien plus qu’un simple acte de solidarité : c’est tisser des liens humains authentiques. Vous rejoindrez une famille intergénérationnelle de mentors, de responsables culturels et de membres de la communauté, tous dévoués au potentiel des jeunes.',
    'vol.side_quote': '« Être le mentor d’un enfant nouvellement arrivé, c’est lui offrir le plus précieux des cadeaux : la certitude qu’il a pleinement sa place à Charlotte. »',
    'vol.pillar1_title': 'Accueil & Orientation Bienveillante',
    'vol.pillar1_desc': 'Participez à une séance d’accueil culturel de 45 minutes et à une vérification des antécédents avant le mentorat.',
    'vol.pillar2_title': 'Horaires Flexibles',
    'vol.pillar2_desc': 'Choisissez les séances bimensuelles de l’Espace Sauti, les activités sportives du week-end ou la logistique du festival.',
    'vol.pillar3_title': 'Un Impact Durable',
    'vol.pillar3_desc': 'Accompagnez un jeune nouvellement arrivé vers la confiance en lecture, de nouvelles amitiés et la fierté de son identité.',
    'vol.other_ways': 'Autres façons de soutenir notre mission :',
    'vol.btn_donate': 'Faire un Don Déductible des Impôts →',
    'vol.btn_partner': 'Partenariats Institutionnels →',

    // Partnerships Page
    'partner.eyebrow': 'VOIE 03 • COLLABORER',
    'partner.hero_title1': 'Partenariats',
    'partner.hero_title2': 'Institutionnels.',
    'partner.hero_lead': 'Bâtir des alliances durables avec les écoles, les professionnels de santé, les entreprises et les fondations civiques au service des familles nouvellement arrivées.',
    'partner.card_eyebrow': 'VOIE 03 • COLLABORER',
    'partner.card_title': 'Partenariats Institutionnels',
    'partner.card_desc': 'Nous collaborons activement avec les écoles, les cliniques de santé, les institutions culturelles, les entreprises partenaires et les coalitions civiques afin d’offrir un accompagnement continu et harmonieux aux familles nouvellement arrivées.',
    'partner.label_org': 'Nom de l’Organisation *',
    'partner.ph_org': 'Entreprise, école ou institution',
    'partner.label_contact': 'Personne de Contact *',
    'partner.ph_contact': 'Votre nom et votre fonction',
    'partner.label_email': 'Adresse Courriel *',
    'partner.ph_email': 'partenaire@organisation.org',
    'partner.label_area': 'Domaine de Partenariat',
    'partner.opt_education': 'Collaboration Éducative & Soutien Scolaire',
    'partner.opt_health': 'Orientation Santé & Bien-être',
    'partner.opt_sponsor': 'Mécénat d’Entreprise / Parrainage d’Événement (Bisakana Day)',
    'partner.opt_grant': 'Subvention de Fondation / Philanthropie',
    'partner.opt_other': 'Autre Alliance Communautaire',
    'partner.label_message': 'Comment souhaiteriez-vous collaborer ?',
    'partner.ph_message': 'Décrivez votre proposition de collaboration...',
    'partner.btn_submit': 'Initier un Échange de Partenariat',
    'partner.pillars_eyebrow': 'CADRE D’ALLIANCE',
    'partner.pillars_title': 'Comment Nous Collaborons avec les Institutions',
    'partner.pillars_lead': 'Amani Kids agit comme un pont fiable et reconnu reliant directement les institutions aux communautés nouvellement arrivées.',
    'partner.collab1_title': 'Districts Scolaires',
    'partner.collab1_desc': 'Médiation bilingue parents-enseignants, ateliers d’aide aux devoirs et interprétation pour les démarches IEP et d’inscription.',
    'partner.collab2_title': 'Santé & Bien-être',
    'partner.collab2_desc': 'Orientation vers les soins de santé, suivi des dossiers de vaccination et ateliers de bien-être culturellement adaptés.',
    'partner.collab3_title': 'Entreprises Mécènes',
    'partner.collab3_desc': 'Parrainez les festivals Bisakana Day, financez les fournitures de lecture pour les jeunes et mobilisez vos collaborateurs bénévoles.',
    'partner.collab4_title': 'Coalitions Civiques',
    'partner.collab4_desc': 'Coalitions communautaires luttant contre l’isolement des jeunes et la précarité tout en favorisant une réinstallation équitable.',
    'partner.other_ways': 'Autres façons de soutenir notre mission :',
    'partner.btn_volunteer': 'Devenir Mentor Bénévole →',

    // Get Support Page
    'sup.hero_eyebrow': 'PORTAIL D’ACCUEIL DES FAMILLES',
    'sup.hero_title': 'Besoin de soutien ? <span class="serif-italic text-accent">Vous n’êtes pas seuls.</span>',
    'sup.hero_lead': 'Que votre famille soit arrivée à Charlotte la semaine dernière ou il y a plusieurs années, Amani Kids est là pour marcher à vos côtés avec patience, dignité et écoute dans votre langue maternelle.',
    'sup.welcome_en': '<strong>Anglais :</strong> You are welcome here.',
    'sup.welcome_fr': '<strong>Français :</strong> Bienvenue, nous sommes là pour vous guider.',
    'sup.exp_eyebrow': 'À QUOI S’ATTENDRE',
    'sup.exp_title': 'Comment Amani Kids Marche à Vos Côtés',
    'sup.exp_lead': 'Nous savons que demander de l’aide peut sembler intimidant. Chez Amani Kids, vous trouverez une communauté chaleureuse et accueillante, une confidentialité absolue et un soutien 100 % gratuit.',
    'sup.s1_title': 'Nous Vous Écoutons dans Votre Langue',
    'sup.s1_desc': 'Un coordinateur culturel de confiance échange avec vous par téléphone ou en personne dans la langue avec laquelle vous êtes le plus à l’aise.',
    'sup.s2_title': 'Mise en Relation Directe avec les Ressources',
    'sup.s2_desc': 'Nous vous accompagnons pour l’inscription scolaire, inscrivons les enfants au soutien scolaire après l’école ou vous orientons vers des cliniques médicales.',
    'sup.s3_title': 'Un Réseau d’Entraide Communautaire Durable',
    'sup.s3_desc': 'Vous êtes invités aux festivals Bisakana Day, aux cercles familiaux et aux rencontres communautaires où naissent des amitiés durables.',
    'sup.call_title': 'Vous Préférez Appeler Directement ?',
    'sup.call_desc': 'Vous êtes toujours les bienvenus pour appeler directement notre bureau de Charlotte afin de parler à un accompagnateur communautaire.',
    'sup.form_title': 'Dites-Nous Comment Nous Pouvons Vous Aider',
    'sup.form_desc': 'Remplissez ce court formulaire confidentiel. Un coordinateur d’Amani Kids vous contactera sous 24 à 48 heures.',
    'sup.f_name': 'Votre Nom (Parent ou Tuteur) *',
    'sup.ph_name': 'Nom complet',
    'sup.f_phone': 'Téléphone / WhatsApp *',
    'sup.f_email': 'Adresse Courriel',
    'sup.ph_email': 'Courriel (facultatif)',
    'sup.f_lang': 'Langue Préférée *',
    'sup.opt_sw': 'Kiswahili (Swahili)',
    'sup.opt_ln': 'Lingala',
    'sup.opt_fr': 'Français',
    'sup.opt_ki': 'Kirundi',
    'sup.opt_lu': 'Tshiluba (Luba)',
    'sup.opt_en': 'Anglais (English)',
    'sup.opt_other': 'Autre Langue Africaine',
    'sup.f_help': 'Quel type de soutien recherchez-vous pour votre famille ? (Cochez tout ce qui s’applique)',
    'sup.chk1': 'Inscription scolaire & aide aux devoirs / lecture (Espace Sauti)',
    'sup.chk2': 'Orientation santé (trouver des médecins bilingues, soins dentaires)',
    'sup.chk3': 'Rencontrer d’autres familles africaines & participer au Bisakana Day',
    'sup.chk4': 'Comprendre les documents administratifs & aide à la traduction',
    'sup.f_children': 'Enfants au Foyer (Âges ou Classes)',
    'sup.ph_children': 'ex. 2 enfants (7 ans et 11 ans)',
    'sup.f_story': 'Des questions ou précisions particulières ? (Facultatif)',
    'sup.ph_story': 'N’hésitez pas à écrire dans la langue de votre choix...',
    'sup.f_submit': 'Envoyer Ma Demande Confidentielle',

    // Contact Page
    'con.hero_eyebrow': 'CONTACTEZ-NOUS',
    'con.hero_title': 'Nous Sommes Là pour <span class="serif-italic text-accent">Écouter & Échanger.</span>',
    'con.hero_lead': 'Vous avez une question, une demande concernant nos programmes ou souhaitez explorer un partenariat ? Contactez notre équipe à Charlotte, en Caroline du Nord.',
    'con.off_eyebrow': 'SIÈGE SOCIAL',
    'con.off_title': 'Visitez Notre Espace Communautaire',
    'con.off_lead': 'Nos locaux sont situés dans l’est de Charlotte et constituent un lieu d’accueil paisible pour l’orientation des familles, le tutorat des élèves et la coordination communautaire.',
    'con.addr_title': 'Adresse Postale',
    'con.phone_title': 'Téléphone',
    'con.phone_sub': 'Équipe bilingue disponible',
    'con.email_title': 'Courrier Électronique',
    'con.hours_title': 'Horaires d’Accueil du Bureau',
    'con.hours_val': 'Lundi – Vendredi : 9h00 – 17h30<br>Samedi : Selon les programmes & événements<br>Dimanche : Fermé',
    'con.follow_title': 'Suivre & Rejoindre',
    'con.follow_sub': 'Réseaux sociaux officiels',
    'con.form_title': 'Envoyer un Message Direct',
    'con.form_desc': 'Nous répondons avec plaisir aux questions des membres de la communauté, des éducateurs, des bénévoles et des partenaires potentiels.',
    'con.f_name': 'Nom Complet *',
    'con.ph_name': 'Jean Dupont',
    'con.f_email': 'Adresse Courriel *',
    'con.f_phone': 'Numéro de Téléphone',
    'con.f_subj': 'Objet de la Demande',
    'con.opt_gen': 'Informations Générales',
    'con.opt_prog': 'Questions sur les Programmes (Bisakana / Sauti)',
    'con.opt_vol': 'Bénévolat & Mentorat',
    'con.opt_part': 'Partenariat Institutionnel',
    'con.opt_media': 'Médias & Interventions Communautaires',
    'con.f_msg': 'Message *',
    'con.ph_msg': 'Comment pouvons-nous vous aider ?',
    'con.f_submit': 'Envoyer le Message'
  }
};

const AMANI_SEO = {
  'index.html': {
    en: {
      title: 'AMANI KIDS — Empowering Children, Strengthening Families, Building Communities | Charlotte, NC',
      description: 'Amani Kids is a 501(c)(3) nonprofit in Charlotte, NC connecting African refugee, immigrant, and newcomer children and families with bilingual resources, cultural belonging, and educational support.'
    },
    fr: {
      title: 'AMANI KIDS — Autonomiser les Enfants, Renforcer les Familles, Bâtir des Communautés | Charlotte, NC',
      description: 'Amani Kids est une organisation à but non lucratif 501(c)(3) basée à Charlotte, NC, reliant les enfants et familles africaines réfugiées et nouvellement arrivées à des ressources bilingues et un soutien éducatif.'
    }
  },
  'about.html': {
    en: {
      title: 'About Us — AMANI KIDS | Our Story, Mission & Leadership in Charlotte, NC',
      description: 'Learn how Binti Muzuri Amisi founded Amani Kids from lived immigrant experience to support African refugee and newcomer families in Charlotte, North Carolina.'
    },
    fr: {
      title: 'À Propos — AMANI KIDS | Notre Histoire, Mission & Direction à Charlotte, NC',
      description: 'Découvrez comment Binti Muzuri Amisi a fondé Amani Kids à partir de son expérience vécue pour accompagner les familles africaines réfugiées et nouvellement arrivées à Charlotte.'
    }
  },
  'team.html': {
    en: {
      title: 'Meet Our Team — AMANI KIDS | 12 Multicultural Leaders & Community Advocates',
      description: 'Meet the 12 dedicated leaders, social workers, educators, and bilingual navigators of Amani Kids serving African newcomer families in Charlotte, NC.'
    },
    fr: {
      title: 'Notre Équipe — AMANI KIDS | 12 Dirigeants Multiculturels & Médiateurs Communautaires',
      description: 'Rencontrez les 12 dirigeants, travailleurs sociaux, éducateurs et accompagnateurs bilingues d’Amani Kids au service des familles africaines à Charlotte, NC.'
    }
  },
  'programs.html': {
    en: {
      title: 'Our Programs — AMANI KIDS | Bisakana Day, Sauti Safe Space & Amani Connect',
      description: 'Explore Amani Kids flagship programs in Charlotte, NC: Bisakana Day cultural festivals, Sauti Safe Space bilingual literacy, Amani Connect family navigation, and International Outreach.'
    },
    fr: {
      title: 'Nos Programmes — AMANI KIDS | Bisakana Day, Espace Sauti & Amani Connect',
      description: 'Découvrez les programmes phares d’Amani Kids à Charlotte, NC : festivals culturels Bisakana Day, littératie bilingue Espace Sauti, accompagnement familial Amani Connect et Solidarité Internationale.'
    }
  },
  'impact.html': {
    en: {
      title: 'Verified Impact — AMANI KIDS | Outcomes, Transparency & 501(c)(3) Stewardship',
      description: 'See how Amani Kids measures real educational, social, and family outcomes for over 180+ African refugee and newcomer participants in Charlotte, NC.'
    },
    fr: {
      title: 'Impact Vérifié — AMANI KIDS | Résultats, Transparence & Gestion 501(c)(3)',
      description: 'Découvrez comment Amani Kids mesure les résultats éducatifs, sociaux et familiaux concrets pour plus de 180 participants réfugiés et nouveaux arrivants à Charlotte, NC.'
    }
  },
  'stories.html': {
    en: {
      title: 'Our Impact: Real Families, Real Stories — AMANI KIDS',
      description: 'Discover how Amani Kids supports immigrant and refugee families in Charlotte, NC through education, resource navigation, and compassionate community care.'
    },
    fr: {
      title: 'Notre Impact : Vraies Familles, Vrais Récits — AMANI KIDS',
      description: 'Découvrez comment Amani Kids soutient les familles immigrées et réfugiées à Charlotte, NC grâce à l’éducation, l’accès aux ressources et un accompagnement bienveillant.'
    }
  },
  'events.html': {
    en: {
      title: 'Events & Calendar — AMANI KIDS | Bisakana Day & Community Gatherings',
      description: 'Join upcoming Amani Kids community events in Charlotte, NC: Seasonal Bisakana Day festivals, Sauti youth creative workshops, and parent school navigation circles.'
    },
    fr: {
      title: 'Événements & Calendrier — AMANI KIDS | Bisakana Day & Rencontres Communautaires',
      description: 'Participez aux prochains événements communautaires d’Amani Kids à Charlotte, NC : festivals saisonniers Bisakana Day, ateliers jeunesse Sauti et cercles d’orientation des parents.'
    }
  },
  'album.html': {
    en: {
      title: 'Community Photo Album — AMANI KIDS | Moments of Joy, Pride & Connection',
      description: 'Browse our living community photo archive capturing Bisakana Day celebrations, Sauti Safe Space reading circles, and family fellowship in Charlotte, NC.'
    },
    fr: {
      title: 'Album Photo Communautaire — AMANI KIDS | Moments de Joie, de Fierté & de Partage',
      description: 'Parcourez notre album photo communautaire illustrant les célébrations du Bisakana Day, les cercles de lecture de l’Espace Sauti et la fraternité familiale à Charlotte, NC.'
    }
  },
  'blog.html': {
    en: {
      title: 'The Amani Journal — AMANI KIDS | Community News, Guides & Insights',
      description: 'Explore stories, educational guides, and community perspectives from Amani Kids supporting African refugee, immigrant, and newcomer families in Charlotte, NC.'
    },
    fr: {
      title: 'Le Journal Amani — AMANI KIDS | Actualités, Guides Familiaux & Réflexions',
      description: 'Découvrez les articles, guides éducatifs et réflexions communautaires d’Amani Kids au service des familles africaines réfugiées et nouvellement arrivées à Charlotte, NC.'
    }
  },
  'donate.html': {
    en: {
      title: 'Donate — AMANI KIDS | 100% Tax-Deductible 501(c)(3) Giving',
      description: 'Support Amani Kids in Charlotte, NC with a 100% fee-free, tax-deductible donation via Zelle to fund youth tutoring, cultural festivals, and family advocacy.'
    },
    fr: {
      title: 'Faire un Don — AMANI KIDS | Don 100 % Déductible des Impôts 501(c)(3)',
      description: 'Soutenez Amani Kids à Charlotte, NC par un don 100 % sans frais et déductible des impôts via Zelle pour financer le tutorat des jeunes, les festivals culturels et l’aide aux familles.'
    }
  },
  'get-involved.html': {
    en: {
      title: 'Get Involved & Donate — AMANI KIDS | Support Newcomer Families in Charlotte',
      description: 'Discover how to support Amani Kids in Charlotte, NC through tax-deductible giving, youth mentorship volunteering, and institutional partnerships.'
    },
    fr: {
      title: "S'impliquer & Faire un Don — AMANI KIDS | Soutenir les Familles à Charlotte",
      description: 'Découvrez comment soutenir Amani Kids à Charlotte, NC par un don déductible des impôts, le bénévolat de mentorat jeunesse et les partenariats institutionnels.'
    }
  },
  'volunteer.html': {
    en: {
      title: 'Volunteer as a Mentor — AMANI KIDS | Serve Refugee Youth & Families in Charlotte',
      description: 'Apply to volunteer with Amani Kids in Charlotte, NC as an after-school literacy mentor, bilingual interpreter, or Bisakana Day festival organizer.'
    },
    fr: {
      title: 'Devenir Bénévole — AMANI KIDS | Accompagner les Jeunes & Familles à Charlotte',
      description: 'Rejoignez les bénévoles d’Amani Kids à Charlotte, NC comme mentor en lecture après l’école, interprète bilingue ou membre de l’équipe du festival Bisakana Day.'
    }
  },
  'partnerships.html': {
    en: {
      title: 'Institutional Partnerships — AMANI KIDS | Collaborate in Charlotte, NC',
      description: 'Partner with Amani Kids as a school district, healthcare clinic, corporate sponsor, or philanthropic foundation to empower newcomer families in Charlotte.'
    },
    fr: {
      title: 'Partenariats Institutionnels — AMANI KIDS | Collaborer à Charlotte, NC',
      description: 'Collaborez avec Amani Kids en tant qu’établissement scolaire, clinique de santé, entreprise mécène ou fondation philanthropique au service des familles à Charlotte.'
    }
  },
  'get-support.html': {
    en: {
      title: 'Get Family Support — AMANI KIDS | Free, Confidential & Bilingual Help',
      description: 'Looking for support? Amani Kids connects African newcomer, refugee, and immigrant families with trusted educational, language, and community resources in Charlotte, NC.'
    },
    fr: {
      title: 'Obtenir du Soutien Familial — AMANI KIDS | Aide Gratuite, Confidentielle & Bilingue',
      description: 'Besoin de soutien ? Amani Kids relie les familles africaines nouvellement arrivées, réfugiées et immigrées à des ressources éducatives, linguistiques et communautaires fiables à Charlotte, NC.'
    }
  },
  'contact.html': {
    en: {
      title: 'Contact Us — AMANI KIDS | Charlotte, NC Office',
      description: 'Get in touch with Amani Kids in Charlotte, NC. Address: 3400 Shamrock Dr., Suite D. Phone: +1 (704) 866-2930. Connect with our community leadership team.'
    },
    fr: {
      title: 'Contactez-Nous — AMANI KIDS | Bureau de Charlotte, NC',
      description: 'Contactez Amani Kids à Charlotte, NC. Adresse : 3400 Shamrock Dr., Suite D. Téléphone : +1 (704) 866-2930. Échangez avec notre équipe communautaire.'
    }
  }
};

class AmaniLanguageManager {
  constructor() {
    this.currentLang = this.detectInitialLanguage();
    this.init();
  }

  saveLanguagePreference(lang) {
    try { sessionStorage.setItem('amani_lang_choice', lang); } catch (e) {}
    try { localStorage.setItem('amani_lang_choice', lang); } catch (e) {}
    try { window.name = 'amani_lang:' + lang; } catch (e) {}
  }

  detectInitialLanguage() {
    // 1. Explicit URL parameter support: ?lang=en or ?lang=fr
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (urlLang === 'en' || urlLang === 'fr') {
      this.saveLanguagePreference(urlLang);
      return urlLang;
    }

    // 2. Explicit session selection
    try {
      const sessionChoice = sessionStorage.getItem('amani_lang_choice');
      if (sessionChoice === 'fr' || sessionChoice === 'en') {
        return sessionChoice;
      }
    } catch (e) {}

    // 3. Explicit local storage choice
    try {
      const localChoice = localStorage.getItem('amani_lang_choice');
      if (localChoice === 'fr' || localChoice === 'en') {
        return localChoice;
      }
    } catch (e) {}

    // 4. Fallback window.name persistence across page navigations
    try {
      if (typeof window.name === 'string' && window.name.startsWith('amani_lang:')) {
        const wnLang = window.name.split(':')[1];
        if (wnLang === 'fr' || wnLang === 'en') {
          return wnLang;
        }
      }
    } catch (e) {}

    // Default language: English
    return 'en';
  }

  init() {
    this.applyLanguage(this.currentLang, false);
    this.setupEventListeners();
  }

  setLanguage(lang) {
    if (lang !== 'en' && lang !== 'fr') return;
    this.currentLang = lang;
    this.saveLanguagePreference(lang);
    this.applyLanguage(lang, true);

    // Dispatch global event on both window and document for any interactive components
    const evt = new CustomEvent('amani:languageChanged', { detail: { lang } });
    window.dispatchEvent(evt);
    document.dispatchEvent(evt);
  }

  toggleLanguage() {
    const nextLang = this.currentLang === 'en' ? 'fr' : 'en';
    this.setLanguage(nextLang);
  }

  updateElementContent(el, val) {
    // Preserve leading or trailing inline <svg> icon if present in the element but not in the translation string
    if (!val.includes('<svg') && el.querySelector('svg')) {
      const firstChild = el.firstElementChild;
      const lastChild = el.lastElementChild;
      if (firstChild && firstChild.tagName.toLowerCase() === 'svg' && el.children.length === 1) {
        const svgHtml = firstChild.outerHTML;
        // Check if svg was at the beginning or end of the element's trimmed innerHTML
        const trimmed = el.innerHTML.trim();
        if (trimmed.startsWith('<svg')) {
          el.innerHTML = svgHtml + ' ' + val;
          return;
        } else if (trimmed.endsWith('</svg>')) {
          el.innerHTML = val + ' ' + svgHtml;
          return;
        }
      } else if (lastChild && lastChild.tagName.toLowerCase() === 'svg') {
        const svgHtml = lastChild.outerHTML;
        el.innerHTML = val + ' ' + svgHtml;
        return;
      }
    }
    el.innerHTML = val;
  }

  applyLanguage(lang, animate = true) {
    // Update HTML lang attribute for screen readers and browser translation tools
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-active-lang', lang);

    // Update SEO <title> and <meta name="description">
    const currentPage = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
    const seoEntry = AMANI_SEO[currentPage] || AMANI_SEO['index.html'];
    if (seoEntry && seoEntry[lang]) {
      document.title = seoEntry[lang].title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', seoEntry[lang].description);
      }
    }

    // Update active state on all language selector buttons
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
            this.updateElementContent(el, dict[key]);
            el.style.opacity = '1';
          }, 50);
        } else {
          this.updateElementContent(el, dict[key]);
        }
      }
    });

    // 2. Translate input and textarea placeholders
    const inputs = document.querySelectorAll('[data-i18n-placeholder]');
    inputs.forEach(input => {
      const key = input.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) {
        input.placeholder = dict[key];
      }
    });
  }

  setupEventListeners() {
    document.addEventListener('click', (e) => {
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

      const selectorBox = e.target.closest('.lang-selector');
      if (selectorBox && !e.target.closest('.lang-btn')) {
        e.preventDefault();
        this.toggleLanguage();
      }
    });
  }
}

// Immediate instantiation
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.amaniI18n = new AmaniLanguageManager();
  });
} else {
  window.amaniI18n = new AmaniLanguageManager();
}
