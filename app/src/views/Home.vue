<template>
  <div class="home">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-text">
        <h1 class="hero-name">RYAN<br />CHEN</h1>
        <p class="hero-sub">DESIGNER / CREATIVE TECHNOLOGIST</p>
      </div>
      <div class="hero-photo">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
          alt="Ryan Chen"
          class="hero-img"
        />
        <div class="photo-label">AVAILABLE FOR WORK</div>
      </div>
    </section>

    <!-- About -->
    <section class="about">
      <div class="about-content">
        <div class="about-tag">ABOUT</div>
        <div class="about-text">
          <p>
            I'm a designer and creative technologist passionate about crafting meaningful digital
            experiences. I blend design thinking with technical execution to build products that
            resonate with people.
          </p>
          <router-link to="/works" class="cta-link">VIEW MY WORKS →</router-link>
        </div>
      </div>
    </section>

    <!-- Ticker -->
    <div class="ticker-wrapper">
      <div class="ticker">
        <span v-for="n in 6" :key="n">
          BRAND STRATEGY &nbsp;&nbsp;·&nbsp;&nbsp; CREATIVE TECH &nbsp;&nbsp;·&nbsp;&nbsp;
          ILLUSTRATION &nbsp;&nbsp;·&nbsp;&nbsp; MOTION &nbsp;&nbsp;·&nbsp;&nbsp; PRODUCT
          &nbsp;&nbsp;·&nbsp;&nbsp; UX RESEARCH &nbsp;&nbsp;·&nbsp;&nbsp;
        </span>
      </div>
    </div>

    <!-- Featured Works -->
    <section class="featured">
      <div class="featured-header">
        <span class="section-label">SELECTED WORKS</span>
        <router-link to="/works" class="see-all">SEE ALL →</router-link>
      </div>
      <div class="featured-grid">
        <div
          v-for="(work, i) in featuredWorks"
          :key="i"
          class="featured-card reveal"
          @click="$router.push('/works')"
        >
          <div class="card-img">
            <img :src="work.img" :alt="work.title" />
          </div>
          <div class="card-info">
            <span class="card-num">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="card-title">{{ work.title }}</span>
            <span class="card-tag">{{ work.tag }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      featuredWorks: [
        {
          title: 'Bento — Meals, Matched',
          tag: 'PRODUCT',
          img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80',
        },
        {
          title: 'YHack 2026',
          tag: 'CREATIVE TECH',
          img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
        },
        {
          title: 'ThinkPad Campaign',
          tag: 'BRAND STRATEGY',
          img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80',
        },
      ],
    }
  },
  mounted() {
    this.setupReveal()
  },
  methods: {
    setupReveal() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
              setTimeout(() => entry.target.classList.add('visible'), i * 80)
            }
          })
        },
        { threshold: 0.12 },
      )
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    },
  },
}
</script>

<style scoped>
.home {
  width: 100%;
}

/* ── Hero ─────────────────────────────────────────────────────────────────── */
/*
  KEY FIX: Removed `min-height: calc(100vh - 57px)` and `align-items: center`.
  The hero now sizes itself to its content. The photo column uses `align-self:
  stretch` so the image fills the full column height without creating empty
  space. gap is tightened and padding-bottom is added so the photo bleeds to
  the section edge naturally.
*/
.hero {
  display: grid;
  grid-template-columns: 1fr 42%;
  gap: 0;
  padding: 60px 0 0 40px;
  border-bottom: 1px solid var(--light-gray);
  overflow: hidden;
}

.hero-text {
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-right: 40px;
}

.hero-name {
  font-family: var(--font-display);
  font-size: clamp(80px, 11vw, 160px);
  font-weight: 800;
  line-height: 0.88;
  letter-spacing: -0.03em;
  color: var(--black);
}

.hero-sub {
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.18em;
  color: var(--gray);
  margin-top: 24px;
}

.hero-photo {
  position: relative;
  align-self: stretch; /* fills column height exactly — no dead space */
  overflow: hidden;
}

.hero-img {
  width: 100%;
  height: 100%;
  min-height: 420px;
  object-fit: cover;
  object-position: center 15%;
  display: block;
  filter: grayscale(15%);
}

.photo-label {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: var(--white);
  border: 1.5px solid var(--black);
  padding: 8px 14px;
  font-family: var(--font-display);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
}

/* ── About ────────────────────────────────────────────────────────────────── */
.about {
  padding: 70px 40px;
  border-bottom: 1px solid var(--light-gray);
}

.about-content {
  display: flex;
  gap: 60px;
  align-items: flex-start;
}

.about-tag {
  flex: 0 0 200px;
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: var(--gray);
  padding-top: 6px;
}

.about-text {
  flex: 1;
  font-size: 20px;
  font-weight: 300;
  line-height: 1.65;
  max-width: 580px;
}

.about-text p {
  margin-bottom: 36px;
}

.cta-link {
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--black);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 4px;
  border-bottom: 1.5px solid var(--black);
  transition: gap 0.2s;
}
.cta-link:hover {
  gap: 16px;
}

/* ── Ticker ───────────────────────────────────────────────────────────────── */
.ticker-wrapper {
  width: 100%;
  overflow: hidden;
}

.ticker {
  border-top: 1px solid var(--light-gray);
  border-bottom: 1px solid var(--light-gray);
  padding: 18px 0;
  background: var(--black);
  white-space: nowrap;
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: var(--white);
}

.ticker span {
  display: inline-block;
  animation: tickerScroll 30s linear infinite;
}

@keyframes tickerScroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* ── Featured Works ───────────────────────────────────────────────────────── */
.featured {
  padding: 70px 40px 80px;
}

.featured-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 44px;
}

.section-label {
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: var(--gray);
}

.see-all {
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--black);
  text-decoration: none;
  transition: letter-spacing 0.2s;
}
.see-all:hover {
  letter-spacing: 0.2em;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.featured-card {
  cursor: pointer;
  overflow: hidden;
}

.card-img {
  overflow: hidden;
  aspect-ratio: 3/2;
}

.card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.featured-card:hover .card-img img {
  transform: scale(1.05);
}

.card-info {
  display: flex;
  align-items: baseline;
  gap: 12px;
  padding: 14px 0 0;
}

.card-num {
  font-family: var(--font-display);
  font-size: 10px;
  font-weight: 700;
  color: var(--gray);
  letter-spacing: 0.1em;
}

.card-title {
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 700;
  flex: 1;
}

.card-tag {
  font-family: var(--font-display);
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: var(--gray);
  border: 1px solid var(--light-gray);
  padding: 3px 8px;
}

/* ── Mobile ───────────────────────────────────────────────────────────────── */
@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    padding: 50px 20px 0;
    gap: 40px;
  }
  .hero-text {
    padding-right: 0;
    padding-bottom: 0;
  }
  .hero-photo {
    margin: 0 -20px; /* bleed to edges on mobile */
  }
  .hero-img {
    min-height: 380px;
    aspect-ratio: 4/5;
    height: auto;
  }
  .about {
    padding: 50px 20px;
  }
  .about-content {
    flex-direction: column;
    gap: 24px;
  }
  .about-tag {
    flex: auto;
  }
  .featured {
    padding: 50px 20px 60px;
  }
  .featured-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>