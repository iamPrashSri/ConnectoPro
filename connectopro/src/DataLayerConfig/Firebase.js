import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDvxgYbppyKokTfhO6SG1bD6YKstzq1GIo",
    authDomain: "connectopro-665de.firebaseapp.com",
    projectId: "connectopro-665de",
    storageBucket: "connectopro-665de.appspot.com",
    messagingSenderId: "1090684066693",
    appId: "1:1090684066693:web:92b6e09b3bba3ce77802ec",
    measurementId: "G-MRXKQTSJQP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };