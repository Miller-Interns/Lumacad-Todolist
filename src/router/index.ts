import { createRouter, createWebHistory } from 'vue-router'
import TitleView from '@/views/title-view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TitleView
    },
    {
      path: '/task',
      name: 'task',
      component: () => import('../views/task-view.vue')
    }
  ]
})

export default router
