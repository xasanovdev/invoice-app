import { getAnalytics } from 'firebase/analytics';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// Reference to the "invoices" collection
import { collection, getDocs, getFirestore } from 'firebase/firestore';

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

export const dataInvoices = [];

// Get a reference to the Firestore database

const firestore = getFirestore(app);

// Reference to the "invoices" collection
export const invoicesCollection = collection(firestore, 'invoices');

// Get all documents from the "invoices" collection
const querySnapshot = await getDocs(invoicesCollection);

// Populate the "items" array with data from the collection
querySnapshot.forEach((doc) => {
  dataInvoices.push(doc.data());
});
