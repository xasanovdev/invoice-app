<template>
  <aside
    class="sm:h-[100vh] h-[72px] sm:w-[80px] md:w-[103px] bg-dark3 dark:bg-dark1 sm:rounded-r-[20px] items-center flex w-full sm:flex-col justify-between"
  >
    <div
      @click="router.push('/')"
      class="flex sm:flex-col cursor-pointer justify-between items-center h-full w-full"
    >
      <img
        class="w-[72px] h-[72px] sm:w-[80px] sm:h-[80px] md:w-[103px] md:h-[103px]"
        src="/Group 9.png"
        alt=""
      />
      <div class="sm:mb-8 sm:mr-0 mr-6">
        <DarkModeToggle :isDarkMode="isDarkMode" @toggle="toggleDarkMode" />
      </div>
    </div>
    <div
      class="sm:w-full h-full sm:h-auto sm:px-0 px-6 sm:py-6 py-5 flex justify-center sm:border-t sm:border-l-0 border-l border-[#494E6E]"
    >
      <img class="w-[32px] h-[32px] sm:w-10 sm:h-10" src="/bola.svg" alt="" />
    </div>
  </aside>
</template>

<script setup>
import { useDarkMode } from '../composables/useDarkMode';
import router from '../routers';
import DarkModeToggle from './darkMode/DarkModeToggle.vue';

const { isDarkMode, toggleDarkMode } = useDarkMode();
</script>

<style></style>
