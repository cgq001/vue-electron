import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',   //首页
    name: 'index',
    component: Index,
    children:[
      {
         path: '',
         name: 'indexlist',
         component: () => import('../views/msg/list.vue')
      }
    ]
  },
  {
    path: '/load',   //登录页
    name: 'load',
    component: () => import('../views/Load.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
