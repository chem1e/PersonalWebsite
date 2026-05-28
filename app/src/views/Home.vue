<template>
  <div class="home">
    <section class="hero">
      <div class="hero-grid-bg"></div>
      <div class="hero-inner">
        <div class="hero-text">
          <p class="hero-greeting"><span class="cursor-blink">_</span> Hello, World.</p>
          <h1 class="hero-title">I'm <span class="gradient-text">YOUR NAME</span></h1>
          <h2 class="hero-subtitle">Software Engineer</h2>
          <p class="hero-desc">
            I design and build high-performance systems, scalable architectures, and clean
            interfaces. Based in <span class="accent-text">Your City</span> — building things that
            matter.
          </p>
          <div class="hero-actions">
            <router-link to="/work" class="btn-primary">
              View Work <span class="btn-arrow">→</span>
            </router-link>
            <router-link to="/contact" class="btn-ghost"> Get in Touch </router-link>
          </div>
        </div>

        <div class="hero-visual">
          <div class="avatar-frame">
            <img
              src="https://placehold.co/400x500/0d1117/00d4ff?text=YOUR+PHOTO&font=mono"
              alt="Profile photo placeholder"
              class="avatar-img"
            />
            <div class="avatar-glow"></div>
            <div class="avatar-corner tl"></div>
            <div class="avatar-corner tr"></div>
            <div class="avatar-corner bl"></div>
            <div class="avatar-corner br"></div>
          </div>
          <div class="floating-badge badge-1">
            <span class="badge-icon">⚡</span>
            <span>5+ years exp.</span>
          </div>
          <div class="floating-badge badge-2">
            <span class="badge-icon">🔧</span>
            <span>20+ projects</span>
          </div>
        </div>
      </div>

      <div class="hero-scroll-hint">
        <span>scroll</span>
        <div class="scroll-line"></div>
      </div>
    </section>

    <section class="about">
      <div class="container">
        <p class="section-label">// about me</p>
        <div class="about-grid">
          <div class="about-text">
            <h3 class="about-title">
              Engineer by trade,<br /><span class="gradient-text">problem solver</span> by nature.
            </h3>
            <p class="about-body">
              I specialize in building robust backend systems and modern frontend experiences. My
              work spans distributed systems, API design, cloud infrastructure, and product
              engineering.
            </p>
            <p class="about-body">
              When I'm not shipping code, I'm exploring new frameworks, contributing to open source,
              or writing about engineering challenges I've faced in production.
            </p>
            <div class="about-stats">
              <div class="stat-item" v-for="stat in stats" :key="stat.label">
                <span class="stat-value">{{ stat.value }}</span>
                <span class="stat-label">{{ stat.label }}</span>
              </div>
            </div>
          </div>
          <div class="about-image-col">
            <div class="about-img-frame">
              <img
                src="https://placehold.co/480x380/111820/7b61ff?text=IMAGE+2&font=mono"
                alt="About image placeholder"
                class="about-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="skills">
      <div class="container">
        <p class="section-label">// tech stack</p>
        <h3 class="skills-title">Tools I work with</h3>
        <div class="skills-grid">
          <div class="skill-category" v-for="cat in skillCategories" :key="cat.name">
            <p class="skill-cat-label">{{ cat.name }}</p>
            <div class="skill-tags">
              <span class="skill-tag" v-for="skill in cat.skills" :key="skill">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Shipped' },
  { value: '3', label: 'Companies' },
  { value: '∞', label: 'Coffee Consumed' },
]

const skillCategories = [
  {
    name: 'Languages',
    skills: ['Python', 'TypeScript', 'Go', 'Rust', 'SQL'],
  },
  {
    name: 'Frontend',
    skills: ['Vue', 'React', 'Next.js', 'CSS / Tailwind'],
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'FastAPI', 'PostgreSQL', 'Redis', 'GraphQL'],
  },
  {
    name: 'Infrastructure',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
  },
]
</script>

<style scoped>
.home {
  overflow-x: hidden;
}

.hero {
  position: relative;
  min-height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}

.hero-grid-bg {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 4rem;
  align-items: center;
  padding: 4rem 3rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.hero-greeting {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--accent);
  margin-bottom: 1rem;
  letter-spacing: 0.1em;
}

.cursor-blink {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 800;
  line-height: 1.05;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-family: var(--font-mono);
  font-size: clamp(1rem, 2vw, 1.3rem);
  font-weight: 400;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  letter-spacing: 0.08em;
}

.hero-desc {
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.8;
  max-width: 520px;
  margin-bottom: 2.5rem;
}

.accent-text {
  color: var(--accent);
}

