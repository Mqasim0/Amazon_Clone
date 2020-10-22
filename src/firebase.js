import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBbLNy9FQmlJt69iztdjA89c9gqfgcIM1s',
  authDomain: 'clone-ef28f.firebaseapp.com',
  databaseURL: 'https://clone-ef28f.firebaseio.com',
  projectId: 'clone-ef28f',
  storageBucket: 'clone-ef28f.appspot.com',
  messagingSenderId: '883288091857',
  appId: '1:883288091857:web:158a951dda2ee52273e9f0',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
