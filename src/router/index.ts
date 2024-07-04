import { createRouter, createWebHistory } from 'vue-router'
import TitleView from '../pages/title-view.vue'
import { RouterName } from '../types/enums/RouterName'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: `/`,
      name: RouterName.HOME,
      component: TitleView
    },
    {
      path: `/${RouterName.TASK}`,
      name: RouterName.TASK,
      component: () => import('../pages/task-view.vue')
    }
  ]
})

export default router
