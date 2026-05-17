<script setup>
const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/akileswar/' },
  { label: 'GitHub', href: 'https://github.com/HaythmKenway' },
  { label: 'Hack The Box', href: 'https://app.hackthebox.com/profile/837343' },
  { label: 'TryHackMe', href: 'https://tryhackme.com/p/442611' },
  { label: 'Medium', href: 'https://medium.com/@0x4kil' },
  { label: 'Email', href: 'mailto:akileswar2002@protonmail.com' },
]

const focusAreas = [
  'Application and web security testing',
  'Network fundamentals and security operations',
  'Linux, scripting, and security tooling',
  'CTF-style adversarial practice and writeups',
  'Secure development and vulnerability analysis',
  'Community mentoring and technical enablement',
]

const credentials = [
  'Cisco CyberOps Associate',
  'CCNA: Introduction to Networks',
  'Cisco CCNA (200-301) preparation',
  'Foundations of Operationalizing MITRE ATT&CK',
  'freeCodeCamp Responsive Web Design',
]

const timeline = [
  {
    title: 'Worldline Global Services',
    meta: 'Cybersecurity and technology professional',
    body:
      'Working in a production technology environment with a focus on disciplined security practice, reliability, and operational awareness.',
  },
  {
    title: 'OWASP Chennai Institute of Technology',
    meta: 'Chapter leader and community contributor',
    body:
      'Recognized by OWASP as part of the chapter leadership team, supporting security learning, awareness, and peer mentorship.',
  },
  {
    title: 'Chennai Institute of Technology',
    meta: 'B.E. Computer Science and Engineering, 2020-2024',
    body:
      'Graduated after building a foundation across software engineering, cybersecurity fundamentals, CTF practice, and community leadership.',
  },
]

const projects = [
  {
    name: 'Farmfresh',
    href: 'https://github.com/HaythmKenway/farmfresh',
    description:
      'Application concept built to connect farmers directly with buyers and reduce dependence on intermediaries.',
  },
  {
    name: 'IvyHouse',
    description:
      'CTF box development project focused on practical vulnerability discovery and challenge design.',
  },
  {
    name: 'Security Labs',
    description:
      'Hands-on practice across Hack The Box, TryHackMe, Burp Suite Academy, Linux privilege escalation, and web exploitation labs.',
  },
]
</script>

<template>
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Akileswar PrathapKumar home">AP</a>
    <nav aria-label="Primary navigation">
      <a href="#work">Work</a>
      <a href="#security">Security</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main id="top">
    <section class="hero section">
      <div class="hero-copy">
        <p class="eyebrow">Cybersecurity professional · Chennai, India</p>
        <h1>Akileswar PrathapKumar</h1>
        <p class="lede">
          I work at the intersection of application security, offensive security practice,
          and secure engineering. My background combines production technology work,
          hands-on labs, and community leadership through OWASP.
        </p>
        <div class="actions" aria-label="Profile links">
          <a class="button primary" href="https://www.linkedin.com/in/akileswar/" target="_blank" rel="noreferrer">
            View LinkedIn
          </a>
          <a class="button secondary" href="mailto:akileswar2002@protonmail.com">
            Contact
          </a>
        </div>
      </div>

      <aside class="profile-panel" aria-label="Professional summary">
        <dl>
          <div>
            <dt>Current</dt>
            <dd>Worldline Global Services</dd>
          </div>
          <div>
            <dt>Education</dt>
            <dd>Chennai Institute of Technology, 2024</dd>
          </div>
          <div>
            <dt>Community</dt>
            <dd>OWASP Chennai Institute of Technology chapter leadership</dd>
          </div>
          <div>
            <dt>Practice</dt>
            <dd>Hack The Box, TryHackMe, PortSwigger, secure coding</dd>
          </div>
        </dl>
      </aside>
    </section>

    <section id="work" class="section">
      <div class="section-heading">
        <p class="eyebrow">Profile</p>
        <h2>Professional Background</h2>
      </div>
      <div class="timeline">
        <article v-for="item in timeline" :key="item.title" class="timeline-item">
          <p class="item-meta">{{ item.meta }}</p>
          <h3>{{ item.title }}</h3>
          <p>{{ item.body }}</p>
        </article>
      </div>
    </section>

    <section id="security" class="section split">
      <div>
        <p class="eyebrow">Security Practice</p>
        <h2>Focused on practical security skills that transfer to real systems.</h2>
        <p>
          The emphasis is on understanding how systems fail, documenting the path clearly,
          and turning that knowledge into better engineering decisions.
        </p>
      </div>
      <div class="list-grid">
        <span v-for="area in focusAreas" :key="area">{{ area }}</span>
      </div>
    </section>

    <section class="section credentials">
      <div class="section-heading">
        <p class="eyebrow">Credentials</p>
        <h2>Certifications and Learning</h2>
      </div>
      <ul>
        <li v-for="credential in credentials" :key="credential">{{ credential }}</li>
      </ul>
    </section>

    <section id="projects" class="section">
      <div class="section-heading">
        <p class="eyebrow">Selected Work</p>
        <h2>Projects and Labs</h2>
      </div>
      <div class="cards">
        <article v-for="project in projects" :key="project.name" class="card">
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

    <section id="contact" class="section contact">
      <div>
        <p class="eyebrow">Contact</p>
        <h2>Security, engineering, and community work.</h2>
      </div>
      <div class="contact-links">
        <a v-for="link in links" :key="link.label" :href="link.href" target="_blank" rel="noreferrer">
          {{ link.label }}
        </a>
      </div>
    </section>
  </main>
</template>
