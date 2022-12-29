import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProdectDetail from '../views/ProductView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProdectDetail
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
