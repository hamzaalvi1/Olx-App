// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, doc, addDoc, setDoc } from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbEYRY7I07ipFAQBLiNhZKJOmtDI16XIY",
    authDomain: "olx-clone-d2ebf.firebaseapp.com",
    projectId: "olx-clone-d2ebf",
    storageBucket: "olx-clone-d2ebf.appspot.com",
    messagingSenderId: "96816618322",
    appId: "1:96816618322:web:8d3e173637ed217c9f788b"
  };
  
const app = initializeApp(firebaseConfig);

const auth = getAuth()
const db = getFirestore()


const setPostForm = async(postData,uuid)=>{
 
    const result = await setDoc(doc(db,"AdPosts",uuid),postData)
    console.log(result)

}

export {setPostForm}