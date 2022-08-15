import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAKGC_YxjdRUwAo90ojaTudcTb50XfhjsY",
    authDomain: "disneyplus-clone-20209.firebaseapp.com",
    projectId: "disneyplus-clone-20209",
    storageBucket: "disneyplus-clone-20209.appspot.com",
    messagingSenderId: "252509582631",
    appId: "1:252509582631:web:0bf33aad3a2b9662aa2502",
    measurementId: "G-8C252ZWHLS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;