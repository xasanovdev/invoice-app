import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import InvoiceDetails from './src/pages/InvoiceDetails.vue';
import MainContent from './src/pages/MainContent.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainContent,
    },
    {
      path: '/invoice/:id', // Use a dynamic parameter for the invoice ID
      component: InvoiceDetails,
      name: 'InvoiceDetails',
      props: true, // Pass the invoice ID as a prop
    },
  ],
});

export default router;
