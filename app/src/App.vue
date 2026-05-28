<template>
  <div class="app-shell">
    <nav class="navbar">
      <router-link to="/" class="nav-logo">
        <span class="logo-bracket">[</span>
        <span class="logo-name">YOUR_NAME</span>
        <span class="logo-bracket">]</span>
      </router-link>

      <div class="nav-links">
        <router-link to="/" class="nav-link" exact-active-class="active">
          <span class="link-index">01</span>
          <span class="link-label">Home</span>
        </router-link>
        <router-link to="/work" class="nav-link" active-class="active">
          <span class="link-index">02</span>
          <span class="link-label">Work</span>
        </router-link>
        <router-link to="/contact" class="nav-link" active-class="active">
          <span class="link-index">03</span>
          <span class="link-label">Contact</span>
        </router-link>
      </div>

      <div class="nav-status">
        <span class="status-dot"></span>
        <span class="status-text">Available for work</span>
      </div>
    </nav>

    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="footer">
      <span class="footer-copy">© 2025 YOUR_NAME</span>
      <span class="footer-version">v1.0.0</span>
    </footer>
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  height: 64px;
  background: rgba(8, 12, 16, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
}

.nav-logo {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 16px;
  letter-spacing: 0.05em;
  color: var(--text-primary);
  transition: color 0.2s;
}

.nav-logo:hover .logo-name {
  color: var(--accent);
}

.logo-bracket {
  color: var(--accent);
  font-family: var(--font-mono);
}

.nav-links {
  display: flex;
  gap: 2.5rem;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--text-secondary);
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.05em;
  transition: color 0.2s;
  position: relative;
  padding-bottom: 2px;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s ease;
}

.nav-link:hover,
.nav-link.active {
  color: var(--text-primary);
}

.nav-link:hover::after,
.nav-link.active::after {
  transform: scaleX(1);
}

.link-index {
  color: var(--accent);
  font-size: 10px;
}

.link-label {
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.nav-status {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  color: var(--text-secondary);
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #00e676;
  box-shadow: 0 0 8px #00e676;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}

.main-content {
  flex: 1;
  padding-top: 64px;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 3rem;
  border-top: 1px solid var(--border);
  font-size: 11px;
  color: var(--text-muted);
  font-family: var(--font-mono);
}

.footer-version {
  color: var(--accent);
  opacity: 0.5;
}

@media (max-width: 768px) {
  .navbar {
    padding: 0 1.25rem;
  }
  .nav-status {
    display: none;
  }
  .nav-links {
    gap: 1.5rem;
  }
  .footer {
    padding: 1.25rem;
  }
}
</style>
