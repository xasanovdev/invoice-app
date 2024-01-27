<template>
  <SidebarComponent />
  <div class="w-full h-full overflow-auto">
    <!-- <Modal></Modal> -->

    <router-view></router-view>

    <div class="max-w-[730px] h-full mx-auto sm:px-8 px-6">
      <header>
        <nav
          class="w-full mt-[32px] md:mt-[62px] sm:mt-[36px] flex items-center justify-between"
        >
          <div class="flex flex-col w-full sm:gap-[6px]">
            <h2
              class="text-[24px] sm:text-[36px] leading-9 font-bold text-light4 dark:text-white"
            >
              Invoices
            </h2>
            <p class="text-[13px] text-light2 dark:text-light1">
              There are {{ dataInvoiceCount }} total invoices
            </p>
          </div>
          <div>
            <div></div>
            <Button
              @click="modalStore.openModal()"
              variant="violet"
              size="sm"
              class="flex items-center justify-center gap-2 sm:gap-4"
            >
              <span
                class="bg-white text-primary text-[20px] flex items-center justify-center rounded-full w-8 h-8"
                >+</span
              >
              <span>
                <span>New</span>
                <span class="hidden sm:inline-block">Invoice</span>
              </span>
            </Button>
          </div>
        </nav>
      </header>

      <InvoiceWrapper />
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';

import { useRoute } from 'vue-router';

import Button from '../components/Button/Button.vue';
import InvoiceWrapper from '../components/InvoiceWrapper.vue';
import Modal from '../components/Modal/ModalContent.vue';
import ModalAdd from '../components/ModalAdd/ModalAdd.vue';
import SidebarComponent from '../components/SidebarComponent.vue';
import { useFirebase } from '../firebase/firebase';
import { useModal } from '../store/modal';

const { dataInvoices, getInvoicesData } = useFirebase();

const route = useRoute();
const modalStore = useModal();

if (route.meta.title) {
  modalStore.modalType = route.meta.title;
}

console.log(modalStore.modalType);

watch(
  () => route.meta.title,
  (newTitle) => {
    modalStore.modalType = newTitle;
  }
);

const dataInvoiceCount = computed(() => dataInvoices.value.length);
</script>
