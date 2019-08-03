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

  export const createUserProfileDocument = async (userAuth , additionalData)=>{
      if (!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get();

      if(!snapShot.exists){
          const {displayName, email} = userAuth;
          const createdAt = new Date();
          try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
          }catch(error){
            console.log('error creating user', error.message);
          }
      }
      return userRef;
  };

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;