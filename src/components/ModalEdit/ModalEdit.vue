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
          <label
            class="text-[13px] text-light3 font-medium"
            for="addressBillFrom"
            >Street Address
          </label>
          <Input
            id="addressBillFrom"
            property="senderAddress.street"
            :dataObject="dataInvoice"
          />
        </div>
        <div class="w-full grid sm:grid-cols-3 grid-cols-2 gap-6">
          <div class="flex items-start col-span-1 flex-col w-full gap-[9px]">
            <label
              class="text-[13px] text-light3 font-medium"
              for="cityBillFrom"
              >City</label
            >
            <Input
              id="cityBillFrom"
              property="senderAddress.city"
              :dataObject="dataInvoice"
            />
          </div>
          <div class="flex items-start flex-col col-span-1 w-full gap-[9px]">
            <label
              class="text-[13px] text-light3 font-medium"
              for="costCodeBillFrom"
              >Post Code</label
            >
            <Input
              id="costCodeBillFrom"
              property="senderAddress.zipcode"
              :dataObject="dataInvoice"
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
              :dataObject="dataInvoice"
            />
          </div>
        </div>
      </div>

      <div class="flex flex-col items-start gap-6">
        <h3 class="text-[15px] text-primary font-bold">Bill To</h3>
        <div class="flex items-start flex-col w-full gap-[9px]">
          <label class="text-[13px] text-light3 font-medium" for="clientName"
            >Client’s Name</label
          >
          <Input
            id="clientName"
            property="clientName"
            :dataObject="dataInvoice"
          />
        </div>
        <div class="flex items-start flex-col w-full gap-[9px]">
          <label class="text-[13px] text-light3 font-medium" for="clientEmail"
            >Client’s Email</label
          >
          <Input
            id="clientEmail"
            property="clientEmail"
            :dataObject="dataInvoice"
          />
        </div>
        <div class="flex items-start flex-col w-full gap-[9px]">
          <label class="text-[13px] text-light3 font-medium" for="addressBillTo"
            >Street Address</label
          >
          <Input
            id="addressBillTo"
            property="clientAddress.street"
            :dataObject="dataInvoice"
          />
        </div>
        <div class="w-full grid sm:grid-cols-3 grid-cols-2 gap-6">
          <div class="flex items-start col-span-1 flex-col w-full gap-[9px]">
            <label class="text-[13px] text-light3 font-medium" for="cityBillTo"
              >City</label
            >
            <Input
              id="cityBillTo"
              property="clientAddress.city"
              :dataObject="dataInvoice"
            />
          </div>
          <div class="flex items-start flex-col col-span-1 w-full gap-[9px]">
            <label
              class="text-[13px] text-light3 font-medium"
              for="postCodeBillTo"
              >Post Code</label
            >
            <Input
              id="postCodeBillTo"
              property="clientAddress.zipcode"
              :dataObject="dataInvoice"
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
              :dataObject="dataInvoice"
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
            <DatePicker class="w-full" :createdAt="dataInvoice[0]?.createdAt" />
          </div>
          <div class="flex items-start w-full sm:w-1/2 flex-col gap-[9px]">
            <label
              class="text-[13px] text-light3 font-medium"
              for="countryBillTo"
              >Payment Terms</label
            >
            <DropDown
              class="w-full"
              :paymentTerms="dataInvoice[0]?.paymentTerms"
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
            id="projectDescription"
            property="description"
            :dataObject="dataInvoice"
          />
        </div>
        <div class="flex items-start flex-col w-full gap-[9px]">
          <h3 class="text-[15px] text-primary font-bold">Item List</h3>
          <div class="w-full mb-[150px]">
            <table class="w-full text-left border-separate border-spacing-4">
              <thead>
                <tr class="grid-cols-3 sm:grid-cols-4">
                  <th class="sm:col-span-1 col-span-3">
                    <label
                      class="text-[13px] text-light3 font-medium"
                      for="projectDescription"
                      >Item Name
                    </label>
                  </th>
                  <th class="col-span-1">
                    <label
                      class="text-[13px] text-light3 font-medium"
                      for="projectDescription"
                      >Qty.
                    </label>
                  </th>
                  <th class="col-span-1">
                    <label
                      class="text-[13px] text-light3 font-medium"
                      for="projectDescription"
                      >Price
                    </label>
                  </th>
                  <th class="col-span-1">
                    <label
                      class="text-[13px] text-light3 font-medium"
                      for="projectDescription"
                      >Total
                    </label>
                  </th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="(item, index) in dataInvoice[0]?.items" :key="index">
                  <td>
                    <Input
                      class="w-full"
                      type="text"
                      property="name"
                      :dataObject="[item]"
                    />
                  </td>
                  <td>
                    <Input
                      class="w-full"
                      type="text"
                      property="quantity"
                      :dataObject="[item]"
                    />
                  </td>
                  <td>
                    <Input
                      class="w-full"
                      type="text"
                      property="price"
                      :dataObject="[item]"
                    />
                  </td>
                  <td>
                    <Input
                      class="w-full"
                      type="text"
                      property="total"
                      :dataObject="[item]"
                    />
                  </td>
                  <td>
                    <button><i class="fa-solid fa-trash"></i></button>
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
