<template>
  <div v-if="invoice">
    <!-- i am take data please show it -->
    <div class="flex items-center justify-between md:gap-7">
      <p class="class=text-light4 font-bold dark:text-white">
        <span class="text-light2">#</span> {{ invoice[0].id }}
      </p>
      <p class="text-light2 text-[12px] dark:text-white">
        {{ invoice[0].clientName }}
      </p>
    </div>
    <div class="flex items-center justify-between sm:gap-10">
      <div
        class="flex flex-col md:flex-row md:items-center md:mt-0 md:gap-[82px] items-start gap-2 mt-6"
      >
        <span class="text-light2 dark:text-light1 text-[13px]">{{
          `Due ${invoice[0].dueDate}`
        }}</span>
        <span class="text-light4 dark:text-white text-[15px] font-bold">{{
          `£ ${invoice[0].amount}`
        }}</span>
      </div>

      <div
        :class="`w-[103px] py-[14px] rounded-md flex items-center justify-center gap-2 bg-opacity-10`"
      >
        <p :class="`w-2 h-2 rounded-full`"></p>
        <p class="text-[15px] font-bold leading-[15px]">{{ invoice[0].status }}</p>
      </div>
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

let invoice = ref(null);

const route = useRoute();
const invoiceId = route.params.id;

invoice = invoices.filter((invoice) => invoice.id === invoiceId);

console.log(invoice);


</script>
