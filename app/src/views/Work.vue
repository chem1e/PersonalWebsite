<template>
  <div class="work">
    <!-- HEADER -->
    <section class="work-header">
      <div class="container">
        <div class="header-eyebrow">
          <span class="eyebrow-line"></span>
          <span class="eyebrow-text">Selected work</span>
        </div>
        <h1 class="work-heading">Things I've<br /><em>made & built</em></h1>
        <p class="work-subhead">Each project is a small story about me.</p>
      </div>
    </section>

    <!-- FILTERS -->
    <section class="filters-bar">
      <div class="container filters-inner">
        <button
          v-for="tag in filterTags"
          :key="tag"
          class="filter"
          :class="{ active: activeFilter === tag }"
          @click="activeFilter = tag"
        >
          {{ tag }}
        </button>
      </div>
    </section>

    <!-- PROJECT LIST -->
    <section class="project-list">
      <div class="container">
        <p v-if="filteredProjects.length === 0" class="empty">Nothing here for that filter yet.</p>

        <div
          v-for="(project, i) in filteredProjects"
          :key="project.title"
          class="project"
          :class="{ 'is-cad': project.category === 'CAD' }"
          @click="project.category === 'CAD' ? openModal(project) : null"
        >
          <div class="project-image">
            <!-- Personal Website: show message instead of image -->
            <div v-if="project.category === 'Web Development'" class="website-placeholder">
              <div class="website-placeholder-inner">
                <span class="website-eye-icon">👁</span>
                <p class="website-placeholder-text">You're looking at it.</p>
                <span class="website-placeholder-sub">This very page.</span>
              </div>
            </div>
            <img v-else :src="project.image" :alt="project.title" class="proj-img" />
            <!-- CAD click hint -->
            <div v-if="project.category === 'CAD'" class="cad-hint">
              <span>Click to explore →</span>
            </div>
          </div>

          <div class="project-content">
            <div class="project-top">
              <span class="proj-index">{{ String(i + 1).padStart(2, '00') }}</span>
              <span class="proj-year">{{ project.year }}</span>
            </div>
            <h2 class="proj-title">{{ project.title }}</h2>
            <p class="proj-desc">{{ project.description }}</p>
            <div class="proj-tags">
              <span v-for="tag in project.tags" :key="tag" class="proj-tag">{{ tag }}</span>
            </div>
            <!-- Links only for Personal Website -->
            <div v-if="project.category === 'Web Development'" class="proj-links">
              <a href="#" class="proj-link">Live →</a>
              <a href="#" class="proj-link">GitHub →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── MODAL ──────────────────────────────────────────── -->
    <Transition name="modal-fade">
      <div v-if="activeModal" class="modal-overlay" @click.self="closeModal">
        <div class="modal-box">
          <!-- Close -->
          <button class="modal-close" @click="closeModal">✕</button>

          <!-- Header -->
          <div class="modal-header">
            <span class="modal-eyebrow">{{ activeModal.year }} · {{ activeModal.category }}</span>
            <h2 class="modal-title">{{ activeModal.title }}</h2>
          </div>

          <!-- Image gallery -->
          <div class="modal-gallery">
            <div class="modal-main-img-wrap">
              <img :src="galleryActive" :alt="activeModal.title" class="modal-main-img" />
            </div>
            <div v-if="activeModal.gallery && activeModal.gallery.length > 1" class="modal-thumbs">
              <button
                v-for="(img, idx) in activeModal.gallery"
                :key="idx"
                class="modal-thumb"
                :class="{ 'thumb-active': galleryActive === img }"
                @click="galleryActive = img"
              >
                <img :src="img" :alt="`${activeModal.title} view ${idx + 1}`" />
              </button>
            </div>
          </div>

          <!-- Detailed description -->
          <div class="modal-body">
            <p class="modal-desc">{{ activeModal.detailDesc || activeModal.description }}</p>
            <div class="modal-tags">
              <span v-for="tag in activeModal.tags" :key="tag" class="proj-tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const filterTags = ['All', 'CAD', 'Web Development']
const activeFilter = ref('All')

