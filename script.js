const state = {
  data: null
};

const ICONS = {
  email: 'assets/icon-email.svg',
  linkedin: 'assets/icon-linkedin.svg',
  location: 'assets/icon-location.svg',
  instagram: 'assets/icon-instagram.svg',
  whatsapp: 'assets/icon-whatsapp.svg',
  default: 'assets/icon-contact.svg'
};

async function loadData() {
  try {
    const res = await fetch('data.json', { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to load data.json');
    state.data = await res.json();
    renderFromData();
  } catch (err) {
    console.warn('data.json not found, using defaults', err);
    state.data = getDefaultData();
    renderFromData();
  }
}

function getDefaultData() {
  return {
    name: "Vedant Joshi",
    email: "hello@example.com",
    location: "India",
    available: "Freelance",
    tagline: "Crafting web and mobile apps with clean design and real impact.",
    intro: "A Software Engineer specializing in Android development. I build reliable, performant, and user‑friendly solutions.",
    aboutDescription: "Passionate Software Engineer with hands‑on experience delivering functional and well‑structured solutions in Android development. I focus on clean, efficient code and continuous learning.",
    resumeUrl: "#",
    linkedin: "https://linkedin.com/in/vedant-joshi-03a99838a/?skipRedirect=true",
    github: "#",
    services: [
      { title: "Web Development", description: "Responsive, modern sites with clean code and user‑friendly design." },
      { title: "App Development", description: "Android and cross‑platform apps focusing on performance and UX." },
      { title: "Database & Backend", description: "Secure databases and well‑structured APIs for web/mobile apps." },
      { title: "Maintenance & Optimization", description: "Improve performance, fix bugs, and keep systems reliable." }
    ],
    skills: ["JavaScript", "TypeScript", "React", "Node.js", "HTML/CSS", "Tailwind", "Flutter", "Dart", "Python", "Git/GitHub"],
    certificates: [
      { title: "Distributed Version Control Using Git", url: "#" },
      { title: "Mobile App Development using Flutter", url: "#" },
      { title: "Artificial Intelligence Fundamentals", url: "#" }
    ],
    portfolio: [
      { title: "Modern Web Starter", type: "web", image: "assets/placeholder-web.svg", description: "Responsive and accessible web template.", demo: "#", code: "#" },
      { title: "ChatBuddy", type: "mobile", image: "assets/placeholder-mobile.svg", description: "Lightweight chat UI prototype.", demo: "#", code: "#" },
      { title: "WordWave", type: "web", image: "assets/placeholder-web2.svg", description: "Clean blog layout with MD content.", demo: "#", code: "#" }
    ],
    contactNote: "I'm always open to discussing new projects, ideas, or opportunities.",
    contactMethods: [
      { type: "email", label: "Email", value: "hello@example.com", href: "mailto:hello@example.com" },
      { type: "linkedin", label: "LinkedIn", value: "linkedin.com/in/your-profile", href: "https://linkedin.com" },
      { type: "whatsapp", label: "WhatsApp", value: "+91 90000 00000", href: "https://wa.me/919000000000" },
      { type: "location", label: "Location", value: "India" }
    ]
  };
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el && typeof text === 'string') el.textContent = text;
}

function setHref(id, href) {
  const el = document.getElementById(id);
  if (el && typeof href === 'string' && href !== '#') el.href = href;
}

function renderFromData() {
  const d = state.data;
  setText('nameHeading', `${d.name} 👋`);
  setText('tagline', d.tagline);
  setText('intro', d.intro);
  setText('aboutDescription', d.aboutDescription || "Passionate Software Engineer with hands‑on experience delivering functional and well‑structured solutions. I focus on clean, efficient code and continuous learning.");
  setText('metaName', d.name);
  const emailLink = document.getElementById('metaEmail');
  if (emailLink) { emailLink.textContent = d.email; emailLink.href = `mailto:${d.email}`; }
  setText('metaLocation', d.location);
  setText('metaAvailable', d.available);
  setHref('downloadResume', d.resumeUrl);
  setHref('aboutResumeBtn', d.resumeUrl);
  setHref('aboutLinkedInBtn', d.linkedin);
  setText('footerName', d.name);
  setHref('footerGithub', d.github);
  setText('contactNote', d.contactNote || "I'm always open to discussing new projects, ideas, or opportunities.");
  setText('year', String(new Date().getFullYear()));

  // Services
  const servicesList = document.getElementById('servicesList');
  servicesList.innerHTML = '';
  d.services.forEach(svc => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h5>${svc.title}</h5><p>${svc.description}</p>`;
    servicesList.appendChild(card);
  });

  // Skills
  const skillsList = document.getElementById('skillsList');
  skillsList.innerHTML = '';
  d.skills.forEach(skill => {
    const chip = document.createElement('span');
    chip.className = 'chip';
    chip.textContent = skill;
    skillsList.appendChild(chip);
  });

  // Certificates
  const certList = document.getElementById('certList');
  certList.innerHTML = '';
  d.certificates.forEach(cert => {
    const row = document.createElement('div');
    row.className = 'cert';
    const a = cert.url && cert.url !== '#'
      ? `<a href="${cert.url}" target="_blank" rel="noopener">View Certificate</a>`
      : `<span class="badge">No link</span>`;
    row.innerHTML = `<span>${cert.title}</span>${a}`;
    certList.appendChild(row);
  });

  // Portfolio
  renderPortfolio(d.portfolio);
  renderContactCards(d);
}

function renderPortfolio(items) {
  const grid = document.getElementById('portfolioGrid');
  grid.innerHTML = '';
  items.forEach(item => {
    const el = document.createElement('div');
    el.className = 'tile';
    el.dataset.type = item.type;
    el.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="tile-body">
        <div class="badge"># ${item.type}</div>
        <h5>${item.title}</h5>
        <p class="muted">${item.description}</p>
        <div class="tile-actions">
          ${item.demo && item.demo !== '#' ? `<a class="btn" href="${item.demo}" target="_blank" rel="noopener">Live</a>` : ''}
          ${item.code && item.code !== '#' ? `<a class="btn ghost" href="${item.code}" target="_blank" rel="noopener">Code</a>` : ''}
        </div>
      </div>
    `;
    grid.appendChild(el);
  });
}

