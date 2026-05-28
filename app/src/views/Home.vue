<template>
  <div class="hm">
    <!-- HERO -->
    <section class="hm-hero">
      <div class="hm-hero-text">
        <p class="hm-eyebrow">001 / PORTFOLIO</p>
        <h1 class="hm-name">RYAN<br /><span class="hm-name-indent">CHEN</span></h1>
        <p class="hm-role">DESIGNER — CREATIVE TECHNOLOGIST</p>
      </div>
      <div class="hm-hero-photo">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=85"
          alt="Ryan Chen"
          class="hm-hero-img"
        />
        <div class="hm-badge">
          <span>AVAILABLE</span>
          <span>FOR WORK</span>
        </div>
      </div>
    </section>

    <!-- MARQUEE -->
    <div class="hm-marquee" aria-hidden="true">
      <div class="hm-marquee-a">
        BRAND STRATEGY <em>·</em> CREATIVE TECH <em>·</em> ILLUSTRATION <em>·</em> MOTION
        <em>·</em> PRODUCT DESIGN <em>·</em> UX RESEARCH <em>·</em>&nbsp;
      </div>
      <div class="hm-marquee-a" aria-hidden="true">
        BRAND STRATEGY <em>·</em> CREATIVE TECH <em>·</em> ILLUSTRATION <em>·</em> MOTION
        <em>·</em> PRODUCT DESIGN <em>·</em> UX RESEARCH <em>·</em>&nbsp;
      </div>
    </div>

    <!-- ABOUT -->
    <section class="hm-about rc-reveal">
      <p class="hm-section-label">ABOUT</p>
      <div class="hm-about-body">
        <p class="hm-about-copy">
          I'm a designer and creative technologist passionate about crafting meaningful digital
          experiences. I blend design thinking with technical execution to build products that
          resonate with people.
        </p>
        <router-link to="/works" class="hm-cta">VIEW MY WORKS →</router-link>
      </div>
    </section>

    <!-- SELECTED WORKS -->
    <section class="hm-sel">
      <div class="hm-sel-head">
        <p class="hm-section-label">SELECTED WORKS</p>
        <router-link to="/works" class="hm-see-all">SEE ALL →</router-link>
      </div>
      <ul class="hm-list">
        <li
          v-for="(w, i) in featured"
          :key="i"
          class="hm-list-item rc-reveal"
          @click="$router.push('/works')"
        >
          <span class="hm-item-num">{{ String(i + 1).padStart(2, '0') }}</span>
          <div class="hm-item-img">
            <img :src="w.img" :alt="w.title" />
          </div>
          <div class="hm-item-text">
            <strong class="hm-item-title">{{ w.title }}</strong>
            <span class="hm-item-tag">{{ w.tag }}</span>
          </div>
          <span class="hm-item-arrow">→</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      featured: [
        {
          title: 'Bento — Meals, Matched',
          tag: 'PRODUCT · 2025',
          img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80',
        },
        {
          title: 'YHack 2026',
          tag: 'CREATIVE TECH · 2026',
          img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80',
        },
        {
          title: 'ThinkPad X1 Carbon',
          tag: 'BRAND STRATEGY · 2026',
          img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80',
        },
      ],
    }
  },
  mounted() {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) setTimeout(() => e.target.classList.add('rc-visible'), i * 90)
        })
      },
      { threshold: 0.08 },
    )
    this.$el.querySelectorAll('.rc-reveal').forEach((el) => io.observe(el))
  },
}
</script>

<style scoped>
/* All class names are prefixed hm- (home) */

.hm {
  width: 100%;
}

/* ── HERO ─────────────────────────────────────────────────── */
.hm-hero {
  display: grid;
  grid-template-columns: 1fr 38%;
  border-bottom: 1px solid var(--rc-rule);
}

.hm-hero-text {
  padding-top: clamp(48px, 7vw, 96px);
  padding-bottom: clamp(48px, 7vw, 80px);
  padding-left: var(--rc-pad);
  padding-right: var(--rc-pad);
  border-right: 1px solid var(--rc-rule);
  display: flex;
  flex-direction: column;
}

.hm-eyebrow {
  font-family: var(--rc-mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  color: var(--rc-muted);
  margin-bottom: auto;
}

.hm-name {
  font-family: var(--rc-display);
  font-size: clamp(88px, 13vw, 188px);
  font-weight: 400;
  line-height: 0.9;
  letter-spacing: 0.01em;
  color: var(--rc-ink);
  margin-top: 28px;
  margin-bottom: 24px;
}

.hm-name-indent {
  display: inline-block;
  padding-left: 0.15em;
}

.hm-role {
  font-family: var(--rc-mono);
  font-size: 10px;
  letter-spacing: 0.16em;
  color: var(--rc-muted);
}

/* Photo column — stretches to match text height exactly */
.hm-hero-photo {
  position: relative;
}

.hm-hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 15%;
  filter: saturate(0.82);
}

