import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/student/Home.vue'

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
    component: () => import('@/pages/student/Register')
  },
  {
    path: '/ket-qua-dang-ky-hoc',
    name: 'result-register-learn',
    component: () => import('@/pages/student/Result')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/login')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
