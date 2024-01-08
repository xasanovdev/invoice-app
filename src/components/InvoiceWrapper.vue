<template>
  <div class="flex flex-col gap-4 mt-8 mb-[105px]">
    <!-- Use v-if to conditionally render the loading state -->
    <div v-if="isLoading" class="flex items-center flex-col gap-4">
      <div class="card-loading"></div>
      <div class="card-loading"></div>
      <div class="card-loading"></div>
      <div class="card-loading"></div>
      <div class="card-loading"></div>
      <div class="card-loading"></div>
    </div>

    <!-- Use v-else to render the invoices once the data is loaded -->
    <ul v-else class="flex items-center flex-col gap-4">
      <Card
        v-for="invoice in dataInvoices"
        :key="invoice.id"
        @click="navigateToInvoiceDetails(invoice.id)"
        :invoice="invoice"
      />
    </ul>
  </div>
</template>

<script setup>
import {
  onMounted,
  ref,
} from 'vue';

import {
  dataInvoices,
  getInvoicesData,
} from '../../firebase/firebase';
import router from '../../routers';
import Card from './card/Card.vue';

const isLoading = ref(true); // Set initial loading state

onMounted(async () => {
  await getInvoicesData(); // Fetch the data asynchronously
  console.log(dataInvoices);
  isLoading.value = false; // Update loading state when data is ready
});

const navigateToInvoiceDetails = (id) => {
  // Use router to navigate to the details page
  router.push({ name: 'InvoiceDetails', params: { id } });
};
</script>

<style scoped>
/* Add styles for the loading state */

</style>
