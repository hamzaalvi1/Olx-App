import React,{useState} from 'react'
import "./ads.scss"
import {Container,Row,Col} from "react-bootstrap"
import AdImage from '../../assets/images/cat-image.jpg'
import {BsHeart} from "react-icons/bs"

const Ads = () => {
   
    // const [adList,setAdList] = useState([])
   
    const AdList = [
        {
         adImage: AdImage,
         adTitle: "Persian Cat For Sale",
         adPrice: "53,500",
         adLocation: "DHA Phase 1, Lahore",
         adTime: "3 Weeks ago"

        },
        {
            adImage: AdImage,
            adTitle: "Persian Cat For Sale",
            adPrice: "53,500",
            adLocation: "DHA Phase 1, Lahore",
            adTime: "3 Weeks ago"
   
           },
           {
            adImage: AdImage,
            adTitle: "Persian Cat For Sale",
            adPrice: "53,500",
            adLocation: "DHA Phase 1, Lahore",
            adTime: "3 Weeks ago"
   
           },
           {
            adImage: AdImage,
            adTitle: "Persian Cat For Sale",
            adPrice: "53,500",
            adLocation: "DHA Phase 1, Lahore",
            adTime: "3 Weeks ago"
   
           },
           {
            adImage: AdImage,
            adTitle: "Persian Cat For Sale",
            adPrice: "53,500",
            adLocation: "DHA Phase 1, Lahore",
            adTime: "3 Weeks ago"
   
           },
           {
            adImage: AdImage,
            adTitle: "Persian Cat For Sale",
            adPrice: "53,500",
            adLocation: "DHA Phase 1, Lahore",
            adTime: "3 Weeks ago"
   
           },
           {
            adImage: AdImage,
            adTitle: "Persian Cat For Sale",
            adPrice: "53,500",
            adLocation: "DHA Phase 1, Lahore",
            adTime: "3 Weeks ago"
   
           },
           {
            adImage: AdImage,
            adTitle: "Persian Cat For Sale",
            adPrice: "53,500",
            adLocation: "DHA Phase 1, Lahore",
            adTime: "3 Weeks ago"
   
           },
           {
            adImage: AdImage,
            adTitle: "Persian Cat For Sale",
            adPrice: "53,500",
            adLocation: "DHA Phase 1, Lahore",
            adTime: "3 Weeks ago"
   
           },
           {
            adImage: AdImage,
            adTitle: "Persian Cat For Sale",
            adPrice: "53,500",
            adLocation: "DHA Phase 1, Lahore",
            adTime: "3 Weeks ago"
   
           },
           {
            adImage: AdImage,
            adTitle: "Persian Cat For Sale",
            adPrice: "53,500",
            adLocation: "DHA Phase 1, Lahore",
            adTime: "3 Weeks ago"
   
           },
           {
            adImage: AdImage,
            adTitle: "Persian Cat For Sale",
            adPrice: "53,500",
            adLocation: "DHA Phase 1, Lahore",
            adTime: "3 Weeks ago"
   
           },
           {
            adImage: AdImage,
            adTitle: "Persian Cat For Sale",
            adPrice: "53,500",
            adLocation: "DHA Phase 1, Lahore",
            adTime: "3 Weeks ago"
   
           },
           {
            adImage: AdImage,
            adTitle: "Persian Cat For Sale",
            adPrice: "53,500",
            adLocation: "DHA Phase 1, Lahore",
            adTime: "3 Weeks ago"
   
           },
           {
            adImage: AdImage,
            adTitle: "Persian Cat For Sale",
            adPrice: "53,500",
            adLocation: "DHA Phase 1, Lahore",
            adTime: "3 Weeks ago"
   
           },
           {
            adImage: AdImage,
            adTitle: "Persian Cat For Sale",
            adPrice: "53,500",
            adLocation: "DHA Phase 1, Lahore",
            adTime: "3 Weeks ago"
   
           },
    ]

  return (
    <div className='ads'>
     <Container>
         <Row className="align-items-center">
             <h2>Fresh Recomandations</h2>
              {AdList.map((ad,index)=>{
                  return(
                <Col md={3}> 
                <div className="adbox" key={index}>
                    <div className="ad-image">
                        <img src={ad.adImage} alt="ad-image" />
                    </div>
                    <div className="adDetails">
                       <div className="adtopDetail">
                       <div>
                       <h4>{ad.adTitle}</h4>
                       <h3>Rs {ad.adPrice}</h3>
                       </div>
                         <BsHeart />
                       </div>

                       <div className="adbottomDetail">
                           <span>{ad.adLocation} </span> <span>{ad.adTime}</span>
                             

                       </div>
                    </div>
                </div>
            </Col>
                  )
              })}
              
         </Row>
     </Container>
    </div>
  )
}

export default Ads