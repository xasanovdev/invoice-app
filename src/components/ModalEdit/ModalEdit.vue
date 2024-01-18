<template>
  <Transition>
    <Modal :isVisible="isVisible">
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
            <i
              class="fa-solid fa-angle-left text-[9px] text-primary font-bold"
            ></i>
            <h4
              class="text-[15px] text-light4 leading-[15px] dark:text-white font-bold"
            >
              Go back
            </h4>
          </div>

          <h1 class="text-light4 text-[24px] font-bold dark:text-white">
            Edit<span class="text-light2">#</span> {{ updateInvoice[0].title }}
          </h1>

          <div class="flex flex-col items-start gap-6">
            <h3 class="text-[15px] text-primary font-bold">Bill From</h3>
            <div class="flex items-start flex-col w-full gap-[9px]">
              <label
                class="text-[13px] text-light3 font-medium"
                for="addressBillFrom"
                >Street Address
              </label>
              <Input
                id="addressBillFrom"
                type="text"
                placeholder="salom"
                v-model="updateInvoice[0].senderAddress.street"
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
                  v-model="updateInvoice[0].senderAddress.city"
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
                  v-model="updateInvoice[0].senderAddress.zipcode"
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
                  v-model="updateInvoice[0].senderAddress.country"
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
                v-model="updateInvoice[0].clientName"
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
                v-model="updateInvoice[0].clientEmail"
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
                v-model="updateInvoice[0].clientAddress.street"
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
                  v-model="updateInvoice[0].clientAddress.city"
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
                  v-model="updateInvoice[0].clientAddress.zipcode"
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
                  v-model="updateInvoice[0].clientAddress.country"
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
                  v-model:createdAt="updateInvoice[0].createdAt"
                  onUpdate:createdAt="($event) => (newInvoice[0]?.createdAt = $event)"
                />
              </div>
              <div class="flex items-start w-full sm:w-1/2 flex-col gap-[9px]">
                <label
                  class="text-[13px] text-light3 font-medium"
                  for="countryBillTo"
                  >Payment Terms</label
                >
                <DropDown
                  class="w-full"
                  v-model:updateInvoice="updateInvoice"
                />
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
                v-model="updateInvoice[0].description"
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
                      v-for="(item, index) in updateInvoice[0]?.items"
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
                            <i class="fa-solid fa-trash"></i>
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <Button
                  @click="addItemFunction"
                  class="hover:bg-light1 text-light3 mt-4 mb-[80px] bg-[#F9FAFE]"
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
            <Button
              @click="closeModalFunction"
              class="bg-danger text-white hover:bg-[#FF9797]"
              >Cancel</Button
            >
            <Button
              @click="saveChanges"
              :class="[
                'bg-primary text-white hover:bg-[#9277FF]',
                { 'opacity-50': isLoading },
              ]"
            >
              <span v-if="isLoading">Saving...</span>
              <span v-else>Save all Changes</span>
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  </Transition>
</template>

<script setup>
import {
  computed,
  defineProps,
  onMounted,
  ref,
  watch,
} from 'vue';

import {
  dataInvoice,
  updateInvoiceFunction,
} from '../../firebase/firebase';
import Button from '../Button/Button.vue';
import DatePicker from '../Form/DatePicker/DatePicker.vue';
import DropDown from '../Form/DropDown/DropDown.vue';
import Input from '../Form/Input/Input.vue';
import Modal from '../Modal/ModalContent.vue';

const props = defineProps({
  isVisible: Boolean,
  closeModalFunction: Function,
});

let isLoading = ref(false);

const updateInvoice = ref(dataInvoice);

const saveChanges = async () => {
  try {
    isLoading.value = true;
    await updateInvoiceFunction(updateInvoice.value[0].id, {
      ...updateInvoice.value[0],
    });
    isLoading.value = false;
    console.log('Invoice updated successfully.');

    props.closeModalFunction();
  } catch (error) {
    console.error('Error updating invoice:', error);
  }
};

const addItemFunction = () => {
  updateInvoice.value[0].items.push({
    name: '',
    quantity: '',
    price: '',
    total: '',
  });
};

const deleteItem = (index) => {
  updateInvoice.value[0].items.splice(index, 1);
};
</script>
