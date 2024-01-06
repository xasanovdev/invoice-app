<template>
  <div v-if="invoice" class="overflow-y-auto w-full h-full sm:px-8 px-6 mt-8">
    <div
      @click="redirectToHome"
      class="inline-flex cursor-pointer items-center gap-6 hover:gap-7 duration-200"
    >
      <i class="fa-solid fa-angle-left text-[9px] text-primary font-bold"></i>
      <h4
        class="text-[15px] text-light4 leading-[15px] dark:text-white font-bold"
      >
        Go back
      </h4>
    </div>

    <div
      class="p-6 bg-white dark:bg-dark1 rounded-lg mt-8 flex items-center justify-between"
    >
      <p class="text-light2 dark:text-light1 text-[13px]">Status</p>
      <div
        :class="[
          'w-[103px] py-[14px] rounded-md flex items-center justify-center gap-2 bg-opacity-10',
          getStatusBgColorClass(invoice[0].status),
        ]"
      >
        <p
          :class="[
            'w-2 h-2 rounded-full',
            getStatusBgColorClass(invoice[0].status),
          ]"
        ></p>

        <p
          :class="[
            'text-[15px] font-bold leading-[15px]',
            getStatusTextColorClass(invoice[0].status),
          ]"
        >
          {{ invoice[0].status }}
        </p>
      </div>
    </div>

    <div class="p-6 bg-white dark:bg-dark1 rounded-lg mt-8">
      <div class="flex justify-between flex-col gap-[30px] text-left">
        <div>
          <p class="text-light4 font-bold dark:text-white">
            <span class="text-light2">#</span> {{ invoice[0].id }}
          </p>
          <p class="text-light2 text-[12px] dark:text-white">
            {{ invoice[0].description }}
          </p>
        </div>
        <div>
          <div class="text-light2 sm:text-right text-[12px] dark:text-white">
            <p>{{ invoice[0].senderAddress.street }}</p>
            <p>{{ invoice[0].senderAddress.city }}</p>
            <p>{{ invoice[0].senderAddress.zipcode }}</p>
            <p>{{ invoice[0].senderAddress.country }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <!-- Handle the case where invoice is null, e.g., show an error message or redirect -->
    <p>Invoice not found.</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

import { useRoute } from 'vue-router';

import { invoices } from '../../data';
import router from '../../routers';
import {
  getStatusBgColorClass,
  getStatusTextColorClass,
} from '../libs/useStatusColors';

let invoice = ref(null);

const route = useRoute();
const invoiceId = route.params.id;

const redirectToHome = () => {
  router.push('/');
};

invoice = invoices.filter((invoice) => invoice.id === invoiceId);
</script>
