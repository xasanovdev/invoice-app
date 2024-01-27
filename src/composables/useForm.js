// useForm.js
import {
  computed,
  ref,
} from 'vue';

import { generateRandomId } from '../utils/generateId';

export const useForm = () => {
  // Reactive form state
  const form = ref({
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
    paymentDue: '',
    description: '',
    items: [],
    total: '',
    status: 'pending',
    id: generateRandomId(), // You may need to import or define generateRandomId function
  });

  // Reactive validation state
  const validation = ref({
    isSenderAddressValid: false,
    isClientNameValid: false,
    isClientEmailValid: false,
    isClientAddressValid: false,
    isInvoiceDateValid: false,
    isPaymentTermsValid: false,
    isProjectDescriptionValid: false,
    isProjectTitleValid: false,
    areItemsValid: false,
  });

  // Helper function to validate individual fields

  const validateField = (field, value) => {
    // Validation logic for each field
    switch (field) {
      case 'senderAddress':
        validation.value.isSenderAddressValid =
          Boolean(value.street.trim()) &&
          Boolean(value.city.trim()) &&
          Boolean(value.zipcode.trim()) &&
          Boolean(value.country.trim());

        if (!validation.value.isSenderAddressValid) {
          console.log('Validation failed for field: senderAddress');
          console.log('Street:', value.street.trim());
          console.log('City:', value.city.trim());
          console.log('Zipcode:', value.zipcode.trim());
          console.log('Country:', value.country.trim());
        }
        break;

      case 'clientName':
        validation.value.isClientNameValid = value.trim() !== '';
        if (!validation.value.isClientNameValid) {
          console.log(`Validation failed for field: ${field}`);
        }
        break;
      case 'clientEmail':
        validation.value.isClientEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
          value
        );
        if (!validation.value.isClientEmailValid) {
          console.log(`Validation failed for field: ${field}`);
        }
        break;
      case 'clientAddress':
        validation.value.isClientAddressValid =
          Boolean(value.street.trim()) &&
          Boolean(value.city.trim()) &&
          Boolean(value.zipcode.trim()) &&
          Boolean(value.country.trim());
        if (!validation.value.isClientAddressValid) {
          console.log(`Validation failed for field: ${field}`);
        }
        break;
      case 'createdAt':
        validation.value.isInvoiceDateValid = value !== '';
        if (!validation.value.isInvoiceDateValid) {
          console.log(`Validation failed for field: ${field}`);
        }
        break;
      case 'paymentTerms':
        validation.value.isPaymentTermsValid = value !== '';
        if (!validation.value.isPaymentTermsValid) {
          console.log(`Validation failed for field: ${field}`);
        }
        break;
      case 'description':
        validation.value.isProjectDescriptionValid = value.trim() !== '';
        if (!validation.value.isProjectDescriptionValid) {
          console.log(`Validation failed for field: ${field}`);
        }
        break;
      case 'title':
        validation.value.isProjectTitleValid = value.trim() !== '';
        if (!validation.value.isProjectTitleValid) {
          console.log(`Validation failed for field: ${field}`);
        }
        break;
      case 'items':
        validation.value.areItemsValid =
          value.length === 0 ||
          (value.length > 0 &&
            value.every(
              (item) =>
                item.name.trim() &&
                item.quantity.trim() &&
                item.price.trim() &&
                parseFloat(item.quantity) > 0 &&
                parseFloat(item.price) > 0
            ));
        if (!validation.value.areItemsValid) {
          console.log(`Validation failed for field: ${field}`);
        }
        break;

      default:
        break;
    }
  };

  // Computed property to check if the entire form is valid
  const isFormValid = computed(() => {
    for (const key in validation.value) {
      if (Object.hasOwnProperty.call(validation.value, key)) {
        if (!validation.value[key]) {
          console.log(`Validation failed for field: ${key}`);
          return false;
        }
      }
    }
    return true;
  });

  // Method to update form data
  const updateForm = (field, value) => {
    form.value[field] = value;
    validateField(field, value);
  };

  // Method to add a new item to the items array
  const addItem = () => {
    const newItem = {
      name: '',
      quantity: '',
      price: '',
    };
    console.log(newItem);

    form.value.items.push(newItem);

    validateField('items', form.value.items);
  };

  // Method to delete an item from the items array
  const deleteItem = (index) => {
    form.value.items.splice(index, 1);
    validateField('items', form.value.items);
  };

  // Method to reset the form
  const resetForm = () => {
    // Reset form data
    for (const key in form.value) {
      if (Object.hasOwnProperty.call(form.value, key)) {
        form.value[key] = '';
      }
    }

    // Reset validation
    for (const key in validation.value) {
      if (Object.hasOwnProperty.call(validation.value, key)) {
        validation.value[key] = false;
      }
    }
  };

  return {
    form,
    validation,
    isFormValid,
    updateForm,
    addItem,
    validateField,
    deleteItem,
    resetForm,
  };
};
