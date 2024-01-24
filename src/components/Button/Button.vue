<template>
  <button
    :class="[
      'font-semibold w-full tracking-wide rounded-full duration-200',
      styles[variant],
      sizes[size],
      { 'cursor-not-allowed opacity-50': loading },
    ]"
    :disabled="loading"
  >
    <template v-if="!loading">
      <slot></slot>
    </template>
    <template v-else> Loading... </template>
  </button>
</template>

<script setup>
const props = defineProps(['variant', 'size', 'loading']);

const styles = {
  primary: 'hover:bg-light1 bg-[#F9FAFE] text-light3',
  violet: 'bg-primary text-white hover:bg-[#9277FF]',
  danger: 'bg-danger text-white hover:bg-[#FF9797]',
};

const sizes = {
  sm: 'text-md p-2',
  md: 'text-md p-4',
  lg: 'text-lg p-6',
};
</script>

<style></style>
