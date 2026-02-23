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

                    <p>2/59B Main Road,</p>
                    <p>Valathanpattinam, Kidaran Kondan Post,</p>
                    <p>Mayiladuthurai to Poombuhar Main Road,</p>
                    <p>Tharangambadi TK - 609 304,</p>
                    <p>Tamilnadu, South India</p>
                    
                </div>

            
            </div>
            <div className={style.box2}></div>
            <div className={style.box3}>
                <div className={style.Title}>
                    <h2>Nadi Astrology</h2>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;