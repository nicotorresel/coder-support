import firebase from "firebase";

let firebaseConfig = {
  apiKey: "AIzaSyBWKg-0lob4lItRYT7CKhLG1qmu9K3vilU",
  authDomain: "coder-support.firebaseapp.com",
  projectId: "coder-support",
  storageBucket: "coder-support.appspot.com",
  messagingSenderId: "656369098932",
  appId: "1:656369098932:web:ca4b6732cf62fc8f20b7e1",
  measurementId: "G-ZG5NYE7EEZ",
};

let fire = firebase.initializeApp(firebaseConfig);

export default fire;
