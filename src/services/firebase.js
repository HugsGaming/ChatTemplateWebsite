import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyDPZ27OVRTRW4m1h4EzqMa5TIXPNSemaAE",
    authDomain: "chatexample-14a99.firebaseapp.com",
    projectId: "chatexample-14a99",
    storageBucket: "chatexample-14a99.appspot.com",
    messagingSenderId: "314724380735",
    appId: "1:314724380735:web:d1fbc6e1a6f7e4ebf1c88a",
    measurementId: "G-95GN0G6JJF"
};

export const app = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();