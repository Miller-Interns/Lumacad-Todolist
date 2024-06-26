import { createRouter, createWebHistory } from 'vue-router'
import TitleBox from '@/views/title-box.vue'
import ListView from '@/views/task-list.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TitleBox
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/create-category.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: ListView
    }
  ]
})

export default router
