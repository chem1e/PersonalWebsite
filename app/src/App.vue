<template>
  <div class="shell">
    <nav class="nav">
      <router-link to="/" class="nav-logo">
        <span class="logo-mark">✦</span>
        <span class="logo-name">Ryan Chen</span>
      </router-link>

      <div class="nav-links">
        <router-link to="/" class="nav-link" exact-active-class="active">Home</router-link>
        <router-link to="/work" class="nav-link" active-class="active">Work</router-link>
        <router-link to="/contact" class="nav-link" active-class="active">Contact</router-link>
      </div>

      <div class="nav-aside">
        <span class="clock">{{ timezone }} {{ time }}</span>
      </div>
    </nav>

    <main>
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="footer">
      <span>© 2026 Ryan Chen</span>
      <span class="footer-mid">Manufactured to life</span>
      <span>{{ timezone }} {{ time }}</span>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const time = ref('')
const timezone = ref('')

function updateTime() {
  const now = new Date()

  // Format time as HH:MM:SS
  time.value = now.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })

  // Derive GMT offset string e.g. "GMT-5" or "GMT+2"
  const offsetMinutes = -now.getTimezoneOffset()
  const sign = offsetMinutes >= 0 ? '+' : '-'
  const absHours = Math.floor(Math.abs(offsetMinutes) / 60)
  const absMins = Math.abs(offsetMinutes) % 60
  timezone.value =
    absMins > 0
      ? `GMT${sign}${absHours}:${String(absMins).padStart(2, '0')}`
      : `GMT${sign}${absHours}`
}

let ticker = null

onMounted(() => {
  updateTime()
  ticker = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  clearInterval(ticker)
})
</script>

<style scoped>
.shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.5rem;
  height: 60px;
  background: rgba(245, 239, 226, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--rule);
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-display);
  font-size: 15px;
  font-weight: 500;
  color: var(--ink);
  letter-spacing: 0.02em;
}

.logo-mark {
  color: var(--amber);
  font-size: 12px;
}

.nav-links {
  display: flex;
  gap: 2.5rem;
}

.nav-link {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-3);
  transition: color 0.2s;
  position: relative;
  padding-bottom: 1px;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--amber);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s ease;
}

.nav-link:hover,
.nav-link.active {
  color: var(--ink);
}
.nav-link:hover::after,
.nav-link.active::after {
  transform: scaleX(1);
}

.clock {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  color: var(--ink-3);
  font-variant-numeric: tabular-nums;
}

main {
  flex: 1;
  padding-top: 60px;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2.5rem;
  border-top: 1px solid var(--rule);
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-3);
}

.footer-mid {
  color: var(--amber);
}

@media (max-width: 768px) {
  .nav {
    padding: 0 1.25rem;
  }
  .nav-aside {
    display: none;
  }
  .nav-links {
    gap: 1.5rem;
  }
  .footer {
    padding: 1.25rem;
    flex-direction: column;
    gap: 4px;
    text-align: center;
  }
}
</style>
