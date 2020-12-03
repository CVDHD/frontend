import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Token from '../services/cookie_local_storage/Token'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dang-ky-hoc',
    name: 'register-learn',
    component: Token.getRole() === 'admin' ? () => import('@/pages/admin/Register') : () => import('@/pages/student/Register')
  },
  {
    path: '/ket-qua-dang-ky-hoc',
    name: 'result-register-learn',
    component: Token.getRole() === 'admin' ? () => import('@/pages/admin/Result') : () => import('@/pages/student/Result')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !Token.getToken()) next({ name: 'login' })
  next()
})

export default router
