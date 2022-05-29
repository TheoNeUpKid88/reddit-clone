import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: 'AIzaSyAKYs67Oa5VP6po30HEgFJIJJ2kUTC0_Sc',
    authDomain: 'reddit-clone-105a4.firebaseapp.com',
    projectId: 'reddit-clone-105a4',
    storageBucket: 'reddit-clone-105a4.appspot.com',
    messagingSenderId: '185874295465',
    appId: '1:185874295465:web:82daf36b511f662a6d97b8'
};

//Initialize Firebase for SSR
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export {app, firestore, auth, storage};