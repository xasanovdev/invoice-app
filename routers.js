import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import MainContent from './src/pages/MainContent.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainContent,
    },
  ],
});

export default router;
