import style from "./DetailsComponents.module.css";


const DetailsComponents = () => {

    const content = [
        {
            title: "AUTHENTIC READING",
            description: "Get your Nadi reading from the original Nadi family"
        },
        {
            title: "AVAILABLE IN MAJOR LANGUAGES",
            description: "Get your Nadi reading from the original Nadi family"
        },
        {
            title: "TALK TO US",
            description: "+91 75980 04142 / 82709 94142"
        }
    ];

    return (
        <>
            <div className={style.outerBlock}>

                {
                    content.map((item, index) => {
                        return (
                            <div className={style.box1} key={index}>
                                <h2 className={style.Title}>{item.title}</h2>
                                <p className={style.Description}>{item.description}</p>
                            </div>
                        )
                    })
                }
                

    

                {/* <div className={style.box2}>
                    <div className={style.InnerBox2}>
                        <div className={style.Title2}>

                        </div>
                    </div>
                </div>

                <div className={style.box3}>
                    <div className={style.InnerBox3}>
                        <div className={style.Title3}>

                        </div>
                    </div>
                </div> */}

            </div>
        </>
    )
}

export default DetailsComponents;