const projects = [
  {
    title: 'Magno Crane',
    description:
      'Designed and built a model magnetic crane capable of lifting and transporting metal objects using an electromagnet. The project involved CAD design, prototyping, testing, and iterative improvements to maximize lifting strength, stability, and efficiency while applying engineering and physics principles.',
    detailDesc:
      'Designed and built a model magnetic crane capable of lifting and transporting metal objects using an electromagnet. Starting from a concept sketch, I moved into full CAD modelling before cutting and assembling the physical prototype. Multiple iterations refined the arm geometry, pivot point, and coil winding to maximize lifting force. An Arduino microcontroller drives the electromagnet, allowing timed pick-and-place routines. Final tests achieved a lift capacity 40% beyond the initial target.',
    tags: ['CAD', 'Prototyping', 'Arduino'],
    category: 'CAD',
    year: '2025',
    image: '/Crane1.png',
    gallery: ['/Crane1.png', '/Crane2.png', '/Crane3.png', '/Crane4.png', '/Crane5.png'],
  },
  {
    title: 'Model Rocket',
    description:
      'Developed a model rocket themed around the Star Wars ship the Venator. The 3D model was then tested in CFD and predictions were made on the distance it would fly and the location it would land.',
    detailDesc:
      'This project merges aerospace engineering with Star Wars fandom. The Venator-class Star Destroyer silhouette was adapted into a flight-stable body with fins sized and positioned using open-source stability calculators. The full geometry was exported into a CFD suite where flow simulations at various angles of attack confirmed stable flight. Predicted apogee and landing coordinates matched physical test flights within 8%.',
    tags: ['CAD', 'CFD', 'Prototyping'],
    category: 'CAD',
    year: '2026',
    image: '/Rocket1.png',
    gallery: ['/Rocket1.png', '/rocket2.png', '/rocket3.png'],
  },
  {
    title: 'Print-in-Place Butterfly Knife',
    description:
      "A classic toy beloved by many, my first few attempts on 3D printing it required many parts and a complex assembly. I thought to myself, what if I made it pre assembled and printed in place. That's how this project came to life.",
    detailDesc:
      'Traditional balisong replicas demand tight tolerances and fiddly hardware. My goal was to eliminate assembly entirely by designing a single-print mechanism with live hinges and clearance gaps optimised for FDM tolerances. After a dozen iterations adjusting pivot gaps and latch geometry, the knife emerged from the printer fully functional—no post-processing required. The project sharpened my understanding of print orientation, bridging limits, and tolerance stacking.',
    tags: ['CAD', 'Prototype'],
    category: 'CAD',
    year: '2026',
    image: 'https://placehold.co/700x440/e8dcc8/4a6741?text=Butterfly+Knife&font=playfair-display',
    gallery: [
      'https://placehold.co/700x440/e8dcc8/4a6741?text=Butterfly+Knife+%E2%80%94+View+1&font=playfair-display',
      'https://placehold.co/700x440/d4c8a8/4a6741?text=Butterfly+Knife+%E2%80%94+View+2&font=playfair-display',
    ],
  },
  {
    title: 'Model Plane',
    description:
      'Ever since Covid I have been unable to travel for many years, 2025 was my first trip in over 6 years. The memories of flying were everlasting. I 3D modelled the plane so that I can always look back on those memories.',
    detailDesc:
      'A highly detailed 1:200 scale model of the aircraft from my 2025 trip, built entirely from reference photos and seat-map data. The fuselage, wing geometry, engine nacelles, and livery markings are all modelled individually and assembled with precise alignment. Printed in matte white PLA and hand-painted, it now sits on my desk as a permanent reminder that patience pays off.',
    tags: ['CAD'],
    category: 'CAD',
    year: '2025',
    image: '/Plane2.png',
    gallery: ['/Plane2.png', '/plane1.png'],
  },
  {
    title: 'Personal Website',
    description:
      'This is what you are looking at right now, a display of my accomplishments and achievements.',
    tags: ['Vue.js', 'Node.js', 'Tailwind CSS'],
    category: 'Web Development',
    year: '2026',
    image: null,
  },
]

const filteredProjects = computed(() =>
  activeFilter.value === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter.value),
)

