// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, doc, addDoc, setDoc ,getDocs,getDoc} from "firebase/firestore"; 



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjs1d0P82zcoeL2b40eyPXoSCPx-x1S4Y",
  authDomain: "olx-replica-app-561e5.firebaseapp.com",
  projectId: "olx-replica-app-561e5",
  storageBucket: "olx-replica-app-561e5.appspot.com",
  messagingSenderId: "903564159882",
  appId: "1:903564159882:web:eb6f23c1cc3d8014253673"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth()
const db = getFirestore()

// collection ref
const colRef = collection(db, 'adPostDetails')



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

async function getAds() {
  const querySnapshot = await getDocs(collection(db, "adPostDetails"))
  const ads = []
  querySnapshot.forEach((doc) => {
    ads.push({ ...doc.data(), id: doc.id })
  })
  return ads
}

const getSingleAd = async  (id) =>{
  const docRef = doc(db,"adPostDetails",id)
   
  const adResponse = await getDoc(docRef)

  return adResponse.data()
}

export {setPostForm,getAds,getSingleAd}