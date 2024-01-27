// modal.js

import { defineStore } from 'pinia';
import { useRoute } from 'vue-router';

import router from '../routers';

const route = useRoute();

export const useModalStore = defineStore('modal', {
  state: () => ({
    modalType: route?.meta.title,
  }),

  actions: {
    openModal() {
      console.log('opened');

      document.body.classList.add('overflow-hidden');

      if (this.modalType === 'InvoiceDetails') {
        router.push({ name: 'InvoiceEdit' });
      }

      if (this.modalType === 'HomePage') {
        router.push({ name: 'InvoiceCreate' });
      }
    },

    closeModal(e) {
      document.body.classList.remove('overflow-hidden');

      if (this.modalType === 'InvoiceEdit') {
        router.push({ name: 'InvoiceDetails' });
      }

      if (this.modalType === 'InvoiceCreate') {
        router.push({ name: 'HomePage' });
      }
    },
    closeModalOverlay(e) {
      if (e.target.classList.contains('modal-content')) {
        this.closeModal();
      }
    },
  },
});

export function useModal() {
  return useModalStore();
}
