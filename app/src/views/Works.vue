<template>
  <div class="wk">
    <!-- HEADER -->
    <div class="wk-head">
      <div class="wk-head-top">
        <span class="wk-label">002 / WORKS</span>
        <span class="wk-label">{{ filteredWorks.length }} PROJECTS</span>
      </div>
      <h1 class="wk-title">WORKS</h1>
    </div>

    <!-- FILTERS -->
    <div class="wk-filters">
      <button
        v-for="cat in categories"
        :key="cat"
        :class="['wk-btn', { 'wk-btn-active': activeFilter === cat }]"
        @click="activeFilter = cat"
      >
        {{ cat }}
      </button>
    </div>

    <!-- GRID -->
    <ul class="wk-grid">
      <li
        v-for="(w, i) in filteredWorks"
        :key="w.id"
        class="wk-card rc-reveal"
        @click="openProject(w)"
      >
        <div class="wk-card-img">
          <img :src="w.img" :alt="w.title" />
          <div class="wk-card-over"><span class="wk-label">VIEW PROJECT →</span></div>
        </div>
        <div class="wk-card-body">
          <div class="wk-card-meta">
            <span class="wk-label wk-muted">{{ w.category }}</span>
            <span class="wk-label wk-muted">{{ w.year }}</span>
          </div>
          <h3 class="wk-card-name">{{ w.title }}</h3>
          <p class="wk-card-desc">{{ w.desc }}</p>
        </div>
        <span class="wk-card-num wk-label wk-muted">{{ String(i + 1).padStart(2, '0') }}</span>
      </li>
    </ul>
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
      return this.activeFilter === 'ALL'
        ? this.works
        : this.works.filter((w) => w.category === this.activeFilter)
    },
  },
  mounted() {
    this.observe()
  },
  updated() {
    this.observe()
  },
  methods: {
    observe() {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e, i) => {
            if (e.isIntersecting) setTimeout(() => e.target.classList.add('rc-visible'), i * 80)
          })
        },
        { threshold: 0.06 },
      )
      this.$el.querySelectorAll('.rc-reveal:not(.rc-visible)').forEach((el) => io.observe(el))
    },
    openProject(w) {
      console.log('open:', w.title)
    },
  },
}
</script>

<style scoped>
.wk {
  width: 100%;
}

/* ── Shared atoms ─────────────────────────────────────────── */
.wk-label {
  font-family: var(--rc-mono);
  font-size: 10px;
  letter-spacing: 0.12em;
}
.wk-muted {
  color: var(--rc-muted);
}

/* ── HEADER ───────────────────────────────────────────────── */
.wk-head {
  padding-top: clamp(40px, 5vw, 68px);
  padding-left: var(--rc-pad);
  padding-right: var(--rc-pad);
  padding-bottom: 0;
  border-bottom: 1px solid var(--rc-rule);
}

.wk-head-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}

.wk-title {
  font-family: var(--rc-display);
  font-size: clamp(72px, 11vw, 152px);
  font-weight: 400;
  line-height: 0.9;
  letter-spacing: 0.01em;
  color: var(--rc-ink);
  padding-bottom: clamp(24px, 3vw, 40px);
}

/* ── FILTERS ──────────────────────────────────────────────── */
.wk-filters {
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid var(--rc-rule);
  padding-left: var(--rc-pad);
}

.wk-btn {
  appearance: none;
  background: none;
  border: none;
  border-right: 1px solid var(--rc-rule);
  font-family: var(--rc-mono);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.12em;
  color: var(--rc-muted);
  cursor: pointer;
  padding: 15px 22px;
  transition:
    color 0.18s ease,
    background-color 0.18s ease;
}

.wk-btn:hover {
  color: var(--rc-ink);
}

.wk-btn-active {
  color: var(--rc-paper);
  background-color: var(--rc-ink);
}

/* ── GRID ─────────────────────────────────────────────────── */
.wk-grid {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-left: 1px solid var(--rc-rule);
}

.wk-card {
  position: relative;
  border-right: 1px solid var(--rc-rule);
  border-bottom: 1px solid var(--rc-rule);
  cursor: pointer;
  transition: background-color 0.18s ease;
}

.wk-card:hover {
  background-color: var(--rc-dim);
}

/* Ensure 3-col border-right resets on last column */
.wk-card:nth-child(3n) {
  border-right: none;
}

.wk-card-img {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
}

.wk-card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.88);
  transition: transform 0.55s ease;
}

.wk-card:hover .wk-card-img img {
  transform: scale(1.06);
}

.wk-card-over {
  position: absolute;
  inset: 0;
  background-color: rgba(13, 12, 10, 0.68);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.28s ease;
}

.wk-card:hover .wk-card-over {
  opacity: 1;
}

.wk-card-over .wk-label {
  color: var(--rc-paper);
}

.wk-card-body {
  padding: 20px 22px 26px 22px;
}

.wk-card-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.wk-card-name {
  font-family: var(--rc-display);
  font-size: clamp(18px, 1.6vw, 24px);
  font-weight: 400;
  letter-spacing: 0.02em;
  line-height: 1.05;
  color: var(--rc-ink);
  margin-bottom: 10px;
}

.wk-card-desc {
  font-size: 13px;
  font-weight: 300;
  line-height: 1.6;
  color: var(--rc-muted);
}

.wk-card-num {
  position: absolute;
  top: 14px;
  right: 14px;
  background-color: var(--rc-paper);
  padding: 3px 8px;
}

/* ── MOBILE ───────────────────────────────────────────────── */
@media (max-width: 900px) {
  .wk-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .wk-card:nth-child(3n) {
    border-right: 1px solid var(--rc-rule);
  }
  .wk-card:nth-child(2n) {
    border-right: none;
  }
}

@media (max-width: 540px) {
  .wk-grid {
    grid-template-columns: 1fr;
    border-left: none;
  }
  .wk-card,
  .wk-card:nth-child(2n),
  .wk-card:nth-child(3n) {
    border-right: none;
  }
  .wk-filters {
    padding-left: 0;
    overflow-x: auto;
    flex-wrap: nowrap;
  }
  .wk-btn {
    flex-shrink: 0;
  }
}
</style>
