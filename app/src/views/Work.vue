<template>
  <div class="work">
    <!-- HEADER -->
    <section class="work-header">
      <div class="container">
        <div class="header-eyebrow">
          <span class="eyebrow-line"></span>
          <span class="eyebrow-text">Selected work</span>
        </div>
        <h1 class="work-heading">Things I've<br /><em>made & built</em></h1>
        <p class="work-subhead">Each project is a small story about a problem worth solving.</p>
      </div>
    </section>

    <!-- FILTERS -->
    <section class="filters-bar">
      <div class="container filters-inner">
        <button
          v-for="tag in filterTags"
          :key="tag"
          class="filter"
          :class="{ active: activeFilter === tag }"
          @click="activeFilter = tag"
        >
          {{ tag }}
        </button>
      </div>
    </section>

    <!-- PROJECT LIST -->
    <section class="project-list">
      <div class="container">
        <p v-if="filteredProjects.length === 0" class="empty">Nothing here for that filter yet.</p>

        <div v-for="(project, i) in filteredProjects" :key="project.title" class="project">
          <div class="project-image">
            <img :src="project.image" :alt="project.title" class="proj-img" />
          </div>

          <div class="project-content">
            <div class="project-top">
              <span class="proj-index">{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="proj-year">{{ project.year }}</span>
            </div>
            <h2 class="proj-title">{{ project.title }}</h2>
            <p class="proj-desc">{{ project.description }}</p>
            <div class="proj-tags">
              <span v-for="tag in project.tags" :key="tag" class="proj-tag">{{ tag }}</span>
            </div>
            <div class="proj-links">
              <a href="#" class="proj-link">Live →</a>
              <a href="#" class="proj-link">GitHub →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const filterTags = ['All', 'Backend', 'Frontend', 'Fullstack', 'Systems']
const activeFilter = ref('All')

const projects = [
  {
    title: 'Project Alpha',
    description:
      'A high-throughput data pipeline processing millions of events per second. Distributed architecture built for fault tolerance and quiet reliability.',
    tags: ['Python', 'Kafka', 'PostgreSQL'],
    category: 'Backend',
    year: '2024',
    image: 'https://placehold.co/700x440/e8dcc8/a0763a?text=Project+Alpha&font=playfair-display',
  },
  {
    title: 'Project Beta',
    description:
      'Real-time infrastructure monitoring dashboard with WebSocket streaming. Something between a control room and a calm morning.',
    tags: ['Vue', 'Go', 'InfluxDB'],
    category: 'Fullstack',
    year: '2024',
    image: 'https://placehold.co/700x440/ddd0b8/6b5a3e?text=Project+Beta&font=playfair-display',
  },
  {
    title: 'Project Gamma',
    description:
      'A CLI toolchain that turned a 45-minute deployment ritual into a 3-minute one. Small tool, large exhale.',
    tags: ['Rust', 'CLI', 'DevOps'],
    category: 'Systems',
    year: '2023',
    image: 'https://placehold.co/700x440/e8dcc8/4a6741?text=Project+Gamma&font=playfair-display',
  },
  {
    title: 'Project Delta',
    description:
      'A component library and design system used across five internal products. Accessibility-first, built to last.',
    tags: ['Vue', 'TypeScript', 'Storybook'],
    category: 'Frontend',
    year: '2023',
    image: 'https://placehold.co/700x440/ddd0b8/a0763a?text=Project+Delta&font=playfair-display',
  },
  {
    title: 'Project Epsilon',
    description:
      'Authentication microservice with OAuth 2.0, JWT, and MFA — quietly protecting half a million daily sessions.',
    tags: ['Go', 'Redis', 'PostgreSQL'],
    category: 'Backend',
    year: '2022',
    image: 'https://placehold.co/700x440/e8dcc8/6b5a3e?text=Project+Epsilon&font=playfair-display',
  },
  {
    title: 'Project Zeta',
    description:
      'A headless e-commerce storefront with edge caching and sub-100ms load times worldwide. Fast, but never rushed.',
    tags: ['Next.js', 'Node.js', 'Vercel'],
    category: 'Fullstack',
    year: '2022',
    image: 'https://placehold.co/700x440/ddd0b8/4a6741?text=Project+Zeta&font=playfair-display',
  },
]

const filteredProjects = computed(() =>
  activeFilter.value === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter.value),
)
</script>

