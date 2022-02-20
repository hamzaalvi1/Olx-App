import React from 'react'
import CategoryDetails from "../../Components/CategoryDetail"
import Ads from "../../Components/Ads"


const Home = () => {
  return (
    <div className='dashboard'>
     <CategoryDetails/>
     <section className="banner">
       
     </section>
      <Ads/>

    </div>
  )
}

export default Home