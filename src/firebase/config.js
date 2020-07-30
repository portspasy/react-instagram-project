import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyABfAO1hGY7NBIRKvoFnvUJVGhLreiOSho",
  authDomain: "firegram-d63df.firebaseapp.com",
  databaseURL: "https://firegram-d63df.firebaseio.com",
  projectId: "firegram-d63df",
  storageBucket: "firegram-d63df.appspot.com",
  messagingSenderId: "753402046499",
  appId: "1:753402046499:web:41a22b21e130d2e3b4a996",
  measurementId: "G-9JK4DSQRL3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
