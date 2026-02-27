import style from "./DetailsComponents.module.css";
import {DetailComponentData} from "../../../LocalContent/Home"

const DetailsComponents = () => {

    return (
        <>
            <div className={style.outerBlock}>

                {
                    DetailComponentData.map((item, index) => {
                        return (
                            <div className={style.box1} key={index}>
                                <img src={item.image} alt="" />
                                <h2 className={style.Title}>{item.title}</h2>
                                <p className={style.Description}>{item.description}</p>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default DetailsComponents;