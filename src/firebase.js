import {getAuth} from "firebase/auth"
import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCkskeFEAh2wots0XZg5PHbNXAU1aKNjQU",
    authDomain: "netflix-clone-c28a3.firebaseapp.com",
    projectId: "netflix-clone-c28a3",
    storageBucket: "netflix-clone-c28a3.appspot.com",
    messagingSenderId: "531927458723",
    appId: "1:531927458723:web:99d17929011822cd16b016"
  };

  const app =initializeApp(firebaseConfig);
  const auth =getAuth();
   const db = getFirestore(  );
  

   export{app,auth,db};
   