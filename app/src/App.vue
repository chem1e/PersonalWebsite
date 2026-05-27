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

    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <div class="say-hello" @click="$router.push('/contact')">SAY HELLO :)</div>
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
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --black: #0a0a0a;
  --white: #f5f4f0;
  --gray: #888;
  --light-gray: #e8e7e3;
  --accent: #0a0a0a;
  --font-display: 'Syne', sans-serif;
  --font-body: 'DM Sans', sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--white);
  color: var(--black);
  font-family: var(--font-body);
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

/* #app is the main centered container */
#app {
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  background: var(--white);
  position: relative;
}

/* Navbar: always centered relative to viewport, stays inside #app */
.navbar {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 40px;
  background: var(--white);
  border-bottom: 1px solid var(--light-gray);
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  width: 100%;
  max-width: 1440px;
  /* No left/right:0 – uses transform to center */
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

.say-hello {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: var(--white);
  border: 1.5px solid var(--black);
  padding: 10px 18px;
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  cursor: pointer;
  z-index: 99;
  transition:
    background 0.2s,
    color 0.2s;
}

.say-hello:hover {
  background: var(--black);
  color: var(--white);
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

.main-content {
  padding-top: 57px;
  width: 100%;
}
</style>
