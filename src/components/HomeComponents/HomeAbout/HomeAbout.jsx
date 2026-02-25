import style from "./HomeAbout.module.css";

const HomeAbout = () => {

    const data = [
        {
            title: "Nadi Astrology",
            image: "./public/imageFolder/Home/Home_About.jpeg"
        },
        {
            title: "Nadi Astrology",
            image: "./public/imageFolder/Home/Home_About.jpeg"
        },
        {
            title: "Nadi Astrology",
            image: "./public/imageFolder/Home/Home_About.jpeg"
        },
        {
            title: "Nadi Astrology",
            image: "./public/imageFolder/Home/Home_About.jpeg"
        },
        {
            title: "Nadi Astrology",
            image: "./public/imageFolder/Home/Home_About.jpeg"
        },
        {
            title: "Nadi Astrology",
            image: "./public/imageFolder/Home/Home_About.jpeg"
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
                        <button className={style.Call}>Call Us</button>
                        <button className={style.Appoint}>Appointment</button>
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