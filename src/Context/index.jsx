import {createContext,useState} from "react"


export const GlobalContext = createContext()

export const GlobalProvider = ({children})=>{
const [signUpModalOpen,setSignUpModalOpen] = useState(false)

    return(
        <GlobalContext.Provider value={{signUpModalOpen,setSignUpModalOpen}}>
            {children}
        </GlobalContext.Provider>
    )
}