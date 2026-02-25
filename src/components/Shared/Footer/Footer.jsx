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
                    <p>GURUJI M ARUL SIVAM
                        SIVAM NADI ASTROLOGY CENTER
                    </p>

                    <p>2/59B Main Road,
                    Valathanpattinam, Kidaran Kondan Post,</p>
                    <p>Mayiladuthurai to Poombuhar Main Road,</p>
                    <p>Tharangambadi TK - 609 304,</p>
                    <p>Tamilnadu, South India.</p>
                    
                </div>

            
            </div>
            <div className={style.box2}>

                <div className={style.Title}>
                    <h2>Send Us A Message   </h2>
                </div>

                <div className={style.form}>
                    <input type="text" placeholder="Name"  className={style.field}/>

                    <input type="text" placeholder="Email"  className={style.field}/>

                    <input type="text" placeholder="Mobile"  className={style.field}/>

                    <textarea name="Message" placeholder="Message" rows="4" className={style.field}></textarea>

                    <div className={style.submit}>
                        <button className={style.button}>Send Message</button>
                    </div>
                </div>

            </div>


            <div className={style.box3}>
                <div className={style.Title}>
                    <h2>Nadi Astrology</h2>
                </div>
                <div className={style.Title2}>
                    <h2>Sivanadi Astrology Center</h2>
                </div>

                <div className={style.option}>
                    <a href="/about_us">
                        <p>About Us</p>
                    </a>

                    <a href="/Chapters">
                        <p>Chapters</p>
                    </a>

                    <a href="/visit_us">
                        <p>Visit Us</p>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;