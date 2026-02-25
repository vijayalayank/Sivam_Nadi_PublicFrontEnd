import GoldenHeader from "../../GoldenHeader/GoldenHeader"
import style from "./LocateUs.module.css"
import MapComponent from "../../Shared/MapComponent/MapComponent"
import GetDirection from "../GetDirection/GetDirection"


export default function LocateUs(){
    return(<>
        <div className={style.main}>
            <GoldenHeader heading="Locate Us"/>
            <MapComponent />
            <GetDirection />
        </div>
    </>)
}