// ─── MODAL STATE ──────────────────────────────────────────
const activeModal = ref(null)
const galleryActive = ref(null)

function openModal(project) {
  activeModal.value = project
  galleryActive.value = project.gallery?.[0] ?? project.image
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  activeModal.value = null
  galleryActive.value = null
  document.body.style.overflow = ''
}

// Close on Escape
if (typeof window !== 'undefined') {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal()
  })
}
</script>

<style scoped>
/* ─── HEADER ─────────────────────────────────────────── */
.work-header {
  padding: 2rem 0 1.5rem;
}

.header-eyebrow {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
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

.work-heading {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 400;
  line-height: 1.08;
  color: var(--ink);
  margin-bottom: 0.75rem;
}
.work-heading em {
  font-style: italic;
  color: var(--amber);
}

.work-subhead {
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--ink-2);
  font-weight: 300;
  line-height: 1.5;
  max-width: 420px;
}

/* ─── FILTERS ─────────────────────────────────────────── */
.filters-bar {
  padding: 0.75rem 0;
  background: var(--bg-warm);
  border-top: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
  position: sticky;
  top: 60px;
  z-index: 10;
  backdrop-filter: blur(8px);
}

.filters-inner {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.filter {
  padding: 0.3rem 1rem;
  background: transparent;
  border: 1px solid var(--rule);
  border-radius: 99px;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-3);
  cursor: pointer;
  transition: all 0.2s;
}
.filter:hover {
  border-color: var(--ink-2);
  color: var(--ink-2);
  background: var(--bg-card);
}
.filter.active {
  background: var(--ink);
  border-color: var(--ink);
  color: var(--bg);
}

/* ─── PROJECT LIST ────────────────────────────────────── */
.project-list {
  padding: 0 0 2rem;
}

.empty {
  padding: 2rem 0;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  color: var(--ink-3);
  text-align: center;
}

.project {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  min-height: auto;
  border-bottom: 1px solid var(--rule);
  transition: background 0.3s;
}
.project:hover {
  background: var(--bg-warm);
}
.project.is-cad {
  cursor: pointer;
}

/* flip every other */
.project:nth-child(even) {
  grid-template-columns: 1fr 1.1fr;
}
.project:nth-child(even) .project-image {
  order: 2;
}
.project:nth-child(even) .project-content {
  order: 1;
}

/* ─── IMAGE COLUMN ────────────────────────────────────── */
.project-image {
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-warm);
}
.proj-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  transition:
    transform 0.7s ease,
    filter 0.5s;
}
.project:hover .proj-img {
  transform: scale(1.035);
  filter: sepia(3%);
}

/* CAD hover hint overlay */
.cad-hint {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  background: var(--ink);
  color: var(--bg);
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 99px;
  opacity: 0;
  transform: translateY(6px);
  transition:
    opacity 0.25s,
    transform 0.25s;
  pointer-events: none;
}
.project:hover .cad-hint {
  opacity: 1;
  transform: translateY(0);
}

/* ─── WEBSITE PLACEHOLDER ─────────────────────────────── */
.website-placeholder {
  width: 100%;
  height: 100%;
  min-height: 240px;
  background: var(--bg-warm);
  border-right: 1px solid var(--rule);
  display: flex;
  align-items: center;
  justify-content: center;
}
.website-placeholder-inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  padding: 1.5rem;
}
.website-eye-icon {
  font-size: 1.8rem;
  line-height: 1;
  filter: grayscale(1);
  opacity: 0.55;
}
.website-placeholder-text {
  font-family: var(--font-display);
  font-size: clamp(1rem, 2vw, 1.3rem);
  font-weight: 400;
  font-style: italic;
  color: var(--ink);
  margin: 0;
}
.website-placeholder-sub {
  font-family: var(--font-mono);
  font-size: 8px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-3);
}

/* ─── PROJECT CONTENT ─────────────────────────────────── */
.project-content {
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;
  border-left: 1px solid var(--rule);
}
.project:nth-child(even) .project-content {
  border-left: none;
  border-right: 1px solid var(--rule);
}

.project-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.proj-index,
.proj-year {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.15em;
  color: var(--ink-3);
}

