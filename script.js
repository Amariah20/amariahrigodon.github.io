
// Portfolio content — edit the arrays below.
// Existing assets use paths relative to assets/media/.

const $ = (selector) => document.querySelector(selector);

function e(tag, cls, content) {
  const x = document.createElement(tag);
  if (cls) x.className = cls;
  if (content !== undefined) x.textContent = content;
  return x;
}

// ==============================
// WORK EXPERIENCE
// ==============================

const roles = [
  {
    category: 'Professional',
    logo: 'DICT',
    name: 'Senior Analyst Programmer',
    org: 'Department of ICT, Office of the Vice President, Seychelles',
    date: 'January 2025 – January 2026',
    intro: 'Contributed to government digital transformation initiatives, combining business analysis, software development, stakeholder engagement and cross-functional delivery. Worked closely with government ministries and technical teams to translate business needs into practical digital solutions.',
    metric: '7 concurrent projects · 10,000+ users · +60% registrations',
    bullets: [
      'Contributed to approximately seven concurrent government digital projects supporting more than 10,000 users.',
      'Increased system registrations by 60% through organising training sessions, demonstrating digital services and identifying and resolving barriers to registration.',
      'Gathered requirements from senior government stakeholders, translating business needs into functional requirements, workflows, user journeys and system specifications.',
      'Designed and developed front-end and back-end functionality using C#, including creating and implementing APIs within Agile development sprints.',
      'Analysed cross-departmental processes and designed user interfaces to improve system usability and operational workflows.',
      'Coordinated User Acceptance Testing (UAT), training and rollout activities for more than 150 users across government ministries.',
      'Collaborated with software development, cybersecurity, networking, data centre, policy and external stakeholder teams to support the delivery of government digital services.'
    ]
  },

  {
    category: 'Professional',
    logo: 'EN',
    name: 'Chief Strategist Officer',
    org: 'Enigma Investment (Pty) Ltd, Seychelles',
    date: 'October 2024 – December 2024',
    intro: 'Combined technology development and business strategy to improve the company’s tourism technology platform, customer experience and operational efficiency.',
    metric: '+70% transactions · −45% late payments',
    bullets: [
      'Independently designed and developed a tourism technology platform using Laravel, contributing to a 70% increase in transactions.',
      'Automated booking processes and improved vehicle-servicing visibility to streamline operational workflows.',
      'Developed automated WhatsApp and email notifications to provide staff with daily rental information, improving access to operational updates.',
      'Analysed and improved customer journeys and payment workflows, contributing to a 45% reduction in late payments.'
    ]
  },

  {
    category: 'Entrepreneurship',
    logo: 'ACJ',
    name: 'Founder & Technology Consultant',
    org: 'ACJ Konsult, Seychelles',
    date: 'May 2025 – January 2026',
    intro: 'Founded and operated a technology consulting business delivering digital transformation solutions for government and private-sector clients. Managed client engagements from requirements analysis and solution recommendations through to implementation.',
    metric: '+50% client revenue · −40% support queries',
    bullets: [
      'Developed and implemented a Shopify e-commerce platform that enabled a client to launch online sales, contributing to 50% revenue growth within two months.',
      'Designed and developed a government information website that improved access to public information and reduced customer support queries by 40%.',
      'Delivered digital transformation initiatives involving business requirements analysis, process improvement, technology implementation and client advisory.',
      'Identified a significant requirements and workflow mismatch in a government tax-payment system, escalating the issue for board-level clarification before implementation to avoid proceeding with an unresolved business requirement.',
      'Integrated CyberSource payment functionality to support secure online transactions.',
      'Managed client relationships, gathered stakeholder requirements, developed solution recommendations and presented proposed approaches to clients.'
    ]
  },

  {
    category: 'Entrepreneurship',
    logo: 'AV',
    name: 'Founder',
    org: 'ActiveVerse, Seychelles',
    date: 'September 2024 – January 2026',
    intro: 'Founded and managed an activewear e-commerce business, developing firsthand commercial experience in business operations, customer experience, digital sales and entrepreneurship.',
    metric: '300+ monthly orders · Break-even in 3 months · 60% repeat/referral sales',
    bullets: [
      'Launched and operated an activewear e-commerce business processing more than 300 orders per month.',
      'Achieved break-even within the first three months of operations.',
      'Generated 60% of sales through repeat customers and word-of-mouth recommendations, demonstrating customer loyalty and organic business growth.',
      'Managed digital sales, customer experience, order fulfilment and day-to-day business operations.'
    ]
  },

  {
    category: 'Internships',
    logo: 'AMZ',
    name: 'Operations Intern',
    org: 'Amazon, United Kingdom',
    date: 'July 2023 – September 2023',
    intro: 'Worked in Amazon UK operations, analysing operational processes, identifying inefficiencies and proposing improvements to decision-making, documentation and workflow management.',
    metric: 'Graduate return offer',
    bullets: [
      'Analysed UK linehaul operations to identify operational risks, process gaps and unclear responsibilities affecting existing workflows.',
      'Consulted operational teams and delivery-station managers to understand current processes, decision-making criteria and operational challenges.',
      'Developed recommendations for process improvements, escalation procedures, documentation and training, presenting findings to senior management.',
      'Proposed a system feature to evaluate adjustment criteria before requests were submitted, supporting more consistent decision-making and opportunities for process automation.',
      'Received a graduate return offer following successful completion of the internship.'
    ]
  },

  {
    category: 'Internships',
    logo: 'DICT',
    name: 'Analyst Programmer Intern',
    org: 'Department of ICT, Office of the Vice President, Seychelles',
    date: 'November 2020 – August 2021',
    intro: 'Gained practical experience in government software development, application testing, technical documentation and digital service delivery.',
    metric: 'Government application testing & delivery',
    bullets: [
      'Tested government applications and identified functional issues before deployment.',
      'Supported application development through programming, testing and technical documentation.',
      'Created user guides to improve system understanding and support adoption among end users.'
    ]
  },

  {
    category: 'Part-time',
    logo: 'SJ',
    name: 'Assistant Programmer',
    org: 'St James Exchange Hub, United Kingdom',
    date: 'January 2022 – March 2022',
    intro: 'Worked on algorithmic trading functionality, translating business trading rules into automated technical solutions.',
    metric: 'Requirements translation · MQL5 automation',
    bullets: [
      'Analysed foreign-exchange trading rules and translated defined business requirements into automated functionality using MQL5.',
      'Developed algorithmic trading functionality based on specified trading conditions and decision criteria.'
    ]
  },

  {
    category: 'Part-time',
    logo: 'OB',
    name: 'Retail Team Member',
    org: 'Oliver Bonas, Dublin, Ireland',
    date: '2026 – Present',
    intro: 'Working in a customer-facing retail environment alongside MBA studies, strengthening customer communication, commercial awareness and teamwork.',
    metric: 'Customer engagement · Retail operations',
    bullets: [
      'Support customers in a fast-paced retail environment, communicating product information and responding to customer needs.',
      'Collaborate with colleagues to support day-to-day store operations and customer experience.'
    ]
  },

  {
    category: 'Leadership',
    logo: 'DBS',
    name: 'Vice President',
    org: 'MBA Society, Dublin Business School',
    date: 'March 2026 – August 2026',
    intro: 'Contributed to the leadership and development of the MBA Society, supporting student engagement, event coordination and relationships with university stakeholders.',
    metric: 'Student leadership · Events · Stakeholder engagement',
    bullets: [
      'Supported the planning and delivery of society initiatives, events and networking opportunities for MBA students.',
      'Collaborated with fellow society leaders, university representatives and external guests to support professional and academic engagement.',
      'Contributed to society organisation, governance and leadership handover activities.'
    ]
  },

  {
    category: 'Leadership',
    logo: 'DBS',
    name: 'Class Representative',
    org: 'Dublin Business School, Ireland',
    date: 'January 2026 – Present',
    intro: 'Represent the MBA cohort, supporting communication and constructive engagement between students and academic stakeholders.',
    metric: 'Student advocacy · Stakeholder communication',
    bullets: [
      'Represent student perspectives and communicate feedback, concerns and suggestions to relevant academic stakeholders.',
      'Support communication between students and faculty to promote constructive discussion and improvements to the student experience.'
    ]
  },

  {
    category: 'Volunteering',
    logo: '+',
    name: 'Volunteering Experience',
    org: 'Details to be added',
    date: 'Coming soon',
    intro: 'Reserved for volunteering and community initiatives.',
    metric: 'Content to be added',
    bullets: [
      'Add confirmed volunteering activities, responsibilities and outcomes.'
    ]
  }
];



