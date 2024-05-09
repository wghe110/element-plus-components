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
        },
        {
          path: '/address-select',
          component: () => import('../views/demos/address-select/index.vue')
        },
        {
          path: '/car-number-input',
          component: () => import('../views/demos/car-number-input/index.vue')
        },
        {
          path: '/date-range-picker',
          component: () => import('../views/demos/date-range-picker.vue')
        },
        {
          path: '/custom-date-range-picker',
          component: () => import('../views/demos/custom-date-range-picker.vue')
        },
        {
          path: '/location',
          component: () => import('../views/demos/location.vue')
        }
      ]
    },
  ]
})