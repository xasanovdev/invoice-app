<template>
  <ModalVue>
    <div
      class="w-full lg:w-1/2 sm:w-4/5 sm:rounded-r-[20px] p-6 md:p-16 h-screen bg-white dark:bg-bgDark overflow-y-auto flex flex-col gap-[45px]"
    >
      <h1 class="text-light4 text-[24px] font-bold dark:text-white">
        Edit<span class="text-light2">#</span> 1232
      </h1>

      <div class="flex flex-col items-start gap-6">
        <h3 class="text-[15px] text-primary font-bold">Bill From</h3>
        <div class="flex items-start flex-col w-full gap-[9px]">
          <label class="text-[13px] text-light3 font-medium" for="address"
            >Street Address
          </label>
          <Input id="address" />
        </div>
        <div class="grid sm:grid-cols-3 grid-cols-2 gap-6">
          <div class="flex items-start col-span-1 flex-col w-full gap-[9px]">
            <label class="text-[13px] text-light3 font-medium" for="city"
              >City</label
            >
            <Input id="city" />
          </div>
          <div class="flex items-start flex-col col-span-1 w-full gap-[9px]">
            <label class="text-[13px] text-light3 font-medium" for="postCode"
              >Post Code</label
            >
            <Input id="postCode" />
          </div>
          <div
            class="flex items-start sm:col-span-1 col-span-2 flex-col w-full gap-[9px]"
          >
            <label class="text-[13px] text-light3 font-medium" for="country"
              >Country
            </label>
            <Input id="country" />
          </div>
        </div>
      </div>

      <div class="flex flex-col items-start gap-6">
        <h3 class="text-[15px] text-primary font-bold">Bill To</h3>
        <div class="flex items-start flex-col w-full gap-[9px]">
          <label class="text-[13px] text-light3 font-medium" for="clientName"
            >Client’s Name</label
          >
          <Input id="clientName" />
        </div>
        <div class="flex items-start flex-col w-full gap-[9px]">
          <label class="text-[13px] text-light3 font-medium" for="clientEmail"
            >Client’s Email</label
          >
          <Input id="clientEmail" />
        </div>
        <div class="flex items-start flex-col w-full gap-[9px]">
          <label class="text-[13px] text-light3 font-medium" for="addressBillTo"
            >Street Address</label
          >
          <Input id="addressBillTo" />
        </div>
        <div class="grid sm:grid-cols-3 grid-cols-2 gap-6">
          <div class="flex items-start col-span-1 flex-col w-full gap-[9px]">
            <label class="text-[13px] text-light3 font-medium" for="city"
              >City</label
            >
            <Input id="city" />
          </div>
          <div class="flex items-start flex-col col-span-1 w-full gap-[9px]">
            <label class="text-[13px] text-light3 font-medium" for="postCode"
              >Post Code</label
            >
            <Input id="postCode" />
          </div>
          <div
            class="flex items-start sm:col-span-1 col-span-2 flex-col w-full gap-[9px]"
          >
            <label class="text-[13px] text-light3 font-medium" for="country"
              >Country
            </label>
            <Input id="country" />
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
            <DatePicker class="w-full" />
          </div>
          <div class="flex items-start w-full sm:w-1/2 flex-col gap-[9px]">
            <label
              class="text-[13px] text-light3 font-medium"
              for="countryBillTo"
              >Payment Terms</label
            >
            <DropDown class="w-full" />
          </div>
        </div>
        <div class="flex items-start flex-col w-full gap-[9px]">
          <label
            class="text-[13px] text-light3 font-medium"
            for="projectDescription"
            >Project Description
          </label>
          <Input id="projectDescription" />
        </div>
        <div class="flex items-start flex-col w-full gap-[9px]">
          <label
            class="text-[13px] text-light3 font-medium"
            for="projectDescription"
            >Project Description
          </label>
          <div class="w-full">
            <table class="w-full text-left border-separate border-spacing-4">
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Qty.</th>
                  <th>Price</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <tr
                  class=""
                  v-for="item in dataInvoice[0].items"
                  :key="item.name"
                >
                  <td>
                    <Input class="w-full" type="text" v-model="item.name" />
                  </td>
                  <td>
                    <Input class="w-full" type="text" v-model="item.quantity" />
                  </td>
                  <td>
                    <Input class="w-full" type="text" v-model="item.price" />
                  </td>
                  <td>
                    <Input class="w-full" type="text" v-model="item.total" />
                  </td>
                  <td>
                    <button>trash</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </ModalVue>
</template>

<script setup>
import { dataInvoice } from '../../firebase/firebase';
import DatePicker from '../Form/DatePicker/DatePicker.vue';
import DropDown from '../Form/DropDown/DropDown.vue';
import Input from '../Form/Input/Input.vue';
import ModalVue from '../modal/Modal.vue';

console.log(dataInvoice.value);
</script>

<style></style>