const categories = [
  'Professional',
  'Entrepreneurship',
  'Internships',
  'Part-time',
  'Leadership',
  'Volunteering'
];

let activeCategory = 'Professional';
let activeRole = 0;

function renderRoles() {
  const filters = $('#filters');
  const list = $('#work-list');
  const panel = $('#work-detail');

  filters.replaceChildren();
  list.replaceChildren();

  for (const cat of categories) {
    const b = e('button', 'filter' + (activeCategory === cat ? ' active' : ''), cat);
    b.type = 'button';
    b.setAttribute('aria-pressed', String(activeCategory === cat));
    b.addEventListener('click', () => {
      activeCategory = cat;
      activeRole = 0;
      renderRoles();
    });
    filters.append(b);
  }

  const matching = roles.filter(r => r.category === activeCategory);

  matching.forEach((role, i) => {
    const b = e('button', 'select-item' + (i === activeRole ? ' active' : ''));
    b.type = 'button';
    b.setAttribute('aria-pressed', String(i === activeRole));

    const symbol = e('span', 'symbol', role.logo);
    const copy = e('span');

    copy.append(
      e('strong', '', role.name),
      e('small', '', role.org)
    );

    b.append(symbol, copy);
    b.addEventListener('click', () => {
      activeRole = i;
      renderRoles();
    });
    list.append(b);
  });

  const role = matching[activeRole];

  panel.replaceChildren(
    e('span', 'eyebrow', role.category),
    e('h3', '', role.name),
    e('div', 'org', role.org),
    e('div', 'date', role.date),
    e('p', '', role.intro),
    e('div', 'impact', '✦ ' + role.metric)
  );

  const ul = e('ul');
  role.bullets.forEach(b => ul.append(e('li', '', b)));
  panel.append(ul);
}

