// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, doc, addDoc, setDoc } from "firebase/firestore"; 

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDHKKz3Li-oq7sz2tb2GluHiLE0U4CO0HE",
//   authDomain: "olx-app-7196e.firebaseapp.com",
//   projectId: "olx-app-7196e",
//   storageBucket: "olx-app-7196e.appspot.com",
//   messagingSenderId: "918097048859",
//   appId: "1:918097048859:web:c7e6b2656118aa24648fbe"
// };

const firebaseConfig = {
  apiKey: "AIzaSyBMSKZIwVpVeW9V2zgIb3B9waUyz2Y25_0",
  authDomain: "olx-clone-61e54.firebaseapp.com",
  projectId: "olx-clone-61e54",
  storageBucket: "olx-clone-61e54.appspot.com",
  messagingSenderId: "12208341771",
  appId: "1:12208341771:web:71e809ce345a0842c5580e"
};
const app = initializeApp(firebaseConfig);

const auth = getAuth()
const db = getFirestore()

// collection ref
const colRef = collection(db, 'adds')



// const setPostForm = async(postData,uuid)=>{
 
//     const result = await setDoc(doc(db,"AdPosts",uuid),postData)
//     console.log(result)

// }
function setPostForm(postData) {
  addDoc(colRef, {...postData}).then(() => {
      alert('Add Added Successfully')
  }).catch(e => {
      alert('Add Not Added')
  })
}

export {setPostForm}