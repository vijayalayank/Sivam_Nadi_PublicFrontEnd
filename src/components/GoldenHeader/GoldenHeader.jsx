import style from "./GoldenHeader.module.css"

export default function GoldenHeader({heading}){
    return(<>
        <div className={style.heading}>
            <h1>{heading}</h1>
        </div>
    </>)
}