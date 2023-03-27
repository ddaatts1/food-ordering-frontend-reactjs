import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

const firebaseConfig = {
    apiKey: "AIzaSyBeKFJZLSF6n3eVckKjD3DoNTc-lVvMPCo",
    authDomain: "orderup-1678757977213.firebaseapp.com",
    projectId: "orderup-1678757977213",
    storageBucket: "orderup-1678757977213.appspot.com",
    messagingSenderId: "79812574000",
    appId: "1:79812574000:web:f8cc2cd153302428e6e6f5",
    measurementId: "G-TVS2KTGT6C"
};

firebase.initializeApp(firebaseConfig);
