import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCo4vJW5Uhd9A4v2Joo0zv8PwfzL_dkCW8',
  authDomain: 'signal-clone-500c5.firebaseapp.com',
  projectId: 'signal-clone-500c5',
  storageBucket: 'signal-clone-500c5.appspot.com',
  messagingSenderId: '289266857314',
  appId: '1:289266857314:web:9b2d2c0bb2de9860ef283b',
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
