
import s from "./HeaderComp.module.css"

export default function HeaderComp({headerimage}){

    console.log(headerimage);
    console.log(headerimage.text_color)
    
    return(
        <>
            <div className={s.parent}>
                <img className={s.head} src={headerimage.image} alt="Header image" />
                <h1>{headerimage.title}</h1>
            </div>
        </>
    )
}