.proj-title {
  font-family: var(--font-display);
  font-size: clamp(1.3rem, 2.5vw, 1.8rem);
  font-weight: 400;
  line-height: 1.2;
  color: var(--ink);
  transition: color 0.2s;
  margin: 0;
}
.project:hover .proj-title {
  color: var(--amber);
}

.proj-desc {
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: var(--ink-2);
  line-height: 1.6;
  font-weight: 300;
  margin: 0;
}

.proj-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.proj-tag {
  font-family: var(--font-mono);
  font-size: 8px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-3);
  background: var(--bg);
  border: 1px solid var(--rule);
  border-radius: 99px;
  padding: 2px 8px;
}

.proj-links {
  display: flex;
  gap: 1.5rem;
  padding-top: 0.2rem;
}
.proj-link {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-2);
  position: relative;
  padding-bottom: 2px;
}
.proj-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--rule);
  transition: background 0.2s;
}
.proj-link:hover {
  color: var(--amber);
}
.proj-link:hover::after {
  background: var(--amber);
}

/* ─── MODAL ───────────────────────────────────────────── */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.72);
  backdrop-filter: blur(6px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.modal-box {
  background: var(--bg);
  border: 1px solid var(--rule);
  border-radius: 4px;
  width: 100%;
  max-width: 860px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: 1px solid var(--rule);
  border-radius: 99px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  color: var(--ink-3);
  cursor: pointer;
  transition: all 0.2s;
  z-index: 2;
}
.modal-close:hover {
  background: var(--ink);
  color: var(--bg);
  border-color: var(--ink);
}

.modal-header {
  padding: 1.5rem 2rem 1rem;
  border-bottom: 1px solid var(--rule);
}
.modal-eyebrow {
  font-family: var(--font-mono);
  font-size: 8px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink-3);
  display: block;
  margin-bottom: 0.3rem;
}
.modal-title {
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 400;
  color: var(--ink);
  line-height: 1.15;
  margin: 0;
}

/* Gallery */
.modal-gallery {
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--rule);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.modal-main-img-wrap {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border: 1px solid var(--rule);
  border-radius: 2px;
  background: var(--bg-warm);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-main-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  transition: opacity 0.25s;
}
.modal-thumbs {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.modal-thumb {
  width: 70px;
  height: 48px;
  overflow: hidden;
  border: 1px solid var(--rule);
  border-radius: 2px;
  cursor: pointer;
  padding: 0;
  background: none;
  opacity: 0.55;
  transition:
    opacity 0.2s,
    border-color 0.2s;
}
.modal-thumb:hover,
.modal-thumb.thumb-active {
  opacity: 1;
  border-color: var(--amber);
}
.modal-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Body */
.modal-body {
  padding: 1.5rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.modal-desc {
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: var(--ink-2);
  line-height: 1.7;
  font-weight: 300;
  margin: 0;
}
.modal-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

/* ─── MODAL TRANSITION ────────────────────────────────── */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}
.modal-fade-enter-active .modal-box,
.modal-fade-leave-active .modal-box {
  transition:
    transform 0.3s cubic-bezier(0.34, 1.3, 0.64, 1),
    opacity 0.25s;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-from .modal-box {
  transform: translateY(24px) scale(0.97);
}
.modal-fade-leave-to .modal-box {
  transform: translateY(12px) scale(0.98);
  opacity: 0;
}

/* ─── RESPONSIVE ─────────────────────────────────────── */
@media (max-width: 900px) {
  .project,
  .project:nth-child(even) {
    grid-template-columns: 1fr;
  }
  .project-image,
  .project:nth-child(even) .project-image {
    order: 0;
    height: 200px;
  }
  .project-content,
  .project:nth-child(even) .project-content {
    order: 0;
    border-left: none !important;
    border-right: none !important;
    border-top: 1px solid var(--rule);
    padding: 1.5rem;
  }
  .container {
    padding: 0 1rem;
  }
  .modal-overlay {
    padding: 0.5rem;
  }
  .modal-header,
  .modal-gallery,
  .modal-body {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .website-placeholder {
    min-height: 160px;
  }
}
</style>
