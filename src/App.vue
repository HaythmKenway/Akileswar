<script setup>
import { ref, onMounted, onUnmounted, defineAsyncComponent } from 'vue'
import CredlyBadges from './components/CredlyBadges.vue'

const ThreeBackground = defineAsyncComponent(() => import('./components/ThreeBackground.vue'))

function haptic(duration = 10) {
  if (typeof navigator !== 'undefined' && navigator.vibrate) {
    try {
      navigator.vibrate(duration)
    } catch {
      // vibration not permitted/supported — ignore
    }
  }
}

const fullGreeting = "Hello, I'm Akileswar PrathapKumar"
const greeting = ref('')

const scrollY = ref(0)
let ticking = false
function onScroll() {
  if (ticking) return
  ticking = true
  window.requestAnimationFrame(() => {
    scrollY.value = window.scrollY
    ticking = false
  })
}

const navItems = [
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]
const activeSection = ref('')
let sectionObserver

onMounted(() => {
  let i = 0
  const typeInterval = setInterval(() => {
    i += 1
    greeting.value = fullGreeting.slice(0, i)
    if (i >= fullGreeting.length) clearInterval(typeInterval)
  }, 45)

  window.addEventListener('scroll', onScroll, { passive: true })

  sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id !== activeSection.value) {
          activeSection.value = entry.target.id
          haptic(4)
        }
      })
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
  )
  navItems.forEach((item) => {
    const el = document.getElementById(item.id)
    if (el) sectionObserver.observe(el)
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  sectionObserver?.disconnect()
})

const personas = [
  {
    key: 'payments',
    label: 'Payment Engineering',
    eyebrow: 'Payment Engineering Specialist · Chennai, India',
    lede: 'I specialize in building and operating WLP-FO, a large-scale C++ acquiring/issuing switch that authorizes and routes card transactions across Visa, Mastercard, JCB, UnionPay, Amex, and Bancontact.',
    focus: 'Multi-protocol gateway integration, transaction debugging, PCI DSS',
  },
  {
    key: 'security',
    label: 'Cybersecurity',
    eyebrow: 'Cybersecurity Specialist · Chennai, India',
    lede: 'I specialize in applying a security-first lens to production systems — PCI DSS controls on a live payments switch, hands-on CTF and pentesting practice, and OWASP chapter leadership.',
    focus: 'Application security, PCI DSS, offensive security practice (HTB, TryHackMe)',
  },
  {
    key: 'agentic',
    label: 'AI Orchestration',
    eyebrow: 'AI Orchestration Expert · Chennai, India',
    lede: 'I specialize in designing and shipping AI agents and AI-assisted tooling — from a self-improving debugging agent in production to full-stack apps built end to end with AI-accelerated workflows.',
    focus: 'Agent orchestration, RAG (ChromaDB/SQLite FTS5), reinforcement learning, rapid AI-assisted shipping',
  },
]

const activePersona = ref(personas[0].key)

const credlyUrl = 'https://www.credly.com/users/akileswar-p/badges'

const contactLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/akileswar/', icon: 'fa-brands fa-linkedin' },
  { label: 'GitHub', href: 'https://github.com/HaythmKenway', icon: 'fa-brands fa-github' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/fireclasher/', icon: 'fa-brands fa-leetcode' },
  { label: 'Hack The Box', href: 'https://app.hackthebox.com/profile/837343', icon: 'fa-solid fa-shield-halved' },
  { label: 'TryHackMe', href: 'https://tryhackme.com/p/442611', icon: 'fa-solid fa-bug' },
  { label: 'Email', href: 'mailto:hello@akileswar.com', icon: 'fa-solid fa-envelope' },
]

