import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CarDetailPage from '../views/CarDetailPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home, // Zeigt Home.vue an
    },
    {
      path: '/car/:id',
      name: 'car-detail',
      component: CarDetailPage,
    },
  ],
})

export default router
