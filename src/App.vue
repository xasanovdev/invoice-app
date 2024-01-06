<template>
  <div
    class="flex bg-bgLight dark:bg-bgDark flex-col w-screen h-screen sm:flex-row md:f"
  >
    <Sidebar />
    <MainContent />
  </div>
</template>

<script setup>
import MainContent from './components/MainContent.vue';
import Sidebar from './components/Sidebar.vue';
</script>
