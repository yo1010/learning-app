import firebase from 'firebase/app';

var firebaseConfig = {
    apiKey: "AIzaSyAP048e34jycB1kbG2L6cfbDR68BqHcAic",
    authDomain: "dev-learn-community.firebaseapp.com",
    databaseURL: "https://dev-learn-community.firebaseio.com",
    projectId: "dev-learn-community",
    storageBucket: "dev-learn-community.appspot.com",
    messagingSenderId: "251764710502",
    appId: "1:251764710502:web:2cfa337846edf9ebaa61a7",
    measurementId: "G-6DTC8NRYN6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;