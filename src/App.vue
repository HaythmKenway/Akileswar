<script setup>
const contactLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/akileswar/' },
  { label: 'GitHub', href: 'https://github.com/HaythmKenway' },
  { label: 'Email', href: 'mailto:hello@akileswar.com' },
  { label: 'Phone', href: 'tel:+917305645532' },
]

const skillGroups = [
  {
    title: 'Languages',
    items: ['C++23', 'SQL (Oracle, PostgreSQL)', 'Python', 'JavaScript', 'Go', 'Bash'],
  },
  {
    title: 'Payments',
    items: [
      'Acquiring/Issuing switch',
      'Authorization & reversal',
      'Pre-/incremental/deferred auth',
      'Dynamic Currency Conversion (DCC)',
      'UCOF',
      'Contactless (P22)',
      'Result-code mapping',
      'PCI DSS',
      'RBAC',
    ],
  },
  {
    title: 'Protocols',
    items: ['CTAP', 'NEXO/BSP (ISO 20022)', 'STRAPI', 'GICC', 'CUPS (UnionPay)', 'JLink (JCB)', 'VIP (Visa)'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Helm', 'GitLab CI/CD', 'CMake', 'Git'],
  },
  {
    title: 'Web',
    items: ['Vue', 'Nuxt', 'Node.js', 'Supabase', 'REST APIs'],
  },
  {
    title: 'AI / Tooling',
    items: ['ChromaDB', 'SQLite FTS5', 'Reinforcement learning (Thompson Sampling, Q-learning)', 'Agent orchestration'],
  },
]

const experience = [
  {
    company: 'Worldline',
    role: 'Associate Engineer — Payment Platform (WLP-FO)',
    meta: 'Sep 2023 – Present · Chennai, India',
    bullets: [
      'Own development and maintenance of C++23 processing functions on WLP-FO, a large-scale acquiring/issuing switch routing card transactions across 7+ schemes (Visa, Mastercard, JCB, UnionPay, Amex, Bancontact) over multiple regions.',
      'Integrated 6 acquiring/issuing gateway protocols end to end (CTAP, NEXO/BSP, GICC, CUPS, STRAPI, JLink) across 3 production instances in 4 regions (BE, CZ, AU, EU).',
      'Designed and built Botchestra, a self-improving AI agent that automates transaction debugging on WLP-FO — pairing semantic and full-text search (ChromaDB, SQLite FTS5) over a payment knowledge base with reinforcement learning and an agent-orchestration state machine — improving developer debugging productivity by 40–50%.',
      'Independently built, published, and maintain wlpfo-utils, a VS Code extension for WLP-FO developers (one-key breakpoint insertion, log viewing, compile/install instance actions), with 6,700+ installs on the VS Code Marketplace.',
    ],
  },
  {
    company: 'Flowfield',
    role: 'Full-Stack Developer (Intern)',
    meta: 'Nov 2022 · React Native, Node.js, MongoDB',
    bullets: [],
  },
  {
    company: 'DigitranIt',
    role: 'Full-Stack Developer (Intern)',
    meta: 'Nov 2021 · React, Node.js, MongoDB',
    bullets: [],
  },
]

const flagshipProjects = [
  {
    name: 'Botchestra',
    description:
      'Self-improving AI agent for WLP-FO transaction debugging — pairs semantic and full-text search (ChromaDB, SQLite FTS5) over a payments knowledge base with reinforcement learning and an agent-orchestration state machine. Improves developer debugging productivity by 40–50%.',
  },
  {
    name: 'wlpfo-utils',
    description:
      'VS Code extension for WLP-FO developers — one-key breakpoint insertion, log viewing, and compile/install instance actions. 6,700+ installs on the VS Code Marketplace.',
  },
  {
    name: 'mithaigarage.com',
    href: 'https://mithaigarage.com',
    description: 'Production e-commerce site built end to end (frontend, backend, hosting) for a freelance client — Vue, Nuxt, Supabase.',
  },
  {
    name: 'unsboxing.com',
    href: 'https://unsboxing.com',
    description: 'Second freelance client site delivered end to end from requirements to launch — Vue, Nuxt, Supabase.',
  },
]

const openSourceProjects = [
  {
    name: 'autoscout',
    href: 'https://github.com/HaythmKenway/autoscout',
    description: 'A recon server with several reconnaissance and automation functionalities, written in Go.',
  },
  {
    name: 'Anesthesia',
    href: 'https://github.com/HaythmKenway/Anesthesia',
    description: 'Personal home-lab configuration for provisioning workstations and mobile gear using Ansible and Bash.',
  },
]

const achievements = [
  { title: '2nd place — Google Cloud Hackathon', meta: '2024' },
  { title: '3rd place — Google Cloud Next Hackathon', meta: '2025' },
  { title: '3rd place — TechForum', meta: '2026' },
]

const leadership = [
  {
    org: 'OWASP — Chennai Institute of Technology',
    role: 'Founding Chapter Lead',
    body: 'Launched the chapter and ran hands-on pentesting and CTF sessions.',
  },
  {
    org: 'GDSC — Chennai Institute of Technology',
    role: 'Student Mentor',
    body: 'Led a MITRE ATT&CK workshop and helped organize GDSC-WOW.',
  },
]

const certifications = [
  'Google: Professional Cloud Architect',
  'AWS: Cloud Practitioner',
  'AWS: Data Protection',
  'Cisco: Introduction to Cybersecurity',
  'Cisco: Cybersecurity Essentials',
  'Cisco: Introduction to Packet Tracer',
  'Cisco: CyberOps Associate',
]
</script>

<template>
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Akileswar P home">AP</a>
    <nav aria-label="Primary navigation">
      <a href="#work">Work</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#achievements">Achievements</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main id="top">
    <section class="hero section">
      <div class="hero-copy">
        <p class="eyebrow">Payment Platform Engineer · Chennai, India</p>
        <h1>Akileswar P</h1>
        <p class="lede">
          I build and operate WLP-FO, a large-scale C++23 acquiring/issuing switch that
          authorizes and routes card transactions across Visa, Mastercard, JCB, UnionPay,
          Amex, and Bancontact — plus AI-powered developer tooling that speeds up payment
          debugging.
        </p>
        <div class="actions" aria-label="Profile links">
          <a class="button primary" href="https://www.linkedin.com/in/akileswar/" target="_blank" rel="noreferrer">
            View LinkedIn
          </a>
          <a class="button secondary" href="https://github.com/HaythmKenway" target="_blank" rel="noreferrer">
            View GitHub
          </a>
          <a class="button secondary" href="mailto:hello@akileswar.com">
            Contact
          </a>
        </div>
      </div>

      <aside class="profile-panel" aria-label="Professional summary">
        <dl>
          <div>
            <dt>Current</dt>
            <dd>Worldline — Payment Platform (WLP-FO)</dd>
          </div>
          <div>
            <dt>Experience</dt>
            <dd>~3 years in production payments engineering</dd>
          </div>
          <div>
            <dt>Education</dt>
            <dd>M.E. CSE, Chennai Institute of Technology (2024–2026)</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>Multi-protocol gateway integration, transaction debugging, AI dev tooling</dd>
          </div>
        </dl>
      </aside>
    </section>

    <section id="work" class="section">
      <div class="section-heading">
        <p class="eyebrow">Experience</p>
        <h2>Where I've Worked</h2>
      </div>
      <div class="timeline">
        <article v-for="item in experience" :key="item.company" class="timeline-item">
          <p class="item-meta">{{ item.meta }}</p>
          <h3>{{ item.role }} · {{ item.company }}</h3>
          <ul v-if="item.bullets.length">
            <li v-for="bullet in item.bullets" :key="bullet">{{ bullet }}</li>
          </ul>
        </article>
      </div>
    </section>

    <section id="skills" class="section">
      <div class="section-heading">
        <p class="eyebrow">Technical Skills</p>
        <h2>Tools and Domains I Work In</h2>
      </div>
      <div class="skill-groups">
        <article v-for="group in skillGroups" :key="group.title" class="skill-group">
          <h3>{{ group.title }}</h3>
          <div class="chips">
            <span v-for="item in group.items" :key="item" class="chip">{{ item }}</span>
          </div>
        </article>
      </div>
    </section>

    <section id="projects" class="section">
      <div class="section-heading">
        <p class="eyebrow">Selected Work</p>
        <h2>Flagship Projects</h2>
      </div>
      <div class="cards">
        <article v-for="project in flagshipProjects" :key="project.name" class="card">
          <h3>
            <a v-if="project.href" :href="project.href" target="_blank" rel="noreferrer">
              {{ project.name }}
            </a>
            <span v-else>{{ project.name }}</span>
          </h3>
          <p>{{ project.description }}</p>
        </article>
      </div>
    </section>

    <section class="section">
      <div class="section-heading">
        <p class="eyebrow">Open Source</p>
        <h2>Engineering &amp; Personal Projects</h2>
      </div>
      <div class="cards">
        <article v-for="project in openSourceProjects" :key="project.name" class="card">
          <h3>
            <a v-if="project.href" :href="project.href" target="_blank" rel="noreferrer">
              {{ project.name }}
            </a>
            <span v-else>{{ project.name }}</span>
          </h3>
          <p>{{ project.description }}</p>
        </article>
      </div>
    </section>

    <section id="achievements" class="section split">
      <div>
        <p class="eyebrow">Achievements</p>
        <h2>Hackathons and Competitions</h2>
        <div class="timeline">
          <article v-for="item in achievements" :key="item.title" class="timeline-item">
            <p class="item-meta">{{ item.meta }}</p>
            <h3>{{ item.title }}</h3>
          </article>
        </div>
      </div>
      <div>
        <p class="eyebrow">Leadership</p>
        <h2>Community Involvement</h2>
        <div class="timeline">
          <article v-for="item in leadership" :key="item.org" class="timeline-item">
            <p class="item-meta">{{ item.role }}</p>
            <h3>{{ item.org }}</h3>
            <p>{{ item.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section credentials">
      <div class="section-heading">
        <p class="eyebrow">Education &amp; Credentials</p>
        <h2>Certifications and Learning</h2>
      </div>
      <ul>
        <li v-for="credential in certifications" :key="credential">{{ credential }}</li>
      </ul>
    </section>

    <section id="contact" class="section contact">
      <div>
        <p class="eyebrow">Contact</p>
        <h2>Open to new opportunities in payments and platform engineering.</h2>
      </div>
      <div class="contact-links">
        <a v-for="link in contactLinks" :key="link.label" :href="link.href" target="_blank" rel="noreferrer">
          {{ link.label }}
        </a>
      </div>
    </section>
  </main>
</template>
