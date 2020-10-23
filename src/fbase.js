import * as firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfqV5djtFo724NgMvdr9lMuRdW8lhHG9k",
  authDomain: "baechu-e1beb.firebaseapp.com",
  databaseURL: "https://baechu-e1beb.firebaseio.com",
  projectId: "baechu-e1beb",
  storageBucket: "baechu-e1beb.appspot.com",
  messagingSenderId: "1076266227992",
  appId: "1:1076266227992:web:27b0ba14cc01459df8666d",
  measurementId: "G-GK4XSNZSFV"
  };

firebase.initializeApp(firebaseConfig);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();