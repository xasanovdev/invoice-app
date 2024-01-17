<template>
  <Transition>
    <Modal :isVisible="isVisible">
      <!-- <div
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
            Add Invoice
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
                property="senderAddress.street"
                :dataObject="newInvoice"
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
                  :dataObject="newInvoice"
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
                  property="senderAddress.zipcode"
                  :dataObject="newInvoice"
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
                  property="senderAddress.country"
                  :dataObject="newInvoice"
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
                property="clientName"
                :dataObject="newInvoice"
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
                property="clientEmail"
                :dataObject="newInvoice"
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
                property="clientAddress.street"
                :dataObject="newInvoice"
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
                  property="clientAddress.city"
                  :dataObject="newInvoice"
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
                  id="postCodeBillTo"
                  property="clientAddress.zipcode"
                  :dataObject="newInvoice"
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
                  id="countryBillTo"
                  property="clientAddress.country"
                  :dataObject="newInvoice"
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
                  v-model:createdAt="newInvoice[0]?.createdAt"
                />
              </div>
              <div class="flex items-start w-full sm:w-1/2 flex-col gap-[9px]">
                <label
                  class="text-[13px] text-light3 font-medium"
                  for="countryBillTo"
                  >Payment Terms</label
                >
                <DropDown class="w-full" v-model:newInvoice="newInvoice" />
              </div>
            </div>
            <div class="flex items-start flex-col w-full gap-[9px]">
              <label
                class="text-[13px] text-light3 font-medium"
                for="projectDescription"
                >Project Description
              </label>
              <Input
                id="projectDescription"
                property="description"
                :dataObject="newInvoice"
              />
            </div>
            <div class="flex items-start flex-col w-full gap-[9px]">
              <label
                class="text-[13px] text-light3 font-medium"
                for="projectTitle"
                >Project Title
              </label>
              <Input
                id="projectTitle"
                property="title"
                :dataObject="newInvoice"
              />
            </div>
            <div class="flex items-start flex-col w-full gap-[9px]">
              <h3 class="text-[15px] text-primary font-bold">Item List</h3>
              <div class="w-full mb-[70px] sm:mb-0">
                <div class="w-full sm:mb-0">
                  <ul class="list-none p-0 flex flex-wrap items-center gap-4">
                    <li
                      class="w-full"
                      v-for="(item, index) in newInvoice[0]?.items"
                      :key="index"
                    >
                      <div
                        class="flex items-center sm:flex-row flex-col justify-between gap-3 sm:gap-6"
                      >
                        <div class="flex flex-col gap-2 w-[100%]">
                          <label
                            class="text-[13px] text-light3 font-medium"
                            for="projectDescription"
                          >
                            Item Name
                          </label>
                          <Input
                            class="w-full"
                            type="text"
                            property="name"
                            :dataObject="[item]"
                          />
                        </div>
                        <div
                          class="flex items-center w-full justify-between gap-3 sm:gap-6"
                        >
                          <div class="flex flex-col gap-2">
                            <label
                              class="text-[13px] text-light3 font-medium"
                              for="projectDescription"
                            >
                              Qty.
                            </label>
                            <Input
                              class="w-full"
                              type="text"
                              property="quantity"
                              :dataObject="[item]"
                            />
                          </div>
                          <div class="flex flex-col gap-2">
                            <label
                              class="text-[13px] text-light3 font-medium"
                              for="projectDescription"
                            >
                              Price
                            </label>
                            <Input
                              class="w-full"
                              type="text"
                              property="price"
                              :dataObject="[item]"
                            />
                          </div>
                          <div class="flex flex-col gap-2">
                            <label
                              class="text-[13px] text-light3 font-medium"
                              for="projectDescription"
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
                  class="hover:bg-light1 text-light3 mt-4 mb-[80px] bg-[#F9FAFE]"
                  >+Add New Item</Button
                >
              </div>
            </div>
          </div>

          Add other sections for Bill To, Invoice Date, Payment Terms, Project Description, and Item List using the structure in the EditInvoiceModal
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
              class="bg-primary text-white hover:bg-[#9277FF]"
            >
              Save Invoice
            </Button>
          </div>
        </div>
      </div> -->
    </Modal>
  </Transition>
</template>

<script setup>
import {
  defineProps,
  ref,
} from 'vue';

import {
  addInvoiceFunction,
  dataInvoices,
} from '../../firebase/firebase'; // Importing dataInvoices from Firebase
import Button from '../Button/Button.vue';
import DatePicker from '../Form/DatePicker/DatePicker.vue';
import DropDown from '../Form/DropDown/DropDown.vue';
import Input from '../Form/Input/Input.vue';
import Modal from '../Modal/ModalContent.vue';

function generateRandomId() {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}

const saveChanges = async () => {
  try {
    const newInvoiceValue = { ...newInvoice.value }; // Create a copy to avoid modifying the original object

    // Example: Create a new invoice
    const addedInvoiceId = await addInvoiceFunction(newInvoiceValue);

    // Update the newInvoice.value.id with the added document ID
    newInvoice.value.id = addedInvoiceId;

    console.log('Invoice added successfully with ID:', addedInvoiceId);

    // Close the modal after adding the new invoice
    props.closeModalFunction();
  } catch (error) {
    console.error('Error adding new invoice:', error);
  }
};

// Initialize newInvoice with default values
const newInvoice = ref({
  title: '',
  senderAddress: {
    street: '',
    city: '',
    zipcode: '',
    country: '',
  },
  clientName: '',
  clientEmail: '',
  clientAddress: {
    street: '',
    city: '',
    zipcode: '',
    country: '',
  },
  createdAt: null,
  paymentTerms: '',
  description: '',
  items: [],
  status: 'pending',
});

const props = defineProps({
  isVisible: Boolean,
  closeModalFunction: Function,
});

console.log(newInvoice.value);
</script>
