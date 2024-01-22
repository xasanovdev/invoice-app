import { ref } from 'vue';

import { getAnalytics } from 'firebase/analytics';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// Reference to the "invoices" collection
import {
  addDoc,
  collection,
  doc,
  doc as firestoreDoc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  updateDoc,
  where,
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
    console.log(dataInvoices.value);
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
    const invoicesCollection = collection(firestore, 'invoices');

    // Query for documents where the 'id' field is equal to the specified itemId
    const q = query(invoicesCollection, where('id', '==', invoiceId));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // The querySnapshot will contain the documents that match the query
      const items = querySnapshot.docs.map((doc) => doc.data());
      dataInvoice.value.push(items[0]);
    } else {
      console.warn(`No item found with id: ${invoiceId}`);
      return null;
    }
  } catch (error) {
    console.error('Error fetching item:', error);
    throw error;
  }
};

export const updateInvoiceFunction = async (itemId, updatedData) => {
  try {
    const firestore = getFirestore(app);
    const invoicesCollection = collection(firestore, 'invoices');

    // Query for documents where the 'id' field is equal to the specified itemId
    const q = query(invoicesCollection, where('id', '==', itemId));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // Update each matching document with the specified updatedData
      querySnapshot.docs.forEach(async (doc) => {
        const invoiceDocRef = firestoreDoc(firestore, 'invoices', doc.id);
        await updateDoc(invoiceDocRef, updatedData);
      });

      console.log('Item updated successfully.');
    } else {
      console.warn(`No item found with id: ${itemId}. No update performed.`);
      // Handle the case where no matching document is found (optional)
    }
  } catch (error) {
    console.error('Error updating item:', error);
    throw error;
  }
};

// ...

export const addInvoiceFunction = async (newInvoice) => {
  try {
    const firestore = getFirestore(app);
    const invoicesCollection = collection(firestore, 'invoices');

    // Use addDoc to add a new document to the "invoices" collection
    const addedDocRef = await addDoc(invoicesCollection, newInvoice);

    console.log('Invoice added successfully with ID:', addedDocRef.id);

    // Return the ID of the added document
    return addedDocRef.id;
  } catch (error) {
    console.error('Error adding invoice to Firestore:', error);
    throw error;
  }
};

// export const generateFirebaseId = async () => {
//   try {
//     const firestore = getFirestore(app);
//     const invoicesCollection = collection(firestore, 'invoices');

//     // Use addDoc to add a temporary document to the "invoices" collection
//     const addedDocRef = await addDoc(invoicesCollection, {
//       dummyData: 'dummy',
//     });

//     console.log('Firebase generated ID:', addedDocRef.id);

//     // Delete the temporary document immediately after getting the ID
//     await deleteDoc(doc(invoicesCollection, addedDocRef.id));

//     return addedDocRef.id;
//   } catch (error) {
//     console.error('Error generating Firebase ID:', error);
//     throw error;
//   }
// };
