<template>
  <div class="home">
    <!-- HERO -->
    <section class="hero">
      <div class="container">
        <div class="hero-top">
          <span class="greeting">✦ Engineer and Innovater</span>
          <div class="hero-photo-mobile">
            <img src="/pfp.png" alt="Your photo" />
          </div>
        </div>

        <div class="hero-body">
          <div class="hero-left">
            <h1 class="hero-heading">Hello,<br />I'm <em>Ryan Chen</em></h1>
            <p class="hero-sub">
              a senior at Staten Island Technical High School with a passion for engineering,
              technology, and building impactful projects. I’m especially interested in
              problem-solving through design, software, and innovation, and I’m always looking for
              opportunities to learn, collaborate, and create meaningful solutions.
            </p>
            <div class="hero-cta">
              <router-link to="/work" class="cta-primary">See my work</router-link>
              <router-link to="/contact" class="cta-ghost">Say hello</router-link>
            </div>
          </div>

          <div class="hero-right">
            <div class="hero-photo-wrap">
              <img src="/pfp.png" alt="Your photo" class="hero-photo" />
              <span class="photo-tag">📍 Staten Island</span>
            </div>
          </div>
        </div>

        <div class="hero-scroll">
          <span>scroll</span>
          <div class="scroll-rule"></div>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="about">
      <div class="container">
        <div class="about-eyebrow">
          <span class="eyebrow-line"></span>
          <span class="eyebrow-text">About me</span>
        </div>

        <div class="about-layout">
          <div class="about-image-side">
            <img src="/me.png" alt="About photo" class="about-photo" />
          </div>

          <div class="about-text-side">
            <h2 class="about-heading">A bit more <br /><em>about me</em></h2>
            <p class="about-p">
              I'm an aspiring engineer driven by precision, clean architecture, and hands-on
              building. My technical toolkit spans software development,
              <strong>Arduino prototyping</strong>, and 3D modeling in
              <strong>Autodesk Inventor and AutoCAD</strong>. I love diving into the details that
              bridge physical hardware with digital design.
            </p>
            <p class="about-p">
              Outside of engineering, I'm a leader and community builder. As
              <strong>Vice President of the Korean Culture Club</strong> and
              <strong>Historian for the Asian American Culture Club</strong>, I directed prepared
              and performed the clubs for the schools multicultural shows. I also manage digital
              engagement as the <strong>Social Media Manager for the Archery Club</strong>, bringing
              creative communication to everything I do.
            </p>

            <div class="counters">
              <div class="counter" v-for="s in stats" :key="s.label">
                <em class="counter-num">{{ s.value }}</em>
                <span class="counter-label">{{ s.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section class="skills">
      <div class="container">
        <div class="skills-intro">
          <div class="about-eyebrow">
            <span class="eyebrow-line"></span>
            <span class="eyebrow-text">Skills</span>
          </div>
          <h2 class="skills-heading">A small view into my skills</h2>
        </div>

        <div class="skills-body">
          <div class="skill-item" v-for="cat in skillCategories" :key="cat.name">
            <h3 class="skill-title">{{ cat.name }}</h3>
            <ul class="skill-pills">
              <li v-for="s in cat.skills" :key="s">{{ s }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const stats = [
  { value: '5+', label: 'Projects' },
  { value: '3+', label: 'Years of CAD Experience' },
  { value: '1+', label: 'Internships' },
]
const skillCategories = [
  { name: 'CAD', skills: ['AutoCAD', 'Inventor', 'Blender', '3DSMax', 'Fusion'] },
  { name: 'Web Development', skills: ['Vue', 'React', 'Pinia', 'Tailwind CSS'] },
  {
    name: 'Collboration',
    skills: ['Teamwork', 'Conflict resolution', 'Presentation Skills', 'Public Speaking'],
  },
  {
    name: 'Leadership',
    skills: ['Project leadership', 'Project Management', 'Mentoring', 'Adaptibility'],
  },
]
</script>

<style scoped>
/* ─── HERO ─────────────────────────────────────────── */
.hero {
  padding: 5rem 0 4rem;
}

.hero-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
}

.greeting {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink-3);
}

.hero-photo-mobile {
  display: none;
}

.hero-body {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 5rem;
  align-items: end;
  padding-bottom: 4rem;
  border-bottom: 1px solid var(--rule);
}

.hero-heading {
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 7vw, 5.5rem);
  font-weight: 400;
  line-height: 1.05;
  color: var(--ink);
  margin-bottom: 1.75rem;
}

