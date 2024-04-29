import { createRouter, createWebHashHistory } from "vue-router";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/layout/index.vue'),
      children: [
        {
          path: '/intro',
          component: () => import('../views/introduce/index.vue')
        },
        {
          path: '/upload',
          component: () => import('../views/demos/upload/index.vue')
        }
      ]
    },
  ]
})