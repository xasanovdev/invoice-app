<template>
  <main class="overflow-y-auto w-full h-full sm:px-6 px-4">
    <div class="max-w-[730px] mx-auto">
      <header>
        <nav
          class="w-full mt-[32px] md:mt-[62px] sm:mt-[36px] flex items-center justify-between"
        >
          <div class="flex flex-col sm:gap-[6px]">
            <h2
              class="text-[24px] sm:text-[36px] leading-9 font-bold text-light4 dark:text-white"
            >
              Invoices
            </h2>
            <p class="text-[13px] text-light2 dark:text-light1">
              There are 7 total invoices
            </p>
          </div>
          <div>
            <div></div>
            <NewInvoiceButton />
          </div>
        </nav>
      </header>

      <InvoiceWrapper />
    </div>
  </main>
</template>

<script setup>
import NewInvoiceButton from '../components/buttons/NewInvoiceButton.vue';
import InvoiceWrapper from '../components/InvoiceWrapper.vue';
</script>
