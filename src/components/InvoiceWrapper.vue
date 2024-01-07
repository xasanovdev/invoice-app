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
.card-loading {
  width: 100%; /* Set the width to match the card */
  height: 120px; /* Set the height to match the card */
  background-color: #dfdfdf; /* Set the background color as a light gray */
  border-radius: 8px; /* Add border-radius for rounded corners */
  animation: loading-animation 0.4s infinite alternate; /* Apply a simple animation */
}

@keyframes loading-animation {
  to {
    opacity: 0.2; /* Adjust opacity for the alternating effect */
  }
}
</style>
