import style from "./LocationRoadMap.module.css"
import { useState,useEffect } from "react"
import { location_road_map } from "../../../LocalContent/visitus"
import GoldenHeader from "../../GoldenHeader/GoldenHeader"


export default function LocationRoadMap(){

    const [open, setOpen] = useState(false);

     useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false)
      }
    }

    if (open) {
      window.addEventListener("keydown", handleKeyDown)
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [open]);

  
    return(
        <>
            <GoldenHeader heading={location_road_map.title}/>
            <div className={style.contain}>
                <div className={style.main}>
                <div className={style.address}>Address</div>
                <div className={style.overlay}><img src={location_road_map.image} alt="roadmap" onClick={()=>setOpen(true)} /></div>
            </div>
            {open && (
        <div className={style.modal} onClick={() => setOpen(false)}>
          <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
            <span className={style.close} onClick={() => setOpen(false)}>
              &times;
            </span>
            <img src={location_road_map.image} alt="roadmap large" />
          </div>
        </div>
      )}
            </div>
        </>
    )
}