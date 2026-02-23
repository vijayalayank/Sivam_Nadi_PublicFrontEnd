import style from "./HistoryOfNadi.module.css"
import GoldenHeader from "../../GoldenHeader/GoldenHeader";
// import { history_of_nadi } from "../../../LocalContent/AboutUs"

export default function HistoryOfNadi({history}){

    console.log(history);
    
    return(
        <>
        <div className={style.main}>
        <GoldenHeader heading={history.title} />
                
         {history.ImageLeft ? (
                <div className={style.abc}>
                    <div className={style.image}>
                        <img src={history.image} alt="History of nadi image" />
                    </div>
                    <div className={style.content}>{history.content}</div>
                </div>
    ) : (
      <div className={style.abc}>             
                    <div className={style.content}>{history.content}</div>
                    <div className={style.image}><img src={history.image} alt="History of nadi image" /></div>
                </div>
    )}
    </div>
            
        </>
    )
}