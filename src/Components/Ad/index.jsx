import React from 'react'
import "./ad.scss"
import { Container,Row,Col} from "react-bootstrap"
import {BsHeart,BsShare,BsTelephone} from "react-icons/bs"
import ProfilePic from "../../assets/images/profile.png"
import ArrowDown from "../../assets/images/arrow-down.svg"

const AD = () => {
  return (
    <div className="ad">
      <Container>
          <Row>
             <Col md={7}>
               <div className="adSlider">
                   
               </div>
             </Col>
             <Col md={5}>
               <div className="right-sidebar">
                 <div className="price-details">
                   <div className="price=left-detail">
                       <h2>Rs 37,999</h2>
                        <p>Iphone 8 64gb Pta approved water </p>
                        <div className="price-location">
                   <span>
                     Saddar,Karachi
                   </span>
                   <span>
                     21 hours ago
                   </span>
                 </div>
                   </div>
                   <div className="share-icons">
                   <span>
                       <BsShare/>
                      </span>
                      <span>
                       <BsHeart/>
                      </span>
                   </div>
                
                 </div>
                 
               </div>
               <div className="seller-description">
                 <h3>Seller Description</h3>
                 <div className="seller-profile">
                   <div className="seller-details">
                     <div>
                       <span>
                       <img src={ProfilePic} alt="profileImage" />
                       </span>
                        <div className="seller-personalInfo">
                        <div className='seller-prs'> 
                           <h4>Tech Zone</h4>
                           <p>Member since June 2019</p>
                         </div>
                          <img src={ArrowDown} alt="arrow-left" />
                        </div>
                     </div>
                   </div>
                 </div>
                 <a href="#" className="chat">Chat with Seller</a>
                 <a href="tel:0000000"><BsTelephone/> +9230000000</a>
               </div>
             </Col>
          </Row>
      </Container>
    </div>
  )
}

export default AD