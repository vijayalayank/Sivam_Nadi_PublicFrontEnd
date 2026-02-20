import React from 'react';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Chapters from "./pages/Chapters/Chapters";
import Gallery from "./pages/Gallery/Gallery"

function App() {
 

  return (
    <>
      <BrowserRouter>
       
          <Routes>
            <Route path='/Chapters' element={<Chapters />} />
            <Route path='/Gallery' element={<Gallery />} />
          </Routes>
     
      </BrowserRouter>
    </>
  )
}

export default App
