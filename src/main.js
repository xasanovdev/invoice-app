import '../src/style.css';

import { createApp } from 'vue';

import { createPinia } from 'pinia';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAngleLeft,
  faAngleRight,
  faChevronDown,
  faMoon,
  faSun,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import router from './routers.js';

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon);
const pinia = createPinia();

app.use(pinia);

library.add(faMoon, faSun, faChevronDown, faTrash, faAngleLeft, faAngleRight);

app.use(router);

app.mount('#app');
