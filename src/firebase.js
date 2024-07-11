import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/functions';

const firebaseApp = {
  apiKey: "AIzaSyD6lOxCdrmyu4VEBA9VLR_-95xDi7pPDho",
  authDomain: "instagram-clone-curso-b3f2c.firebaseapp.com",
  projectId: "instagram-clone-curso-b3f2c",
  storageBucket: "instagram-clone-curso-b3f2c.appspot.com",
  messagingSenderId: "568615503471",
  appId: "1:568615503471:web:1bef566841faf30b1a6f9a",
  measurementId: "G-WNBJW7HNMZ"
};

firebase.initializeApp(firebaseApp);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export { db, auth, storage, functions };