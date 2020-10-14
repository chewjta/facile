import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

// we need to somehow seed the database

// we need a config here.
const config = {
  apiKey: "AIzaSyCf3cej0fEtMqurfJXMDVSPWaU8gVKMlmE",
  authDomain: "facile-20ad5.firebaseapp.com",
  databaseURL: "https://facile-20ad5.firebaseio.com",
  projectId: "facile-20ad5",
  storageBucket: "facile-20ad5.appspot.com",
  messagingSenderId: "778249842489",
  appId: "1:778249842489:web:94353c06a0feb3e62c82e8",
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export { firebase };
