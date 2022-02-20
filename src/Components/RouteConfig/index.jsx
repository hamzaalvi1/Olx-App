import React from 'react'
import {
   
    Routes,
    Route
  } from "react-router-dom";
import Dashboard from "../../Views/Dashboard"
import Ad from "../Ad/"
import Post from '../../Views/AdPosts';

const RouteConfig = () => {
  return (
    
      <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/post" element={<Post />} />
       <Route  path="/item/:adId" element={<Ad/>} />
      </Routes>
    
  )
}

export default RouteConfig