renderRoles();

// ==============================
// CERTIFICATIONS CAROUSEL
// ==============================

const certifications = [
  {
    name: 'Azure AI Fundamentals',
    issuer: 'Microsoft',
    image: 'microsoft_logo.png',
    url: 'https://www.credly.com/badges/e9c3f0bd-9484-44b3-acf4-88d71b4cc107/linked_in_profile',
    abbr: 'AI-900'
  },
  {
    name: 'Azure Fundamentals',
    issuer: 'Microsoft',
    image: 'microsoft_logo.png',
    url: 'https://learn.microsoft.com/en-gb/users/amariahrigodon-9490/credentials/8c5175163e83662f?ref=https%3A%2F%2Fwww.linkedin.com%2F',
    abbr: 'AZ-900'
  },
  {
    name: 'Security, Compliance & Identity Fundamentals',
    issuer: 'Microsoft',
    image: 'microsoft_logo.png',
    url: 'https://www.credly.com/badges/2bf5b3de-5bb3-494a-ba3b-e0bf5b025b40/linked_in_profile',
    abbr: 'SC-900'
  },
  {
    name: 'AWS Academy Cloud Foundations',
    issuer: 'AWS Academy',
    image: '',
    url: '',
    abbr: 'AWS'
  },
  {
    name: 'ISO/IEC 27001 Lead Implementer',
    issuer: 'Information security',
    image: 'BSI_logo.png',
    url: '',
    abbr: 'ISO'
  },
  {
    name: 'Professional Flow Metrics for Scrum',
    issuer: 'ProKanban',
    image: 'kanban_logo.jfif',
    url: 'https://www.credly.com/badges/54309df4-3a55-43ba-a69d-7f3b2ca37b6b/linked_in_profile',
    abbr: 'FLOW'
  },
  {
    name: 'Python for Data Science & AI',
    issuer: 'IBM',
    image: 'ibm_logo.png',
    url: 'https://www.coursera.org/account/accomplishments/verify/SQMS2YNANPRM?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course',
    abbr: 'IBM'
  },
  {
    name: 'Project Management Fundamentals',
    issuer: 'Microsoft',
    image: 'microsoft_logo.png',
    url: 'https://www.coursera.org/account/accomplishments/verify/JAO3DUWEZL7E',
    abbr: 'PM'
  },
  {
    name: 'Leading People & Teams',
    issuer: 'University of Michigan',
    image: 'michigan_logo.png',
    url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/QZ4UQ2WJRPH3',
    abbr: 'LEAD'
  },
  {
    name: 'AWS Solutions Architect – Associate (studying)',
    issuer: 'AWS · In progress',
    image: '',
    url: '',
    abbr: 'SAA'
  }
];

let certIndex = 0;

function visibleCertCount() {
  return window.innerWidth <= 610 ? 1 : window.innerWidth <= 800 ? 2 : 3;
}

