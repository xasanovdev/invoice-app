<template>
  <div
    class="flex bg-bgLight dark:bg-bgDark flex-col w-screen h-screen sm:flex-row"
  >
    <Sidebar />

    <DropDown />

    <!-- <router-view> </router-view> -->
  </div>
</template>

<script setup>
import DropDown from './components/Form/DropDown/DropDown.vue';
import Sidebar from './components/SidebarComponent.vue';
</script>
