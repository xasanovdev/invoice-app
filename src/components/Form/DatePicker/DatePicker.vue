<template>
  <div
    class="relative w-full border border-light1 focus:border-primary dark:border-dark2"
  >
    <div class="relative">
      <input
        placeholder="Select a date"
        class="border date cursor-pointer w-full rounded-md font-bold dark:bg-dark1 dark:text-white outline-none border-none py-3 px-4 appearance-none"
        v-model="formattedSelectedDate"
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
          <i
            class="fa-solid fa-chevron-left text-[13px] font-bold text-primary"
          ></i>
        </button>

        <div
          class="flex items-center dark:text-light1 justify-center gap-2 font-bold"
        >
          <p>{{ currentMonthName }}</p>
          <p>{{ currentYear }}</p>
        </div>

        <button class="" @click="next">
          <i
            class="fa-solid fa-chevron-right text-[13px] font-bold text-primary"
          ></i>
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
import { formatDate } from '../../../libs/useDataRedakotor';

export default {
  props: {
    createdAt: {
      type: String,
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
      this.selectedDate = new Date(
        this.currentYear,
        this.currentMonth,
        num
      ).toLocaleDateString('en-US');
      this.inputSelectedDate = this.selectedDate;
      this.isDatePickerOpen = false;
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
      this.$emit('selectedDate', this.selectedDate);
    },
  },
  created() {
    // Set initial value of inputSelectedDate based on createdAt prop
    this.inputSelectedDate = this.createdAt ? formatDate(this.createdAt) : null;

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
