import React from 'react'
import {
   
    Routes,
    Route
  } from "react-router-dom";
import Dashboard from "../../Views/Dashboard"
import Ad from "../Ad/"
import Post from '../../Views/AdPosts';
import PostForm from '../../Views/PostForm';
import Header from '../Header';
  import Footer from '../Footer';
  import {useLocation} from "react-router-dom"

const RouteConfig = () => {
  const location = useLocation()
  return (
     <>
      <Header/>
      <Routes>
      <Route index element={<Dashboard />} />
      <Route  path="/item/:adId" element={<Ad/>} />
      <Route path="/post" element={<Post />} />
       <Route  path="/attributes" element={<PostForm/>} />

      </Routes>
           {location.pathname  === "/post" || location.pathname === "/attributes"  ? null : <Footer/>}

      </>
  )
}

export default RouteConfig