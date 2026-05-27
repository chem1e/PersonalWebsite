<template>
  <div id="app">
    <nav class="navbar">
      <div class="nav-left">BY RYAN CHEN ©</div>
      <div class="nav-center">
        <router-link to="/">HOME</router-link>
        <router-link to="/works">WORKS</router-link>
        <router-link to="/contact">CONTACT</router-link>
      </div>
      <div class="nav-right">NYC: {{ currentTime }}</div>
    </nav>

    <main class="page-container">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return { currentTime: '' }
  },
  mounted() {
    this.updateTime()
    setInterval(this.updateTime, 1000)
  },
  methods: {
    updateTime() {
      const now = new Date()
      this.currentTime = now.toLocaleTimeString('en-US', {
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
/* ---------- Global Reset & Fonts ---------- */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

:root {
  --black: #0a0a0a;
  --white: #f5f4f0;
  --gray: #888;
  --light-gray: #e8e7e3;
  --font-display: 'Syne', sans-serif;
  --font-body: 'DM Sans', sans-serif;
}

body {
  background: var(--white);
  color: var(--black);
  font-family: var(--font-body);
  overflow-x: hidden;
}

/* Centered App container */
#app {
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  background: var(--white);
  position: relative;
}

/* Navbar – fixed, centered, matches #app width */
.navbar {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 40px;
  background: var(--white);
  border-bottom: 1px solid var(--light-gray);
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  z-index: 100;
}

.nav-center {
  display: flex;
  gap: 40px;
}

.navbar a {
  text-decoration: none;
  color: var(--gray);
  transition: color 0.2s;
}

.navbar a:hover,
.navbar a.router-link-active {
  color: var(--black);
}

/* Page container – offsets fixed navbar */
.page-container {
  padding-top: 57px;
  width: 100%;
}

/* Page transitions */
.page-enter-active,
.page-leave-active {
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(16px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-16px);
}

/* Scroll reveal */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
