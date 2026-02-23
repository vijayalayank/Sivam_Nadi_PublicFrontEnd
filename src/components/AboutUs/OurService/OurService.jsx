import style from "./OurService.module.css"
import GoldenHeader from "../../GoldenHeader/GoldenHeader"

export default function OurService({Ourservice}){
    return(
    <>
        <div className={style.main}>
  
  <GoldenHeader heading={"Our Services"}/>

  <div className={style.servicesGrid}>
    {Ourservice.map((service, index) => (
      <div className={style.card} key={index}>
        <div className={style.imageWrapper}>
          <img src={service.image} alt={service.title} />
        </div>
        <h3 className={style.title}>{service.title}</h3>
      </div>
    ))}
  </div>

</div>
    </>
    )
}