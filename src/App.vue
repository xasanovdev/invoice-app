<template>
  <div
    class="flex bg-bgLight dark:bg-bgDark flex-col w-screen h-screen sm:flex-row"
  >
    <Sidebar />

    <DatePickerVue />
    <!-- <router-view> </router-view> -->
  </div>
</template>

<script setup>
import DatePickerVue from './components/Form/DatePicker/DatePicker.vue';
import Sidebar from './components/SidebarComponent.vue';
</script>
