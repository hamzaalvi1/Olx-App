import React from 'react'
import {
   
    Routes,
    Route
  } from "react-router-dom";
import Dashboard from "../../Views/Dashboard"
import Ad from "../Ad/"
import Post from '../../Views/AdPosts';
import PostForm from '../../Views/PostForm';

const RouteConfig = () => {
  return (
    
      <Routes>
      <Route index element={<Dashboard />} />
      <Route  path="/item/:adId" element={<Ad/>} />
      <Route path="/post" element={<Post />} />
       <Route  path="/attributes" element={<PostForm/>} />

      </Routes>
    
  )
}

export default RouteConfig