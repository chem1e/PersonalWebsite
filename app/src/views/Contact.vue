<template>
  <div class="contact-page">
    <div class="page-header">
      <div class="container">
        <p class="section-label">// get in touch</p>
        <h1 class="page-title">
          Let's Build<br /><span class="gradient-text">Something Together</span>
        </h1>
        <p class="page-desc">
          Whether it's a project, a role, or just a conversation — my inbox is open.
        </p>
      </div>
    </div>

    <section class="contact-section">
      <div class="container">
        <div class="contact-grid">
          <div class="form-col">
            <div class="form-header">
              <span class="form-tag">// send a message</span>
            </div>

            <form class="contact-form" @submit.prevent="handleSubmit">
              <div class="form-group">
                <label class="form-label">Name</label>
                <input
                  v-model="form.name"
                  type="text"
                  class="form-input"
                  placeholder="Your name"
                  required
                />
              </div>

              <div class="form-group">
                <label class="form-label">Email</label>
                <input
                  v-model="form.email"
                  type="email"
                  class="form-input"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div class="form-group">
                <label class="form-label">Subject</label>
                <input
                  v-model="form.subject"
                  type="text"
                  class="form-input"
                  placeholder="What's this about?"
                />
              </div>

              <div class="form-group">
                <label class="form-label">Message</label>
                <textarea
                  v-model="form.message"
                  class="form-textarea"
                  placeholder="Tell me about your project, idea, or opportunity..."
                  rows="6"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                class="submit-btn"
                :class="{ loading: isLoading, sent: isSent }"
              >
                <span v-if="!isSent && !isLoading"
                  >Send Message <span class="btn-arrow">→</span></span
                >
                <span v-else-if="isLoading">Transmitting...</span>
                <span v-else>Message Sent ✓</span>
              </button>

              <p class="form-note">
                * Connect to your own form handler (e.g. Formspree, EmailJS, or your backend).
              </p>
            </form>
          </div>

          <div class="info-col">
            <div class="info-card">
              <p class="info-section-label">// direct contact</p>
              <div class="contact-items">
                <div class="contact-item" v-for="item in contactItems" :key="item.label">
                  <span class="contact-icon">{{ item.icon }}</span>
                  <div>
                    <p class="contact-item-label">{{ item.label }}</p>
                    <a :href="item.href" class="contact-item-value">{{ item.value }}</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="info-card">
              <p class="info-section-label">// socials</p>
              <div class="social-links">
                <a
                  v-for="social in socials"
                  :key="social.name"
                  :href="social.href"
                  class="social-link"
                  target="_blank"
                  rel="noopener"
                >
                  <span class="social-name">{{ social.name }}</span>
                  <span class="social-handle">{{ social.handle }}</span>
                  <span class="social-arrow">↗</span>
                </a>
              </div>
            </div>

            <div class="info-card availability-card">
              <p class="info-section-label">// current status</p>
              <div class="availability">
                <div class="avail-dot"></div>
                <div>
                  <p class="avail-status">Open to opportunities</p>
                  <p class="avail-detail">
                    Available for full-time roles, contract work, and interesting projects.
                  </p>
                </div>
              </div>
              <p class="location-tag">📍 Your City · UTC±0</p>
            </div>
          </div>
        </div>
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
  // TODO: Replace with Formspree, EmailJS, or your own backend
  setTimeout(() => {
    isLoading.value = false
    isSent.value = true
    setTimeout(() => {
      isSent.value = false
      form.name = ''
      form.email = ''
      form.subject = ''
      form.message = ''
    }, 3000)
  }, 1500)
}

const contactItems = [
  { icon: '✉', label: 'Email', value: 'you@yourdomain.com', href: 'mailto:you@yourdomain.com' },
  { icon: '📍', label: 'Location', value: 'Your City, Country', href: '#' },
]

const socials = [
  { name: 'GitHub', handle: '@yourusername', href: 'https://github.com/yourusername' },
  { name: 'LinkedIn', handle: 'in/yourprofile', href: 'https://linkedin.com/in/yourprofile' },
  { name: 'X / Twitter', handle: '@yourhandle', href: 'https://x.com/yourhandle' },
]
</script>

