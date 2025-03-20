import AboutView from '@/view/AboutView.vue'
import HomeView from '@/view/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about/:id', name: 'about', component: AboutView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
