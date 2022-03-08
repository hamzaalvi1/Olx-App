import React,{useContext} from 'react'
import "./login.scss"
import popupLogo from "../../assets/images/popup-logo.svg"
import {VscChromeClose} from "react-icons/vsc"
import {FcGoogle} from "react-icons/fc"
import {BsFacebook} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import {HiPhone} from "react-icons/hi"
import { GlobalContext } from '../../Context'
const LoginPopup = () => {
  const glblContext = useContext(GlobalContext)
  const {signUpModalOpen,setSignUpModalOpen} = glblContext
  const closePopup = ()=>{
    setSignUpModalOpen(false)
    document.querySelector("body").style.overflowY = "auto"
  }
  return (
   signUpModalOpen &&  <div className='popup' onClick={closePopup}>
      <div className="popupbox">
      <div className="close-ico" onClick={closePopup}>
            <VscChromeClose/> 
        </div>  
        <div className="popup-top">
          
        <img src={popupLogo} alt="popuplogo" />
         <h4>WELCOME TO OLX</h4>
         <h5>The trusted community of <br/>buyers and sellers</h5>

        </div>
        <div className="popup-center">
            <ul className="auth-list">
              <li>
                  <button>
                    <FcGoogle/>
                    Continue With Google
                  </button>
              </li>
              <li>
                  <button>
                    <BsFacebook style={{color: "#1877F2"}}/>
                    Continue With Facebook
                  </button>
              </li>
              <li>
                  <button>
                    <MdEmail />
                    Continue With Email
                  </button>
              </li>
              <li>
                  <button>
                    <HiPhone />
                    Continue With Phone
                  </button>
              </li>
            </ul>
        </div>
        <div className="popup-bottom">
            <p>
            By continuing, you are accepting <br/>
            OLX Terms of use and Privacy Policy
            </p>
        </div>

      </div>
 
    </div> 
  )
}

export default LoginPopup