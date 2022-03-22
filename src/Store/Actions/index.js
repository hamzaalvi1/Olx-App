import * as types from "./actionTypes"
import { db } from "../../Components/Config/firebase"
import { collection,onSnapshot } from "firebase/firestore"



const adsLoading = ()=>({type:types.ADS_LOADING})

const getAds = (ads)=>({type:types.GETADS,payload:ads})

const adsError = (error)=>({type:types.ADSERROR,payload:error})


export const adsInitiate = ()=>{
    const ads = []
    return (dispatch)=>{
        dispatch(adsLoading())

        onSnapshot(collection(db,"adPostDetails"),(querySnapShot)=>{
            querySnapShot.forEach((doc)=>{
                ads.push({...doc.data(),id:doc.id})     
            })
            dispatch(getAds(ads))
          
          },(error)=>{
            dispatch(
               adsError(error)
            )
        })
    
        
    }
} 