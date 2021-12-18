import firebase from "firebase/compat";
import 'firebase/auth';
import 'firebase/firestore'
import 'firebase/performance'
import { getAnalytics } from "firebase/analytics";
const firebaseConfig  = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain:import.meta.env.VITE_AUTH_DOM ,
    databaseURL: import.meta.env.VITE_DB_URL,
    projectId: import.meta.env.VITE_PRJ_ID,
    storageBucket:import.meta.env.VITE_STG_BKT ,
    messagingSenderId: import.meta.env.VITE_MSG_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MESG_ID
  };
const app = firebase.initializeApp(firebaseConfig);
getAnalytics(app);
const db = firebase.firestore();
const auth = firebase.auth();
export {firebase,db,auth} ;