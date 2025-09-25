import { createRouter, createWebHistory } from 'vue-router'
import { isAuthenticated } from '../../utils/storage'
import HomeView from '../views/HomeView.vue'
import TodosPage from '@/views/TodosPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/todos',
      name: 'TodosPage',
      component: TodosPage,
      beforeEnter: () => {
        if(!isAuthenticated.value) {
          return '/'
        }
      }
    }
  ],
})

export default router
