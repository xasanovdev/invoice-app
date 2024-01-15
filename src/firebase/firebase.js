import { ref } from 'vue';

import { getAnalytics } from 'firebase/analytics';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// Reference to the "invoices" collection
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBpVZMlc2IR-PnPYhzjMZcab2pM_cVx-TA',
  authDomain: 'invoice-app-d7c13.firebaseapp.com',
  projectId: 'invoice-app-d7c13',
  storageBucket: 'invoice-app-d7c13.appspot.com',
  messagingSenderId: '108450883786',
  appId: '1:108450883786:web:a610836e1e9fface9a6c33',
  measurementId: 'G-BNZ93NHP3P',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export let dataInvoices = ref([]);
export let dataInvoice = ref([]);

// Get a reference to the Firestore database

export const getInvoicesData = async () => {
  try {
    const firestore = getFirestore(app);
    const invoicesCollection = collection(firestore, 'invoices');

    dataInvoices.value.length = 0;

    const querySnapshot = await getDocs(invoicesCollection);

    querySnapshot.forEach((doc) => {
      dataInvoices.value.push(doc.data());
    });

    console.log('Invoices data loaded successfully.');
  } catch (error) {
    console.error('Error loading invoices data:', error);
  }
};

export const updateInvoiceStatus = async (invoiceId, newStatus) => {
  try {
    console.log(
      'Updating invoice status. ID:',
      invoiceId,
      'New Status:',
      newStatus
    );

    const firestore = getFirestore(app);
    const invoiceDocRef = doc(firestore, 'invoices', invoiceId);

    // Check if the document exists before attempting to update
    const invoiceDocSnapshot = await getDoc(invoiceDocRef);

    if (invoiceDocSnapshot.exists()) {
      // Use setDoc to update the entire document
      await setDoc(invoiceDocRef, {
        ...invoiceDocSnapshot.data(), // Preserve existing data
        status: newStatus, // Update the status field
      });

      console.log(`Invoice status updated to ${newStatus} successfully.`);
    } else {
      console.warn(
        `Document with ID ${invoiceId} not found. No update performed.`
      );
      // Handle the case where the document is not found (optional)
    }
  } catch (error) {
    console.error('Error updating invoice status:', error);
    throw error; // Re-throw the error to handle it in the calling component if needed
  }
};

export const getInvoiceById = async (invoiceId) => {
  try {
    const firestore = getFirestore(app);
    const invoiceDocRef = doc(firestore, 'invoices', invoiceId);

    const invoiceDocSnapshot = await getDoc(invoiceDocRef);

    if (invoiceDocSnapshot.exists()) {
      // Clear the existing dataInvoices array
      dataInvoice.value.length = 0;

      // Push the data of the retrieved invoice to the dataInvoices array
      dataInvoice.value.push(invoiceDocSnapshot.data());

      return dataInvoice;

      console.log(dataInvoice);

      console.log(`Invoice with ID ${invoiceId} loaded successfully.`);
    } else {
      console.warn(`Invoice with ID ${invoiceId} not found.`);
    }
  } catch (error) {
    console.error(`Error loading invoice with ID ${invoiceId}:`, error);
  }
};

export const updateInvoiceFunction = async (invoiceId, updatedData) => {
  try {
    console.log(
      'Updating invoice. ID:',
      invoiceId,
      'Updated Data:',
      updatedData
    );

    const firestore = getFirestore(app);
    const invoiceDocRef = doc(firestore, 'invoices', invoiceId);

    // Check if the document exists before attempting to update
    const invoiceDocSnapshot = await getDoc(invoiceDocRef);

    if (invoiceDocSnapshot.exists()) {
      // Use setDoc to update the entire document
      await setDoc(invoiceDocRef, {
        ...invoiceDocSnapshot.data(), // Preserve existing data
        ...updatedData, // Update specified fields
      });

      console.log('Invoice updated successfully.');
    } else {
      console.warn(
        `Document with ID ${invoiceId} not found. No update performed.`
      );
      // Handle the case where the document is not found (optional)
    }
  } catch (error) {
    console.error('Error updating invoice:', error);
    throw error; // Re-throw the error to handle it in the calling component if needed
  }
};
