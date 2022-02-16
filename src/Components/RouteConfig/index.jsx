import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import Dashboard from "../../Views/Dashboard"

const RouteConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  )
}

export default RouteConfig