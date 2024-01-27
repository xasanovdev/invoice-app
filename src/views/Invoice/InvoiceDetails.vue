<template>
  <SidebarComponent />

  <div class="w-full overflow-auto">
    <RouterView></RouterView>

    <div class="flex flex-col max-w-[730px] mx-auto mt-[30px]">
      <div
        @click="router.push('/')"
        class="inline-flex p-8 cursor-pointer items-center gap-6 hover:gap-7 duration-200"
      >
        <font-awesome-icon
          class="fa-solid fa-angle-left text-[9px] text-primary font-bold"
          :icon="['fas', 'angle-left']"
        />
        <h4
          class="text-[15px] text-light4 leading-[15px] dark:text-white font-bold"
        >
          Go back
        </h4>
      </div>

      <div
        v-if="isLoading"
        class="w-full h-full px-6 flex items-center flex-col gap-6"
      >
        <!-- Handle the case where invoice is null, e.g., show an error message or redirect -->
        <div class="card-loading"></div>
        <div class="content-loading"></div>
      </div>

      <div v-else class="w-full h-full px-6">
        <div
          class="p-6 bg-white dark:bg-dark1 rounded-lg flex gap-2 items-center justify-between"
        >
          <div
            class="w-full flex items-center gap-5 justify-between md:justify-start"
          >
            <p class="text-light2 dark:text-light1 text-[13px]">Status</p>
            <div
              :class="[
                'w-[103px] py-[14px] rounded-md flex items-center justify-center gap-2 bg-opacity-10',
                getStatusBgColorClass(dataInvoice[0].status),
              ]"
            >
              <p
                :class="[
                  'w-2 h-2 rounded-full',
                  getStatusBgColorClass(dataInvoice[0].status),
                ]"
              ></p>

              <p
                :class="[
                  'text-[15px] font-bold leading-[15px]',
                  getStatusTextColorClass(dataInvoice[0].status),
                ]"
              >
                {{ dataInvoice[0].status }}
              </p>
            </div>
          </div>
          <div class="w-full hidden sm:flex gap-2">
            <Button variant="primary" size="md" @click="modalStore.openModal"
              >Edit</Button
            >

            <Button
              @click="deleteInvoice"
              :loading="deleteLoading"
              variant="danger"
              size="md"
              >Delete</Button
            >
            <Button
              @click="toggleInvoiceStatus"
              :loading="markAsPaidLoading"
              variant="violet"
              size="md"
            >
              <span>Mark as {{ currentStatusText }}</span>
            </Button>
          </div>
        </div>

        <div class="p-6 bg-white dark:bg-dark1 rounded-lg mt-8 mb-36">
          <div
            class="flex justify-between flex-col sm:flex-row gap-[30px] text-left"
          >
            <div class="flex-start">
              <p class="text-light4 font-bold dark:text-white">
                <span class="text-light2">#</span> {{ dataInvoice[0].title }}
              </p>
              <p class="text-light3 text-[12px] dark:text-white">
                {{ dataInvoice[0].description }}
              </p>
            </div>
            <div>
              <div
                class="text-light3 sm:text-right text-[13px] dark:text-white"
              >
                <p>{{ dataInvoice[0].senderAddress.street }}</p>
                <p>{{ dataInvoice[0].senderAddress.city }}</p>
                <p>{{ dataInvoice[0].senderAddress.zipcode }}</p>
                <p>{{ dataInvoice[0].senderAddress.country }}</p>
              </div>
            </div>
          </div>

          <div
            class="mt-8 grid grid-cols-2 md:grid-cols-3 gap-y-[60px] gap-x-8"
          >
            <div class="flex flex-col gap-8 col-span-1">
              <div class="flex flex-col gap-3">
                <p class="text-[15px] text-light4 font-bold dark:text-white">
                  Invoice Date
                </p>
                <p class="text-light3 text-[13px] dark:text-white">
                  {{ formatDate(dataInvoice[0].createdAt) }}
                </p>
              </div>
              <div class="flex flex-col gap-3">
                <p class="text-[15px] text-light4 font-bold dark:text-white">
                  Payment Terms
                </p>
                <p class="text-light3 text-[13px] dark:text-white">
                  {{ dataInvoice[0].paymentTerms }} Days
                </p>
              </div>
            </div>
            <div class="col-span-1">
              <p class="text-[15px] text-light4 font-bold dark:text-white">
                Bill To
              </p>
              <p class="mt-3 text-light3 text-[13px] dark:text-white">
                {{ dataInvoice[0].clientName }}
              </p>

              <div class="mt-2 text-light3 text-[13px] dark:text-white">
                <p>{{ dataInvoice[0].clientAddress.street }}</p>
                <p>{{ dataInvoice[0].clientAddress.city }}</p>
                <p>{{ dataInvoice[0].clientAddress.zipcode }}</p>
                <p>{{ dataInvoice[0].clientAddress.country }}</p>
              </div>
            </div>
            <div class="col-span-2 md:col-span-1">
              <p class="text-[15px] text-light4 font-bold dark:text-white">
                Send To
              </p>
              <p class="text-light3 text-[13px] dark:text-white">
                {{ dataInvoice[0].clientEmail }}
              </p>
            </div>
          </div>

          <div class="mt-9 flex flex-col rounded-lg overflow-hidden">
            <ul class="flex flex-col gap-6 p-6 bg-bgLight dark:bg-dark2">
              <li
                class="flex items-center justify-between"
                v-for="(item, index) in dataInvoice[0].items"
                :key="index"
              >
                <p class="flex flex-col">
                  <span
                    class="text-[15px] text-light4 font-bold dark:text-white"
                    >{{ item.name }}</span
                  >
                  <span
                    class="text-light3 sm:text-left text-[15px] font-bold dark:text-white"
                    >{{ item.quantity }} x &#x00A3;{{ item.price }}</span
                  >
                </p>
                <p class="text-[15px] text-light4 font-bold dark:text-white">
                  &#x00A3;{{
                    (dataInvoice[0].total = parseFloat(
                      item.quantity * item.price
                    ).toFixed(2))
                  }}
                </p>
              </li>
            </ul>

            <div
              class="flex items-center justify-between p-6 bg-dark3 dark:bg-light4"
            >
              <p class="text-[13px] text-light4 font-bold text-white">
                Amount Due
              </p>
              <p
                class="text-light3 sm:text-left text-[24px] font-bold text-white"
              >
                &#x00A3;{{ parseFloat(dataInvoice[0].total).toFixed(2) }}
              </p>
            </div>
          </div>
        </div>

        <div
          class="fixed sm:hidden z-20 w-full left-0 bottom-0 backdrop-blur-md bg-opacity-50 p-4"
        >
          <div class="w-full flex justify-between gap-2 px-4">
            <Button @click="modalStore.openModal" variant="primary" size="md"
              >Edit</Button
            >
            <Button
              variant="danger"
              size="md"
              @click="deleteInvoice"
              :loading="deleteLoading"
              >Delete</Button
            >

            <Button
              @click="toggleInvoiceStatus"
              :loading="markAsPaidLoading"
              variant="violet"
              size="md"
            >
              Mark as {{ currentStatusText }}
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'; // Assuming you are using Vue 3

