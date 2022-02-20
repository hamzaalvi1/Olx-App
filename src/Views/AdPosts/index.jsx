import React,{useState} from 'react'
import {BsChevronRight} from "react-icons/bs"
import {Container,Row,Col} from "react-bootstrap"
import "./adpost.scss"
import AnimalIcon from "../../assets/images/post/icons/animals.svg"
import BikeIcon from "../../assets/images/post/icons/bikes.svg"
import BusinessIcon from "../../assets/images/post/icons/business.svg"
import FurnitureIcon from "../../assets/images/post/icons/furniture.svg"
import JobsIcon from "../../assets/images/post/icons/jobs.svg"
import KidsIcon from "../../assets/images/post/icons/kids.svg"
import MobileIcon from "../../assets/images/post/icons/mobiles.svg"
import PropertyRentIcon from "../../assets/images/post/icons/property-for-rent.svg"
import PropertySaleIcon from "../../assets/images/post/icons/property-for-sale.svg"
import ServicesIcon from "../../assets/images/post/icons/services.svg"
import VehiclesIcon from "../../assets/images/post/icons/vehicles.svg"











const AdPost = () => {
  const [categoryIndex,setCategoryIndex] = useState(null)
  const categoryList  = [
    {
      icon: AnimalIcon,
      title: "Animals",
      subCategory: ["Fish & Aquariums","Birds","Hens & Aseel","Cats","Dogs","LiveStock","Horses","Pet Food & Accessories","Other Animals"]
    },
    {
      icon: BusinessIcon,
      title: "Business, Industrial & Agriculture",
      subCategory: ["Business for Sale","Food & Restaurant","Trade & Industrial","Construction & Heavy Machinery","Agriculture","Medical & Pharma","Other Business & Industry"]

    },
    {
      icon: BikeIcon,
      title: "Bikes",
      subCategory: ["Motorcycles","Spare Parts","Bicycles","ATV & Quads","Scooters",]
      
    },
    {
      icon: FurnitureIcon,
      title: "Furniture & Home Decor",
      subCategory: ["Sofa & Chairs","Beds & Wardobes","Home Decoration","Tables & Dining","Garden & Outdoor","Other Household items"]
      
    },
    {
      icon: JobsIcon,
      title: "Jobs",
      subCategory: ["Online","Marketing","Advertising & PR","Education","Customer Service","Sales","IT & Networking","Hotel & Tourism","Clerical & Adminstration","Human Resources","Accounting & Finance","Manufacturing","Medical","Domestic Staff","Part Time","Other Jobs"]
      
    },
    {
      icon: KidsIcon,
      title: "Kids",
      subCategory: ["Kids Furniture","Toys","Prams & Walkers","Swings & Slides","Kids Bikes","Kids Accessories"]      
    },
    {
      icon: MobileIcon,
      title: "Mobiles",
      subCategory: ["Tablets","Accessories","Mobile Phones"]      
    },
    {
      icon: PropertyRentIcon,
      title: "Property for Rent",
      subCategory: ["Houses","Appartments & Flats","Portions & Floors","Shops-Offices","Rooms","Roommates & Paying Guest","Vacational Rental Houses","Land & Plots"]      
    },
    {
      icon: PropertySaleIcon,
      title: "Property for Sale",
      subCategory: ["Land & Plots","Appartments & Flats","Portions & Floors","Shops-Offices","Houses"]      
    },
    {
      icon: ServicesIcon,
      title: "Property for Sale",
      subCategory: ["Education & Classes","Travel & Visa","Car Rental","Drivers & Taxi","Web Development","Other Services","Electronic & Computer Repair","Event Services","Health & Beauty","Maids & Domestic Help","Movers & Parkers","Home & Office Repair","Catering & Restaurant","Farm & Fresh Foods"]      
    },
    {
      icon: VehiclesIcon,
      title: "Vehicles",
      subCategory: ["Cars","Cars on Installments","Car Accessories","Spare Parts","Buses, Vans & Trucks","Rickshaw & Chingchi","Other Vechicles","Boats","Tractor and Trailor"]      
    },
  
  ]
  
  const categoryChange = (idx) =>{
    setCategoryIndex(idx)
  }
  return (
    <div className='adPost'>
        <Container >
          <Row> 
            <Col md={12}> 
              <h2 className='text-center'>
                Post Your Ad
              </h2>
              <div className="post-category">
                <h4>
                  Choose a category
                </h4>
              
                   <Row>
                   <Col md={6} style={{paddingRight:0}} > 
                   <div className="post-list">
                     <ul>
                     {
                       categoryList.map((cateDetail,index)=>{
                        return( <li onClick={()=>categoryChange(index)} key={index}>
                          <div className='catebox'>
                          <img src={cateDetail.icon} alt={`icon${index}`} /> 
                          <p>{cateDetail.title}</p>
                          </div>
                          <BsChevronRight/>
                          {/* <div className="nested-categories">
                            <ul>
                               {cateDetail.subCategory.map((sbcategory,index)=>{
                                 return(
                                   <li key={index}><p>{sbcategory}</p></li>
                                 )
                               })}
                            </ul>
                          </div> */}
                        </li>)
                       })
                     }
                     </ul>
                   </div>
                   </Col>
                   <Col md={6} style={{paddingLeft:0}}>
                    <ul className='nested-categories'>
                      {categoryList[categoryIndex]?.subCategory.map((sbcategory,index)=>{
                         return(
                          <li key={index}><p>{sbcategory}</p></li>
                        )
                      })}
                     </ul>
                   </Col>
                   </Row>

                  
              
            </div>   
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default AdPost