const skillGroups = [
  {
    title: 'Languages',
    items: ['C++', 'SQL (Oracle, PostgreSQL)', 'Python', 'JavaScript', 'Go', 'Bash'],
  },
  {
    title: 'Payments',
    items: ['Acquiring/Issuing switch', 'Authorization & reversal', 'Pre-/incremental/deferred auth', 'Contactless', 'ISO 8583', 'PCI DSS'],
  },
  {
    title: 'Security',
    items: ['PCI DSS', 'OWASP Top 10', 'MITRE ATT&CK', 'Threat modeling', 'CTF & pentesting (HTB, TryHackMe)'],
  },
  {
    title: 'Protocols',
    items: ['CTAP', 'NEXO (ISO 20022)', 'BSP', 'STRAPI', 'GICC', 'CUPS (UnionPay)', 'JLink (JCB)', 'VIP (Visa)'],
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
    title: 'AI / Agentic Tooling',
    items: ['ChromaDB', 'SQLite FTS5', 'Reinforcement Learning', 'Agent orchestration'],
  },
]

const experience = [
  {
    company: 'Worldline',
    role: 'Associate Engineer — Payment Platform (WLP-FO)',
    meta: 'Sep 2023 – Present · Chennai, India',
    bullets: [
      'Own development and maintenance of C++ processing functions on WLP-FO, a large-scale acquiring/issuing switch routing card transactions across 7+ schemes (Visa, Mastercard, JCB, UnionPay, Amex, Bancontact) over multiple regions.',
      'Integrated 6 acquiring/issuing gateway protocols end to end (CTAP, NEXO/BSP, GICC, CUPS, STRAPI, JLink) across 3 production instances in 4 regions (BE, CZ, AU, EU).',
      'Designed and built Botchestra, a self-improving AI agent (internal project) that automates transaction debugging on WLP-FO — pairing semantic and full-text search (ChromaDB, SQLite FTS5) over a payment knowledge base with reinforcement learning and an agent-orchestration state machine — improving developer debugging productivity by 40–50%.',
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
    tag: 'Internal @ Worldline',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7476836712443211776/',
    linkLabel: 'Read the write-up on LinkedIn',
    description:
      'Self-improving AI agent for WLP-FO transaction debugging — pairs semantic and full-text search (ChromaDB, SQLite FTS5) over a payments knowledge base with reinforcement learning and an agent-orchestration state machine. Improves developer debugging productivity by 40–50%.',
  },
  {
    name: 'wlpfo-utils',
    tag: '6,700+ installs',
    href: 'https://marketplace.visualstudio.com/items?itemName=AkileswarPrathapKumar.wlpfo-utilities',
    linkLabel: 'View on VS Code Marketplace',
    description:
      'VS Code extension for WLP-FO developers — one-key breakpoint insertion, log viewing, and compile/install instance actions.',
  },
  {
    name: 'mithaigarage.com',
    href: 'https://mithaigarage.com',
    linkLabel: 'Visit site',
    description: 'Production e-commerce site built end to end (frontend, backend, hosting) for a freelance client — Vue, Nuxt, Supabase.',
  },
  {
    name: 'unsboxing.com',
    href: 'https://unsboxing.com',
    linkLabel: 'Visit site',
    description: 'Second freelance client site delivered end to end from requirements to launch — Vue, Nuxt, Supabase.',
  },
]

const openSourceProjects = [
  {
    name: 'autoscout',
    href: 'https://github.com/HaythmKenway/autoscout',
    description: 'A recon server with several reconnaissance and automation functionalities, written in Go.',
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


// Verified Credly badge embeds (credly.com/users/akileswar-p/badges).
const credlyBadges = [
  { id: '2c0658d4-e161-4a12-9d32-f44db8688488', label: 'Google: Professional Cloud Architect' },
  { id: 'e90f4037-5775-4c62-b09b-bad96df6300d', label: 'AWS Cloud Quest: Cloud Practitioner' },
  { id: 'a9a775ea-add3-4ec1-95dd-a36ae7669caa', label: 'AWS Knowledge: Data Protection & Disaster Recovery' },
  { id: '3b10867d-f400-4e1f-8e12-8f01103f4901', label: 'Cisco: CCNA — Introduction to Networks' },
  { id: '54cb74a3-6993-4188-8b69-3cd573ebf9d6', label: 'Cisco: Cybersecurity Essentials' },
  { id: '73024b7a-c6ef-4fb7-ab41-73ed35b7e28c', label: 'Cisco: Introduction to Packet Tracer' },
  { id: '733684d3-babb-4217-8227-ae745fd2d006', label: 'Cisco: CyberOps Associate' },
]
</script>

<template>
  <ThreeBackground />

  <header class="site-header" :class="{ scrolled: scrollY > 10 }">
    <a class="brand" href="#top" aria-label="Akileswar PrathapKumar home" @click="haptic()">
      <img src="/favicon-512.png" alt="" width="44" height="44" />
    </a>
    <nav aria-label="Primary navigation">
      <a
        v-for="item in navItems"
        :key="item.id"
        :href="'#' + item.id"
        :class="{ active: activeSection === item.id }"
        @click="haptic()"
      >
        {{ item.label }}
      </a>
    </nav>
  </header>

  <main id="top">
    <section class="hero section">
      <div class="hero-copy">
        <p class="typing">
          <span>{{ greeting }}</span><span class="cursor" aria-hidden="true"></span>
        </p>

        <div class="persona-toggle" role="tablist" aria-label="Areas of specialization">
          <button
            v-for="persona in personas"
            :key="persona.key"
            type="button"
            role="tab"
            :aria-selected="persona.key === activePersona"
            :class="['persona-pill', { active: persona.key === activePersona }]"
            @click="haptic(); activePersona = persona.key"
          >
            {{ persona.label }}
          </button>
        </div>

        <template v-for="persona in personas" :key="persona.key">
          <template v-if="persona.key === activePersona">
            <p class="eyebrow">{{ persona.eyebrow }}</p>
            <h1>Akileswar PrathapKumar</h1>
            <p class="lede">{{ persona.lede }}</p>
          </template>
        </template>

        <div class="actions" aria-label="Profile links">
          <a class="button primary" href="https://www.linkedin.com/in/akileswar/" target="_blank" rel="noreferrer" @click="haptic()">
            <i class="fa-brands fa-linkedin" aria-hidden="true"></i> View LinkedIn
          </a>
          <a class="button secondary" href="https://github.com/HaythmKenway" target="_blank" rel="noreferrer" @click="haptic()">
            <i class="fa-brands fa-github" aria-hidden="true"></i> View GitHub
          </a>
          <a class="button secondary" href="mailto:hello@akileswar.com" @click="haptic()">
            <i class="fa-solid fa-envelope" aria-hidden="true"></i> Contact
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
            <dd>
              <template v-for="persona in personas" :key="persona.key">
                <template v-if="persona.key === activePersona">{{ persona.focus }}</template>
              </template>
            </dd>
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
          <h3>{{ project.name }}</h3>
          <p v-if="project.tag" class="item-meta">{{ project.tag }}</p>
          <p>{{ project.description }}</p>
          <a v-if="project.href" :href="project.href" target="_blank" rel="noreferrer" class="card-link" @click="haptic()">
            {{ project.linkLabel }} →
          </a>
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
            <a v-if="project.href" :href="project.href" target="_blank" rel="noreferrer" @click="haptic()">
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
      <a class="credly-cta" :href="credlyUrl" target="_blank" rel="noreferrer" @click="haptic()">
        <i class="fa-solid fa-award" aria-hidden="true"></i>
        View verified badges on Credly →
      </a>
      <CredlyBadges v-if="credlyBadges.length" :badges="credlyBadges" />
    </section>

    <section id="contact" class="section contact">
      <div>
        <p class="eyebrow">Contact</p>
        <h2>Open to new opportunities in payments, security, and AI-agentic engineering.</h2>
      </div>
      <div class="contact-links">
        <a
          v-for="link in contactLinks"
          :key="link.label"
          :href="link.href"
          target="_blank"
          rel="noreferrer"
          @click="haptic()"
        >
          <i :class="link.icon" aria-hidden="true"></i> {{ link.label }}
        </a>
      </div>
    </section>
  </main>
</template>
