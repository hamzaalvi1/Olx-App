import { combineReducers } from "redux";
import AdsReducer from "./AdReducer";


const rootReducer = combineReducers({Ads:AdsReducer,})

export default rootReducer