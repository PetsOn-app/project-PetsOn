// import firebase from "firebase/app";
// import "firebase/storage";


// const firebaseConfig = {
//   apiKey: "AIzaSyD3nQlKZ0fiTLf38Ty3q4Z7-qiwYGOIAEg",
//   authDomain: "petson-eac94.firebaseapp.com",
//   projectId: "petson-eac94",
//   storageBucket: "petson-eac94.appspot.com",
//   messagingSenderId: "222486094664",
//   appId: "1:222486094664:web:a910191c639689b9cdc97d",
//   measurementId: "G-Z2ECE8RQPG"
// };

// // Initialize Firebase:
// firebase.initializeApp(firebaseConfig);

// const storage = firebase.storage();

// // Exportando a const Storage e passando a chamada do storage:
// export { storage, firebase as default };




















// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyD3nQlKZ0fiTLf38Ty3q4Z7-qiwYGOIAEg",
  authDomain: "petson-eac94.firebaseapp.com",
  projectId: "petson-eac94",
  storageBucket: "petson-eac94.appspot.com",
  messagingSenderId: "222486094664",
  appId: "1:222486094664:web:a910191c639689b9cdc97d",
  measurementId: "G-Z2ECE8RQPG"
};

// // Initialize Firebase:
// export const app = initializeApp(firebaseConfig);

// // Exportando a const Storage e passando a chamada do storage:
// export const storage = getStorage(app);

firebase.initializeApp(firebaseConfig);
export default firebase;
