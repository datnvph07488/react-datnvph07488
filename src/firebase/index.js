import firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyDxGVgh7XllRbBiweB-74EwVvhr2xxiqyw",
  authDomain: "react-ass.firebaseapp.com",
  databaseURL: "https://react-ass.firebaseio.com",
  projectId: "react-ass",
  storageBucket: "react-ass.appspot.com",
  messagingSenderId: "244934527033",
  appId: "1:244934527033:web:de227789dfcffc889825e8",
  measurementId: "G-71W69WN9EV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;