import { useRoute } from 'vue-router';

import Button from '../../components/Button/Button.vue';
import SidebarComponent from '../../components/SidebarComponent.vue';
import { useFirebase } from '../../firebase/firebase';
import router from '../../routers';
import { useModal } from '../../store/modal';
import { formatDate } from '../../utils/dateFormatter';
import {
  getStatusBgColorClass,
  getStatusTextColorClass,
} from '../../utils/statusColor';

const {
  dataInvoice,
  updateInvoiceStatus,
  getInvoiceById,
  deleteInvoiceFunction,
} = useFirebase();

const isLoading = ref(true);
const markAsPaidLoading = ref(false);

const route = useRoute();
const invoiceId = route.params.id;

let newStatusText = ref('');

const modalStore = useModal();

let deleteLoading = ref(false);

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

const deleteInvoice = async () => {
  deleteLoading.value = true;
  await deleteInvoiceFunction(dataInvoice.value[0].id);
  deleteLoading.value = false;
};

const toggleInvoiceStatus = async () => {
  try {
    const invoiceId = dataInvoice.value[0].id;
    const currentStatus = dataInvoice.value[0].status;
    const newStatus = currentStatus === 'paid' ? 'pending' : 'paid';
    newStatusText.value = currentStatus;

    markAsPaidLoading.value = true;
    await updateInvoiceStatus(invoiceId, newStatus);
    markAsPaidLoading.value = false;
  } catch (error) {
    console.error('Error updating invoice status', error);
  }
};

const currentStatusText = computed(() => {
  return newStatusText.value === 'paid' ? 'Paid' : 'Pending';
});

onMounted(async () => {
  await getInvoiceById(invoiceId);
  isLoading.value = false;
});
</script>
