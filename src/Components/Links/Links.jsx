import React from 'react'
import Dashboard from "../container/Dashboard/Dashboard";
import Home from "../Home/Home";
import Random from "../Random/Random";
import { Routes, Route } from "react-router-dom";


const Links = () => {
  return (
    <Routes>
          <Route path="/brewdog-app" element={<Home />} />
          <Route path="/brewdog-app/allbeers" element={<Dashboard />} />
          <Route path="/random" element={<Random />} />
        </Routes>
  )
}

export default Links