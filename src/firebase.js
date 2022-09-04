
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyBxPXgyiXwUaF3ZU87tjUBVqGiVZOokrag",
    authDomain: "netflix-5e299.firebaseapp.com",
    projectId: "netflix-5e299",
    storageBucket: "netflix-5e299.appspot.com",
    messagingSenderId: "399608176572",
    appId: "1:399608176572:web:5abf493601fb94993e95b9",
    measurementId: "G-DV7MEJ2EGY"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth =firebase.auth();

  export {auth}
  export default db;