import React from 'react'
import CategoryDetails from "../../Components/CategoryDetail"
import Ads from "../../Components/Ads"
import Popup from "../../Components/LoginInPopup"



const Home = () => {
  return (
    <div className='dashboard'>
     <Popup/>
     <CategoryDetails/>
     <section className="banner">
       
     </section>
      <Ads/>

    </div>
  )
}

export default Home