<style scoped>
.contact-page {
  padding-bottom: 6rem;
}

.page-header {
  padding: 5rem 0 3rem;
  border-bottom: 1px solid var(--border);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
}

.page-title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

.page-desc {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--text-secondary);
  max-width: 500px;
  line-height: 1.8;
}

.contact-section {
  padding-top: 4rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 4rem;
}

.form-header {
  margin-bottom: 2rem;
}

.form-tag {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.15em;
  color: var(--accent);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.form-input,
.form-textarea {
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-primary);
  font-family: var(--font-mono);
  font-size: 13px;
  padding: 12px 16px;
  outline: none;
  transition:
    border-color 0.2s,
    background 0.2s;
  resize: none;
  line-height: 1.6;
  width: 100%;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: var(--text-muted);
}

.form-input:focus,
.form-textarea:focus {
  border-color: var(--accent);
  background: var(--bg-card-hover);
}

.submit-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0.875rem 2rem;
  background: var(--accent);
  color: #000;
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: none;
  transition: all 0.2s;
  align-self: flex-start;
  clip-path: polygon(
    0 0,
    calc(100% - 10px) 0,
    100% 10px,
    100% 100%,
    10px 100%,
    0 calc(100% - 10px)
  );
  min-width: 200px;
}

.submit-btn:hover:not(.loading):not(.sent) {
  background: #33ddff;
  transform: translateY(-2px);
}

.submit-btn.loading {
  background: var(--text-muted);
  cursor: not-allowed;
}
.submit-btn.sent {
  background: #00e676;
  cursor: default;
}

.btn-arrow {
  transition: transform 0.2s;
}
.submit-btn:hover .btn-arrow {
  transform: translateX(4px);
}

.form-note {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--text-muted);
  line-height: 1.7;
  margin-top: -0.5rem;
}

.info-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.info-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  padding: 1.5rem;
  transition: border-color 0.2s;
}

.info-card:hover {
  border-color: var(--border-accent);
}

.info-section-label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.15em;
  color: var(--accent);
  margin-bottom: 1.25rem;
}

.contact-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.contact-icon {
  font-size: 16px;
  width: 20px;
  flex-shrink: 0;
  margin-top: 2px;
}

.contact-item-label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 2px;
}

.contact-item-value {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--text-secondary);
  transition: color 0.15s;
}

.contact-item-value:hover {
  color: var(--accent);
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.social-link {
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border: 1px solid transparent;
  transition: all 0.15s;
}

.social-link:hover {
  background: var(--accent-dim);
  border-color: var(--border-accent);
}

.social-name {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-secondary);
  width: 100px;
}

.social-handle {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-muted);
  flex: 1;
}

.social-arrow {
  font-size: 12px;
  color: var(--text-muted);
  transition:
    color 0.15s,
    transform 0.15s;
}

.social-link:hover .social-arrow {
  color: var(--accent);
  transform: translate(2px, -2px);
}

.availability-card {
  background: linear-gradient(135deg, var(--bg-card) 0%, rgba(0, 212, 255, 0.04) 100%);
  border-color: var(--border-accent);
}

.availability {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 1rem;
}

.avail-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #00e676;
  box-shadow: 0 0 10px #00e676;
  flex-shrink: 0;
  margin-top: 5px;
  animation: avail-pulse 2s infinite;
}

@keyframes avail-pulse {
  0%,
  100% {
    opacity: 1;
    box-shadow: 0 0 10px #00e676;
  }
  50% {
    opacity: 0.5;
    box-shadow: 0 0 4px #00e676;
  }
}

.avail-status {
  font-family: var(--font-mono);
  font-size: 13px;
  color: #00e676;
  margin-bottom: 4px;
}

.avail-detail {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-muted);
  line-height: 1.7;
}

.location-tag {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-muted);
  padding-top: 1rem;
  border-top: 1px solid var(--border);
}

@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
  .info-col {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1.25rem;
  }
  .submit-btn {
    align-self: stretch;
  }
  .info-col {
    grid-template-columns: 1fr;
  }
}
</style>
