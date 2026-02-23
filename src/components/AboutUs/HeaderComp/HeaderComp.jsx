
import s from "./HeaderComp.module.css"

export default function HeaderComp({headerimage}){

    console.log(headerimage);
    
    return(
        <>
            <div className={s.parent}>
                <img  className={s.head} src={headerimage.image} alt="Header image" />
            </div>
        </>
    )
}