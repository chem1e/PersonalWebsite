<template>
  <div class="work-page">
    <div class="page-header">
      <div class="container">
        <p class="section-label">// selected work</p>
        <h1 class="page-title">Projects &<br /><span class="gradient-text">Case Studies</span></h1>
        <p class="page-desc">
          A selection of things I've built — from production systems to side experiments.
        </p>
      </div>
    </div>

    <div class="filter-bar">
      <div class="container">
        <div class="filters">
          <button
            v-for="tag in filterTags"
            :key="tag"
            class="filter-btn"
            :class="{ active: activeFilter === tag }"
            @click="activeFilter = tag"
          >
            {{ tag }}
          </button>
        </div>
      </div>
    </div>

    <section class="projects">
      <div class="container">
        <div class="projects-grid">
          <article
            v-for="(project, i) in filteredProjects"
            :key="project.title"
            class="project-card"
            :class="{ featured: project.featured }"
          >
            <div class="card-image-wrap">
              <img
                :src="project.image"
                :alt="`${project.title} screenshot placeholder`"
                class="card-image"
              />
              <div class="card-overlay">
                <div class="overlay-links">
                  <a href="#" class="overlay-btn"> <span>Live Demo</span> ↗ </a>
                  <a href="#" class="overlay-btn ghost"> <span>GitHub</span> → </a>
                </div>
              </div>
              <div class="card-index">{{ String(i + 1).padStart(2, '0') }}</div>
            </div>

            <div class="card-body">
              <div class="card-tags">
                <span class="card-tag" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
              </div>
              <h3 class="card-title">{{ project.title }}</h3>
              <p class="card-desc">{{ project.description }}</p>
              <div class="card-meta">
                <span class="card-year">{{ project.year }}</span>
                <span class="card-role">{{ project.role }}</span>
              </div>
            </div>
          </article>
        </div>

        <div v-if="filteredProjects.length === 0" class="no-results">
          <p>// no projects found for that filter</p>
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
      'A high-throughput data pipeline processing millions of events per second. Built with distributed architecture for fault tolerance and horizontal scalability.',
    tags: ['Python', 'Kafka', 'PostgreSQL'],
    category: 'Backend',
    year: '2024',
    role: 'Lead Engineer',
    featured: true,
    image: 'https://placehold.co/720x400/111820/00d4ff?text=PROJECT+SCREENSHOT&font=mono',
  },
  {
    title: 'Project Beta',
    description:
      'Real-time dashboard for infrastructure monitoring with WebSocket streaming, alerting, and automated runbooks.',
    tags: ['Vue', 'Go', 'InfluxDB'],
    category: 'Fullstack',
    year: '2024',
    role: 'Fullstack Engineer',
    featured: true,
    image: 'https://placehold.co/720x400/111820/7b61ff?text=PROJECT+SCREENSHOT&font=mono',
  },
  {
    title: 'Project Gamma',
    description:
      'CLI toolchain for automating deployment workflows. Reduced release time from 45 minutes to under 3.',
    tags: ['Rust', 'CLI', 'DevOps'],
    category: 'Systems',
    year: '2023',
    role: 'Solo Developer',
    featured: false,
    image: 'https://placehold.co/720x400/0d1117/00d4ff?text=PROJECT+SCREENSHOT&font=mono',
  },
  {
    title: 'Project Delta',
    description:
      'Component library and design system used across 5 internal products. Accessibility-first with full dark mode support.',
    tags: ['Vue', 'TypeScript', 'Storybook'],
    category: 'Frontend',
    year: '2023',
    role: 'Frontend Engineer',
    featured: false,
    image: 'https://placehold.co/720x400/0d1117/7b61ff?text=PROJECT+SCREENSHOT&font=mono',
  },
  {
    title: 'Project Epsilon',
    description:
      'Authentication microservice with OAuth 2.0, JWT, and MFA. Handles 500k daily active users.',
    tags: ['Go', 'Redis', 'PostgreSQL'],
    category: 'Backend',
    year: '2022',
    role: 'Backend Engineer',
    featured: false,
    image: 'https://placehold.co/720x400/111820/00d4ff?text=PROJECT+SCREENSHOT&font=mono',
  },
  {
    title: 'Project Zeta',
    description:
      'E-commerce platform with headless CMS, SSR, and edge-cached storefronts. Sub-100ms TTFB worldwide.',
    tags: ['Next.js', 'Node.js', 'Vercel'],
    category: 'Fullstack',
    year: '2022',
    role: 'Fullstack Engineer',
    featured: false,
    image: 'https://placehold.co/720x400/0d1117/7b61ff?text=PROJECT+SCREENSHOT&font=mono',
  },
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return projects
  return projects.filter((p) => p.category === activeFilter.value)
})
</script>

<style scoped>
.work-page {
  padding-bottom: 6rem;
}

.page-header {
  padding: 5rem 0 3rem;
  border-bottom: 1px solid var(--border);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
}

.page-title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

.page-desc {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--text-secondary);
  max-width: 500px;
  line-height: 1.8;
}

.filter-bar {
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 64px;
  background: rgba(8, 12, 16, 0.9);
  backdrop-filter: blur(12px);
  z-index: 10;
}

.filters {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 6px 16px;
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: all 0.15s;
}

.filter-btn:hover {
  border-color: var(--border-accent);
  color: var(--text-secondary);
}

.filter-btn.active {
  background: var(--accent-dim);
  border-color: var(--accent);
  color: var(--accent);
}

.projects {
  padding-top: 3rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.5rem;
}

.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  overflow: hidden;
  transition:
    border-color 0.2s,
    transform 0.2s;
  cursor: pointer;
}

.project-card:hover {
  border-color: var(--border-accent);
  transform: translateY(-3px);
}

.project-card.featured {
  grid-column: span 2;
}

.card-image-wrap {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 9;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition:
    transform 0.4s ease,
    filter 0.3s;
  filter: grayscale(20%);
}

.project-card:hover .card-image {
  transform: scale(1.04);
  filter: grayscale(0%);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(8, 12, 16, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.25s;
}

.project-card:hover .card-overlay {
  opacity: 1;
}

.overlay-links {
  display: flex;
  gap: 1rem;
}

.overlay-btn {
  padding: 9px 18px;
  background: var(--accent);
  color: #000;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.05em;
  transition: background 0.15s;
}

.overlay-btn.ghost {
  background: transparent;
  border: 1px solid var(--accent);
  color: var(--accent);
}

.overlay-btn.ghost:hover {
  background: var(--accent-dim);
}

.card-index {
  position: absolute;
  top: 12px;
  right: 14px;
  font-family: var(--font-mono);
  font-size: 10px;
  color: rgba(0, 212, 255, 0.5);
  letter-spacing: 0.1em;
}

.card-body {
  padding: 1.5rem;
}

.card-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 0.75rem;
}

.card-tag {
  padding: 3px 8px;
  background: rgba(123, 97, 255, 0.08);
  border: 1px solid rgba(123, 97, 255, 0.2);
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.05em;
  color: #a08aff;
}

.card-title {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  transition: color 0.15s;
}

.project-card:hover .card-title {
  color: var(--accent);
}

.card-desc {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1rem;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
}

.card-year {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-muted);
}

.card-role {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--accent);
  opacity: 0.7;
}

.no-results {
  text-align: center;
  padding: 4rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 13px;
}

@media (max-width: 1024px) {
  .project-card.featured {
    grid-column: span 1;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1.25rem;
  }
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
