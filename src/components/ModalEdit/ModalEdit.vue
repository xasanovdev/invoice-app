<template>
  <Modal :isVisible="isVisible">
    <template v-if="isLoadingInvoice">
      <div>Loading...</div>
    </template>
    <template v-else>
      <div
        class="relative lg:w-2/3 sm:w-4/5 h-screen overflow-y-auto bg-white dark:bg-bgDark"
      >
        <div
          class="w-full sm:rounded-r-[20px] p-6 md:p-8 flex flex-col gap-[45px]"
        >
          <div
            @click="closeModalFunction"
            class="inline-flex cursor-pointer items-center gap-6 hover:gap-7 duration-200"
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

          <h1 class="text-light4 text-[24px] font-bold dark:text-white">
            Edit<span class="text-light2">#</span> {{ updateInvoice.title }}
          </h1>

          <div class="flex flex-col items-start gap-6">
            <h3 class="text-[15px] text-primary font-bold">Bill From</h3>
            <div class="flex items-start flex-col w-full gap-[9px]">
              <label
                class="text-[13px] text-light3 font-medium"
                for="addressBillFrom"
                >Street Address
              </label>
              {{ console.log(updateInvoice) }}
              <Input
                id="addressBillFrom"
                type="text"
                placeholder="salom"
                v-model="updateInvoice.senderAddress.street"
              />
            </div>
            <div class="w-full grid sm:grid-cols-3 grid-cols-2 gap-6">
              <div
                class="flex items-start col-span-1 flex-col w-full gap-[9px]"
              >
                <label
                  class="text-[13px] text-light3 font-medium"
                  for="cityBillFrom"
                  >City</label
                >
                <Input
                  id="cityBillFrom"
                  property="senderAddress.city"
                  placeholder="salom"
                  v-model="updateInvoice.senderAddress.city"
                />
              </div>
              <div
                class="flex items-start flex-col col-span-1 w-full gap-[9px]"
              >
                <label
                  class="text-[13px] text-light3 font-medium"
                  for="costCodeBillFrom"
                  >Post Code</label
                >
                <Input
                  id="costCodeBillFrom"
                  type="text"
                  placeholder="salom"
                  v-model="updateInvoice.senderAddress.zipcode"
                />
              </div>
              <div
                class="flex items-start sm:col-span-1 col-span-2 flex-col w-full gap-[9px]"
              >
                <label
                  class="text-[13px] text-light3 font-medium"
                  for="countryBillFrom"
                  >Country
                </label>
                <Input
                  id="countryBillFrom"
                  type="text"
                  placeholder="salom"
                  v-model="updateInvoice.senderAddress.country"
                />
              </div>
            </div>
          </div>

          <div class="flex flex-col items-start gap-6">
            <h3 class="text-[15px] text-primary font-bold">Bill To</h3>
            <div class="flex items-start flex-col w-full gap-[9px]">
              <label
                class="text-[13px] text-light3 font-medium"
                for="clientName"
                >Client’s Name</label
              >
              <Input
                id="clientName"
                type="text"
                placeholder="salom"
                v-model="updateInvoice.clientName"
              />
            </div>
            <div class="flex items-start flex-col w-full gap-[9px]">
              <label
                class="text-[13px] text-light3 font-medium"
                for="clientEmail"
                >Client’s Email</label
              >
              <Input
                id="clientEmail"
                type="text"
                placeholder="salom"
                v-model="updateInvoice.clientEmail"
              />
            </div>
            <div class="flex items-start flex-col w-full gap-[9px]">
              <label
                class="text-[13px] text-light3 font-medium"
                for="addressBillTo"
                >Street Address</label
              >
              <Input
                id="addressBillTo"
                type="text"
                placeholder="salom"
                v-model="updateInvoice.clientAddress.street"
              />
            </div>
            <div class="w-full grid sm:grid-cols-3 grid-cols-2 gap-6">
              <div
                class="flex items-start col-span-1 flex-col w-full gap-[9px]"
              >
                <label
                  class="text-[13px] text-light3 font-medium"
                  for="cityBillTo"
                  >City</label
                >
                <Input
                  id="cityBillTo"
                  type="text"
                  placeholder="salom"
                  v-model="updateInvoice.clientAddress.city"
                />
              </div>
              <div
                class="flex items-start flex-col col-span-1 w-full gap-[9px]"
              >
                <label
                  class="text-[13px] text-light3 font-medium"
                  for="postCodeBillTo"
                  >Post Code</label
                >
                <Input
                  type="text"
                  placeholder="salom"
                  v-model="updateInvoice.clientAddress.zipcode"
                  id="postCodeBillTo"
                />
              </div>
              <div
                class="flex items-start sm:col-span-1 col-span-2 flex-col w-full gap-[9px]"
              >
                <label
                  class="text-[13px] text-light3 font-medium"
                  for="countryBillTo"
                  >Country
                </label>
                <Input
                  type="text"
                  placeholder="salom"
                  v-model="updateInvoice.clientAddress.country"
                  id="countryBillTo"
                />
              </div>
            </div>
          </div>

          <div class="flex flex-col w-full items-start gap-6">
            <div class="flex items-center sm:flex-row flex-col w-full gap-6">
              <div class="flex items-start w-full sm:w-1/2 flex-col gap-[9px]">
                <label
                  class="text-[13px] text-light3 font-medium"
                  for="countryBillTo"
                  >Invoice Date
                </label>
                <DatePicker
                  class="w-full"
                  v-model:createdAt="updateInvoice.createdAt"
                  onUpdate:createdAt="($event) => (newInvoice?.createdAt = $event)"
                />
              </div>
              <div class="flex items-start w-full sm:w-1/2 flex-col gap-[9px]">
                <label
                  class="text-[13px] text-light3 font-medium"
                  for="countryBillTo"
                  >Payment Terms</label
                >
                <DropDown class="w-full" v-model="updateInvoice" />
              </div>
            </div>
            <div class="flex items-start flex-col w-full gap-[9px]">
              <label
                class="text-[13px] text-light3 font-medium"
                for="projectDescription"
                >Project Description
              </label>
              <Input
                type="text"
                placeholder="salom"
                v-model="updateInvoice.description"
                id="projectDescription"
              />
            </div>
            <div class="flex items-start flex-col w-full gap-[9px]">
              <h3 class="text-[15px] text-primary font-bold">Item List</h3>
              <div class="w-full mb-[70px] sm:mb-0">
                <div class="w-full sm:mb-0">
                  <ul class="list-none p-0 flex flex-wrap items-center gap-4">
                    <li
                      class="w-full"
                      v-for="(item, index) in updateInvoice?.items"
                      :key="index"
                    >
                      {{ item }}
                      <div
                        class="flex items-center sm:flex-row flex-col justify-between gap-3 sm:gap-6"
                      >
                        <div class="flex flex-col gap-2 w-[100%]">
                          <label
                            class="text-[13px] text-light3 font-medium"
                            for="invoiceListItemName"
                          >
                            Item Name
                          </label>
                          <Input
                            type="text"
                            placeholder="salom"
                            v-model="item.name"
                            id="invoiceListItemName"
                          />
                        </div>
                        <div
                          class="flex items-center w-full justify-between gap-3 sm:gap-6"
                        >
                          <div class="flex flex-col gap-2">
                            <label
                              class="text-[13px] text-light3 font-medium"
                              for="invoiceListItemQuantity"
                            >
                              Qty.
                            </label>
                            <Input
                              type="text"
                              id="invoiceListItemQuantity"
                              v-model="item.quantity"
                            />
                          </div>
                          <div class="flex flex-col gap-2">
                            <label
                              class="text-[13px] text-light3 font-medium"
                              for="invoiceListItemPrice"
                            >
                              Price
                            </label>
                            <Input
                              id="invoiceListItemPrice"
                              type="text"
                              v-model="item.price"
                            />
                          </div>
                          <div class="flex flex-col gap-2">
                            <label
                              class="text-[13px] text-light3 font-medium"
                              for="invoiceListItemTotal"
                            >
                              Total
                            </label>
                            <span class="font-bold text-light4">
                              {{
                                (
                                  parseInt(item.quantity).toFixed(2) *
                                  parseInt(item.price).toFixed(2)
                                ).toFixed(2)
                              }}
                            </span>
                          </div>
                        </div>
                        <div
                          class="flex flex-col h-full items-center justify-center"
                        >
                          <button
                            @click="deleteItem(index)"
                            class="text-light2 hover:text-danger duration-200"
                          >
                            <font-awesome-icon :icon="['fas', 'trash']" />
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <Button
                  @click="addItemFunction"
                  variant="primary"
                  size="md"
                  class="mt-4 mb-[80px]"
                  >+Add New Item</Button
                >
              </div>
            </div>
          </div>
        </div>

        <div
          class="w-full fixed sm:sticky z-50 left-0 bottom-[0px] backdrop-blur-md bg-opacity-50 p-4"
        >
          <div class="w-full flex justify-between gap-2 px-4">
            <Button @click="closeModalFunction" variant="danger" size="md"
              >Cancel</Button
            >
            <Button
              @click="saveChanges"
              variant="violet"
              size="md"
              :loading="isLoading"
            >
              <span>Save all Changes</span>
            </Button>
          </div>
        </div>
      </div>
    </template>
  </Modal>
