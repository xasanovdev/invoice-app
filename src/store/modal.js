// modal.js

import { defineStore } from 'pinia';

import router from '../routers';

export const useModalStore = defineStore('modal', {
  state: () => ({
    isModalVisible: false,
  }),

  actions: {
    openModal() {
      console.log('opened');

      if (!this.isModalVisible) {
        document.body.classList.add('overflow-hidden');
      }

      

      this.isModalVisible = true;
      router.push({ name: 'InvoicesCreate' });
    },

    closeModal(e) {
      if (e.target.classList.contains('modal-content')) {
        console.log('closed');

        if (this.isModalVisible) {
          document.body.classList.remove('overflow-hidden');
        }

        this.isModalVisible = false;
      }
    },
  },
});

export function useModal() {
  return useModalStore();
}
