// // modal.js
// import { ref } from 'vue';

// export const useModal = () => {
//   let isModalVisible = ref(false);

//   const openModal = () => {
//     console.log('opened');

//     if (isModalVisible.value === false) {
//       document.body.classList.add('overflow-hidden');
//     }
//     isModalVisible.value = true;
//   };

//   const closeModal = () => {
//     console.log('closed');

//     if (isModalVisible.value === true) {
//       document.body.classList.remove('overflow-hidden');
//     }

//     isModalVisible.value = false;
//   };

//   return {
//     isModalVisible,
//     openModal,
//     closeModal,
//   };
// };
