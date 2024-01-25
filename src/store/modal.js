// modal.js

import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', {
  state: () => ({
    isModalVisible: true,
  }),

  actions: {
    openModal() {
      console.log('opened');

      if (!this.isModalVisible) {
        document.body.classList.add('overflow-hidden');
      }

      this.isModalVisible = true;
    },

    closeModal() {
      console.log('closed');

      if (this.isModalVisible) {
        document.body.classList.remove('overflow-hidden');
      }

      this.isModalVisible = false;
    },
  },
});

export function useModal() {
  return useModalStore();
}
