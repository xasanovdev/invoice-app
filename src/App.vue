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
import InvoiceDetails from './views/InvoiceDetails.vue';
import MainContent from './views/MainContent.vue';

// Register components locally
const components = {
  Login,
  InvoiceDetails,
  MainContent,
};

// Method to get the component name based on the route meta title
const getComponentName = (title) => {
  // Map route titles to corresponding component names
  const componentMapping = {
    Login: 'Auth',
    InvoiceDetails: 'InvoiceDetails',
    HomePage: 'HomePage',
    // Add more mappings as needed
  };

  // Use the mapped component name or default to an empty string
  return componentMapping[title] || '';
};
</script>
