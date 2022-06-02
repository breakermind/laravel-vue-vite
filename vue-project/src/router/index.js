import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  linkActiveClass: "router-link-active",
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/params/:id/:code',
      name: 'params',
      component: () => import('../views/ParamsView.vue')
    },
    // { path: '/activate/:id/:code', component: Activate, name: 'activate' },
    // { path: '/panel', component: Profil, name: 'panel.profil', meta: { requiresAuth: true }},
    // {
    //  path: '/:catchAll(.*)',
    //  component: () => import('../views/NotFound.vue'),
    //  name: 'error.page'
    // }
  ]
})

/*
// Sample only
// import { defineAsyncComponent } from 'vue'
// import store from '../store/index.js'
router.beforeEach((to) => {
  // ✅ This will work make sure the correct store is used for the
  // current running app
  const main = useMainStore(pinia)
  if (to.meta.requiresAuth && !main.isLoggedIn) return '/login'
})
router.beforeEach(async (to, from, next) => {
  // Hide menu
  store.dispatch('closeMenu')
  // Authenticate with remember me token
  await store.dispatch('user/auth/userLogged')
  // Redirect
  if(to.name == 'login' && store.state.user.auth.isAuthenticated) {
    // Redirect to panel if logged
    next({ name: 'panel' })
  } else if (to.meta.requiresAuth && !store.state.user.auth.isAuthenticated) {
    // Redirect if not logged
    next({
      name: 'login',
      query: { redirected_from: to.fullPath }
    })
  } else {
    // Next route
    next()
  }
})
*/

export default router
