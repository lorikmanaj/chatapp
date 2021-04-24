import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBgL_ji5gOsadvXXhbA10QTUjDzFwGJBIM",
    authDomain: "chatapp-7dd81.firebaseapp.com",
    projectId: "chatapp-7dd81",
    storageBucket: "chatapp-7dd81.appspot.com",
    messagingSenderId: "272329499073",
    appId: "1:272329499073:web:c1ee43be5671de718c8f40",
    measurementId: "G-M6MRB69TSF"
  }; 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
// const firebaseConfig = {
//     apiKey: "",
//     authDomain: "",
//     databaseURL: "",
//     projectId: "",
//     storageBucket: "",
//     messagingSenderId: "",
//     appId: "",
//     measurementId: ""
//   };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;