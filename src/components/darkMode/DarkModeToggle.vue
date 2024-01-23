<!-- DarkModeToggle.vue -->
<script setup>
import { defineEmits } from 'vue';

const { isDarkMode } = defineProps(['isDarkMode']);
const emit = defineEmits();

const toggleDarkMode = () => {
  emit('toggle');
};
</script>
<template>
  <button @click="toggleDarkMode">
    <span v-if="isDarkMode">
      <font-awesome-icon
        class="fa-regular fa-moon text-[20px] text-light3 hover:text-light1 duration-200"
        :icon="['fasl', 'moon']"
      />
    </span>
    <span v-else>
      <font-awesome-icon
        class="fa-regular fa-moon text-[20px] text-light3 hover:text-light1 duration-200"
        :icon="['fasl', 'sun']"
      />
    </span>
  </button>
</template>
