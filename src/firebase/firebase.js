import { ref } from 'vue';

import { getAnalytics } from 'firebase/analytics';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// Reference to the "invoices" collection
import {
  addDoc,
  collection,
  deleteDoc,
  doc as firestoreDoc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from 'firebase/firestore';

import router from '../routers';

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

let dataInvoices = ref([]);
let dataInvoice = ref([]);
let updateInvoice = ref([]);

// Get a reference to the Firestore database

export const useFirebase = () => {
  const firestore = getFirestore(app);
  const invoicesCollection = collection(firestore, 'invoices');

  const getInvoicesData = async () => {
    try {
      dataInvoices.value.length = 0;

      const querySnapshot = await getDocs(invoicesCollection);

      querySnapshot.forEach((doc) => {
        dataInvoices.value.push(doc.data());
      });
      console.log(dataInvoices.value);
      console.log('Invoices data loaded successfully.');
    } catch (error) {
      console.error('Error loading invoices data:', error);
    }
  };

  const updateInvoiceStatus = async (invoiceId, newStatus) => {
    try {
      // Use the simple update function with the specific field to update
      await updateInvoiceFunction(invoiceId, { status: newStatus });

      console.log(`Invoice status updated to ${newStatus} successfully.`);
    } catch (error) {
      console.error('Error updating invoice status:', error);
      throw error;
    }
  };

  const updateInvoiceFunction = async (itemId, updatedData) => {
    try {
      // Query for documents where the 'id' field is equal to the specified itemId
      const q = query(invoicesCollection, where('id', '==', itemId));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Update each matching document with the specified updatedData
        querySnapshot.docs.forEach(async (doc) => {
          const invoiceDocRef = firestoreDoc(firestore, 'invoices', doc.id);

          // Check if the document exists before attempting to update
          const invoiceDocSnapshot = await getDoc(invoiceDocRef);
          if (invoiceDocSnapshot.exists()) {
            // Use setDoc to update the entire document with the new data
            await setDoc(invoiceDocRef, {
              ...invoiceDocSnapshot.data(), // Preserve existing data
              ...updatedData, // Update specified fields
            });

            console.log('Item updated successfully.');

            // Update dataInvoice.value with the updated data
            const updatedInvoiceSnapshot = await getDoc(invoiceDocRef);
            dataInvoice.value = [updatedInvoiceSnapshot.data()];
          } else {
            console.warn(
              `Document with ID ${itemId} not found. No update performed.`
            );
            // Handle the case where the document is not found (optional)
          }
        });
      } else {
        console.warn(`No item found with id: ${itemId}. No update performed.`);
        // Handle the case where no matching document is found (optional)
      }
    } catch (error) {
      console.error('Error updating item:', error);
      throw error;
    }
  };

  const deleteInvoiceFunction = async (invoiceId) => {
    try {
      // Query for documents where the 'id' field is equal to the specified itemId
      const q = query(invoicesCollection, where('id', '==', invoiceId));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Use Promise.all to wait for all asynchronous updates
        await Promise.all(
          querySnapshot.docs.map(async (doc) => {
            const invoiceDocRef = firestoreDoc(firestore, 'invoices', doc.id);

            // Check if the document exists before attempting to delete
            const invoiceDocSnapshot = await getDoc(invoiceDocRef);
            if (invoiceDocSnapshot.exists()) {
              // Use deleteDoc to delete the document
              await deleteDoc(invoiceDocRef);

              console.log('Item deleted successfully.');
            } else {
              console.warn(
                `Document with ID ${invoiceId} not found. No delete performed.`
              );
              // Handle the case where the document is not found (optional)
            }
          })
        );

        router.push({ name: 'HomePage' });
      } else {
        console.warn(
          `No item found with id: ${invoiceId}. No delete performed.`
        );
        // Handle the case where no matching document is found (optional)
      }
    } catch (error) {
      console.error('Error deleting item:', error);
      throw error;
    }
  };

  const getInvoiceById = async (invoiceId) => {
    try {
      dataInvoice.value.length = 0;

      // Query for documents where the 'id' field is equal to the specified itemId
      const q = query(invoicesCollection, where('id', '==', invoiceId));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // The querySnapshot will contain the documents that match the query
        const items = querySnapshot.docs.map((doc) => doc.data());
        dataInvoice.value.push(items[0]);
        updateInvoice.value = { ...dataInvoice.value[0] };

        return items[0];
      } else {
        console.warn(`No item found with id: ${invoiceId}`);
        return null;
      }
    } catch (error) {
      console.error('Error fetching item:', error);
      throw error;
    }
  };

  const addInvoiceFunction = async (newInvoice) => {
    try {
      // Use addDoc to add a new document to the "invoices" collection
      const addedDocRef = await addDoc(invoicesCollection, newInvoice.value);

      console.log('Invoice added successfully with ID:', addedDocRef.id);

      console.log(newInvoice.value);

      dataInvoices.value.push({ ...newInvoice.value });

      console.log(dataInvoices.value);
    } catch (error) {
      console.error('Error adding invoice to Firestore:', error);
      throw error;
    }
  };

  return {
    getInvoicesData,
    updateInvoice,
    updateInvoiceStatus,
    updateInvoiceFunction,
    deleteInvoiceFunction,
    getInvoiceById,
    addInvoiceFunction,
    dataInvoices,
    dataInvoice,
  };
};
