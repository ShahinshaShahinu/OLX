import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

import 'firebase/storage';




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyArAUAtXRNxOi7BGr8CQyB_xbFhp0YHnE0",
    authDomain: "fir-82d62.firebaseapp.com",
    projectId: "fir-82d62",
    storageBucket: "fir-82d62.appspot.com",
    messagingSenderId: "371405655175",
    appId: "1:371405655175:web:e0b79f0959443302e23c22",
    measurementId: "G-BHEQ1RYLGM"
  };

const app=initializeApp(firebaseConfig);
const db=getFirestore(app);
const auth=getAuth(app);
const storage=getStorage(app);

export { auth, db, storage };

  