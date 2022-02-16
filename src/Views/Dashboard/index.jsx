import React from 'react'
import CategoryDetails from "../../Components/CategoryDetail"
import Ads from "../../Components/Ads"
import Ad from "../../Components/Ad"


const Home = () => {
  return (
    <div className='dashboard'>
     <CategoryDetails/>
     <section className="banner">
       
     </section>
      <Ad/>

    </div>
  )
}

export default Home