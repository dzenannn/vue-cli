import customFooterView from '@/views/customFooterView.vue'
import HomeView from '@/views/HomeView.vue'
import NotFound from '@/views/notFound.vue'
import PersonalView from '@/views/PersonalView.vue'
import ProductCategories from '@/views/ProductCategories.vue'
import ProductsDetailed from '@/views/ProductsDetailed.vue'
import ProductsView from '@/views/ProductsView.vue'
import UserDetailView from '@/views/UserDetailView.vue'
import Users from '@/views/UsersView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'
import AboutMenu from '@/views/AboutMenu.vue'
import UserMenu from '@/views/UserMenu.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    // redirect: '/products',
    // redirect: {
    //   name: 'products',
    // },
    redirect: (to) => {
      console.log(to)
      return {
        path: '/products',
      }
    },
  },
  {
    path: '/:xyz(.*)*',
    name: 'notFound',
    component: NotFound,
  },
  {
    path: '/about/:custom?',
    name: 'about',
    components: {
      default: AboutView,
      customMenuView: AboutMenu,
    },
    // component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/users',
    name: 'users',
    alias: ['/peoples'], //* /peoples će prikazati /users stranicu
    components: {
      default: Users,
      customFooterView: customFooterView,
      customMenuView: UserMenu,
    },
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView,
  },
  {
    path: '/products/:id',
    name: 'productsDetail',
    component: ProductsDetailed,
    children: [
      {
        path: 'categories',
        component: ProductCategories,
      },
      {
        path: 'personals',
        component: PersonalView,
      },
    ],
  },
  {
    path: '/users/:userId(\\d+)+',
    name: 'usersDetail',
    component: UserDetailView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
