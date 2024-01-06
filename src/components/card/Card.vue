<template>
  <li
    class="w-full p-6 bg-white md:flex md:items-center md:justify-between list-none dark:bg-dark1 rounded-[8px] shadow-sm"
  >
    <div class="flex items-center justify-between md:gap-7">
      <p class="class=text-light4 font-bold dark:text-white">
        <span class="text-light2">#</span> {{ invoice.id }}
      </p>
      <p class="text-light2 text-[12px] dark:text-white">
        {{ invoice.clientName }}
      </p>
    </div>
    <div class="flex items-center justify-between sm:gap-10">
      <div
        class="flex flex-col md:flex-row md:items-center md:mt-0 md:gap-[82px] items-start gap-2 mt-6"
      >
        <span class="text-light2 dark:text-light1 text-[13px]">{{
          `Due ${invoice.paymentDue}`
        }}</span>
        <span class="text-light4 dark:text-white text-[15px] font-bold">{{
          `£ ${invoice.total}`
        }}</span>
      </div>

      <div
        :class="`w-[103px] py-[14px] rounded-md flex items-center justify-center gap-2 bg-[${getStatusColorClass()}] text-[${getStatusColorClass()}] bg-opacity-10 text-${getStatusColorClass()}`"
      >
        <p :class="`w-2 h-2 bg-[${getStatusColorClass()}] rounded-full`"></p>
        <p class="text-[15px] font-bold leading-[15px]">{{ invoice.status }}</p>
      </div>
    </div>
  </li>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['invoice']);

const getStatusColorClass = () => {
  switch (props.invoice.status) {
    case 'paid':
      return '#33D69F';
    case 'pending':
      return '#FF8F00';
    case 'draft':
      return '#373B53';
    default:
      return '';
  }
};
</script>

<style></style>
