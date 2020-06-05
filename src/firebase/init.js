import firebase from "@firebase/app";
import "@firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCEU-nYG37rU7qk_vbLFRWs1qB4qGoaGQ0",
  authDomain: "ninja-smoothies-22e32.firebaseapp.com",
  databaseURL: "https://ninja-smoothies-22e32.firebaseio.com",
  projectId: "ninja-smoothies-22e32",
  storageBucket: "ninja-smoothies-22e32.appspot.com",
  messagingSenderId: "105345270532",
  appId: "1:105345270532:web:bb22defae36e75899d0651"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore.settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
