
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
    org: 'Department of ICT, Seychelles',
    date: 'January 2025 – January 2026',
    intro: 'Worked on government digital transformation, stakeholder requirements and user adoption across multiple initiatives.',
    metric: '10,000+ users · +60% system registrations',
    bullets: [
      'Contributed to approximately seven concurrent government digital projects.',
      'Gathered stakeholder needs and translated them into requirements, workflows and user journeys.',
      'Coordinated UAT, training and rollouts for 150+ government users.',
      'Contributed to a 60% increase in system registrations through adoption initiatives.'
    ]
  },
  {
    category: 'Professional',
    logo: 'EN',
    name: 'Chief Strategist Officer',
    org: 'Enigma Investment',
    date: 'October – December 2024',
    intro: 'Improved a tourism technology platform and streamlined operational and payment workflows.',
    metric: '+70% transactions · −45% late payments',
    bullets: [
      'Designed and developed a tourism technology platform using Laravel.',
      'Automated booking processes and operational notifications.',
      'Improved the customer journey and payment workflows.'
    ]
  },
  {
    category: 'Entrepreneurship',
    logo: 'ACJ',
    name: 'Founder & Technology Consultant',
    org: 'ACJ Konsult',
    date: 'May 2025 – January 2026',
    intro: 'Delivered technology consulting and practical digital solutions to government and private-sector clients.',
    metric: '+50% client revenue · −40% support queries',
    bullets: [
      'Implemented a Shopify-based e-commerce solution supporting client revenue growth.',
      'Built a government information website that reduced support enquiries.',
      'Managed client requirements, stakeholder engagement and solution recommendations.'
    ]
  },
  {
    category: 'Entrepreneurship',
    logo: 'AV',
    name: 'Founder',
    org: 'ActiveVerse',
    date: 'September 2024 – January 2026',
    intro: 'Launched and operated an activewear e-commerce venture.',
    metric: '300+ monthly orders · Break-even in 3 months',
    bullets: [
      'Managed online sales, customer experience and business operations.',
      '60% of sales came from repeat customers and word of mouth.'
    ]
  },
  {
    category: 'Internships',
    logo: 'AMZ',
    name: 'Operations Intern',
    org: 'Amazon, United Kingdom',
    date: 'July – September 2023',
    intro: 'Analysed UK linehaul operations and recommended process improvements.',
    metric: 'Graduate return offer',
    bullets: [
      'Consulted operational teams and managers to understand decision-making and workflows.',
      'Identified operational gaps, risks and unclear responsibilities.',
      'Presented recommendations for processes and documentation to senior management.'
    ]
  },
  {
    category: 'Internships',
    logo: 'DICT',
    name: 'Analyst Programmer Intern',
    org: 'Department of ICT',
    date: 'November 2020 – August 2021',
    intro: 'Supported application testing, development and user documentation.',
    metric: 'Government application delivery',
    bullets: [
      'Tested government applications before deployment.',
      'Produced user guides and assisted development.'
    ]
  },
  {
    category: 'Part-time',
    logo: 'SJ',
    name: 'Assistant Programmer',
    org: 'St James Exchange Hub',
    date: 'January – March 2022',
    intro: 'Translated trading rules into automated algorithmic functionality.',
    metric: 'MQL5',
    bullets: [
      'Built automated functionality based on foreign-exchange trading requirements.'
    ]
  },
  {
    category: 'Part-time',
    logo: 'OB',
    name: 'Retail Team Member',
    org: 'Oliver Bonas, Dublin',
    date: '2026',
    intro: 'Part-time customer-facing work alongside MBA studies.',
    metric: 'Customer experience & teamwork',
    bullets: [
      'Contributed to customer service and day-to-day retail operations.'
    ]
  },
  {
    category: 'Leadership',
    logo: 'DBS',
    name: 'MBA Society Vice President',
    org: 'Dublin Business School',
    date: '2026',
    intro: 'Supported society events and student engagement.',
    metric: 'Student leadership',
    bullets: [
      'Collaborated with student leaders and external stakeholders on MBA community activities.'
    ]
  },
  {
    category: 'Leadership',
    logo: 'DBS',
    name: 'Class Representative',
    org: 'Dublin Business School',
    date: '2026',
    intro: 'Represented the class and supported communication with faculty.',
    metric: 'Student representation',
    bullets: [
      'Contributed to communication of student concerns and feedback.'
    ]
  },
  {
    category: 'Volunteering',
    logo: '+',
    name: 'Volunteering Experience',
    org: 'Details to be added',
    date: 'Coming soon',
    intro: 'Reserved for volunteering activities you would like to showcase.',
    metric: 'Content placeholder',
    bullets: ['Replace this entry when ready.']
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
  'Award-Winning Speaker',
  'Aspiring Solutions Architect',
  'Lived & Worked in Three Countries'
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
