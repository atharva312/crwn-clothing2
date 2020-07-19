import firebase from 'firebase/app';
import'firebase/firestore';
import 'firebase/auth';

const config =  {
  apiKey: "AIzaSyCLg1MDKXBaUrp_euaeCASIvW8VO_zlamk",
  authDomain: "crwn-db-53fd6.firebaseapp.com",
  databaseURL: "https://crwn-db-53fd6.firebaseio.com",
  projectId: "crwn-db-53fd6",
  storageBucket: "crwn-db-53fd6.appspot.com",
  messagingSenderId: "386990950520",
  appId: "1:386990950520:web:57437f2570b16d5e68458d",
  measurementId: "G-ZGMLN8C1G9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account '});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


