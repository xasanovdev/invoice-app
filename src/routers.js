import {
  createRouter,
  createWebHistory,
} from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/MainContent.vue'),
    },
    {
      path: '/invoice/:id',

      component: () => import('./views/InvoiceDetails.vue'),
      name: 'InvoiceDetails',
      props: true,
    },
  ],
});

export default router;
