<template>
  <div class="contact">
    <!-- HEADER -->
    <section class="contact-header">
      <div class="container">
        <div class="header-eyebrow">
          <span class="eyebrow-line"></span>
          <span class="eyebrow-text">Get in touch</span>
        </div>
        <h1 class="contact-heading">Let's talk<br /><em>over coffee</em></h1>
        <p class="contact-subhead">
          Whether it's a project, an opportunity, or just a nice conversation — pull up a chair.
        </p>
      </div>
    </section>

    <!-- BODY -->
    <section class="contact-body">
      <div class="container contact-layout">
        <!-- FORM -->
        <div class="form-side">
          <p class="side-label">Send a note</p>

          <form @submit.prevent="handleSubmit" class="form">
            <div class="field">
              <label class="field-label">Name</label>
              <input
                v-model="form.name"
                type="text"
                class="field-input"
                placeholder="Your name"
                required
              />
            </div>

            <div class="field">
              <label class="field-label">Email</label>
              <input
                v-model="form.email"
                type="email"
                class="field-input"
                placeholder="your@email.com"
                required
              />
            </div>

            <div class="field">
              <label class="field-label">Subject</label>
              <input
                v-model="form.subject"
                type="text"
                class="field-input"
                placeholder="What's on your mind?"
              />
            </div>

            <div class="field">
              <label class="field-label">Message</label>
              <textarea
                v-model="form.message"
                class="field-input field-textarea"
                placeholder="Tell me about your project, idea, or just say hello..."
                rows="6"
                required
              ></textarea>
            </div>

            <div class="form-foot">
              <button
                type="submit"
                class="send-btn"
                :class="{ loading: isLoading, sent: isSent }"
                :disabled="isLoading || isSent"
              >
                <span v-if="!isLoading && !isSent">Send message</span>
                <span v-else-if="isLoading">Sending...</span>
                <span v-else>Sent ✓ Thank you</span>
              </button>
              <p class="form-note">* Wire up to Formspree or your backend</p>
            </div>
          </form>
        </div>

        <!-- ASIDE -->
        <aside class="info-side">
          <div class="info-section">
            <p class="side-label">Direct</p>
            <div class="info-rows">
              <div class="info-row" v-for="item in contactItems" :key="item.label">
                <span class="info-row-label">{{ item.label }}</span>
                <a :href="item.href" class="info-row-val">{{ item.value }}</a>
              </div>
            </div>
          </div>

          <div class="info-divider"></div>

          <div class="info-section">
            <p class="side-label">Find me</p>
            <div class="socials">
              <a
                v-for="s in socials"
                :key="s.name"
                :href="s.href"
                class="social"
                target="_blank"
                rel="noopener"
              >
                <span class="social-name">{{ s.name }}</span>
                <span class="social-handle">{{ s.handle }}</span>
                <span class="social-arrow">↗</span>
              </a>
            </div>
          </div>

          <div class="info-divider"></div>

          <div class="availability">
            <div class="avail-row">
              <span class="avail-dot"></span>
              <span class="avail-status">Open to opportunities</span>
            </div>
            <p class="avail-types">Full-time · Contract · Side projects</p>
            <p class="avail-location">📍 Staten Island, New York · UTC±0</p>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({ name: '', email: '', subject: '', message: '' })
const isLoading = ref(false)
const isSent = ref(false)

function handleSubmit() {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    isSent.value = true
    setTimeout(() => {
      isSent.value = false
      Object.assign(form, { name: '', email: '', subject: '', message: '' })
    }, 4000)
  }, 1500)
}

const contactItems = [
  { label: 'Email', value: 'ryanchen579@gmail.com', href: 'mailto:ryanchen579@gmail.com' },
  { label: 'Location', value: 'Staten Island, New York', href: '#' },
]
const socials = [
  { name: 'GitHub', handle: '@chem1e', href: 'https://github.com/chem1e' },
  {
    name: 'LinkedIn',
    handle: 'in/ryan-chen-4b6000275',
    href: 'https://www.linkedin.com/in/ryan-chen-4b6000275/',
  },
]
</script>