function renderCerts() {
  const grid = $('#cert-cards');
  grid.replaceChildren();
  const count = visibleCertCount();

  for (let i = 0; i < count; i++) {
    const c = certifications[(certIndex + i) % certifications.length];
    const card = e('article', 'cert-card');

    if (c.image) {
      const img = e('img');
      img.src = 'assets/media/' + c.image;
      img.alt = c.issuer + ' logo';

      img.onerror = () => {
        img.replaceWith(e('span', 'cert-fallback', c.abbr));
      };
      card.append(img);
    } else {
      card.append(e('span', 'cert-fallback', c.abbr));
    }

    card.append(
      e('h3', '', c.name),
      e('p', '', c.issuer)
    );

    if (c.url) {
      const a = e('a', '', 'Verify credential ↗');
      a.href = c.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      card.append(a);
    } else {
      card.append(e('span', 'date', c.abbr === 'SAA' ? 'In progress' : 'Verification link to add'));
    }

    grid.append(card);
  }

  $('#cert-count').textContent = `${certIndex + 1} / ${certifications.length}`;
}

$('#cert-prev').addEventListener('click', () => {
  certIndex = (certIndex + certifications.length - 1) % certifications.length;
  renderCerts();
});

$('#cert-next').addEventListener('click', () => {
  certIndex = (certIndex + 1) % certifications.length;
  renderCerts();
});

window.addEventListener('resize', renderCerts);
renderCerts();

// ==============================
// PROJECT CARDS AND POP-UP
// ==============================

const projects = [
  {
    icon: '☁',
    title: 'AI Cloud Solutions Advisor',
    type: 'Cloud · AI · In development',
    description: 'An AI-powered concept for recommending cloud solutions based on business requirements. Final case study content to be added.',
    metric: 'In development',
    color: '#cbb5eb',
    points: [
      'Requirements intake and analysis.',
      'Proposed RAG-based retrieval of AWS documentation.',
      'Architecture recommendations, trade-offs and approximate costs.',
      'Prototype, screenshots and results will be added after development.'
    ]
  },
  {
    icon: '↗',
    title: 'Tourism Technology Platform',
    type: 'Digital product · Automation',
    description: 'Placeholder description. Add the business context, technical decisions and a concise account of your contribution here.',
    metric: 'Details to be finalised',
    color: '#a8d7c0',
    points: [
      'Add the verified problem statement.',
      'Add delivery approach and technology.',
      'Add screenshots and appropriate evidence.'
    ]
  },
  {
    icon: '▣',
    title: 'E-commerce Solution',
    type: 'E-commerce · Consulting',
    description: 'Placeholder description. Explain the client’s initial challenges and the solution you delivered.',
    metric: 'Details to be finalised',
    color: '#f7c6a6',
    points: [
      'Add the client challenge.',
      'Add design, implementation and business results.',
      'Use public details only where permission allows.'
    ]
  },
  {
    icon: '✦',
    title: 'Additional Project',
    type: 'Coming soon',
    description: 'Placeholder for your next project. Replace this when you have selected another case study.',
    metric: 'Coming soon',
    color: '#f1a8c8',
    points: ['Project information to be added.']
  }
];

let dialogReturn = null;

function openProject(project) {
  dialogReturn = document.activeElement;
  $('#dialog-category').textContent = project.type;
  $('#project-dialog-title').textContent = project.title;
  $('#dialog-description').textContent = project.description;

  const ul = $('#dialog-points');
  ul.replaceChildren();

  project.points.forEach(v => ul.append(e('li', '', v)));

  $('.dialog').style.setProperty('--accent', project.color);
  $('#project-backdrop').hidden = false;
  document.body.style.overflow = 'hidden';
  $('#dialog-close').focus();
}

function closeProject() {
  $('#project-backdrop').hidden = true;
  document.body.style.overflow = '';
  dialogReturn?.focus();
}

$('#dialog-close').addEventListener('click', closeProject);
$('#dialog-back').addEventListener('click', closeProject);

$('#project-backdrop').addEventListener('click', ev => {
  if (ev.target.id === 'project-backdrop') closeProject();
});

document.addEventListener('keydown', ev => {
  if (ev.key === 'Escape' && !$('#project-backdrop').hidden) closeProject();
});

const projectGrid = $('#projects-grid');

projects.forEach(project => {
  const article = e('article', 'project-card');
  article.style.setProperty('--accent', project.color);

  article.append(
    e('div', 'project-icon', project.icon),
    e('span', 'project-type', project.type),
    e('h3', '', project.title),
    e('p', '', project.description),
    e('div', 'project-outcome', '✦ ' + project.metric)
  );

  const b = e('button', '', 'View details ↗');
  b.type = 'button';
  b.addEventListener('click', () => openProject(project));

  article.append(b);
  projectGrid.append(article);
});

