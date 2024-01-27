<template>
  <div
    class="flex bg-bgLight flex-1 dark:bg-bgDark flex-col w-screen h-screen sm:flex-row"
  >
    <!-- Use a dynamic component name or definition based on route meta -->
    <component
      class="flex bg-bgLight flex-1 dark:bg-bgDark flex-col w-screen h-screen sm:flex-row"
      :is="getComponentName($route.meta.title)"
    >
      <router-view></router-view>
    </component>
  </div>
</template>

<script setup>
import Login from './views/Auth/Login.vue';
import InvoiceCreate from './views/Invoice/InvoiceCreate.vue';
import InvoiceDetails from './views/Invoice/InvoiceDetails.vue';
import InvoiceEdit from './views/Invoice/InvoiceEdit.vue';
import MainContent from './views/MainContent.vue';

const components = {
  Login,
  InvoiceDetails,
  MainContent,
  InvoiceCreate,
  InvoiceEdit,
};

const getComponentName = (title) => {
  const componentMapping = {
    Auth: 'Auth',
    InvoiceDetails: 'InvoiceDetails',
    HomePage: 'HomePage',
    InvoiceCreate: 'InvoiceCreate',
    InvoiceEdit: 'InvoiceEdit',
  };

  return componentMapping[title] || '';
};
</script>
