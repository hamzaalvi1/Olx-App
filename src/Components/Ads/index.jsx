import React,{useState,useEffect} from 'react'
import "./ads.scss"
import {Container,Row,Col} from "react-bootstrap"
import AdImage from '../../assets/images/cat-image.jpg'
import {BsHeart} from "react-icons/bs"
import {useNavigate} from "react-router-dom"
import {getAds} from "../Config/firebase"


const Ads = () => {
    const navigate = useNavigate()
    const [ads, setAds] = useState([])

       
  
    useEffect(async () => {
        const tempAds = await getAds()
        setAds(tempAds)
      }, [])
  return (
    <div className='ads'>
     <Container>
         <Row className="align-items-center">
             <h2>Fresh Recomandations</h2>
              {ads.map((ad,index)=>{
                  return(
                <Col md={3}  key={ad.id}> 
                <div className="adbox" onClick={()=> navigate(`/item/${ad.id}`)}>
                    <div className="ad-image">
                        <img src={ad.photo1} alt="ad-image" />
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
                           <span>{ad.adState },Pakistan </span> 
                             

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