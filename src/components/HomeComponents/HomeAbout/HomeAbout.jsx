import style from "./HomeAbout.module.css";

const HomeAbout = () => {

    const data = [
        {
            title: "Nadi Astrology",
            image: "/ImageFolder/Home/aboutRight1.jpeg"
        },
        {
            title: "Our Heritage",
            image: "/ImageFolder/Home/aboutRight2.jpeg"
        },
        {
            title: "History of Nadi",
            image: "/ImageFolder/Home/aboutRight3.jpeg"
        },
        {
            title: "Nadi Procedure",
            image: "/ImageFolder/Home/aboutRight4.jpeg"
        },
        {
            title: "Chapters List",
            image: "/ImageFolder/Home/aboutRight5.jpeg"
        },
        {
            title: "Online Predictions",
            image: "/ImageFolder/Home/aboutRight6.jpeg"
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
                        src="./public/imageFolder/Home/Home_About.jpeg" 
                        alt="Nadi Astrology" 
                    />

                    <div className={style.buttonContiner}>
                        <a href="tel:8838771582">
                            <button className={style.Call}>Call Us</button>
                        </a>
                        <a href="/appointment_form">
                            <button className={style.Appoint}>Appointment</button>
                        </a>
                    </div>
                </div>

                {/* RIGHT SIDE CARDS */}
                <div className={style.CardContiner}>
                    {data.map((item, index) => (
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