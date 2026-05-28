<template>
  <div class="ct">
    <div class="ct-layout">
      <!-- LEFT -->
      <div class="ct-left">
        <p class="ct-label">003 / CONTACT</p>

        <h1 class="ct-title">LET'S<br />TALK</h1>

        <p class="ct-tagline">
          Let's create something meaningful together. Always passionate about design and community.
        </p>

        <div class="ct-rows">
          <div class="ct-row">
            <span class="ct-row-label ct-label">EMAIL</span>
            <a :href="'mailto:' + info.email" class="ct-link">{{ info.email }}</a>
          </div>

          <div class="ct-divider"></div>

          <div class="ct-row">
            <span class="ct-row-label ct-label">SOCIALS</span>
            <div class="ct-link-group">
              <a
                v-for="s in info.socials"
                :key="s.name"
                :href="s.url"
                target="_blank"
                class="ct-link"
                >{{ s.name }} →</a
              >
            </div>
          </div>

          <div class="ct-divider"></div>

          <div class="ct-row" v-if="info.links.length">
            <span class="ct-row-label ct-label">LINKS</span>
            <div class="ct-link-group">
              <a v-for="l in info.links" :key="l.name" :href="l.url" target="_blank" class="ct-link"
                >{{ l.name }} →</a
              >
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT -->
      <div class="ct-right">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=85"
          alt="Ryan Chen"
          class="ct-photo"
        />
        <div class="ct-stamp">SAY HELLO :)</div>
      </div>
    </div>

    <!-- FOOTER -->
    <footer class="ct-footer">
      <span class="ct-label ct-muted">© {{ year }} RYAN CHEN — ALL RIGHTS RESERVED</span>
      <span class="ct-label ct-muted">BASED IN NEW HAVEN & NYC</span>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      year: new Date().getFullYear(),
      info: {
        email: 'ryan.chen@yale.edu',
        socials: [
          { name: 'Instagram', url: 'https://instagram.com/' },
          { name: 'LinkedIn', url: 'https://linkedin.com/in/' },
          { name: 'Twitter / X', url: 'https://x.com/' },
        ],
        links: [
          { name: 'GitHub', url: 'https://github.com/' },
          { name: 'Read.cv', url: 'https://read.cv/' },
        ],
      },
    }
  },
}
</script>

<style scoped>
/* ── Root ─────────────────────────────────────────────────── */
.ct {
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - var(--rc-nav));
}

/* ── Shared atoms ─────────────────────────────────────────── */
.ct-label {
  font-family: var(--rc-mono);
  font-size: 10px;
  letter-spacing: 0.12em;
}
.ct-muted {
  color: var(--rc-muted);
}

/* ── Split layout ─────────────────────────────────────────── */
.ct-layout {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 42%;
}

/* ── LEFT ─────────────────────────────────────────────────── */
.ct-left {
  padding-top: clamp(44px, 6vw, 80px);
  padding-bottom: clamp(44px, 6vw, 64px);
  padding-left: var(--rc-pad);
  padding-right: var(--rc-pad);
  border-right: 1px solid var(--rc-rule);
  display: flex;
  flex-direction: column;
}

.ct-label {
  color: var(--rc-muted);
  margin-bottom: 28px;
}

.ct-title {
  font-family: var(--rc-display);
  font-size: clamp(72px, 10vw, 136px);
  font-weight: 400;
  line-height: 0.9;
  letter-spacing: 0.01em;
  color: var(--rc-ink);
  margin-bottom: 28px;
}

.ct-tagline {
  font-size: 15px;
  font-weight: 300;
  line-height: 1.7;
  color: var(--rc-muted);
  max-width: 340px;
  margin-bottom: 52px;
}

/* ── Detail rows ──────────────────────────────────────────── */
.ct-rows {
  margin-top: auto;
  display: flex;
  flex-direction: column;
}

.ct-divider {
  height: 1px;
  background-color: var(--rc-rule);
}

.ct-row {
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: start;
  gap: 16px;
  padding-top: 20px;
  padding-bottom: 20px;
}

.ct-row-label {
  padding-top: 4px;
  color: var(--rc-muted);
}

.ct-link {
  display: inline-block;
  font-family: var(--rc-display);
  font-size: clamp(18px, 2vw, 26px);
  font-weight: 400;
  letter-spacing: 0.02em;
  color: var(--rc-ink);
  position: relative;
  transition: color 0.18s ease;
}

.ct-link::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 0;
  height: 1px;
  background-color: var(--rc-red);
  transition: width 0.28s ease;
}

.ct-link:hover {
  color: var(--rc-red);
}

.ct-link:hover::after {
  width: 100%;
}

.ct-link-group {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

/* ── RIGHT (photo) ────────────────────────────────────────── */
.ct-right {
  position: relative;
  overflow: hidden;
}

.ct-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 15%;
  min-height: 480px;
  filter: saturate(0.8);
}

.ct-stamp {
  position: absolute;
  bottom: 26px;
  right: 26px;
  background-color: var(--rc-paper);
  border: 1px solid var(--rc-ink);
  padding: 10px 18px;
  font-family: var(--rc-mono);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.14em;
  transform: rotate(-2deg);
}

/* ── FOOTER ───────────────────────────────────────────────── */
.ct-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: var(--rc-pad);
  padding-right: var(--rc-pad);
  border-top: 1px solid var(--rc-rule);
}

/* ── MOBILE ───────────────────────────────────────────────── */
@media (max-width: 768px) {
  .ct-layout {
    grid-template-columns: 1fr;
  }
  .ct-left {
    border-right: none;
  }
  .ct-right {
    display: none;
  }
  .ct-row {
    grid-template-columns: 80px 1fr;
  }
  .ct-footer {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
}
</style>
