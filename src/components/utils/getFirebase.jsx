import firebase from "firebase";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAw1Oih5_kOYpx1CUf5NkjPS6Ray-JHU5s",
    authDomain: "ecommerce-ng-16155.firebaseapp.com",
    projectId: "ecommerce-ng-16155",
    storageBucket: "ecommerce-ng-16155.appspot.com",
    messagingSenderId: "135556538165",
    appId: "1:135556538165:web:bab9650edcc9ce979fb67c"
  };

  const app = firebase.initializeApp(firebaseConfig)

  export function getFirestore(){
      return firebase.firestore(app)
  }