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
      <div class="flex flex-col md:flex-row md:items-center md:mt-0 md:gap-[82px] items-start gap-2 mt-6">
        <span class="text-light2 dark:text-light1 text-[13px]">{{
          `Due ${invoice.dueDate}`
        }}</span>
        <span class="text-light4 dark:text-white text-[15px] font-bold">{{
          `£ ${invoice.amount.toFixed(2)}`
        }}</span>
      </div>

      <div
        :class="`py-[14px] px-[30px] rounded-md flex items-center gap-2 bg-${getStatusColorClass()} bg-opacity-10 text-${getStatusColorClass()}`"
      >
        <!-- Call getStatusColorClass directly in the class binding -->
        <p :class="`w-2 h-2 bg-${getStatusColorClass()} rounded-full`"></p>
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
    case 'Paid':
      return '[#33D69F]'; // Change to the desired color for Paid status
    case 'Pending':
      return '[#FF8F00]'; // Change to the desired color for Pending status
    case 'Draft':
      return '[#373B53]'; // Change to the desired color for Draft status
    default:
      return ''; // Default color or no color class
  }
};
</script>

<style></style>
<style></style>
