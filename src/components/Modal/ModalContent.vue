<template>
  <Transition>
    <div
      @click="modalStore.closeModalOverlay"
      class="modal z-40 absolute overflow-hidden w-full h-full bg-black bg-opacity-45"
    >
      <template v-if="isLoadingInvoice">
        <div>asfsaf</div>
      </template>

      <template v-else>
        <div class="modal-content overflow-hidden">
          <div
            class="relative lg:w-1/2 sm:w-2/3 h-screen overflow-y-auto bg-white dark:bg-bgDark"
          >
            <div
              class="w-full sm:rounded-r-[20px] p-6 md:p-8 flex flex-col gap-[45px]"
            >
              <div
                @click="modalStore.closeModal"
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
                <span v-if="modalStore.modalType === 'InvoiceCreate'"
                  >New Invoice</span
                >
                <span v-else-if="modalStore.modalType === 'InvoiceEdit'"
                  >Edit #{{ newInvoice.title }}</span
                >
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
                    :isValid="
                      saveChangesClicked
                        ? validationObject.isSenderAddressValid
                        : null
                    "
                    placeholder="Address"
                    v-model="newInvoice.senderAddress.street"
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
                      :isValid="
                        saveChangesClicked
                          ? validationObject.isSenderAddressValid
                          : null
                      "
                      placeholder="City"
                      v-model="newInvoice.senderAddress.city"
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
                      placeholder="Post Code"
                      :isValid="
                        saveChangesClicked
                          ? validationObject.isSenderAddressValid
                          : null
                      "
                      v-model="newInvoice.senderAddress.zipcode"
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
                      :isValid="
                        saveChangesClicked
                          ? validationObject.isSenderAddressValid
                          : null
                      "
                      placeholder="Country"
                      v-model="newInvoice.senderAddress.country"
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
                    placeholder="Client Name"
                    :isValid="
                      saveChangesClicked
                        ? validationObject.isClientNameValid
                        : null
                    "
                    v-model="newInvoice.clientName"
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
                    :isValid="
                      saveChangesClicked
                        ? validationObject.isClientEmailValid
                        : null
                    "
                    placeholder="Client Email"
                    v-model="newInvoice.clientEmail"
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
                    :isValid="
                      saveChangesClicked
                        ? validationObject.isClientAddressValid
                        : null
                    "
                    placeholder="Address"
                    v-model="newInvoice.clientAddress.street"
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
                      :isValid="
                        saveChangesClicked
                          ? validationObject.isClientAddressValid
                          : null
                      "
                      placeholder="City"
                      v-model="newInvoice.clientAddress.city"
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
                      :isValid="
                        saveChangesClicked
                          ? validationObject.isClientAddressValid
                          : null
                      "
                      placeholder="Post Code"
                      v-model="newInvoice.clientAddress.zipcode"
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
                      :isValid="
                        saveChangesClicked
                          ? validationObject.isClientAddressValid
                          : null
                      "
                      placeholder="Country"
                      v-model="newInvoice.clientAddress.country"
                      id="countryBillTo"
                    />
                  </div>
                </div>
              </div>

              <div class="flex flex-col w-full items-start gap-6">
                <div
                  class="flex items-center sm:flex-row flex-col w-full gap-6"
                >
                  <div
                    class="flex items-start w-full sm:w-1/2 flex-col gap-[9px]"
                  >
                    <label
                      class="text-[13px] text-light3 font-medium"
                      for="countryBillTo"
                      >Invoice Date
                    </label>

                    <DatePicker class="w-full" v-model="newInvoice.createdAt" />
                  </div>
                  <div
                    class="flex items-start w-full sm:w-1/2 flex-col gap-[9px]"
                  >
                    <label
                      class="text-[13px] text-light3 font-medium"
                      for="countryBillTo"
                      >Payment Terms</label
                    >
                    <DropDown class="w-full" v-model="newInvoice" />
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
                    placeholder="Project Description"
                    :isValid="
                      saveChangesClicked
                        ? validationObject.isProjectDescriptionValid
                        : null
                    "
                    v-model="newInvoice.description"
                    id="projectDescription"
                  />
                </div>
                <div class="flex items-start flex-col w-full gap-[9px]">
                  <label
                    class="text-[13px] text-light3 font-medium"
                    for="projectTitle"
                    >Project Title
                  </label>
                  <Input
                    type="text"
                    :isValid="
                      saveChangesClicked
                        ? validationObject.isProjectTitleValid
                        : null
                    "
                    placeholder="Project Title"
                    v-model="newInvoice.title"
                    id="projectTitle"
                  />
                </div>
                <div class="flex items-start flex-col w-full gap-[9px]">
                  <h3 class="text-[15px] text-primary font-bold">Item List</h3>
                  <div class="w-full mb-[70px] sm:mb-0">
                    <div class="w-full sm:mb-0">
                      <ul
                        v-if="newInvoice.items.length > 0"
                        class="list-none p-0 flex flex-wrap items-center gap-4"
                      >
                        <li
                          class="w-full"
                          v-for="(item, index) in newInvoice?.items"
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
                                placeholder="Item Name"
                                v-model="item.name"
                                :isValid="
                                  saveChangesClicked
                                    ? validationObject.areItemsValid
                                    : null
                                "
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
                                  :isValid="
                                    saveChangesClicked
                                      ? validationObject.areItemsValid
                                      : null
                                  "
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
                                  :isValid="
                                    saveChangesClicked
                                      ? validationObject.areItemsValid
                                      : null
                                  "
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
                                  {{ (item.quantity * item.price).toFixed(2) }}
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
                      <p v-else class="text-dark1">No items added yet.</p>
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
                <Button
                  @click="modalStore.closeModal"
                  variant="danger"
                  size="md"
                  >Cancel</Button
                >
                <Button @click="saveChanges" variant="violet" size="md">
                  Save Invoice
                </Button>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
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

