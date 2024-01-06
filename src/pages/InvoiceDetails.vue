<template>
  <div v-if="invoice" class="overflow-y-auto w-full h-full sm:px-8 px-6 mt-8">
    <div @click="redirectToHome" class=" inline-flex cursor-pointer items-center gap-6 hover:gap-7 duration-200">
      <i class="fa-solid fa-angle-left text-[9px] text-primary font-bold"></i>
      <h4 class="text-[15px] text-light4 leading-[15px] font-bold">Go back</h4>
    </div>
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

import { invoices } from '../../data';
import router from '../../routers';

let invoice = ref(null);

const route = useRoute();
const invoiceId = route.params.id;

const redirectToHome = () => {
  router.push('/');
};

invoice = invoices.filter((invoice) => invoice.id === invoiceId);
</script>
