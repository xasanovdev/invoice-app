<template>
  <ModalVue>
    <div class="w-full md:w-1/2 p-16 h-screen bg-white overflow-y-auto">
      <h1 class="text-light4 font-bold dark:text-white">
        Edit<span class="text-light2">#</span> 1232
      </h1>

      <div class="flex flex-col items-start gap-6">
        <h3>Bill From</h3>
        <div class="flex items-start flex-col w-full">
          <label for="address">Street Address </label>
          <Input id="address" />
        </div>
        <div class="grid grid-cols-3 gap-6">
          <div class="flex items-start flex-col">
            <label for="city">City</label>
            <Input id="city" />
          </div>
          <div class="flex items-start flex-col">
            <label for="postCode">Post Code</label>
            <Input id="postCode" />
          </div>
          <div class="flex items-start flex-col">
            <label for="country">Country </label>
            <Input id="country" />
          </div>
        </div>
      </div>

      <div class="flex flex-col items-start gap-6">
        <h3>Bill To</h3>
        <div class="flex items-start flex-col w-full">
          <label for="clientName">Client’s Name</label>
          <Input id="clientName" />
        </div>
        <div class="flex items-start flex-col w-full">
          <label for="clientEmail">Client’s Email</label>
          <Input id="clientEmail" />
        </div>
        <div class="flex items-start flex-col w-full">
          <label for="addressBillTo">Street Address</label>
          <Input id="addressBillTo" />
        </div>
        <div class="grid grid-cols-3 gap-6">
          <div class="flex items-start flex-col">
            <label for="cityBillTo">City</label>
            <Input id="cityBillTo" />
          </div>
          <div class="flex items-start flex-col">
            <label for="postCodeBillTo">Post Code</label>
            <Input id="postCodeBillTo" />
          </div>
          <div class="flex items-start flex-col">
            <label for="countryBillTo">Country </label>
            <Input id="countryBillTo" />
          </div>
        </div>
      </div>

      <div class="flex flex-col w-full items-start gap-6">
        <div class="flex items-center w-full gap-6">
          <div class="flex items-start flex-col w-full">
            <label for="countryBillTo">Invoice Date </label>
            <DatePicker />
          </div>
          <div class="flex items-start flex-col w-full">
            <label for="countryBillTo">Payment Terms</label>
            <DropDown />
          </div>
        </div>
      </div>
    </div>
  </ModalVue>
</template>

<script setup>
import DatePicker from '../Form/DatePicker/DatePicker.vue';
import DropDown from '../Form/DropDown/DropDown.vue';
import Input from '../Form/Input/Input.vue';
import ModalVue from '../modal/Modal.vue';
</script>

<style></style>
