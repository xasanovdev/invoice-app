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
      children: [
        {
          path: '/create-invoice',
          name: 'InvoiceCreate',
          component: () => import('./views/Invoice/InvoiceCreate.vue'),
          meta: {
            title: 'InvoiceCreate',
          },
        },
      ],
    },
    {
      path: '/invoice/:id',
      component: () => import('./views/Invoice/InvoiceDetails.vue'),
      name: 'InvoiceDetails',
      props: true,
      meta: {
        title: 'InvoiceDetails',
      },
      children: [
        {
          path: 'edit',
          name: 'InvoiceEdit',
          component: () => import('./views/Invoice/InvoiceEdit.vue'),
          meta: {
            title: 'InvoiceEdit',
          },
        },
      ],
    },

    {
      path: '/auth',
      component: () => import('./views/Auth/Login.Vue'),
      name: 'Auth',
      props: true,
      meta: {
        title: 'Auth',
      },
    },
  ],
});

export default router;