import { useRoute } from 'vue-router';

import { useForm } from '../../composables/useForm';
import { useFirebase } from '../../firebase/firebase';
import { useModal } from '../../store/modal';
import Button from '../Button/Button.vue';
import DatePicker from '../Form/DatePicker/DatePicker.vue';
import DropDown from '../Form/DropDown/DropDown.vue';
import Input from '../Form/Input/Input.vue';

const modalStore = useModal();

const route = useRoute();

if (route.meta.title) {
  modalStore.modalType = route.meta.title;
}

const { updateInvoiceFunction, updateInvoice, addInvoiceFunction } =
  useFirebase();

const {
  form,
  validation,
  isFormValid,
  updateForm,
  addItem,
  validateField,
  deleteItem,
  resetForm,
} = useForm();

let newInvoice = ref([]);
let saveChangesClicked = ref(false);
let isLoading = ref(false);
let isLoadingInvoice = ref(false);

const invoiceId = route.params.id;

// console.log(updateInvoice.value);

if (modalStore.modalType === 'InvoiceEdit') {
  form.value = updateInvoice.value;
  newInvoice.value = form.value;
} else if (modalStore.modalType === 'InvoiceCreate') {
  newInvoice.value = form.value;
}

let listItems = computed(() => {
  return newInvoice.value.items;
});

// onMounted(async () => {
//   console.log();
//   if (modalStore.modalMode === 'InvoiceEdit') {
//     isLoadingInvoice.value = true;

//     await getInvoiceById(invoiceId);

//     listItems = computed(() => {
//       return dataInvoice.value[0].items;
//     });

//     // newInvoice.value = {
//     //   ...updateInvoice.value,
//     // };
//     console.log('asf');
//     form.value = updateInvoice.value
//     newInvoice.value = form.value;
//     isLoadingInvoice.value = false;
//   }
// });

const saveChanges = async () => {
  newInvoice.value.total = newInvoice.value.items.reduce(
    (acc, item) => acc + parseFloat(item.total),
    0
  );

  for (const key in form.value) {
    if (Object.hasOwnProperty.call(form.value, key)) {
      validateField(key, form.value[key]);
    }
  }

  try {
    isLoading.value = true;

    if (modalStore.modalType === 'InvoiceEdit') {
      await updateInvoiceFunction(newInvoice.value.id, {
        ...newInvoice.value,
      });
      modalStore.closeModal();
      console.log('asf');
    } else {
      saveChangesClicked.value = true;

      if (isFormValid.value) {
        try {
          console.log(newInvoice.value);

          const addedInvoiceId = await addInvoiceFunction(newInvoice);

          form.id = addedInvoiceId;

          console.log('Invoice added successfully with ID:', newInvoice.value);

          saveChangesClicked.value = false;

          modalStore.closeModal();

          // resetForm();
        } catch (error) {
          console.error('Error adding new invoice:', error);
        }
      } else {
        console.log('Form validation failed. Please check your inputs.');
      }
    }

    isLoading.value = false;

    console.log('Invoice updated/added successfully.');
  } catch (error) {
    console.error('Error updating/adding invoice:', error);
  }

  saveChangesClicked.value = true;
  // form.value = {};
};

const addItemFunction = () => {
  addItem();
};

const deleteItemFunction = (index) => {
  deleteItem(index);
};

const validationObject = computed(() => {
  return {
    isSenderAddressValid: validation.value.isSenderAddressValid,
    isClientNameValid: validation.value.isClientNameValid,
    isClientEmailValid: validation.value.isClientEmailValid,
    isClientAddressValid: validation.value.isClientAddressValid,
    isInvoiceDateValid: validation.value.isInvoiceDateValid,
    isPaymentTermsValid: validation.value.isPaymentTermsValid,
    isProjectDescriptionValid: validation.value.isProjectDescriptionValid,
    isProjectTitleValid: validation.value.isProjectTitleValid,
    areItemsValid: validation.value.areItemsValid,
  };
});
</script>
