import customFooterView from '@/views/customFooterView.vue'
import HomeView from '@/views/HomeView.vue'
import NotFound from '@/views/notFound.vue'
import PersonalView from '@/views/PersonalView.vue'
import ProductCategories from '@/views/ProductCategories.vue'
import ProductsDetailed from '@/views/ProductsDetailed.vue'
import ProductsView from '@/views/ProductsView.vue'
import UserDetailView from '@/views/UserDetailView.vue'
import UsersView from '@/views/UsersView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'
import AboutMenu from '@/views/AboutMenu.vue'
import UserMenu from '@/views/UserMenu.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      isPublic: true,
    },
    // redirect: '/products',
    // redirect: {
    //   name: 'products',
    // },
    // redirect: (to) => {
    //   console.log(to)
    //   return {
    //     path: '/products',
    //   }
    // },
  },
  {
    path: '/:xyz(.*)*',
    name: 'notFound',
    component: NotFound,
    meta: {
      isPublic: false,
    },
  },
  {
    path: '/about/:custom?',
    name: 'about',
    meta: {
      isPublic: false,
    },
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
      default: UsersView,
      customFooterView: customFooterView,
      customMenuView: UserMenu,
    },
    meta: {
      isPublic: true,
    },
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView,

    // beforeEnter: (to, from) => {
    //   if (from.path === '/about') {
    //     return true
    //   } else {
    //     return false
    //   }
    // },
    // beforeLeave: (to, from) => {
    //   if (to.path === '/information') {
    //     return true
    //   } else {
    //     return false
    //   }
    // },

    meta: {
      isPublic: false,
      layoutName: 'CustomLayout',
    },
  },
  {
    path: '/products/:id',
    name: 'productsDetail',
    component: ProductsDetailed,
    meta: {
      isPublic: false,
    },
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
  {
    path: '/information',
    name: 'information',
    component: () => import('@/views/Information.vue'),
    meta: {
      isPublic: false,
      savedPosition: 0,
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // scrollBehavior(to, from, savedPosition) {
  // console.log(to)
  // console.log(from)
  // console.log(savedPosition) //? Saved Position može da se koristi u News App za slučaj kada se korisnik vrati nazad na article koji je čitao da ga pošalje onamo dokle je stigao sa čitanjem

  //   return new Promise((res) => {
  //     setTimeout(() => {
  //       if (savedPosition) {
  //         res({ left: 0, top: savedPosition.top, behavior: 'smooth' })
  //       } else {
  //         res({ left: 0, top: 150, behavior: 'smooth' })
  //       }
  //     }, 500)
  //   })
  // },
})

router.beforeEach((to, from, next) => {
  console.log('Each', to, from)
  if (to.meta.isPublic) {
    next() // ako je isPublic true, šaljemo korisnika na željenu stranicu
  } else {
    next({ name: 'home' }) // u suprotnom je redirektovan na početnu stranu
  }
})

export default router
