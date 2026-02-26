import style from "./RemedyCard.module.css"
import { remedyImages } from "../../LocalContent/pooja-remedy"

export default function RemedyCard(){
    return(<>
        <div className={style.main}>
            {remedyImages.map((remedy,index)=>(
                <div key={index} className={style.card}>
                    <div className={style.image}><img src={remedy.image} alt="remedy image" /></div>
                    <div className={style.des}>
                        <h1>{remedy.title}</h1>
                        <p>{remedy.des}</p>
                    </div>
                </div>
            ))}
        </div>
    </>)
} 