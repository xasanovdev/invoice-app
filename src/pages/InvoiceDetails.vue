<template>
  <div v-if="invoice">
    <!-- Your component content using invoice.id, invoice.clientName, etc. -->
    asfas
  </div>
  <div v-else>
    <!-- Handle the case where invoice is null, e.g., show an error message or redirect -->
    <p>Invoice not found.</p>
  </div>
</template>

<script setup>
import {
  onMounted,
  ref,
} from 'vue';

import { useRoute } from 'vue-router';

const invoice = ref(null);

const loadInvoice = async () => {
  // Load invoice data based on the route parameter (id)
  const route = useRoute();
  const invoiceId = route.params.id;

  // Fetch the invoice data (adjust based on your data fetching mechanism)
  // Example: const invoiceData = await fetchInvoiceData(invoiceId);
  // Set the invoice value once data is loaded
  // invoice.value = invoiceData;
};

onMounted(loadInvoice);
</script>
