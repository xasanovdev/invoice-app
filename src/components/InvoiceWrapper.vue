<template>
  <div class="flex flex-col w-full gap-4 mt-8 pb-[105px]">
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
    <template v-else-if="dataInvoices.length === 0">
      <div
        class="w-full h-full flex items-center text-center mt-[50px] sm:mt-[90px] md:mt-[150px] flex-col justify-center"
      >
        <img src="/qizcha.svg" alt="" />
        <h3 class="text-[24px] text-light4 dark:text-white font-bold mt-12">
          There is nothing here
        </h3>
        <h6 class="text-light2 whitespace-normal mt-6">
          Create an invoice by clicking the New Invoice button and get started
        </h6>
      </div>
    </template>
    <template v-else>
      <ul class="flex items-center flex-col gap-4">
        <Card
          v-for="invoice in dataInvoices"
          :key="invoice.id"
          @click="navigateToInvoiceDetails(invoice.id)"
          :invoice="invoice"
        />
      </ul>
    </template>
  </div>
</template>

<script setup>
import {
  onMounted,
  ref,
} from 'vue';

import { useFirebase } from '../firebase/firebase';
import router from '../routers';
import Card from './card/Card.vue';

const { dataInvoices, getInvoicesData } = useFirebase();

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
