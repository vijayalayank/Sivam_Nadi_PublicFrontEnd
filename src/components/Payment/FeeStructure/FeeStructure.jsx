import style from "./FeeStructure.module.css"

import GoldenHeader from "../../GoldenHeader/GoldenHeader"

export default function FeeStructure({FeeStruc}){
    return(
    <>
        <div className={style.main}>
       
        <GoldenHeader heading={"Siva Nadi Fees Structure"}/>

        <div className={style.abc}>
            <div className={style.imageWrapper}>
            <img src={FeeStruc.image} alt="Fee image" />
            </div>

            <div className={style.content}>
            {FeeStruc.content}
            </div>
        </div>
        </div>
    </>)
}