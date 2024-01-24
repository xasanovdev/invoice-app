<template>
  <!-- Dropdown using Vue and defineModel -->
  <div
    class="w-[240px] border border-light1 rounded-md focus:border-primary dark:border-dark2"
  >
    <div class="relative w-full inline-block text-left">
      <div class="">
        <button
          type="button"
          class="flex items-center dark:bg-dark1 dark:text-white px-4 py-3 border border-transparent hover:border-primary duration-200 bg-white text-[15px] font-bold justify-between w-full rounded-md outline-none"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          @click="isDropDownOpen = !isDropDownOpen"
        >
          {{ selectedOption }}
          <!-- Heroicon name: chevron-down -->
          <font-awesome-icon
            class="fa-solid fa-chevron-down text-primary"
            :icon="['fas', 'chevron-down']"
          />
        </button>
      </div>

      <div
        v-if="isDropDownOpen"
        class="origin-top-right dark:bg-dark2 mt-6 w-full absolute right-0 rounded-md shadow-lg bg-white"
      >
        <div
          class="w-full flex flex-col"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <a
            v-for="(option, index) in options"
            :key="index"
            @click="selectOption(option)"
            :class="[
              'font-bold px-4 py-3 text-light4 cursor-pointer dark:text-light2 text-[15px] hover:bg-light1 dark:bg-bg-indigo-500/50 duration-100',
              { 'text-primary dark:text-primary': selectedOption === option },
            ]"
            role="menuitem"
          >
            {{ option }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineModel, ref } from 'vue';

const updateInvoice = defineModel();

const isDropDownOpen = ref(false);
const selectedOption = ref(
  updateInvoice.value?.paymentTerms
    ? `Net ${updateInvoice.value?.paymentTerms} Days`
    : 'Select Option'
);
const options = ref(['Net 1 Day', 'Net 7 Days', 'Net 14 Days', 'Net 30 Days']);

const selectOption = (option) => {
  selectedOption.value = option;
  isDropDownOpen.value = false;

  const numberOfDays = option.split(' ')[1];
  updateInvoice.value.paymentTerms = +numberOfDays;
};
</script>