function filterPortfolio(type) {
  const tiles = document.querySelectorAll('#portfolioGrid .tile');
  tiles.forEach(t => {
    if (type === 'all' || t.dataset.type === type) {
      t.style.display = '';
    } else {
      t.style.display = 'none';
    }
  });
}

function setupFilters() {
  const tabs = document.querySelectorAll('#portfolioFilters .tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      filterPortfolio(tab.dataset.filter);
    });
  });
}

function setupNav() {
  const toggle = document.getElementById('navToggle');
  const list = document.getElementById('navList');
  toggle.addEventListener('click', () => {
    list.classList.toggle('open');
  });
  document.querySelectorAll('.nav-list a').forEach(a => {
    a.addEventListener('click', () => list.classList.remove('open'));
  });
}

function setupForm() {
  const form = document.getElementById('contactForm');
  const toast = document.getElementById('toast');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = String(fd.get('name') || '').trim();
    const email = String(fd.get('email') || '').trim();
    const message = String(fd.get('message') || '').trim();
    if (!name || !email || !message) {
      showToast('Please complete all fields.');
      return;
    }
    showToast('Thanks! Your message was recorded (demo).');
    form.reset();
  });

  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
  }
}

function renderContactCards(data) {
  const cardsWrap = document.getElementById('contactCards');
  if (!cardsWrap) return;

  cardsWrap.innerHTML = '';
  const methods = Array.isArray(data.contactMethods) ? data.contactMethods : [];

  if (!methods.length) {
    const fallback = document.createElement('p');
    fallback.className = 'muted';
    fallback.textContent = 'Reach out via LinkedIn or email.';
    cardsWrap.appendChild(fallback);
    return;
  }

  methods.forEach(method => {
    const card = document.createElement('div');
    card.className = 'contact-card';

    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'icon';
    const iconSrc = method.icon || ICONS[method.type] || ICONS.default;
    if (iconSrc) {
      const img = document.createElement('img');
      img.src = iconSrc;
      img.alt = `${method.label || method.type || 'contact'} icon`;
      iconWrapper.appendChild(img);
    } else {
      iconWrapper.textContent = (method.label || method.type || '?').slice(0, 1).toUpperCase();
    }
    card.appendChild(iconWrapper);

    const details = document.createElement('div');
    details.className = 'details';
    const label = document.createElement('span');
    label.textContent = method.label || method.type || 'Contact';
    details.appendChild(label);

    const valueText = method.value || '';
    if (method.href) {
      const link = document.createElement('a');
      link.href = method.href;
      const isExternal = !method.href.startsWith('mailto:') && !method.href.startsWith('tel:');
      if (isExternal) {
        link.target = '_blank';
        link.rel = 'noopener';
      }
      link.textContent = valueText;
      details.appendChild(link);
    } else {
      const strong = document.createElement('strong');
      strong.textContent = valueText;
      details.appendChild(strong);
    }

    card.appendChild(details);
    cardsWrap.appendChild(card);
  });
}

window.addEventListener('DOMContentLoaded', async () => {
  setupNav();
  setupFilters();
  setupForm();
  await loadData();
});


