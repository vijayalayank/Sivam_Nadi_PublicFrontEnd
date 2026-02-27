import style from "./HomeAbout.module.css";
import {HomeAboutdata} from "../../../LocalContent/Home"

const HomeAbout = () => {


    return (
        <div className={style.HomeAbout}>

            <div className={style.Title}>
                <h2>About Nadi Astrology</h2>
                <div className={style.Divider}></div>
            </div>

            <div className={style.CardContent}>

                {/* LEFT SIDE POSTER */}
                <div className={style.poster}>
                    <img 
                        src="/ImageFolder/Home/Home_About.jpeg" 
                        alt="Nadi Astrology" 
                    />

                    <div className={style.buttonContiner}>
                        <a href="tel:9566381222">
                            <button className={style.Call}>Call Us</button>
                        </a>
                        <a href="/appointment_form">
                            <button className={style.Appoint}>Appointment</button>
                        </a>
                    </div>
                </div>

                {/* RIGHT SIDE CARDS */}
                <div className={style.CardContiner}>
                    {HomeAboutdata.map((item, index) => (
                        <div className={style.Card} key={index}>
                            <div className={style.imageContiner}>
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className={style.TextContiner}>
                                <p>{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default HomeAbout;