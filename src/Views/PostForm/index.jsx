import React,{useState} from "react";
import "./postform.scss";
import { Container, Row, Col } from "react-bootstrap";
import { MdAddAPhoto } from "react-icons/md";
import ProfileImg from "../../assets/images/profile.png";
import {setPostForm,uploadImageToStorage} from "../../Components/Config/firebase"
import uploadImage from "../../assets/images/upload-images.png"
import swal from 'sweetalert'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const PostForm =  () => {
  
  const adPostSchema = yup.object().shape({
    adTitle: yup.string().required("Please provide valid title"),
    adDescription: yup.string().required("Please provide the description"),
    adPrice: yup.string().required("Price is required field"),
    adState:yup.string().required("Please provide current location"),
    username:yup.string().required("username is required"),
    phnNumber:yup.string()
    .required('A phone number is required'),
    // photo1: yup.mixed()
    // .test('required', "You need to provide a file", (value) =>{
    //   return value && value.length
    // } )
    // .test("fileSize", "The file is too large", (value, context) => {
    //   return value && value[0] && value[0].size <= 200000;
    // })
    // .test("type", "We only support jpeg", function (value) {
    //   return value && value[0] && value[0].type === "image/jpeg";
    // }),

  })

  const { register, handleSubmit,  setValue, formState: { errors }, reset } = useForm({
    mode: "onChange",
    resolver: yupResolver(adPostSchema)
  });
 





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
  const submitPostDetails =  (data)=>{
    // evt.preventDefault()
    console.log(data)

    reset()
    // const randomID = Math.floor(Math.random() * 10000)
    // setPostForm(postDetails) 
    // setPostDetails({adTitle:"",adDescription:"",adPrice:"",adState: "",username: "",phnNumber:"",photo1:"",photo2:"",photo3:"",photo4:""})


  }
  const photoHandler = async(evt,idx)=>{
    evt.persist();
   
    let file = evt.target.files[0];   
    let reader = new FileReader();
   
  try{
    const imgUrl = await uploadImageToStorage(file)
   
    setPostDetails({...postDetails,[evt.target.name]:imgUrl})

    reader.onload = () =>{
      if(reader.readyState === 2 && imgUrl !== "" ){
        setUploadImagePreview({...uploadImgPreview,[`uploadImg${idx}`]: reader.result})
      }
    }

    reader.readAsDataURL(file)
    
  
  }
  catch(e){
   swal({title: `"${e.message}`,
   icon: "warning",
   buttons: true,
   dangerMode: true,})
  }
  // setValue('photo1', evt.target.files[0].name, { shouldValidate: true })
  // console.log(errors.photo1?.message)
  
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
                <form action="" onSubmit={handleSubmit(submitPostDetails)}>
                  <div className="ad-fld">
                    <label htmlFor="adTitle" style={{color: errors.adTitle?.message ? "#dc3545" : "#002f345c"}}>Ad title</label>
                    <input style={{borderColor: errors.adTitle?.message ? "#dc3545" : "#002f345c"}} type="text" name="adTitle" id="adTitle" {...register("adTitle")}
                    //  onChange={(evt)=>setPostDetails({...postDetails,[evt.target.name]:evt.target.value})}
                    />
                    {errors && errors.adTitle?.message ? <span style={{fontSize:"13px",color:"#dc3545"}}>{errors.adTitle?.message}</span> : <span>                      
                      Mention the key features of your item (e.g. brand, model,
                      age, type)
                    </span>}
                    
                  </div>
                  <div className="ad-fld textarea">
                    <label htmlFor="description" style={{color: errors.adDescription?.message ? "#dc3545" : "#002f345c"}}>Description</label>
                    <textarea style={{borderColor: errors.adDescription?.message ? "#dc3545" : "#002f345c"}} name="adDescription" id="description" {...register("adDescription")}
                    // onChange={(evt)=>setPostDetails({...postDetails,[evt.target.name]:evt.target.value})}
                    ></textarea>
                    {errors && errors.adDescription?.message ? <span style={{fontSize:"13px",color:"#dc3545"}}>{errors.adDescription?.message}</span> : <span>
                      Include condition, features and reason for selling
                    </span>}
                    
                    
                  </div>
                  <div className="ad-condition">
                    <button>New</button>
                    <button>Used</button>
                  </div>
                  <div className="price-details">
                    <h4>Set a price</h4>
                    <div className="ad-fld">
                      <label htmlFor="price" style={{color: errors.adPrice?.message ? "#dc3545" : "#002f345c"}}>Price</label>
                      <input style={{borderColor: errors.adPrice?.message ? "#dc3545" : "#002f345c"}} type="number" name="adPrice" id="price" {...register("adPrice")}
                      // onChange={(evt)=>setPostDetails({...postDetails,[evt.target.name]:evt.target.value})}
                       />
                        {errors && errors.adPrice?.message ? <span style={{fontSize:"13px",color:"#dc3545"}}>{errors.adPrice?.message}</span> : null}
                    </div>
                  </div>
                  <div className="upload-pic">
                    <h3>Upload up to 7 Photos</h3>
                    <div className="upload-options">
                      {/* <label htmlFor="upload-button-1">
                        <input
                          accept="image/*"
                          id="upload-button-1"
                          type="file"
                          name="photo1"
                          onChange = {(evt)=>photoHandler(evt,1)}
                        />
                       
                        <img className="upload" src={uploadImgPreview.uploadImg1} alt="uploadImg" aria-label="upload picture" />
                      </label> */}
                      <label htmlFor="upload-button-1" style={{borderColor: errors.photo1?.message ? "#dc3545" : "#ccc"}}>
                        <input
                          accept="image/*"
                          id="upload-button-1"
                          type="file"
                          name="photo1"
                          {...register("photo1")}
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
                      <label htmlFor="" style={{color: errors.adState?.message ? "#dc3545" : "#002f345c"}}>State</label>
                      <select name="adState" id="" 
                       {...register("adState")}
                       style={{borderColor: errors.adState?.message ? "#dc3545" : "#002f345c"}}
                       onChange={(e) => setValue('adState', e.target.value, { shouldValidate: true })}
                      // onChange={(evt)=>setPostDetails({...postDetails,[evt.target.name]:evt.target.value})}
                      >
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
                      {errors && errors.adState?.message ? <span style={{fontSize:"13px",color:"#dc3545"}}>{errors.adState?.message}</span> : null}
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
                          <label htmlFor="username" style={{color: errors.username?.message ? "#dc3545" : "#002f345c"}}>Name</label>
                          <input   style={{borderColor: errors.username?.message ? "#dc3545" : "#002f345c"}} type="text" name="username" id="username"   {...register("username")}
                          // onChange={(evt)=>setPostDetails({...postDetails,[evt.target.name]:evt.target.value})}
                          />
                          {errors && errors.username?.message ? <span style={{fontSize:"13px",color:"#dc3545"}}>{errors.username?.message}</span> : null}

                        </div>
                      </Col>
                    </Row>
                    <h4>Let's verify your account</h4>

                    <div className="ad-fld">
                      <label htmlFor="phnNumber" style={{color: errors.phnNumber?.message ? "#dc3545" : "#002f345c"}}>Mobile Phone Number</label>
                      <input
                        style={{borderColor: errors.phnNumber?.message ? "#dc3545" : "#002f345c"}}
                        type="tel"
                        name="phnNumber"
                        id="phnNumber"
                        placeholder="Phone number"
                       {...register("phnNumber")}
                        // onChange={(evt)=>setPostDetails({...postDetails,[evt.target.name]:evt.target.value})}
                      />
                          {errors && errors.phnNumber?.message ? <span style={{fontSize:"13px",color:"#dc3545"}}>{errors.phnNumber?.message}</span> : null}

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
