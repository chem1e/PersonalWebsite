<template>
  <div id="rc-app">
    <header id="rc-nav">
      <span class="rc-nav-brand">BY RYAN CHEN ©</span>
      <nav class="rc-nav-links">
        <router-link to="/" exact>HOME</router-link>
        <router-link to="/works">WORKS</router-link>
        <router-link to="/contact">CONTACT</router-link>
      </nav>
      <span class="rc-nav-clock">NYC — {{ time }}</span>
    </header>
    <div id="rc-main">
      <router-view v-slot="{ Component }">
        <transition name="rc-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return { time: '' }
  },
  mounted() {
    this.tick()
    setInterval(this.tick, 1000)
  },
  methods: {
    tick() {
      this.time = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'America/New_York',
      })
    },
  },
}
</script>

<style>
/* ============================================================
   RYAN CHEN — GLOBAL CSS
   All selectors are prefixed rc- to avoid any conflicts.
   @import MUST be first.
   ============================================================ */

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Epilogue:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap');

/* ── Reset ────────────────────────────────────────────────── */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* ── Tokens ───────────────────────────────────────────────── */
:root {
  --rc-ink: #0d0c0a;
  --rc-paper: #f1efe9;
  --rc-dim: #e5e2d9;
  --rc-rule: #ccc9bf;
  --rc-muted: #928e88;
  --rc-red: #c63f27;

  --rc-display: 'Bebas Neue', sans-serif;
  --rc-body: 'Epilogue', sans-serif;
  --rc-mono: 'DM Mono', monospace;

  --rc-nav: 56px;
  --rc-pad: clamp(20px, 4vw, 56px);
}

/* ── Base ─────────────────────────────────────────────────── */
html {
  font-size: 16px;
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

body {
  background-color: var(--rc-paper);
  color: var(--rc-ink);
  font-family: var(--rc-body);
  font-weight: 300;
  line-height: 1.6;
  overflow-x: hidden;
}

img {
  display: block;
  max-width: 100%;
}

a {
  text-decoration: none;
}

/* ── App wrapper ──────────────────────────────────────────── */
#rc-app {
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  background-color: var(--rc-paper);
}

/* ── Navbar ───────────────────────────────────────────────── */
/*
  Uses left:0/right:0 + margin:auto so it never causes
  horizontal scroll the way left:50%/translateX does.
*/
#rc-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  height: var(--rc-nav);
  background-color: var(--rc-paper);
  border-bottom: 1px solid var(--rc-rule);
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: var(--rc-pad);
  padding-right: var(--rc-pad);
}

.rc-nav-brand,
.rc-nav-clock {
  font-family: var(--rc-mono);
  font-size: 10px;
  letter-spacing: 0.08em;
  color: var(--rc-muted);
  width: 160px;
}

.rc-nav-clock {
  text-align: right;
}

.rc-nav-links {
  display: flex;
  gap: 40px;
}

.rc-nav-links a {
  font-family: var(--rc-mono);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.14em;
  color: var(--rc-muted);
  transition: color 0.18s ease;
}

.rc-nav-links a:hover,
.rc-nav-links a.router-link-active,
.rc-nav-links a.router-link-exact-active {
  color: var(--rc-ink);
}

/* ── Page area ────────────────────────────────────────────── */
#rc-main {
  padding-top: var(--rc-nav);
}

/* ── Page transitions ─────────────────────────────────────── */
.rc-fade-enter-active,
.rc-fade-leave-active {
  transition:
    opacity 0.28s ease,
    transform 0.28s ease;
}
.rc-fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.rc-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* ── Scroll reveal (shared) ───────────────────────────────── */
.rc-reveal {
  opacity: 0;
  transform: translateY(28px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}
.rc-reveal.rc-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
