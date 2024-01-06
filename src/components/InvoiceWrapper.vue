<template>
  <div class="flex flex-col gap-4 mt-8 mb-[105px]">
    <!-- Iterate over the invoices array and use the InvoiceCard component for each invoice -->
    <Card v-for="invoice in invoices" :key="invoice.id" :invoice="invoice" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

import { invoices } from '../../data.js';
import Card from './card/Card.vue';

const invoicesList = ref(invoices);
</script>
