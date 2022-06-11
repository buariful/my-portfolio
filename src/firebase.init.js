// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,

    // apiKey: "AIzaSyCjGhpQ1Fqs5KPWa6XV10oa2Jw2ilFaKuw",
    // authDomain: "my-portfolio-1d547.firebaseapp.com",
    // projectId: "my-portfolio-1d547",
    // storageBucket: "my-portfolio-1d547.appspot.com",
    // messagingSenderId: "218945236526",
    // appId: "1:218945236526:web:979fe899dbd470c06d39bf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;