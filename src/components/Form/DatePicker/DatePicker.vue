<template>
  <div
    class="relative w-full border rounded-md hover:border-primary duration-200 border-light1 focus:border-primary dark:border-dark2"
  >
    <div class="relative">
      <input
        placeholder="Select a date"
        class="border date h-[48.98px] cursor-pointer w-full rounded-md font-bold dark:bg-dark1 dark:text-white outline-none border-none py-3 px-4 appearance-none"
        :value="formattedSelectedDate"
        @input="selectDate"
        @click="openDatePicker"
        readonly
      />
      <i
        class="fa-regular pointer-events-none fa-calendar absolute text-light3 top-4 right-4"
      ></i>
    </div>

    <div
      v-if="isDatePickerOpen"
      class="absolute w-full z-10 mt-4 bg-white dark:bg-dark2 shadow-lg p-6 rounded-lg"
    >
      <section class="flex gap-2 justify-between items-center">
        <button class="" @click="prev">
          <font-awesome-icon
            class="fa-solid fa-angle-left text-[9px] text-primary font-bold"
            :icon="['fas', 'angle-left']"
          />
        </button>

        <div
          class="flex items-center dark:text-light1 justify-center gap-2 font-bold"
        >
          <p>{{ currentMonthName }}</p>
          <p>{{ currentYear }}</p>
        </div>

        <button class="" @click="next">
          <font-awesome-icon
            class="fa-solid fa-angle-left text-[9px] text-primary font-bold"
            :icon="['fas', 'angle-right']"
          />
        </button>
      </section>
      <section class="grid grid-cols-7 gap-1 mt-8">
        <p class="text-md" v-for="num in startDay()" :key="num"></p>
        <p
          class="text-center font-extrabold p-1 dark:text-light1"
          v-bind:class="currentDateValidation(num)"
          v-for="num in daysInMonth()"
          :key="num"
          @click="selectDate(num)"
        >
          {{ num }}
        </p>
      </section>
    </div>
  </div>
</template>

<script>
import { formatDate } from '../../../utils/dateFormatter';

export default {
  props: {
    createdAt: {
      type: String,
    },
    modelValue: {
      type: String, // Assuming the modelValue prop will be used for v-model
    },
  },
  data() {
    return {
      days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      currentDay: new Date().getUTCDate(),
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      selectedDate: null,
      inputSelectedDate: null,
      isDatePickerOpen: false,
    };
  },
  methods: {
    daysInMonth() {
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    },
    startDay() {
      return new Date(this.currentYear, this.currentMonth, 0).getDay();
    },
    next() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    prev() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    selectDate(num) {
      const newDate = new Date(
        this.currentYear,
        this.currentMonth,
        num
      ).toLocaleDateString('en-US');
      this.selectedDate = newDate;
      this.inputSelectedDate = newDate;
      this.isDatePickerOpen = false;

      console.log('Selected date:', newDate);

      // Emit "update:value" event with the selected date
      this.$emit('update:modelValue', newDate);
    },

    currentDateValidation(num) {
      const calendarFullDate = new Date(
        this.currentYear,
        this.currentMonth,
        num
      ).toDateString();
      const currentFullDate = new Date().toDateString();
      const selectedDate = this.inputSelectedDate
        ? new Date(this.inputSelectedDate).toDateString()
        : null;

      if (calendarFullDate === currentFullDate) {
        return 'font-bold text-primary dark:text-primary cursor-pointer';
      } else if (selectedDate === calendarFullDate) {
        return 'font-bold text-secondary dark:text-secondary bg-indigo-200 rounded-full cursor-pointer';
      } else {
        return 'cursor-pointer';
      }
    },
    updateSelectedDate() {
      this.selectedDate = this.inputSelectedDate;
    },
    openDatePicker() {
      this.isDatePickerOpen = !this.isDatePickerOpen;
    },
  },
  watch: {
    selectedDate() {
      console.log('Selected date changed:', this.selectedDate);
      this.$emit('update:modelValue', this.selectedDate);
    },
    modelValue(newVal) {
      console.log('modelValue prop changed:', newVal);
      this.inputSelectedDate = newVal;
    },
    value(newVal) {
      console.log('value prop changed:', newVal);
      this.inputSelectedDate = newVal;
    },
  },
  created() {
    if (this.createdAt) {
      const parsedDate = formatDate(this.createdAt);
      this.inputSelectedDate = parsedDate ? parsedDate : null;
    }

    // Set initial month and year for the calendar
    const currentDate = this.inputSelectedDate
      ? new Date(this.inputSelectedDate)
      : new Date();
    this.currentMonth = currentDate.getMonth();
    this.currentYear = currentDate.getFullYear();
  },
  computed: {
    currentMonthName() {
      return new Date(this.currentYear, this.currentMonth).toLocaleString(
        'en-US',
        { month: 'long' }
      );
    },
    formattedSelectedDate() {
      return formatDate(this.inputSelectedDate);
    },
    formattedCreatedAt() {
      return formatDate(this.inputSelectedDate);
    },
  },
};
</script>

<style></style>
<style></style>
