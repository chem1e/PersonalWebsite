<template>
  <div class="contact">
    <div class="contact-grid">
      <div class="contact-info">
        <h1 class="contact-title">CONTACT</h1>
        <p class="tagline">
          Let's create something meaningful<br />
          together. Always passionate about<br />
          all things design and community!
        </p>

        <div class="contact-details">
          <div class="detail-group">
            <span class="detail-label">EMAIL</span>
            <a :href="'mailto:' + info.email" class="detail-link">{{ info.email }}</a>
          </div>
          <div class="detail-group">
            <span class="detail-label">SOCIALS</span>
            <div class="social-links">
              <a
                v-for="s in info.socials"
                :key="s.name"
                :href="s.url"
                target="_blank"
                class="detail-link"
                >{{ s.name }}</a
              >
            </div>
          </div>
          <div class="detail-group" v-if="info.links.length">
            <span class="detail-label">LINKS</span>
            <div class="social-links">
              <a
                v-for="l in info.links"
                :key="l.name"
                :href="l.url"
                target="_blank"
                class="detail-link"
                >{{ l.name }}</a
              >
            </div>
          </div>
        </div>
      </div>

      <div class="contact-photo">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80"
          alt="Ryan Chen"
        />
        <div class="photo-badge">SAY HELLO :)</div>
      </div>
    </div>

    <footer class="contact-footer">
      <span>© {{ new Date().getFullYear() }} RYAN CHEN — ALL RIGHTS RESERVED</span>
      <span>BASED IN NEW HAVEN & NYC</span>
    </footer>
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
}
</script>

<style scoped>
.contact {
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 57px);
}

.contact-grid {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 45%;
  gap: 0;
}

.contact-info {
  padding: 70px 60px 60px 40px;
  border-right: 1px solid var(--light-gray);
}

.contact-title {
  font-family: var(--font-display);
  font-size: clamp(50px, 8vw, 100px);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 50px;
}

.tagline {
  font-size: 16px;
  font-weight: 300;
  line-height: 1.7;
  color: var(--black);
  margin-bottom: 70px;
  max-width: 360px;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 44px;
}

.detail-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.detail-label {
  font-family: var(--font-display);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.16em;
  color: var(--gray);
}

.detail-link {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 600;
  color: var(--black);
  text-decoration: none;
  display: inline-block;
  position: relative;
  width: fit-content;
}

.detail-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1.5px;
  background: var(--black);
  transition: width 0.3s ease;
}

.detail-link:hover::after {
  width: 100%;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.contact-photo {
  position: relative;
  overflow: hidden;
}

.contact-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
  display: block;
  filter: grayscale(20%);
  min-height: 500px;
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
  .contact-grid {
    grid-template-columns: 1fr;
  }
  .contact-info {
    padding: 50px 20px;
    border-right: none;
  }
  .contact-photo {
    min-height: 400px;
  }
  .contact-photo img {
    min-height: 400px;
  }
  .contact-footer {
    flex-direction: column;
    gap: 10px;
    text-align: center;
    padding: 20px;
  }
  .contact-title {
    font-size: clamp(40px, 12vw, 70px);
  }
}
</style>