<style scoped>
/* ─── HEADER ─────────────────────────────────────────── */
.work-header {
  padding: 5rem 0 4rem;
}

.header-eyebrow {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}
.eyebrow-line {
  display: block;
  width: 32px;
  height: 1px;
  background: var(--ink-3);
}
.eyebrow-text {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink-3);
}

.work-heading {
  font-family: var(--font-display);
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 400;
  line-height: 1.08;
  color: var(--ink);
  margin-bottom: 1.5rem;
}
.work-heading em {
  font-style: italic;
  color: var(--amber);
}

.work-subhead {
  font-family: var(--font-body);
  font-size: 1.1rem;
  color: var(--ink-2);
  font-weight: 300;
  line-height: 1.8;
  max-width: 420px;
}

/* ─── FILTERS ─────────────────────────────────────────── */
.filters-bar {
  padding: 1.25rem 0;
  background: var(--bg-warm);
  border-top: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
  position: sticky;
  top: 60px;
  z-index: 10;
  backdrop-filter: blur(8px);
}

.filters-inner {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.filter {
  padding: 0.4rem 1.1rem;
  background: transparent;
  border: 1px solid var(--rule);
  border-radius: 99px;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-3);
  cursor: pointer;
  transition: all 0.2s;
}
.filter:hover {
  border-color: var(--ink-2);
  color: var(--ink-2);
  background: var(--bg-card);
}
.filter.active {
  background: var(--ink);
  border-color: var(--ink);
  color: var(--bg);
}

/* ─── PROJECT LIST ────────────────────────────────────── */
.project-list {
  padding: 1px 0 8rem;
}

.empty {
  padding: 5rem 0;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  color: var(--ink-3);
  text-align: center;
}

.project {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  min-height: 420px;
  border-bottom: 1px solid var(--rule);
  transition: background 0.3s;
}
.project:hover {
  background: var(--bg-warm);
}

/* flip every other */
.project:nth-child(even) {
  grid-template-columns: 1fr 1.1fr;
}
.project:nth-child(even) .project-image {
  order: 2;
}
.project:nth-child(even) .project-content {
  order: 1;
}

.project-image {
  overflow: hidden;
}
.proj-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: sepia(14%) brightness(1.01);
  transition:
    transform 0.7s ease,
    filter 0.5s;
}
.project:hover .proj-img {
  transform: scale(1.035);
  filter: sepia(3%);
}

.project-content {
  padding: 3.5rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.1rem;
  border-left: 1px solid var(--rule);
}
.project:nth-child(even) .project-content {
  border-left: none;
  border-right: 1px solid var(--rule);
}

.project-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.proj-index,
.proj-year {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.15em;
  color: var(--ink-3);
}

.proj-title {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 2.5vw, 2.1rem);
  font-weight: 400;
  line-height: 1.2;
  color: var(--ink);
  transition: color 0.2s;
}
.project:hover .proj-title {
  color: var(--amber);
}

.proj-desc {
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--ink-2);
  line-height: 1.85;
  font-weight: 300;
}

.proj-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.proj-tag {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-3);
  background: var(--bg);
  border: 1px solid var(--rule);
  border-radius: 99px;
  padding: 3px 10px;
}

.proj-links {
  display: flex;
  gap: 1.5rem;
  padding-top: 0.25rem;
}
.proj-link {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-2);
  position: relative;
  padding-bottom: 2px;
}
.proj-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--rule);
  transition: background 0.2s;
}
.proj-link:hover {
  color: var(--amber);
}
.proj-link:hover::after {
  background: var(--amber);
}

/* ─── RESPONSIVE ─────────────────────────────────────── */
@media (max-width: 900px) {
  .project,
  .project:nth-child(even) {
    grid-template-columns: 1fr;
  }
  .project-image,
  .project:nth-child(even) .project-image {
    order: 0;
    height: 260px;
  }
  .project-content,
  .project:nth-child(even) .project-content {
    order: 0;
    border-left: none !important;
    border-right: none !important;
    border-top: 1px solid var(--rule);
    padding: 2.5rem 1.5rem;
  }
  .container {
    padding: 0 1.25rem;
  }
}
</style>
