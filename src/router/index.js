import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'

import Load from '../views/Load.vue'
import Rec from '../views/Rec.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'login',
  component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/load',
    name: 'Load',
    component: Load
  },{
    path: '/signup',
    name: 'signup',
    component: SignUp
  },{
    path: '/rec',
    name: 'Rec',
    component: Rec
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
