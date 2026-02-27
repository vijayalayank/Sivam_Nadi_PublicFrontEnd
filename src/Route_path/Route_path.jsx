import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoadingScreen from "../components/Shared/LoadingScreen/LoadingScreen";
/* ---------- Lazy Imports ---------- */

const HomeIntagaration = lazy(() => import("../pages/Home/Home"));
const Chapter = lazy(() => import("../pages/Chapters/Chapters"));
const Gallary = lazy(() => import("../pages/Gallery/Gallery"));
const About_Us = lazy(() => import("../pages/About_Us/About_Us"));
const Payment = lazy(() => import("../pages/Payment/Payment"));
const VisitUs = lazy(() => import("../pages/VisitUs/VisitUs"));
const PoojaRemedy = lazy(() => import("../pages/PoojaRemedy/PoojaRemedy"));
const AstrologyForm = lazy(() => import("../pages/FormPage/FormPage"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

export default function Route_path() {
  return (
    <BrowserRouter>
      {/* Suspense wraps all lazy components */}
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<HomeIntagaration />} />
          <Route path="/Chapters" element={<Chapter />} />
          <Route path="/Gallery" element={<Gallary />} />
          <Route path="/about_us" element={<About_Us />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/visit_us" element={<VisitUs />} />
          <Route path="/pooja-remedy" element={<PoojaRemedy />} />
          <Route path="/appointment_form" element={<AstrologyForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}


