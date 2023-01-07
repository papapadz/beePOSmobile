import { createRouter, createWebHistory } from '@ionic/vue-router';
//import { RouteRecordRaw } from 'vue-router';
//import HomePage from '../views/HomePage.vue'
//import MenuPage from '../views/MenuPage.vue'
import IndexPage from '../views/IndexPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: IndexPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
