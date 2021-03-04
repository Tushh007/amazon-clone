import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBxW54jh72wjgLFs2M7WDKPAKhsZ4AngJo',
  authDomain: 'clone-30fb3.firebaseapp.com',
  projectId: 'clone-30fb3',
  storageBucket: 'clone-30fb3.appspot.com',
  messagingSenderId: '857720720488',
  appId: '1:857720720488:web:72e7d204909b35185affdd',
  measurementId: 'G-WJD0VE5E14',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
