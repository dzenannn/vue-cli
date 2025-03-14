import HomeView from '@/views/HomeView.vue'
import NotFound from '@/views/notFound.vue'
import UserDetailView from '@/views/UserDetailView.vue'
import Users from '@/views/UsersView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/:xyz(.*)*',
    name: 'notFound',
    component: NotFound,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/users',
    name: 'users',
    component: Users,
    sensitive: true,
  },
  {
    path: '/users/:userId',
    name: 'usersDetail',
    component: UserDetailView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
