import Vue from 'vue'
import VueRouter from 'vue-router'
import LifeTimer from '../views/LifeTimer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LifeTimer',
    component: LifeTimer
  },
  {
    path: '/StopWatchStructure',
    name: 'StopWatchStructure',
    component: () => import('../views/StopWatchStructure.vue')
  },
  {
    path: '/ClockStructure',
    name: 'ClockStructure',
    component: () => import('../views/ClockStructure.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
