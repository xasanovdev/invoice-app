<template>
  <div
    class="flex bg-bgLight dark:bg-bgDark flex-col w-screen h-screen sm:flex-row"
  >
    <Sidebar />

    <router-view> </router-view>
  </div>
</template>

<script setup>
import {
  analytics,
  dataInvoices,
  getInvoicesData,
  invoicesCollection,
} from '../firebase/firebase';
import Sidebar from './components/Sidebar.vue';
import MainContent from './pages/MainContent.vue';

getInvoicesData();

console.log(dataInvoices);
</script>