<style scoped>
/* ─── HEADER ─────────────────────────────────────────── */
.contact-header {
  padding: 5rem 0 4rem;
}

.header-eyebrow {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
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

.contact-heading {
  font-family: var(--font-display);
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 400;
  line-height: 1.08;
  color: var(--ink);
  margin-bottom: 1.5rem;
}
.contact-heading em {
  font-style: italic;
  color: var(--amber);
}

.contact-subhead {
  font-family: var(--font-body);
  font-size: 1.1rem;
  color: var(--ink-2);
  font-weight: 300;
  line-height: 1.8;
  max-width: 440px;
}

/* ─── BODY ───────────────────────────────────────────── */
.contact-body {
  padding-bottom: 8rem;
  border-top: 1px solid var(--rule);
}

.contact-layout {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 7rem;
  align-items: start;
  padding-top: 5rem;
}

/* ─── FORM ───────────────────────────────────────────── */
.side-label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink-3);
  margin-bottom: 2rem;
  display: block;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.field-label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--ink-3);
}

.field-input {
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--rule);
  color: var(--ink);
  font-family: var(--font-body);
  font-size: 1.05rem;
  font-weight: 300;
  padding: 0.6rem 0;
  outline: none;
  transition: border-color 0.25s;
  resize: none;
  line-height: 1.7;
  width: 100%;
  appearance: none;
  -webkit-appearance: none;
}
.field-input::placeholder {
  color: var(--ink-3);
  font-style: italic;
}
.field-input:focus {
  border-bottom-color: var(--amber);
}
.field-textarea {
  min-height: 120px;
}

.form-foot {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  padding-top: 0.75rem;
}

.send-btn {
  padding: 0.8rem 2rem;
  background: var(--ink);
  color: var(--bg);
  border: none;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.25s;
}
.send-btn:hover:not(:disabled) {
  background: var(--amber);
}
.send-btn.sent {
  background: var(--green);
}
.send-btn:disabled {
  opacity: 0.5;
  cursor: default;
}

.form-note {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.08em;
  color: var(--ink-3);
  font-style: italic;
}

/* ─── ASIDE ──────────────────────────────────────────── */
.info-side {
  display: flex;
  flex-direction: column;
  padding-top: 2.25rem;
}

.info-section {
  padding: 1.75rem 0;
}

.info-divider {
  height: 1px;
  background: var(--rule);
}

.info-rows {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.info-row {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.info-row-label {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-3);
}
.info-row-val {
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--ink-2);
  font-weight: 300;
  transition: color 0.2s;
}
.info-row-val:hover {
  color: var(--amber);
}

/* socials */
.socials {
  display: flex;
  flex-direction: column;
}
.social {
  display: flex;
  align-items: center;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--rule);
  gap: 0;
  transition: opacity 0.2s;
}
.social:first-child {
  border-top: 1px solid var(--rule);
}
.social:hover {
  opacity: 0.6;
}

.social-name {
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: var(--ink-2);
  font-weight: 300;
  flex: 0 0 85px;
}
.social-handle {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.08em;
  color: var(--ink-3);
  flex: 1;
}
.social-arrow {
  font-size: 11px;
  color: var(--ink-3);
  transition: transform 0.2s;
}
.social:hover .social-arrow {
  transform: translate(2px, -2px);
}

/* availability */
.availability {
  padding: 1.75rem 1.5rem;
  background: var(--bg-warm);
  border: 1px solid var(--rule);
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.avail-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 0.25rem;
}
.avail-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--green);
  flex-shrink: 0;
  animation: pulse 2.5s ease-in-out infinite;
}
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.2;
  }
}
.avail-status {
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: var(--green);
}
.avail-types,
.avail-location {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  color: var(--ink-3);
}

/* ─── RESPONSIVE ─────────────────────────────────────── */
@media (max-width: 900px) {
  .contact-layout {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
  .info-side {
    padding-top: 0;
    border-top: 1px solid var(--rule);
    padding-top: 3rem;
  }
  .container {
    padding: 0 1.25rem;
  }
}

@media (max-width: 640px) {
  .form-foot {
    flex-direction: column;
    align-items: flex-start;
  }
  .send-btn {
    width: 100%;
  }
}
</style>
