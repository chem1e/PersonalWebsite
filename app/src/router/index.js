import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Works from '../views/Work.vue/index.js'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/works', component: Works },
  { path: '/contact', component: Contact },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})
