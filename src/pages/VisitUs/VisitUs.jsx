import style from "./VisitUs.module.css"
import LocateUs from "../../components/VistUsComp/LocateUs/LocateUs"
import HeaderComp from "../../components/AboutUs/HeaderComp/HeaderComp"
import { visit_header } from "../../LocalContent/visitus"
import LocationRoadMap from "../../components/VistUsComp/LocationRoadMap/LocationRoadMap"
import seoData from "../../data/seoData";
import SEO from "../../components/SEO/SEO"


export default function VisitUs(){
    return(<>
    <SEO {...seoData.visit} />
        <div className={style.main}>
                <HeaderComp headerimage={visit_header}/>
                <LocationRoadMap/>
                <LocateUs />

        </div>
    </>)
}