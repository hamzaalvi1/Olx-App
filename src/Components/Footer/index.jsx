import React from 'react';
import {Container,Row,Col} from "react-bootstrap"
import "./footer.scss"
import Mobile from "../../assets/images/mobile.png"
import AppStore from "../../assets/images/app-store.svg"
import PlayStore from "../../assets/images/play-store.svg"
import AppGallery from "../../assets/images/app-gallery.svg"
import {FaFacebookF,FaTwitter,FaYoutube,FaInstagram} from "react-icons/fa"

const Footer = () => {
  
  return (
   
   
  <footer className="footer">  
  <div className="footer-top">
    <Container>
     <Row className="align-items-center">
         
     
        <Col md={4}>
            <div className="footer-img">
                <img src={Mobile} alt="mobile-img" />               
    
            </div>
        </Col>
        <Col md={4} className="p-0">
           <div className="footer-content">
                 <h4>TRY THE OLX APP</h4>
                 <p>Buy, sell and find just about anything using the app on your mobile.</p>

           </div>
        </Col> 
         <Col md={4}>
            <div className="ft-app-details">
              <h4>GET YOUR APP TODAY</h4>
              <ul className='platform'>
                  <li>
                     <input type="image" src={AppStore} name="app-store" alt="app-store" />
                  </li>
                  <li>
                     <input type="image" src={PlayStore} name="app-store" alt="app-store" />
                  </li>
                  <li>
                     <input type="image" src={AppGallery} name="app-store" alt="app-store" />
                  </li>
          
              </ul>
            </div>
         </Col>
        
     
    </Row>
    </Container>
  </div>
  <div className="footer-bottom">
   <Container>
      <Row>
         <Col md={2}>
           <div className="widget">
             <h6>POPULAR CATEGORIES</h6>
              <ul>
                <li><a href={()=>false}>Cars</a></li>
                <li><a href={()=>false}>Flats for rent</a></li>
                <li><a href={()=>false}>Mobile Phones</a></li>
                <li><a href={()=>false}>Jobs</a></li>

              </ul>
           </div>
         </Col> 
         <Col md={2}>
           <div className="widget">
             <h6>TRENDING SEARCHES</h6>
              <ul>
                <li><a href={()=>false}>Bikes</a></li>
                <li><a href={()=>false}>Watches</a></li>
                <li><a href={()=>false}>Books</a></li>
                <li><a href={()=>false}>Dogs</a></li>

              </ul>
           </div>
         </Col>
         <Col md={2}>
           <div className="widget">
             <h6>ABOUT US</h6>
              <ul>
                <li><a href={()=>false}>About EMPG</a></li>
                <li><a href={()=>false}>OLX Blog</a></li>
                <li><a href={()=>false}>Contact Us</a></li>
                <li><a href={()=>false}>OLX for Businesses</a></li>

              </ul>
           </div>
         </Col>  
         <Col md={2}>
           <div className="widget">
             <h6>OLX</h6>
              <ul>
                <li><a href={()=>false}>Help</a></li>
                <li><a href={()=>false}>Sitemap</a></li>
                <li><a href={()=>false}>Terms of use</a></li>
                <li><a href={()=>false}>Privacy Policy</a></li>

              </ul>
           </div>
         </Col> 
         <Col md={4}>
           <div className="widget">
             <h6>Follow Us</h6>
              <ul className="ftr-social-icons">
                <li><a href={()=>false}><FaFacebookF/></a></li>
                <li><a href={()=>false}><FaTwitter/></a></li>
                <li><a href={()=>false}><FaYoutube/></a></li>
                <li><a href={()=>false}><FaInstagram/></a></li>


                


              </ul>
              <ul className='platform'>
                  <li>
                     <input type="image" src={AppStore} name="app-store" alt="app-store" />
                  </li>
                  <li>
                     <input type="image" src={PlayStore} name="app-store" alt="app-store" />
                  </li>
                  <li>
                     <input type="image" src={AppGallery} name="app-store" alt="app-store" />
                  </li>
          
              </ul>

           </div>
         </Col>
      </Row> 
   </Container>
  </div>
  <div className="copy-right">
    <Container>
      <Row className='align-items-center'>
        <Col md={12} className="text-right">
          <p>Free Classifieds in Pakistan . <span>© 2006-2022 OLX</span></p>
        </Col>
      </Row>
    </Container>
  </div>
  </footer>
 
  )
};

export default Footer;
