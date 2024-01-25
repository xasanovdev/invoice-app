import {
  createRouter,
  createWebHistory,
} from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: () => import('./views/MainContent.vue'),
      meta: {
        title: 'HomePage',
      },
    },
    {
      path: '/invoice/:id',
      component: () => import('./views/InvoiceDetails.vue'),
      name: 'InvoiceDetails',
      props: true,
      meta: {
        title: 'InvoiceDetails',
      },
    },
    {
      path: '/auth',
      component: () => import('./views/Auth/Login.Vue'),
      name: 'Auth',
      props: true,
      meta: {
        title: 'Login',
      },
    },
  ],
});

export default router;
