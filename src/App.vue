<template>
  <div
    class="flex bg-bgLight dark:bg-bgDark flex-col w-screen h-screen sm:flex-row"
  >
    <Sidebar />

    <ModalEdit />

    <router-view> </router-view>
  </div>
</template>

<script setup>
import ModalEdit from './components/ModalEdit/ModalEdit.vue';
import Sidebar from './components/SidebarComponent.vue';
</script>
