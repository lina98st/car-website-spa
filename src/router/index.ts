import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue' // Falls deine Datei HomeView.vue heißt, umbenennen!

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home, // Zeigt Home.vue an
    },
  ],
})

export default router
