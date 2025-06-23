import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyApbvKuPLCwCQUMqDDl-_tyiPwjYixp3nw",

  authDomain: "maninday-b18ca.firebaseapp.com",

  projectId: "maninday-b18ca",

  storageBucket: "maninday-b18ca.firebasestorage.app",

  messagingSenderId: "855716172250",

  appId: "1:855716172250:web:b3c3ced77e4c4bdd67f0e3"

};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
