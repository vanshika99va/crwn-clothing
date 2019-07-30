import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBogYnCpSrEw1u15S-EI3iecO4-hq4loIc",
    authDomain: "crwn-db-cfa0b.firebaseapp.com",
    databaseURL: "https://crwn-db-cfa0b.firebaseio.com",
    projectId: "crwn-db-cfa0b",
    storageBucket: "",
    messagingSenderId: "177303686701",
    appId: "1:177303686701:web:617c9409d606a470"
  };

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;