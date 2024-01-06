<template>
  <main class="overflow-y-auto w-full h-full container mx-auto sm:px-6 px-4">
    <header>
      <nav class="w-full mt-[78px] flex items-center justify-between">
        <div class="flex flex-col gap-[6px]">
          <h2 class="text-[36px] leading-9 font-bold text-light4 dark:text-white">Invoices</h2>
          <p class="text-[13px] text-light2 dark:text-light1">There are 7 total invoices</p>
        </div>
        <div>
          <div></div>
          <new-invoice-button />
        </div>
      </nav>
    </header>
  </main>
</template>

<script setup>
import NewInvoiceButton from './buttons/NewInvoiceButton.vue';
</script>
