import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import InvoiceDetailsVue from './views/InvoiceDetails.vue';
import MainContent from './views/MainContent.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: MainContent,
    },
    {
      path: '/invoice/:id', 
      component: InvoiceDetailsVue,
      name: 'InvoiceDetails',
      props: true,
    },
  ],
});

export default router;
