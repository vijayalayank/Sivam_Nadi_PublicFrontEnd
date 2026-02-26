import Chapter from "../pages/Chapters/Chapters"
import Gallary from "../pages/Gallery/Gallery"
import About_Us from "../pages/About_Us/About_Us";
import HomeIntagaration from "../pages/Home/Home";
import Payment from "../pages/Payment/Payment";
import VisitUs from "../pages/VisitUs/VisitUs";
import PoojaRemedy from "../pages/PoojaRemedy/PoojaRemedy";
import NotFound from "../pages/NotFound/NotFound";
import AstrologyForm from "../pages/FormPage/FormPage"

import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';

export default function Route_path (){
    return(
        <>
        <BrowserRouter>
       
          <Routes>
            <Route path='/' element={<HomeIntagaration />} />
            <Route path='/Chapters' element={<Chapter />} />
            <Route path='/Gallery' element={<Gallary />} />
            <Route path='/about_us' element={<About_Us/>}/>
            <Route path="/payment" element={<Payment/>} />
            <Route path="/visit_us" element={<VisitUs/>} />
            <Route path="/pooja-remedy" element={<PoojaRemedy/>} />
            <Route path="/appointment_form" element={<AstrologyForm />} />
            <Route path="*" element={<NotFound/>}/>
          </Routes>
     
      </BrowserRouter>
        </>
    )
}