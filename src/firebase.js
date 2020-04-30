import firebase from "@firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIoPqUY8aoWx9gfYC-x1M9u6_oMDAai2o",
  authDomain: "clockwork-gallery-90725.firebaseapp.com",
  databaseURL: "https://clockwork-gallery-90725.firebaseio.com",
  projectId: "clockwork-gallery-90725",
  storageBucket: "clockwork-gallery-90725.appspot.com",
  messagingSenderId: "690774061211",
  appId: "1:690774061211:web:9236be04433ab171cc163e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
