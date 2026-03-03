import style from "./PoojaRemedy.module.css"
import HeaderComp from "../../components/AboutUs/HeaderComp/HeaderComp"
import { pooja_header } from "../../LocalContent/pooja-remedy"
import GoldenHeader from "../../components/GoldenHeader/GoldenHeader"

import RemedyCard from "../../components/RemedyCard/RemedyCard"
import seoData from "../../data/seoData";
import SEO from "../../components/SEO/SEO"


export default function PoojaRemedy(){
    return(<>
    <SEO {...seoData.pooja} />
    <HeaderComp headerimage={pooja_header}/>
        <GoldenHeader heading="PoojaRemedy" />
        <div className={style.main}>
            
            <RemedyCard />
        </div>
        </>
    )
}