// ==============================
// SPEAKING AND ENGAGEMENTS
// ==============================

const talks = [
  {
    category: 'Keynote',
    name: 'Gender Equality in Digital Transformation',
    context: 'University of Seychelles · Hackathon 2025',
    description: 'A keynote on women in tech and inclusive digital futures.',
    image: 'unisey2.jpeg',
    slides: 'Gender EQUALILTY.pdf'
  },
  {
    category: 'Technical session',
    name: 'Stakeholder Engagement: Digital Identity & eServices',
    context: 'Department of ICT & Trade Division · 2025',
    description: 'A practical workshop supporting the transition to digital identity and eServices.',
    video: 'Trade2.mp4'
  },
  {
    category: 'Talk',
    name: 'Technology as a Driver of Productivity',
    context: 'SITE Productivity Week · 2025',
    description: 'Exploring AI, automation and digital transformation at work and in education.',
    video: 'SITE3.mp4'
  },
  {
    category: 'Panel',
    name: 'The International Student Experience',
    context: 'Aston University Student Union',
    description: 'Experiences of studying and growing professionally as an international student.',
    image: 'SUTalk.png',
    slides: 'certificate.png'
  },
  {
    category: 'Pitch',
    name: 'Apollo Pitching Competition',
    context: 'Aston University',
    description: 'Business-model pitching and entrepreneurial storytelling.',
    image: 'Apollo.png'
  },
  {
    category: 'Guest speaker',
    name: 'Careers in Tech & Beyond',
    context: 'Independent School',
    description: 'Technology career pathways and the skills needed beyond programming.',
    image: 'IndeTalk.png',
    slides: 'Independent School Talk.pdf'
  },
  {
    category: 'Workshop',
    name: 'Youth Tech Workshop',
    context: 'Seychelles National Youth Council',
    description: 'Software delivery, version control and effective project planning.',
    image: 'SNYCTalk.png'
  }
];

const speaking = $('#speaking-grid');

talks.forEach(t => {
  const card = e('article', 'speaking-card reveal');
  const visual = e('div', 'speaking-image');
  const body = e('div', 'speaking-body');

  if (t.video) {
    const v = e('video');
    v.controls = true;
    v.preload = 'none';
    v.playsInline = true;
    v.setAttribute('aria-label', t.name + ' video');

    const src = e('source');
    src.src = 'assets/media/' + t.video;
    src.type = 'video/mp4';

    v.append(src);
    visual.append(v);
  } else if (t.image) {
    const img = e('img');
    img.src = 'assets/media/' + t.image;
    img.alt = t.name;
    img.loading = 'lazy';
    img.onerror = () => img.replaceWith(e('div', 'speaking-placeholder', 'Photo placeholder'));

    visual.append(img);
  } else {
    visual.append(e('div', 'speaking-placeholder', 'Media placeholder'));
  }

  body.append(
    e('span', 'eyebrow', t.category),
    e('h3', '', t.name),
    e('p', '', t.context),
    e('p', '', t.description)
  );

  if (t.slides) {
    const a = e('a', '', 'View supporting document ↗');
    a.href = 'assets/media/' + t.slides;
    a.target = '_blank';
    a.rel = 'noopener';
    body.append(a);
  }

  card.append(visual, body);
  speaking.append(card);
});

// ==============================
// ROTATING / TYPING HEADLINE
// ==============================

const words = [
  'AWS She Builds Mentee',
  'MBA in Cloud Computing',
  'Technology Consultant',
  'Aspiring Solutions Architect',
  'Lived & Worked in Ireland, UK and Seychelles'
];

const rotate = $('#rotating');
let wi = 0;
let n = words[0].length;
let erase = true;

function type() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  if (erase) {
    n--;
    rotate.textContent = words[wi].slice(0, n);

    if (n <= 0) {
      erase = false;
      wi = (wi + 1) % words.length;
      setTimeout(type, 240);
      return;
    }
  } else {
    n++;
    rotate.textContent = words[wi].slice(0, n);

    if (n >= words[wi].length) {
      erase = true;
      setTimeout(type, 1650);
      return;
    }
  }

  setTimeout(type, erase ? 35 : 58);
}

setTimeout(type, 1700);

// ==============================
// SCROLL REVEAL ANIMATIONS
// ==============================

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .07 });

  document.querySelectorAll('.reveal').forEach(x => observer.observe(x));
} else {
  document.querySelectorAll('.reveal').forEach(x => x.classList.add('visible'));
}
