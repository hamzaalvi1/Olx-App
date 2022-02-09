import React from 'react';
import {Container,Row,Col} from "react-bootstrap"
import "./footer.scss"
import Mobile from "../../assets/images/mobile.png"

const Footer = () => {
  return (
  <div className="footer">
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
         <Col>
         
         </Col>
        
     
    </Row>
    </Container>
  </div>
  )
};

export default Footer;
