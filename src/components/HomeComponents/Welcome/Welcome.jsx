import style from './Welcome.module.css';


const WelcomeComponent = () => {

    return (
        <>
            <div className={style.outerContainer}>
                <div className={style.Title}>
                    <h1>The Original Heriditary Nadi Family Of Tharagambadi</h1>
                </div>

                <div className={style.welcomeContainer}>
                    <div className={style.box1}>
                        <div className={style.Image}>
                                <img src="./public/ImageFolder/Home/Welcome_Image1.jpeg" alt="" />
                        </div>
                    </div>

                    <div className={style.box2}>
                        <div className={style.WelTitle}>
                            <h2>Welcome to Guruji M. Arulsivam Sivanadi Astrology Center </h2>
                        </div>

                        <div className={style.para}>
                            <p>Guruji M. Arulsivam,a traditional Nadi astrologer, has over 21 years of experience in the sacred field of Nadi Astrology. We proudly belong to the 5th generation, continuing this eternal service with dedication
                             and success for our beloved clients across the world.</p>

                            <p>Arul Sivam Astrology offers an authentic and deeply experienced approach to Nadi readings. This ancient system is truly unique and stands apart from all other forms of
                             astrology practiced around the world. Can you believe that in Tamil Nadu, records of your past, present, and future are preserved? Yes, they exist</p>

                            <p>Nadi Astrology helps you understand your karma, remove past sins, and make your future more favorable through proper pooja and pariharam (remedies).</p>

                            {/* <p>We provide the most authentic Nadi predictions, addressing all aspects of life such as marriage, love life, 
                            career, and education, along with appropriate remedies.
                            Receive accurate guidance from certified and experienced astrologers.</p> */}


                        </div>

                    </div>

                    <div className={style.box3}>
                        <div className={style.Image}>
                            <img src="./public/ImageFolder/Home/Welcome_Image1.jpeg" alt="" />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WelcomeComponent;