import Chapter from "../pages/Chapters/Chapters"
import Gallary from "../pages/Gallery/Gallery"
import About_Us from "../pages/About_Us/About_Us";
import Payment from "../pages/Payment/Payment";

import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';

export default function Route_path (){
    return(
        <>
        <BrowserRouter>
       
          <Routes>
            <Route path='/Chapters' element={<Chapter />} />
            <Route path='/Gallery' element={<Gallary />} />
            <Route path='/about_us' element={<About_Us/>}/>
            <Route path="/payment" element={<Payment/>} />
          </Routes>
     
      </BrowserRouter>
        </>
    )
}