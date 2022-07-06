
import { getApp,getApps,initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAI4-zo-PWAmx_VnHQ4jQk7CWDHH1sYD58",
  authDomain: "food-delivery-sams.firebaseapp.com",
  databaseURL: "https://food-delivery-sams-default-rtdb.firebaseio.com",
  projectId: "food-delivery-sams",
  storageBucket: "food-delivery-sams.appspot.com",
  messagingSenderId: "132126660604",
  appId: "1:132126660604:web:787c0e15ef41e4c3e38479"
};

// Initialize Firebase
const app = getApp.length>0 ? getApp() : initializeApp(firebaseConfig);
const firestore =getFirestore(app)
const storage=getStorage(app)

export {app,firestore,storage}