<template>
  <ModalAdd
    :isVisible="isModalVisible"
    :closeModalFunction="closeModal"
  ></ModalAdd>

  <main class="overflow-y-auto w-full h-full sm:px-8 px-6">
    <div class="max-w-[730px] h-full mx-auto">
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
              @click="openModal()"
              class="bg-primary text-white p-2 hover:opacity-80 flex items-center justify-center gap-2 sm:gap-4"
            >
              <span class="bg-white text-primary text-[20px] flex items-center justify-center rounded-full w-8 h-8">+</span>
              <span
                >New

                <span class="hidden sm:inline-block">Invoice</span>
              </span>
            </Button>
          </div>
        </nav>
      </header>

      <InvoiceWrapper />
    </div>
  </main>
</template>

<script setup>
import {
  computed,
  ref,
} from 'vue';

import Button from '../components/Button/Button.vue';
import InvoiceWrapper from '../components/InvoiceWrapper.vue';
import ModalAdd from '../components/ModalAdd/ModalAdd.vue';
import {
  dataInvoices,
  getInvoicesData,
} from '../firebase/firebase';

const isModalVisible = ref(false);

const openModal = () => {
  document.body.classList.add('overflow-hidden');
  isModalVisible.value = true;
};

const closeModal = () => {
  document.body.classList.remove('overflow-hidden');
  isModalVisible.value = false;
};

const dataInvoiceCount = computed(() => dataInvoices.value.length);
</script>
