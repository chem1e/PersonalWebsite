<template>
  <div class="works-page">
    <div class="page-header">
      <h1 class="page-title reveal">WORKS</h1>
      <div class="filters reveal">
        <button
          v-for="cat in categories"
          :key="cat"
          :class="['filter-btn', { active: activeFilter === cat }]"
          @click="activeFilter = cat"
        >
          {{ cat }}
        </button>
      </div>
    </div>

    <div class="works-grid">
      <div
        v-for="(work, i) in filteredWorks"
        :key="work.id"
        class="work-item reveal"
        :style="{ transitionDelay: (i % 3) * 80 + 'ms' }"
      >
        <div class="work-img-wrap">
          <img :src="work.img" :alt="work.title" class="work-img" />
          <div class="work-overlay">
            <span class="overlay-text">VIEW PROJECT →</span>
          </div>
        </div>
        <div class="work-meta">
          <div class="meta-top">
            <span class="work-category">{{ work.category }}</span>
            <span class="work-year">{{ work.year }}</span>
          </div>
          <h3 class="work-title">{{ work.title }}</h3>
          <p class="work-desc">{{ work.desc }}</p>
        </div>
      </div>
    </div>

    <div class="edit-hint reveal">
      <span>✦ Edit <code>works</code> array in Works.vue to add your own projects</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Works',
  data() {
    return {
      activeFilter: 'ALL',
      categories: [
        'ALL',
        'BRAND STRATEGY',
        'CREATIVE TECH',
        'ILLUSTRATION',
        'MOTION',
        'PRODUCT',
        'UX RESEARCH',
      ],
      works: [
        {
          id: 1,
          title: 'ThinkPad X1 Carbon',
          category: 'BRAND STRATEGY',
          year: '2026',
          desc: "End-to-end brand campaign for Lenovo's flagship laptop line. Strategy, visual identity, and launch assets.",
          img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80',
        },
        {
          id: 2,
          title: 'Bento — Meals, Matched',
          category: 'PRODUCT',
          year: '2025',
          desc: 'A meal-plan matching app for college clubs and orgs. Designed the full product from zero to launch.',
          img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80',
        },
        {
          id: 3,
          title: 'YHack 2026',
          category: 'CREATIVE TECH',
          year: '2026',
          desc: "Full brand identity and website for Yale's flagship hackathon. 600+ hackers, 24 hours of building.",
          img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
        },
        {
          id: 4,
          title: 'Motion Reel',
          category: 'MOTION',
          year: '2025',
          desc: 'A collection of motion graphics and animation explorations across branding and UI contexts.',
          img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        },
        {
          id: 5,
          title: 'Community Zine Vol. 1',
          category: 'ILLUSTRATION',
          year: '2025',
          desc: "Original illustrations and editorial art for Yale's student-run design publication.",
          img: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=800&q=80',
        },
        {
          id: 6,
          title: 'Campus Wayfinding Study',
          category: 'UX RESEARCH',
          year: '2024',
          desc: 'Contextual inquiry and journey mapping for how students navigate campus spaces and digital tools.',
          img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80',
        },
      ],
    }
  },
  computed: {
    filteredWorks() {
      if (this.activeFilter === 'ALL') return this.works
      return this.works.filter((w) => w.category === this.activeFilter)
    },
  },
  mounted() {
    this.setupReveal()
  },
  updated() {
    this.$nextTick(() => this.setupReveal())
  },
  methods: {
    setupReveal() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add('visible')
          })
        },
        { threshold: 0.1 },
      )
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => observer.observe(el))
    },
  },
}
</script>

<style scoped>
.works-page {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 0 40px 0;
}

.page-header {
  padding: 60px 40px 40px 40px;
  border-bottom: 1px solid var(--light-gray);
}

.page-title {
  font-family: var(--font-display);
  font-size: clamp(60px, 10vw, 140px);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1;
  margin-bottom: 40px;
  white-space: normal;
  word-break: break-word;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.filter-btn {
  background: none;
  border: none;
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: var(--gray);
  cursor: pointer;
  padding: 0;
  transition: color 0.2s;
  position: relative;
}

.filter-btn.active {
  color: var(--black);
}

.filter-btn.active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 1.5px;
  background: var(--black);
}

.filter-btn:hover {
  color: var(--black);
}

.works-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border-top: 1px solid var(--light-gray);
}

.work-item {
  border-right: 1px solid var(--light-gray);
  border-bottom: 1px solid var(--light-gray);
  cursor: pointer;
  overflow: hidden;
}

.work-item:nth-child(3n) {
  border-right: none;
}

.work-img-wrap {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4/3;
}

.work-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
}

.work-item:hover .work-img {
  transform: scale(1.06);
}

.work-overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 10, 10, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.35s ease;
}

.work-item:hover .work-overlay {
  opacity: 1;
}

.overlay-text {
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: #fff;
}

.work-meta {
  padding: 24px;
}

.meta-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.work-category {
  font-family: var(--font-display);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: var(--gray);
}

.work-year {
  font-family: var(--font-display);
  font-size: 9px;
  color: var(--gray);
  letter-spacing: 0.1em;
}

.work-title {
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
}

.work-desc {
  font-size: 13px;
  font-weight: 300;
  color: #555;
  line-height: 1.55;
}

.edit-hint {
  text-align: center;
  padding: 40px;
  font-size: 12px;
  color: var(--gray);
  border-top: 1px solid var(--light-gray);
}

.edit-hint code {
  background: var(--light-gray);
  padding: 2px 6px;
  font-size: 11px;
}

@media (max-width: 768px) {
  .page-header {
    padding: 40px 20px;
  }
  .works-grid {
    grid-template-columns: 1fr;
  }
  .work-item {
    border-right: none;
  }
  .work-meta {
    padding: 16px;
  }
  .edit-hint {
    padding: 30px 20px;
  }
}
</style>
