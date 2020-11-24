import firebase from 'firebase/app'
import 'firebase/firestore'

export const db = firebase
    .initializeApp({
        apiKey: "AIzaSyDjVMWSoMR2FnPFv_2DZOChFra_gucxl_o",
        authDomain: "todoapp-a19fd.firebaseapp.com",
        databaseURL: "https://todoapp-a19fd.firebaseio.com",
        projectId: "todoapp-a19fd",
        storageBucket: "todoapp-a19fd.appspot.com",
        messagingSenderId: "481282028931",
        appId: "1:481282028931:web:a4997a507db1ffd8c5b2b6",
        measurementId: "G-73H7X2YDG2"
    })
    .firestore()

export const postRef = db.collection('lists')