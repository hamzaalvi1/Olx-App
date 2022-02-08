import React from 'react';
import {Container,Row,Col} from "react-bootstrap"
import "./category.scss"
import ArrowDown from "../../assets/images/arrow-down.svg"

const CategoryDetails = () => {
  return (
  <div className='categoryDetails'>
   <Container className="p-0">
      <Row className="align-items-center">
         <Col md={2} className="p-0">
          
            <button className="allDetails">
                All Categories
                <img src={ArrowDown} alt="arrow-down"/>
            </button>
               
         </Col>
         <Col md={9}>
             <ul className='cat-details'>
                <li>
                    <a href="#">Mobile Phone</a>
                </li>
                <li>
                    <a href="#">Cars</a>
                </li>
                <li>
                    <a href="#">Motorcycles</a>
                </li>
                <li>
                    <a href="#">Houses</a>
                </li>
                <li>
                    <a href="#">TV-Video-Audio</a>
                </li>
                <li>
                    <a href="#">Tablets</a>
                </li>
                <li>
                    <a href="#">Land & Plots</a>
                </li>
                  
             </ul>
         </Col>
      </Row>
   </Container>
  </div>
  );
};

export default CategoryDetails;
