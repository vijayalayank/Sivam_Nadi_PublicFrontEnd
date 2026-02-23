import style from "./HomeAbout.module.css";


const HomeAbout = () => {



    return (
        <>
            <div className={style.HomeAbout}>
                <div className={style.Title}>
                    <h2>About Nadi Astrology</h2>
                    <div className={style.Divider}></div>
                </div>

                <div className={style.CardContent}>
                    <div className={style.poster}>

                    </div>

                    <div className={style.CardContiner}>

                        
                        {[...Array(6)].map((_,index) =>(

                            <div className={style.Card} key={index}>
                                <div className={style.imageContiner}>

                                </div>
                                <div className={style.TextContiner}>
                                    <p>Nadi Astrology</p>
                                </div>
                            </div>
                        )
                        )}

                           

                        
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default HomeAbout;