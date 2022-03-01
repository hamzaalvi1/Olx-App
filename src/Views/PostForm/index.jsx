import React,{useState} from "react";
import "./postform.scss";
import { Container, Row, Col } from "react-bootstrap";
import { MdAddAPhoto } from "react-icons/md";
import ProfileImg from "../../assets/images/profile.png";
import {setPostForm,uploadImageToStorage} from "../../Components/Config/firebase"
import uploadImage from "../../assets/images/upload-images.png"
import swal from 'sweetalert'

const PostForm =  () => {
  const [postDetails,setPostDetails] = useState({adTitle:"",adDescription:"",adPrice:"",adState:"",username:"",phnNumber:"",photo1:"",photo2:"",photo3:"",photo4:""})
  const [uploadImgPreview,setUploadImagePreview] = useState(
    {
     uploadImg1: uploadImage,
     uploadImg2:uploadImage,
     uploadImg3:uploadImage,
     uploadImg4:uploadImage,
     uploadImg5:uploadImage,
     uploadImg6:uploadImage,
     uploadImg7:uploadImage,
    }
    )
  const submitPostDetails =  (evt)=>{
    evt.preventDefault()
    const randomID = Math.floor(Math.random() * 10000)
    setPostForm(postDetails) 
    setPostDetails({adTitle:"",adDescription:"",adPrice:"",adState: "",username: "",phnNumber:"",photo1:"",photo2:"",photo3:"",photo4:""})


  }
  const photoHandler = async(evt,idx)=>{
    evt.persist();
    let file = evt.target.files[0];   
    let reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        setUploadImagePreview({...uploadImgPreview,[`uploadImg${idx}`]: reader.result})
      }
    }

    reader.readAsDataURL(file)
  try{
    const imgUrl = await uploadImageToStorage(file)
    setPostDetails({...postDetails,[evt.target.name]:imgUrl})
  
  }
  catch(e){
   swal({title: `"${e.message}`,
   icon: "warning",
   buttons: true,
   dangerMode: true,})
  }
  
    //   reader.onloadend = ()=>{
    //     setPostDetails({...postDetails,[evt.target.name]:reader.result})
    //   }    
    //  reader.readAsDataURL(file)
  }
  return (
    <div className="postForm">
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="text-center">Post Your Ad</h2>

            <div className="form-details">
              <h4>Selected category</h4>

              <div className="ad-form">
                <h3>Include Some Details</h3>
                <form action="" onSubmit={submitPostDetails}>
                  <div className="ad-fld">
                    <label htmlFor="adTitle">Ad title</label>
                    <input type="text" name="adTitle" id="adTitle" value={postDetails.adTitle}
                     onChange={(evt)=>setPostDetails({...postDetails,[evt.target.name]:evt.target.value})}
                    />
                    <span>
                      Mention the key features of your item (e.g. brand, model,
                      age, type)
                    </span>
                  </div>
                  <div className="ad-fld textarea">
                    <label htmlFor="description">Description</label>
                    <textarea name="adDescription" id="description" value={postDetails.adDescription}
                    onChange={(evt)=>setPostDetails({...postDetails,[evt.target.name]:evt.target.value})}
                    ></textarea>
                    
                    <span>
                      Include condition, features and reason for selling
                    </span>
                  </div>
                  <div className="ad-condition">
                    <button>New</button>
                    <button>Used</button>
                  </div>
                  <div className="price-details">
                    <h4>Set a price</h4>
                    <div className="ad-fld">
                      <label htmlFor="price">Price</label>
                      <input type="number" name="adPrice" id="price" value={postDetails.adPrice}
                      onChange={(evt)=>setPostDetails({...postDetails,[evt.target.name]:evt.target.value})} />
                    </div>
                  </div>
                  <div className="upload-pic">
                    <h3>Upload up to 7 Photos</h3>
                    <div className="upload-options">
                      <label htmlFor="upload-button-1">
                        <input
                          accept="image/*"
                          id="upload-button-1"
                          type="file"
                          name="photo1"
                          onChange = {(evt)=>photoHandler(evt,1)}
                        />
                        {/* <MdAddAPhoto aria-label="upload picture" /> */}
                        <img className="upload" src={uploadImgPreview.uploadImg1} alt="uploadImg" aria-label="upload picture" />
                      </label>
                      <label htmlFor="upload-button-2">
                        <input
                          accept="image/*"
                          id="upload-button-2"
                          type="file"
                          name="photo2"
                          onChange = {(evt)=>photoHandler(evt,2)}
                        />
                        {/* <MdAddAPhoto aria-label="upload picture" /> */}
                        <img className="upload" src={uploadImgPreview.uploadImg2} alt="uploadImg" aria-label="upload picture" />

                      </label>
                      <label htmlFor="upload-button-3">
                        <input
                          accept="image/*"
                          id="upload-button-3"
                          type="file"
                          name="photo3"
                          onChange = {(evt)=>photoHandler(evt,3)}
                        />
                        {/* <MdAddAPhoto aria-label="upload picture" /> */}
                        <img className="upload" src={uploadImgPreview.uploadImg3} alt="uploadImg" aria-label="upload picture" />

                      </label>
                      <label htmlFor="upload-button-4">
                        <input
                          accept="image/*"
                          id="upload-button-4"
                          type="file"
                          name="photo4"
                          onChange = {(evt)=>photoHandler(evt,4)}
                        />
                        {/* <MdAddAPhoto aria-label="upload picture" /> */}
                        <img className="upload" src={uploadImgPreview.uploadImg4} alt="uploadImg" aria-label="upload picture" />

                      </label>
                      <label htmlFor="upload-button-5">
                        <input
                          accept="image/*"
                          id="upload-button-5"
                          type="file"
                          name="photo5"
                          onChange = {(evt)=>photoHandler(evt,5)}

                        />
                        <img className="upload" src={uploadImgPreview.uploadImg5} alt="uploadImg" aria-label="upload picture" />

                        {/* <MdAddAPhoto aria-label="upload picture" /> */}
                      </label>
                      <label htmlFor="upload-button-6">
                        <input
                          accept="image/*"
                          id="upload-button-6"
                          type="file"
                          name="photo6"
                          onChange = {(evt)=>photoHandler(evt,6)}

                        />
                        {/* <MdAddAPhoto aria-label="upload picture" /> */}
                        <img className="upload" src={uploadImgPreview.uploadImg6} alt="uploadImg" aria-label="upload picture" />

                      </label>
                      <label htmlFor="upload-button-7">
                        <input
                          accept="image/*"
                          id="upload-button-7"
                          type="file"
                          name="photo7"
                          onChange = {(evt)=>photoHandler(evt,7)}

                        />
                        {/* <MdAddAPhoto aria-label="upload picture" /> */}
                        <img className="upload" src={uploadImgPreview.uploadImg7} alt="uploadImg" aria-label="upload picture" />

                      </label>
                    </div>
                  </div>
                  <div className="confirm-location">
                    <h4>CONFIRM YOUR LOCATION</h4>
                    <div className="ad-fld">
                      <label htmlFor="">State</label>
                      <select name="adState" id="" defaultValue={postDetails.adState}
                      onChange={(evt)=>setPostDetails({...postDetails,[evt.target.name]:evt.target.value})}>
                        <option aria-label="None" value="" />
                        {[
                          "Karachi",
                          "Lahore",
                          "Islamabad",
                          "Hyderabad",
                          "KPK",
                          "Gwaddar",
                          "Faisalabad",
                          "Muree",
                          "Quetta",
                        ].map((category, index) => (
                          <option key={index} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="review-details">
                    <h3>REVIEW YOUR DETAILS</h3>
                    <Row className="align-items-center">
                      <Col md={1} className="p-0">
                        <span>
                          <img src={ProfileImg} alt="profile" />
                        </span>
                      </Col>
                      <Col md={11}>
                        <div className="ad-fld">
                          <label htmlFor="username">Name</label>
                          <input type="text" name="username" id="username" value={postDetails.username}
                          onChange={(evt)=>setPostDetails({...postDetails,[evt.target.name]:evt.target.value})}/>
                        </div>
                      </Col>
                    </Row>
                    <h4>Let's verify your account</h4>

                    <div className="ad-fld">
                      <label htmlFor="phnNumber">Mobile Phone Number</label>
                      <input
                        type="text"
                        name="phnNumber"
                        id="phnNumber"
                        placeholder="Phone number"
                        value = {postDetails.phnNumber}
                        onChange={(evt)=>setPostDetails({...postDetails,[evt.target.name]:evt.target.value})}
                      />
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
  );
};

export default PostForm;
