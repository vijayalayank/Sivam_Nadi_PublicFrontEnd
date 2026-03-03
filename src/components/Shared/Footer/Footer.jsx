import style from "./Footer.module.css";

const Footer = () => {


    return (
        <>
        <div className={style.outerBlock}>
            <div className={style.box1}>
                <div className={style.Title}>
                    <h2>Location</h2>
                </div>

                <div className={style.para}>
                    <p>GURUJI M ARUL SIVAM,</p>
                    <p>SIVAM NADI ASTROLOGY CENTER,</p>
                    <p>2/59B Main Road,
                    Valathanpattinam, Kidaran Kondan Post,</p>
                    <p>Mayiladuthurai to Poombuhar Main Road,</p>
                    <p>Tharangambadi TK - 609 304,</p>
                    <p>Tamilnadu, South India.</p>
                    
                </div>

            
            </div>

            <div className={style.box2}>

                <div className={style.Title}>
                    <h2>Grievance   </h2>
                </div>

                <div className={style.form}>

                    <p>If you have any complaint, dissatisfaction,
                    or concern regarding our Nadi reading services, contact
                    us immediately without hesitation or delay.</p>

                    <div className={style.submit}>
                        <a href="tel:9566381222">
                            <button className={style.button}>Call Us</button>
                        </a>
                    </div>

                    
                </div>


            </div>


            <div className={style.box3}>
                <div className={style.Title}>
                    <h2>Nadi Astrology</h2>
                </div>
                <div className={style.Title2}>
                    <h2>Sivamnadi Astrology Center</h2>
                </div>

                <div className={style.option}>
                    <a href="/about_us">
                        <p>About Us</p>
                    </a>

                    <a href="/Chapters">
                        <p>Chapter List</p>
                    </a>

                    <a href="/payment">
                        <p>Payment</p>
                    </a>

                    <a href="/pooja-remedy">
                        <p>Pooja Remedies</p>
                    </a>

                    <a href="/visit_us">
                        <p>Visit Us</p>
                    </a>
                </div>

                <div className={style.Title}>
                    <h2>Media Links</h2>
                </div>

                    <div className={`${style.mediaLink}`}>
                        <a href="/">
                            <div className={style.logo}>
                                <img src="ImageFolder/Home/insta.png" alt="instagram" />
                            </div>
                        </a>

                        <a href="/">
                            <div className={style.logo}>
                                <img src="ImageFolder/Home/facebook.png" alt="facebook" />
                            </div>
                        </a>
                    </div>

                
            </div>
        </div>
        </>
    )
}

export default Footer;