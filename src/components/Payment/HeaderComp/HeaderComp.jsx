
import s from "./HeaderComp.module.css"

export default function HeaderComp({Aboutheaderimage}){

    console.log(Aboutheaderimage);
    
    return(
        <>
            <div className={s.parent}>
                <img  className={s.head} src={Aboutheaderimage.image} alt="Header image" />
            </div>
        </>
    )
}