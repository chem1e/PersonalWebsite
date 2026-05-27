<template>
  <div class="contact-page">
    <div class="contact-layout">
      <div class="contact-left">
        <h1 class="page-title reveal">CONTACT</h1>
        <p class="contact-tagline reveal">
          Let's create something meaningful<br />
          together. Always passionate about<br />
          all things design and community!
        </p>
        <div class="contact-sections">
          <div class="contact-group reveal">
            <span class="group-label">EMAIL</span>
            <a :href="'mailto:' + info.email" class="contact-link">
              {{ info.email }}
            </a>
          </div>
          <div class="contact-group reveal">
            <span class="group-label">SOCIALS</span>
            <div class="socials-list">
              <a
                v-for="social in info.socials"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener"
                class="contact-link"
              >
                {{ social.name }}
              </a>
            </div>
          </div>
          <div class="contact-group reveal" v-if="info.links.length">
            <span class="group-label">LINKS</span>
            <div class="socials-list">
              <a
                v-for="link in info.links"
                :key="link.name"
                :href="link.url"
                target="_blank"
                rel="noopener"
                class="contact-link"
              >
                {{ link.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="contact-right reveal">
        <div class="contact-photo-wrap">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80"
            alt="Ryan Chen"
            class="contact-photo"
          />
          <div class="photo-badge">SAY HELLO :)</div>
        </div>
      </div>
    </div>
    <div class="contact-footer reveal">
      <span>© {{ new Date().getFullYear() }} RYAN CHEN — ALL RIGHTS RESERVED</span>
      <span>BASED IN NEW HAVEN & NYC</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      info: {
        email: 'ryan.chen@yale.edu',
        socials: [
          { name: 'Instagram', url: 'https://instagram.com/' },
          { name: 'LinkedIn', url: 'https://linkedin.com/in/' },
          { name: 'Twitter / X', url: 'https://x.com/' },
        ],
        links: [
          { name: 'GitHub', url: 'https://github.com/' },
          { name: 'Read.cv', url: 'https://read.cv/' },
        ],
      },
    }
  },
  mounted() {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        }),
      { threshold: 0.1 },
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
  },
}
</script>

<style scoped>
.contact-page {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  min-height: calc(100vh - 57px);
  display: flex;
  flex-direction: column;
}

.contact-layout {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 45%;
}

.contact-left {
  padding: 70px 60px 60px 40px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--light-gray);
}

.page-title {
  font-family: var(--font-display);
  font-size: clamp(50px, 8vw, 100px);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 50px;
  word-break: break-word;
}

.contact-tagline {
  font-size: 16px;
  font-weight: 300;
  line-height: 1.7;
  color: var(--black);
  margin-bottom: 70px;
  max-width: 360px;
}

.contact-sections {
  display: flex;
  flex-direction: column;
  gap: 44px;
}

.contact-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.group-label {
  font-family: var(--font-display);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.16em;
  color: var(--gray);
}

.contact-link {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 600;
  color: var(--black);
  text-decoration: none;
  display: inline-block;
  position: relative;
  width: fit-content;
  transition: color 0.2s;
}

.contact-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1.5px;
  background: var(--black);
  transition: width 0.3s ease;
}

.contact-link:hover::after {
  width: 100%;
}

.socials-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.contact-right {
  position: relative;
  overflow: hidden;
}

.contact-photo-wrap {
  width: 100%;
  height: 100%;
  position: relative;
}

.contact-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
  display: block;
  filter: grayscale(20%);
  min-height: 500px;
  max-height: 80vh;
}

.photo-badge {
  position: absolute;
  bottom: 28px;
  right: 28px;
  background: var(--white);
  border: 1.5px solid var(--black);
  padding: 10px 18px;
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.contact-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  border-top: 1px solid var(--light-gray);
  font-family: var(--font-display);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: var(--gray);
}

@media (max-width: 768px) {
  .contact-layout {
    grid-template-columns: 1fr;
  }
  .contact-left {
    padding: 50px 20px;
    border-right: none;
  }
  .contact-right {
    min-height: 400px;
  }
  .contact-photo {
    min-height: 400px;
  }
  .contact-footer {
    flex-direction: column;
    gap: 10px;
    text-align: center;
    padding: 20px;
  }
  .page-title {
    font-size: clamp(40px, 12vw, 70px);
  }
}
</style>
