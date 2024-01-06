<template>
  <li
    class="w-full cursor-pointer border dark:border-dark1 border-white duration-200 hover:shadow-primary shadow-md hover:border hover:border-primary p-6 bg-white md:flex md:items-center md:justify-between list-none dark:bg-dark1 rounded-[8px]"
  >
    <div class="flex items-center justify-between md:gap-7">
      <p class="text-light4 font-bold dark:text-white">
        <span class="text-light2">#</span> {{ invoice.id }}
      </p>
      <p class="text-light2 text-[12px] dark:text-white">
        {{ invoice.clientName }}
      </p>
    </div>
    <div class="flex items-center justify-between sm:gap-10 mt-6 md:mt-0">
      <div
        class="flex flex-col md:flex-row md:items-center md:gap-[82px] items-start gap-2"
      >
        <span class="text-light2 dark:text-light1 text-[13px]">{{
          `Due ${invoice.paymentDue}`
        }}</span>
        <span class="text-light4 dark:text-white text-[15px] font-bold">{{
          `£ ${invoice.total}`
        }}</span>
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
import { defineProps } from 'vue';

import {
  getStatusBgColorClass,
  getStatusTextColorClass,
} from '../../libs/useStatusColors';

const props = defineProps(['invoice']);
</script>

<style></style>
