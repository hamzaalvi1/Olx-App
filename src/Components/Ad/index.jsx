import React from 'react'
import "./ad.scss"
import { Container,Row,Col} from "react-bootstrap"
const AD = () => {
  return (
    <div className="ad">
      <Container>
          <Row>
             <Col md={8}>
               <div className="adSlider">
                   
               </div>
             </Col>
             <Col md={4}>
             
             </Col>
          </Row>
      </Container>
    </div>
  )
}

export default AD