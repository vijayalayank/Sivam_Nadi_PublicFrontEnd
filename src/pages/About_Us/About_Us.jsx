// import s from "./About_Us.module.css"
import HeaderComp from "../../components/AboutUs/HeaderComp/HeaderComp"
import HistoryOfNadi from "../../components/AboutUs/HistoryOfNadi/HistoryOfNadi"
import OurService from "../../components/AboutUs/OurService/OurService"
import { history_of_nadi,AboutHeaderImage,Ourservice,VAITHEESWARAN } from "../../LocalContent/AboutUs"


export default function About_Us(){
    return(
        <>
           
            <HeaderComp Aboutheaderimage={AboutHeaderImage}/>
            <HistoryOfNadi history={history_of_nadi}/>
            <OurService Ourservice={Ourservice}/>

            <HistoryOfNadi history={VAITHEESWARAN}/>
             {/* <h1 className={s.heading}>About Us</h1> */}
        </>
    )
}