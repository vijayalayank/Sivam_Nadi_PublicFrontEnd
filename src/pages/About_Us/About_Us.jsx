// import s from "./About_Us.module.css"
import HeaderComp from "../../components/AboutUs/HeaderComp/HeaderComp"
import HistoryOfNadi from "../../components/AboutUs/HistoryOfNadi/HistoryOfNadi"
import OurService from "../../components/AboutUs/OurService/OurService"
import style from "./About_Us.module.css"
import { history_of_nadi,AboutHeaderImage,Ourservice,VAITHEESWARAN } from "../../LocalContent/AboutUs"


export default function About_Us(){
    return(
        <>
        <div className={style.main}>
            <HeaderComp headerimage={AboutHeaderImage}/>
            <HistoryOfNadi history={history_of_nadi}/>
            <OurService Ourservice={Ourservice}/>
        
            <HistoryOfNadi history={VAITHEESWARAN}/>
        </div>
        </>
    )
}