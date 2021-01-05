import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyABB0bupCFSZTv5oQI4tuQ9KHce9FBcYp0",
    authDomain: "food-db-9db7c.firebaseapp.com",
    projectId: "food-db-9db7c",
    storageBucket: "food-db-9db7c.appspot.com",
    messagingSenderId: "248593433739",
    appId: "1:248593433739:web:4b40d22ecbe8e05e88c08e",
    measurementId: "G-6CC3JGHGTY"
  };
 export const createUserProfileDocument = async (userAuth, additionalData) => {
   if (!userAuth) return;
   const userRef = firestore.doc(`users/${userAuth.uid}`)
   const snapShot = await userRef.get();
   if(!snapShot.exists) {
       const {displayName, email} = userAuth;
       const createdAt = new Date();
       try {
           await userRef.set({
               displayName,
               email,
               createdAt,
               ...additionalData
           })

       } catch (error){
           console.log('error creating user', error.message);

       }
   }
   return userRef;
 };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
