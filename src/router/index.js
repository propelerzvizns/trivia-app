import Vue from 'vue'
import VueRouter from 'vue-router'
import TriviaApp from '../components/TriviaApp.vue'
import Chuck from '../components/Chuck.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/trivia-app',
    component: TriviaApp
  },
  {
    path: '/trivia-app',
    name: 'trivia-app',
    component: TriviaApp
  },
  {
    path: '/chuck',
    name: 'chuck',
    component: Chuck  
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
