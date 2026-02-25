import React from 'react';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Chapters from "./pages/Chapters/Chapters";
import Gallery from "./pages/Gallery/Gallery"
import Route_path from './Route_path/Route_path';
import Footer from './components/Shared/Footer/Footer';
import Navbar from './components/Shared/Navbar/Navbar';

function App() {
 

  return (
    <>
      <Navbar/>
      <Route_path/>
      <Footer/>
    </>
  )
}

export default App
