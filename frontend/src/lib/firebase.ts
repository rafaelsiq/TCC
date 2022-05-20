import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyCCu9hTKtvsM2PE0QlkFRBEcfnITSjQWyg",
    authDomain: "tcc-ad-manager.firebaseapp.com",
    projectId: "tcc-ad-manager",
    storageBucket: "tcc-ad-manager.appspot.com",
    messagingSenderId: "483576230603",
    appId: "1:483576230603:web:c74f7077a3b9f13fbda14e",
    measurementId: "G-YPQM1Z9HTZ"
};

const firebase = initializeApp(FIREBASE_CONFIG);
export const storage = getStorage(firebase);