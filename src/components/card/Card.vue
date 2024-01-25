<template>
  <li
    class="w-full cursor-pointer border dark:border-dark1 border-white duration-200 hover:shadow-primary shadow-md hover:border hover:border-primary p-6 bg-white md:flex md:items-center md:justify-between list-none dark:bg-dark1 rounded-[8px]"
  >
    <div class="flex items-center justify-between gap-2">
      <p class="text-light4 font-bold dark:text-white">
        <span class="text-light2">#</span> {{ invoice.title }}
      </p>
      <p class="text-light2 text-[12px] dark:text-white">
        {{ invoice.clientName }}
      </p>
    </div>
    <div
      class="flex items-center justify-between mt-6 md:gap-3 lg:gap-5 md:mt-0"
    >
      <div
        class="flex flex-col md:justify-between md:flex-row md:items-center items-start gap-2"
      >
        <span class="text-light2 dark:text-light1 text-[13px]">{{
          `${formatDate(invoice.paymentDue)}`
        }}</span>
        <span class="text-light4 dark:text-white text-[15px] font-bold">
          {{ totalAmount.toFixed(2) }}</span
        >
      </div>

      <div
        :class="[
          'w-[103px] py-[14px] rounded-md flex items-center justify-center gap-2 bg-opacity-10',
          getStatusBgColorClass(invoice.status),
        ]"
      >
        <p
          :class="[
            'w-2 h-2 rounded-full',
            getStatusBgColorClass(invoice.status),
          ]"
        ></p>

        <p
          :class="[
            'text-[15px] font-bold leading-[15px]',
            getStatusTextColorClass(invoice.status),
          ]"
        >
          {{ invoice.status }}
        </p>
      </div>
    </div>
  </li>
</template>

<script setup>
import {
  computed,
  defineProps,
} from 'vue';

import { formatDate } from '../../utils/dateFormatter';
import {
  getStatusBgColorClass,
  getStatusTextColorClass,
} from '../../utils/statusColor';

const totalAmount = computed(() => {
  return props.invoice.items.reduce((total, item) => {
    const quantity = parseFloat(item.quantity) || 0;
    const price = parseFloat(item.price) || 0;
    const itemTotal = quantity * price;

    return total + itemTotal;
  }, 0);
});

const props = defineProps(['invoice']);

console.log(props.invoice);
</script>

<style></style>