.hero-heading em {
  font-style: italic;
  color: var(--amber);
}

.hero-sub {
  font-family: var(--font-body);
  font-size: 1.15rem;
  color: var(--ink-2);
  line-height: 1.85;
  max-width: 400px;
  margin-bottom: 2.75rem;
  font-weight: 300;
}

.hero-cta {
  display: flex;
  gap: 1.25rem;
  align-items: center;
}

.cta-primary {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--bg);
  background: var(--ink);
  padding: 0.75rem 1.75rem;
  transition: background 0.25s;
}
.cta-primary:hover {
  background: var(--amber);
}

.cta-ghost {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-2);
  position: relative;
  padding-bottom: 2px;
}
.cta-ghost::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--rule);
  transition: background 0.2s;
}
.cta-ghost:hover {
  color: var(--amber);
}
.cta-ghost:hover::after {
  background: var(--amber);
}

/* photo */
.hero-photo-wrap {
  position: relative;
}
.hero-photo {
  width: 100%;
  display: block;
  filter: sepia(15%) brightness(1.02);
  transition: filter 0.5s;
}
.hero-photo:hover {
  filter: sepia(4%);
}

.photo-tag {
  position: absolute;
  bottom: -1rem;
  left: 50%;
  transform: translateX(-50%);
  background: var(--bg-warm);
  border: 1px solid var(--rule);
  padding: 4px 12px;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  color: var(--ink-3);
  white-space: nowrap;
}

.hero-scroll {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 2rem;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-3);
}
.scroll-rule {
  flex: 1;
  max-width: 60px;
  height: 1px;
  background: var(--rule);
}

/* ─── ABOUT ─────────────────────────────────────────── */
.about {
  padding: 6rem 0 7rem;
  background: var(--bg-warm);
}

.about-eyebrow {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
}
.eyebrow-line {
  display: block;
  width: 32px;
  height: 1px;
  background: var(--ink-3);
}
.eyebrow-text {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink-3);
}

.about-layout {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 6rem;
  align-items: start;
}

.about-photo {
  width: 100%;
  display: block;
  filter: sepia(12%);
  transition: filter 0.4s;
}
.about-photo:hover {
  filter: sepia(2%);
}

.about-heading {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 400;
  line-height: 1.2;
  color: var(--ink);
  margin-bottom: 2rem;
}
.about-heading em {
  font-style: italic;
  color: var(--amber);
}

.about-p {
  font-family: var(--font-body);
  font-size: 1.08rem;
  color: var(--ink-2);
  line-height: 1.9;
  font-weight: 300;
  margin-bottom: 1.25rem;
  max-width: 500px;
}

.counters {
  display: flex;
  gap: 3rem;
  margin-top: 3.5rem;
  padding-top: 2.5rem;
  border-top: 1px solid var(--rule);
}
.counter {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.counter-num {
  font-family: var(--font-display);
  font-size: 2.4rem;
  font-style: italic;
  font-weight: 400;
  color: var(--amber);
  line-height: 1;
}
.counter-label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-3);
}

/* ─── SKILLS ─────────────────────────────────────────── */
.skills {
  padding: 6rem 0 8rem;
}

.skills-intro {
  margin-bottom: 3.5rem;
}
.skills-heading {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 400;
  color: var(--ink);
  margin-top: 0.5rem;
}

.skills-body {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
}

.skill-item {
  padding: 2rem;
  background: var(--bg-warm);
  border: 1px solid var(--rule);
  transition: box-shadow 0.3s;
}
.skill-item:hover {
  box-shadow: 0 4px 24px rgba(44, 36, 22, 0.07);
}

.skill-title {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--amber);
  margin-bottom: 1.25rem;
  font-weight: 400;
}

.skill-pills {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.skill-pills li {
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--ink-2);
  font-weight: 300;
  padding: 0.4rem 0;
  border-bottom: 1px solid var(--rule);
}
.skill-pills li:last-child {
  border-bottom: none;
}

/* ─── RESPONSIVE ─────────────────────────────────────── */
@media (max-width: 1024px) {
  .hero-body {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .hero-right {
    display: none;
  }
  .about-layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .about-image-side {
    display: none;
  }
  .skills-body {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .container {
    padding: 0 1.25rem;
  }
  .skills-body {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .counters {
    gap: 2rem;
    flex-wrap: wrap;
  }
  .hero-cta {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
