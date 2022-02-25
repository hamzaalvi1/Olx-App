import React,{useEffect,useState} from 'react'
import "./ad.scss"
import { Container,Row,Col} from "react-bootstrap"
import {BsHeart,BsShare,BsTelephone} from "react-icons/bs"
import ProfilePic from "../../assets/images/profile.png"
import ArrowDown from "../../assets/images/arrow-down.svg"
import {MdOutlineArrowForwardIos} from "react-icons/md"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CatImg from "../../assets/images/cat-image.jpg"
import {getSingleAd} from "../Config/firebase"
import { useParams } from 'react-router-dom'

const AD = () => {
  const params = useParams()
  const [adData,setAdData] = useState(null)
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  useEffect( async ()=>{
    const getSingleAdState = await getSingleAd(params.adId)
    setAdData(getSingleAdState)
  },[])

  return (
    <div className="ad">
      <Container>
          <Row>
             <Col md={7}>
               <div className="adSlider">
               <Carousel>
                <div>
                    <img src={adData?.photo1} />
                </div>
                <div>
                    <img src={adData?.photo2} />
                </div>
                <div>
                    <img src={adData?.photo3} />
                </div>
                <div>
                    <img src={adData?.photo4} />
                </div>
            </Carousel>
                   
               </div>
               <div className="ad-related-details">
                 <div className="detail-panel">
                   <h4>
                     Details
                   </h4>
                   <div className="detail-top">
                   <Row>
                     <Col md={6}>
                       <div className="rd-data">
                          <p>Price</p>
                           <p>{adData?.adPrice}</p>
                       </div>
                     </Col>
                     <Col md={6}>
                       <div className="rd-data">
                          <p>Condition</p>
                           <p>Used</p>
                       </div>
                     </Col>
                     <Col md={6}>
                       <div className="rd-data">
                          <p>Make</p>
                           <p>{adData?.adTitle}</p>
                       </div>
                     </Col>
                   </Row>
                   </div>
                   <div className="description-panel">
                     <h3>Description</h3>
                     <p>{adData?.adDescription}<br/>
                      {/* 64gb <br/>
                      in original Condition <br/>
                      never open and repair <br/>
                      water proof <br/>
                      no fault <br/> */}


                     </p>
                   </div>
                 </div>
               </div>
             </Col>
             <Col md={5}>
               <div className="right-sidebar">
                 <div className="price-details">
                   <div className="price=left-detail">
                       <h2>{adData?.adPrice}</h2>
                        <p>{adData?.adTitle} </p>
                        <div className="price-location">
                   <span>
                    {adData?.adState }
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
                           <h4>{adData?.username}</h4>
                           <p>Member since June 2019</p>
                         </div>
                          <img src={ArrowDown} alt="arrow-left" />
                        </div>
                     </div>
                   </div>
                 </div>
                 <a href="#" className="chat">Chat with Seller</a>
                 <a href="tel:0000000"><BsTelephone/> {adData?.phnNumber}</a>
               </div>

               <div className="posted-in-location">
                 <div className="content">
                 <h2>Posted In</h2>
                  <p>Pechs II,Karachi,Sindh</p>
                  </div>
                  <div className="google-map">
                  <div className="mapouter"><div className="gmap_canvas"><iframe width="100%" height="100%" id="gmap_canvas"
                   src="https://maps.google.com/maps?q=Karachi%20Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                  </div></div>
                   <div className="locate-detail">
                   <p>See the Location</p>
                    <MdOutlineArrowForwardIos/>
                   </div>
                  </div>
               </div>
             </Col>
          </Row>
      </Container>
    </div>
  )
}

export default AD