.hm-badge {
  position: absolute;
  bottom: 22px;
  right: 22px;
  background-color: var(--rc-paper);
  border: 1px solid var(--rc-ink);
  padding: 10px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--rc-mono);
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.14em;
  line-height: 1.8;
}

/* ── MARQUEE ──────────────────────────────────────────────── */
/*
  Two identical divs, both animating from 0 to -100%.
  Second one starts at +100% so the two fill the track
  seamlessly — no JS, no gaps, no jumps.
*/
.hm-marquee {
  overflow: hidden;
  display: flex;
  background-color: var(--rc-ink);
  border-bottom: 1px solid var(--rc-rule);
}

.hm-marquee-a {
  flex-shrink: 0;
  white-space: nowrap;
  padding-top: 14px;
  padding-bottom: 14px;
  font-family: var(--rc-mono);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.14em;
  color: var(--rc-paper);
  animation: hm-scroll 26s linear infinite;
}

.hm-marquee-a:nth-child(2) {
  animation-delay: -13s;
}

.hm-marquee-a em {
  font-style: normal;
  color: var(--rc-red);
  margin-left: 20px;
  margin-right: 20px;
}

@keyframes hm-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

/* ── ABOUT ────────────────────────────────────────────────── */
.hm-about {
  display: grid;
  grid-template-columns: 200px 1fr;
  padding-top: clamp(52px, 6vw, 80px);
  padding-bottom: clamp(52px, 6vw, 80px);
  padding-left: var(--rc-pad);
  padding-right: var(--rc-pad);
  border-bottom: 1px solid var(--rc-rule);
  align-items: start;
}

.hm-section-label {
  font-family: var(--rc-mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  color: var(--rc-muted);
  padding-top: 5px;
}

.hm-about-body {
  max-width: 560px;
}

.hm-about-copy {
  font-size: clamp(17px, 2vw, 21px);
  font-weight: 300;
  line-height: 1.7;
  color: var(--rc-ink);
  margin-bottom: 36px;
}

.hm-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--rc-mono);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.12em;
  color: var(--rc-ink);
  border-bottom: 1px solid var(--rc-ink);
  padding-bottom: 3px;
  transition:
    gap 0.22s ease,
    color 0.18s ease,
    border-color 0.18s ease;
}

.hm-cta:hover {
  gap: 16px;
  color: var(--rc-red);
  border-bottom-color: var(--rc-red);
}

/* ── SELECTED WORKS ───────────────────────────────────────── */
.hm-sel {
  padding-top: clamp(52px, 6vw, 80px);
  padding-bottom: clamp(64px, 8vw, 100px);
  padding-left: var(--rc-pad);
  padding-right: var(--rc-pad);
}

.hm-sel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 36px;
}

.hm-see-all {
  font-family: var(--rc-mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  color: var(--rc-ink);
  transition:
    color 0.18s ease,
    letter-spacing 0.22s ease;
}

.hm-see-all:hover {
  color: var(--rc-red);
  letter-spacing: 0.2em;
}

.hm-list {
  list-style: none;
  border-top: 1px solid var(--rc-rule);
}

.hm-list-item {
  display: grid;
  grid-template-columns: 36px 96px 1fr 20px;
  align-items: center;
  gap: 24px;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: -10px;
  margin-right: -10px;
  border-bottom: 1px solid var(--rc-rule);
  cursor: pointer;
  transition: background-color 0.18s ease;
}

.hm-list-item:hover {
  background-color: var(--rc-dim);
}

.hm-item-num {
  font-family: var(--rc-mono);
  font-size: 9px;
  letter-spacing: 0.1em;
  color: var(--rc-muted);
}

.hm-item-img {
  width: 96px;
  height: 64px;
  overflow: hidden;
  flex-shrink: 0;
}

.hm-item-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.hm-list-item:hover .hm-item-img img {
  transform: scale(1.07);
}

.hm-item-text {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.hm-item-title {
  font-family: var(--rc-display);
  font-size: clamp(22px, 2.4vw, 32px);
  font-weight: 400;
  letter-spacing: 0.02em;
  line-height: 1;
}

.hm-item-tag {
  font-family: var(--rc-mono);
  font-size: 9px;
  letter-spacing: 0.1em;
  color: var(--rc-muted);
}

.hm-item-arrow {
  font-size: 15px;
  color: var(--rc-muted);
  justify-self: end;
  transition:
    transform 0.2s ease,
    color 0.18s ease;
}

.hm-list-item:hover .hm-item-arrow {
  transform: translateX(4px);
  color: var(--rc-red);
}

/* ── MOBILE ───────────────────────────────────────────────── */
@media (max-width: 760px) {
  .hm-hero {
    grid-template-columns: 1fr;
  }
  .hm-hero-text {
    border-right: none;
    border-bottom: 1px solid var(--rc-rule);
  }
  .hm-hero-photo {
    display: none;
  }
  .hm-about {
    grid-template-columns: 1fr;
    gap: 18px;
  }
  .hm-list-item {
    grid-template-columns: 28px 68px 1fr 16px;
    gap: 14px;
  }
  .hm-item-img {
    width: 68px;
    height: 46px;
  }
}
</style>
