import * as types from "../../Actions/actionTypes"
const initialState = {
    loading: false,
    error: null,
    ads: []
}


const AdsReducer = (state=initialState,action)=>{

    switch(action.type){
        case types.ADS_LOADING:
         return {...state,loading:true}
        
        case types.GETADS:
          return {...state,loading:false,ads:action.payload}
        
        case types.ADSERROR:
          return {...state,loading:false,error:action.payload}
          
          
        default: return state 
    }
    

}


export default AdsReducer