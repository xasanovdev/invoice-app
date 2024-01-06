<template>
  <div
    class="flex bg-bgLight dark:bg-bgDark flex-col w-screen h-screen sm:flex-row md:f"
  >
    <Sidebar />

    <main class="overflow-y-auto w-full h-full container mx-auto sm:px-6 px-4">
      <header>
        <nav class="w-full mt-[78px]">
          <div>
            <h2>Invoices</h2>
            <p>There are 7 total invoices</p>
          </div>
          <div>


            
            <div></div>
            <button>
              <span>+</span>
              <span>New Invoice</span>
            </button>
          </div>
        </nav>
      </header>
    </main>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue';
</script>
