// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqioCQVyST12hSdKo798FGbBZtuOPnuOg",
    authDomain: "spice-garden-7fa4a.firebaseapp.com",
    projectId: "spice-garden-7fa4a",
    storageBucket: "spice-garden-7fa4a.appspot.com",
    messagingSenderId: "957603941906",
    appId: "1:957603941906:web:e95c40ff00169b83a412cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;