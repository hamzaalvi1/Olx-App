import React from 'react'
import "./postform.scss"
import { Container,Row,Col } from 'react-bootstrap'
import {MdAddAPhoto} from "react-icons/md"
import ProfileImg from "../../assets/images/profile.png"

const PostForm = () => {
  return (
    <div className="postForm">
      <Container>
         <Row>
            <Col md={12}>
            <h2 className='text-center'>
                Post Your Ad
            </h2>

              <div className="form-details">
                <h4>
                  Selected category
                </h4>

                <div className="ad-form">
                    <h3>Include Some Details</h3>
                     <form action="">
                         <div className="ad-fld">
                             <label htmlFor="adTitle">Ad title</label>
                             <input type="text" name="adTitle" id="adTitle" />
                             <span>Mention the key features of your item (e.g. brand, model, age, type)</span>
                         </div>
                         <div className="ad-fld textarea">
                             <label htmlFor="description">Description</label>
                             <textarea name="description" id="description" ></textarea>
                              <span>Include condition, features and reason for selling</span>
                         </div>
                          <div className="ad-condition">
                          <button>New</button>
                          <button>Used</button>    

                          </div> 
                          <div className="price-details">
                            <h4>Set a price</h4>
                            <div className="ad-fld">
                             <label htmlFor="price">Price</label>
                             <input type="number" name="price" id="price"  />
                            </div>
                          </div>
                          <div className="upload-pic">
                              <h3>Upload up to 7 Photos</h3>
                              <div className='upload-options'>
                              <label htmlFor = "upload-button-1">
                              <input accept="image/*"  id="upload-button-1"  type="file" name= "photo1" 
                              /> 
                              <MdAddAPhoto  aria-label="upload picture"/>
                              </label>
                              <label htmlFor = "upload-button-2">
                              <input accept="image/*"  id="upload-button-2"  type="file" name= "photo2" 
                              /> 
                              <MdAddAPhoto  aria-label="upload picture"/>
                              </label>
                              <label htmlFor = "upload-button-3">
                              <input accept="image/*"  id="upload-button-3"  type="file" name= "photo3" 
                              /> 
                              <MdAddAPhoto  aria-label="upload picture"/>
                              </label>
                              <label htmlFor = "upload-button-4">
                              <input accept="image/*"  id="upload-button-4"  type="file" name= "photo4" 
                              /> 
                              <MdAddAPhoto  aria-label="upload picture"/>
                              </label>
                              <label htmlFor = "upload-button-5">
                              <input accept="image/*"  id="upload-button-5"  type="file" name= "photo5" 
                              /> 
                              <MdAddAPhoto  aria-label="upload picture"/>
                              </label>
                              <label htmlFor = "upload-button-6">
                              <input accept="image/*"  id="upload-button-6"  type="file" name= "photo6" 
                              /> 
                              <MdAddAPhoto  aria-label="upload picture"/>
                              </label>   
                              <label htmlFor = "upload-button-7">
                              <input accept="image/*"  id="upload-button-7"  type="file" name= "photo7" 
                              /> 
                              <MdAddAPhoto  aria-label="upload picture"/>
                              </label>
                              </div>

                            
                          </div>
                          <div className="confirm-location">
                            <h4>CONFIRM YOUR LOCATION</h4>
                            <div className="ad-fld">
                             <label htmlFor="">State</label>   
                             <select name="" id="">
                             <option aria-label="None" value="" />
                          {["Karachi","Lahore","Islamabad","Hyderabad","KPK","Gwaddar","Faisalabad","Muree","Quetta"].map((category,index)=><option key = {index} value = {category}>{category}</option>)}
                             </select>
                            </div>
                          </div>
                          <div className="review-details">
                              <h3>REVIEW YOUR DETAILS</h3>
                              <Row className='align-items-center'>
                                  <Col md={1} className="p-0">
                                  <span>
                                      <img src={ProfileImg} alt="profile" />
                                  </span>
                                  </Col>
                                  <Col md={11}> 
                                  <div className="ad-fld">
                                    <label htmlFor="username">Name</label>
                                    <input type="text" name="username" id="username" />
                                 </div>
                                  
                                  </Col>
                              </Row>
                              <h4>Let's verify your account</h4>

                              <div className="ad-fld">
                                    <label htmlFor="phnNumber">Mobile Phone Number</label>
                                    <input type="text" name="phnNumber" id="phnNumber" placeholder='Phone number'/>
                                 </div>

                              </div>

                              <div className="postNow">
                                <button type="submit">Post Now</button>
                             
                              </div>

                     </form>

                </div>
              
                  

                  
              
            </div>     
            </Col>
         </Row>
      </Container>
    </div>
  )
}

export default PostForm