.hero-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0.75rem 1.75rem;
  background: var(--accent);
  color: #000;
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border: none;
  transition: all 0.2s;
  clip-path: polygon(
    0 0,
    calc(100% - 10px) 0,
    100% 10px,
    100% 100%,
    10px 100%,
    0 calc(100% - 10px)
  );
}

.btn-primary:hover {
  background: #33ddff;
  transform: translateY(-2px);
}

.btn-arrow {
  transition: transform 0.2s;
}

.btn-primary:hover .btn-arrow {
  transform: translateX(4px);
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.75rem;
  background: transparent;
  color: var(--text-secondary);
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border: 1px solid var(--border-accent);
  transition: all 0.2s;
}

.btn-ghost:hover {
  color: var(--accent);
  border-color: var(--accent);
  background: var(--accent-dim);
}

.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
}

.avatar-frame {
  position: relative;
  width: 340px;
  height: 420px;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(20%) contrast(1.05);
  transition: filter 0.3s;
}

.avatar-frame:hover .avatar-img {
  filter: grayscale(0%) contrast(1.1);
}

.avatar-glow {
  position: absolute;
  inset: -1px;
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  z-index: -1;
  opacity: 0.4;
}

.avatar-corner {
  position: absolute;
  width: 16px;
  height: 16px;
  border-color: var(--accent);
  border-style: solid;
}

.avatar-corner.tl {
  top: -4px;
  left: -4px;
  border-width: 2px 0 0 2px;
}
.avatar-corner.tr {
  top: -4px;
  right: -4px;
  border-width: 2px 2px 0 0;
}
.avatar-corner.bl {
  bottom: -4px;
  left: -4px;
  border-width: 0 0 2px 2px;
}
.avatar-corner.br {
  bottom: -4px;
  right: -4px;
  border-width: 0 2px 2px 0;
}

.floating-badge {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  background: var(--bg-card);
  border: 1px solid var(--border-accent);
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-secondary);
  white-space: nowrap;
}

.badge-1 {
  bottom: 40px;
  left: -60px;
}
.badge-2 {
  top: 60px;
  right: -50px;
}

.badge-icon {
  font-size: 14px;
}

.hero-scroll-hint {
  position: absolute;
  bottom: 2rem;
  left: 3rem;
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.scroll-line {
  width: 40px;
  height: 1px;
  background: var(--text-muted);
  position: relative;
  overflow: hidden;
}

.scroll-line::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--accent);
  animation: scanline 2s linear infinite;
}

@keyframes scanline {
  to {
    left: 100%;
  }
}

.about {
  padding: 6rem 0;
  border-top: 1px solid var(--border);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
  margin-top: 2rem;
}

.about-title {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: 1.5rem;
}

.about-body {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.9;
  margin-bottom: 1rem;
}

.about-stats {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-value {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 800;
  color: var(--accent);
}

.stat-label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.about-img-frame {
  position: relative;
  border: 1px solid var(--border-accent);
  overflow: hidden;
}

.about-img-frame::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent), var(--accent2));
  z-index: 1;
}

.about-img {
  width: 100%;
  display: block;
  filter: grayscale(15%);
  transition: filter 0.3s;
}

.about-img:hover {
  filter: grayscale(0%);
}

.skills {
  padding: 5rem 0 7rem;
  border-top: 1px solid var(--border);
}

.skills-title {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3rem;
  margin-top: 0.5rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
}

.skill-category {
  background: var(--bg-card);
  border: 1px solid var(--border);
  padding: 1.5rem;
  transition: border-color 0.2s;
}

.skill-category:hover {
  border-color: var(--border-accent);
}

.skill-cat-label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1rem;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tag {
  padding: 5px 12px;
  background: rgba(0, 212, 255, 0.06);
  border: 1px solid rgba(0, 212, 255, 0.15);
  color: var(--text-secondary);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.05em;
  transition: all 0.15s;
}

.skill-tag:hover {
  background: var(--accent-dim);
  color: var(--accent);
  border-color: var(--accent-border);
}

@media (max-width: 1024px) {
  .hero-inner {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero-desc {
    margin: 0 auto 2.5rem;
  }
  .hero-actions {
    justify-content: center;
  }
  .hero-visual {
    display: none;
  }
  .about-grid {
    grid-template-columns: 1fr;
  }
  .about-image-col {
    display: none;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1.25rem;
  }
  .hero-inner {
    padding: 3rem 1.25rem;
  }
  .about-stats {
    gap: 1.25rem;
    flex-wrap: wrap;
  }
  .hero-scroll-hint {
    left: 1.25rem;
  }
}
</style>
