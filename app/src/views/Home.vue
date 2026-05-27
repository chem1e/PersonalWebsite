<template>
  <div class="home">
    <section class="hero">
      <div class="hero-text">
        <h1 class="hero-name">RYAN<br />CHEN</h1>
        <p class="hero-sub">DESIGNER / CREATIVE TECHNOLOGIST</p>
      </div>
      <div class="hero-photo reveal">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
          alt="Ryan Chen"
          class="hero-img"
        />
        <div class="photo-label">AVAILABLE FOR WORK</div>
      </div>
    </section>

    <section class="about-section">
      <div class="about-line reveal"></div>
      <div class="about-content">
        <div class="about-left reveal">
          <span class="about-tag">ABOUT</span>
        </div>
        <div class="about-right reveal">
          <p class="about-text">
            I'm a designer and creative technologist passionate about crafting meaningful digital
            experiences. I blend design thinking with technical execution to build products that
            resonate with people.
          </p>
          <router-link to="/works" class="cta-link">
            VIEW MY WORKS <span class="arrow">→</span>
          </router-link>
        </div>
      </div>
    </section>

    <div class="ticker-wrap reveal">
      <div class="ticker">
        <span v-for="n in 6" :key="n">
          BRAND STRATEGY &nbsp;&nbsp;·&nbsp;&nbsp; CREATIVE TECH &nbsp;&nbsp;·&nbsp;&nbsp;
          ILLUSTRATION &nbsp;&nbsp;·&nbsp;&nbsp; MOTION &nbsp;&nbsp;·&nbsp;&nbsp; PRODUCT
          &nbsp;&nbsp;·&nbsp;&nbsp; UX RESEARCH &nbsp;&nbsp;·&nbsp;&nbsp;
        </span>
      </div>
    </div>

    <section class="featured reveal">
      <div class="featured-header">
        <span class="section-label">SELECTED WORKS</span>
        <router-link to="/works" class="see-all">SEE ALL →</router-link>
      </div>
      <div class="featured-grid">
        <div
          v-for="(work, i) in featuredWorks"
          :key="i"
          class="featured-card"
          @click="$router.push('/works')"
        >
          <div class="card-img-wrap">
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
              setTimeout(() => {
                entry.target.classList.add('visible')
              }, i * 80)
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

.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 60px;
  padding: 80px 40px 0 40px;
  min-height: calc(100vh - 57px);
}

.hero-name {
  font-family: var(--font-display);
  font-size: clamp(70px, 10vw, 160px);
  font-weight: 800;
  line-height: 0.9;
  letter-spacing: -0.03em;
  color: var(--black);
}

.hero-sub {
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.18em;
  color: var(--gray);
  margin-top: 28px;
}

.hero-photo {
  position: relative;
  width: 100%;
  align-self: flex-end;
}

.hero-img {
  width: 100%;
  height: auto;
  aspect-ratio: 4/5;
  object-fit: cover;
  object-position: center 20%;
  display: block;
  filter: grayscale(15%);
  max-height: 80vh;
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

.about-section {
  padding: 80px 40px;
  border-top: 1px solid var(--light-gray);
}

.about-line {
  width: 100%;
  height: 1px;
  background: var(--black);
  margin-bottom: 60px;
}

.about-content {
  display: flex;
  gap: 60px;
  align-items: flex-start;
}

.about-left {
  flex: 0 0 200px;
}

.about-tag {
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: var(--gray);
}

.about-right {
  flex: 1;
}

.about-text {
  font-size: 22px;
  font-weight: 300;
  line-height: 1.6;
  max-width: 600px;
  margin-bottom: 40px;
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

.ticker-wrap {
  overflow: hidden;
  border-top: 1px solid var(--light-gray);
  border-bottom: 1px solid var(--light-gray);
  padding: 20px 0;
  background: var(--black);
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.ticker {
  display: flex;
  width: max-content;
  animation: ticker 30s linear infinite;
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: var(--white);
  white-space: nowrap;
}

@keyframes ticker {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.featured {
  padding: 80px 40px;
}

.featured-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 50px;
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
  gap: 30px;
}

.featured-card {
  cursor: pointer;
  overflow: hidden;
}

.card-img-wrap {
  overflow: hidden;
  aspect-ratio: 3/2;
}

.card-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
  display: block;
}

.featured-card:hover .card-img-wrap img {
  transform: scale(1.05);
}

.card-info {
  display: flex;
  align-items: baseline;
  gap: 12px;
  padding: 16px 0 0;
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

@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 60px 20px 0 20px;
  }
  .hero-img {
    aspect-ratio: 3/4;
  }
  .about-content {
    flex-direction: column;
    gap: 30px;
  }
  .about-left {
    flex: auto;
  }
  .featured-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .featured {
    padding: 60px 20px;
  }
  .about-section {
    padding: 60px 20px;
  }
}
</style>