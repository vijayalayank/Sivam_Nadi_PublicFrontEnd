import style from "./HistoryComponent.module.css";

const HistoryComponent = () => {


    return (
        <>
            <div className={style.outerContainer}>
                <div className={style.seperationContainer}>
                    <div className={style.box1}>

                        <div className={style.Image}></div>

                    </div>

                    <div className={style.box2}>

                        <div className={style.para}>
                            <p className={style.qoute}>
                                Nadi helps you understand your Karma, remove your sins, & makes your future favorable to you
                            </p>
                            <p className={style.written}>
                                - Guruji Mr. Kaliyamoorthy
                            </p>
                        </div>

                    </div>

                    <div className={style.box3}>
                        <div className={style.Image}></div>

                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default  HistoryComponent;
