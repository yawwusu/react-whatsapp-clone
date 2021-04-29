import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC1XpLYvcEp7vVcAG41z_cdIP66-vjNsN4",
    authDomain: "react-whatsapp-clone-f08e6.firebaseapp.com",
    projectId: "react-whatsapp-clone-f08e6",
    storageBucket: "react-whatsapp-clone-f08e6.appspot.com",
    messagingSenderId: "510396235598",
    appId: "1:510396235598:web:b933f48a5f0eccb1d8a81f",
    measurementId: "G-64G7T0VGF6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export { auth, provider };
  export default db;