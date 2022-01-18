import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
 

  
    apiKey: "AIzaSyD7QatUO-dosvHJhc1GkW0yBPsu8Vsjp_Y",
    authDomain: "e-bicyclee.firebaseapp.com",
    projectId: "e-bicyclee",
    storageBucket: "e-bicyclee.appspot.com",
    messagingSenderId: "691471305213",
    appId: "1:691471305213:web:e16d2b9dc5c5a4852ab194"
 
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
