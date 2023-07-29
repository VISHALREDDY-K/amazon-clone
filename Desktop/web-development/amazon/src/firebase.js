import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDcOqWonsZ2PRhr29YlKthBwYr-6aMfumc",
  authDomain: "clone-d3bf0.firebaseapp.com",
  projectId: "clone-d3bf0",
  storageBucket: "clone-d3bf0.appspot.com",
  messagingSenderId: "197555814538",
  appId: "1:197555814538:web:585d1335fd337d29aced73",
  measurementId: "G-5FKZQDTGRN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };