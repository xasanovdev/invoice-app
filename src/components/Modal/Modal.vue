<template>
  <Transition>
    <div v-if="isVisible" class="modal absolute overflow-hidden w-full h-full bg-black bg-opacity-45">
      <div class="modal-content overflow-hidden">
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  "isVisible": Boolean,
});
console.log(props);
</script>

<style>

</style>