</template>

<script setup>
import {
  defineProps,
  onMounted,
  ref,
} from 'vue';

import { useRoute } from 'vue-router';

import { useFirebase } from '../../firebase/firebase';
import Button from '../Button/Button.vue';
import DatePicker from '../Form/DatePicker/DatePicker.vue';
import DropDown from '../Form/DropDown/DropDown.vue';
import Input from '../Form/Input/Input.vue';
import Modal from '../Modal/ModalContent.vue';

const { getInvoiceById, updateInvoice, updateInvoiceFunction } = useFirebase();

const props = defineProps({
  isVisible: Boolean,
  closeModalFunction: Function,
});

let isLoading = ref(false);
let isLoadingInvoice = ref(true);

const route = useRoute();
const invoiceId = route.params.id;

onMounted(async () => {
  await getInvoiceById(invoiceId);
  isLoadingInvoice.value = false;
});

const saveChanges = async () => {
  try {
    isLoading.value = true;
    await updateInvoiceFunction(updateInvoice.value.id, {
      ...updateInvoice.value,
    });
    isLoading.value = false;

    console.log('Invoice updated successfully.');

    props.closeModalFunction();
  } catch (error) {
    console.error('Error updating invoice:', error);
  }
};

const addItemFunction = () => {
  updateInvoice.value.items.push({
    name: '',
    quantity: '',
    price: '',
    total: '',
  });
};

const deleteItem = (index) => {
  updateInvoice.value.items.splice(index, 1);
};
</script>
