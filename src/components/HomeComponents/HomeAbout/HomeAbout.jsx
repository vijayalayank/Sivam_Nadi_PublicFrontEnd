import style from "./HomeAbout.module.css";
import {HomeAboutdata} from "../../../LocalContent/Home"

const HomeAbout = () => {

    const data = [
        {
            title: "Nadi Astrology",
            image: "/src/assets/ImageFolder/Home/aboutRight1.jpeg"
        },
        {
            title: "Our Heritage",
            image: "/src/assets/ImageFolder/Home/aboutRight2.jpeg"
        },
        {
            title: "History of Nadi",
            image: "/src/assets/ImageFolder/Home/aboutRight3.jpeg"
        },
        {
            title: "Nadi Procedure",
            image: "/src/assets/ImageFolder/Home/aboutRight4.jpeg"
        },
        {
            title: "Chapters List",
            image: "/src/assets/ImageFolder/Home/aboutRight5.jpeg"
        },
        {
            title: "Online Predictions",
            image: "/src/assets/ImageFolder/Home/aboutRight6.jpeg"
        }
    ];

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
                        loading="lazy" 
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
                            <a href={item.link}>

                                <div className={style.imageContiner}>
                                    <img src={item.image} alt={item.title} loading="lazy" />
                                </div>
                                <div className={style.TextContiner}>
                                    <p>{item.title}</p>
                                </div>
                                
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default HomeAbout;