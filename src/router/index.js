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
    path: '/student/dang-ky-hoc',
    name: 'register-learn',
    component: () => import(`@/pages/student/Register`)
  },
  {
    path: '/student/ket-qua-dang-ky-hoc',
    name: 'result-register-learn',
    component: () => import(`@/pages/student/Result`)
  },
  {
    path: '/admin/dang-ky-hoc',
    name: 'register-learn',
    component: () => import(`@/pages/admin/Register`)
  },
  {
    path: '/admin/ket-qua-dang-ky-hoc',
    name: 'result-register-learn',
    component: () => import(`@/pages/admin/Result`)
  },
  {
    path: '/admin/ket-qua-dang-ky-hoc/:class_id',
    name: 'result-register-learn-class',
    component: () => import(`@/pages/admin/ClassShow`)
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login')
  },
  {
    path: '/thong-bao',
    name: 'notify',
    component: () => import('@/pages/Notify')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {

  if ((to.name !== 'login' && !Token.getToken()) || localStorage.getItem('token') == "") next({ name: 'login' })
  next()
})

export default router
