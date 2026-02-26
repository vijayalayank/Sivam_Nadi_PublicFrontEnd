import React, { useState, useEffect } from "react";
import style from "./Testimony.module.css";
import Marquee from "react-fast-marquee";
// import Contact_button from "../../../Layout/Contact_us_button/contact_us_button";


export default function ParentsReview() {

  const [marqueeDirection, setMarqueeDirection] = useState("left"); // Default: horizontal


    const images = [
        {
            content:"சிவநாடி ஜோதிடம் சென்று வந்தேன். என்னுடைய வாழ்க்கையில் நடந்த இறந்தகாலம் நிகழ்காலம் அனைத்தையும் மிக துல்லியமாக கூறுகின்றனர். எனக்கு  ஆச்சரியமாக இருந்தது. எனக்கு மனத்தெளிவு கிடைத்தது அவர்கள் நீண்ட காலம் வாழ இறைவனை மனதார பிரார்த்தனை செய்து கொள்கிறேன். வணக்கமும் வாழ்த்துக்களும் 🙏 I went to Shivnadi Astrology. They tell very accurately everything that has happened in my life past and present. I was surprised. I got clarity and pray to God for long life for them. Greetings and greetings",
            author:"Parthipan"
        },
        {
            content:"சிவநாடி ஜோதிடம் சென்று வந்தேன். என்னுடைய வாழ்க்கையில் நடந்த இறந்தகாலம் நிகழ்காலம் அனைத்தையும் மிக துல்லியமாக கூறுகின்றனர். எனக்கு  ஆச்சரியமாக இருந்தது. எனக்கு மனத்தெளிவு கிடைத்தது அவர்கள் நீண்ட காலம் வாழ இறைவனை மனதார பிரார்த்தனை செய்து கொள்கிறேன். வணக்கமும் வாழ்த்துக்களும் 🙏 I went to Shivnadi Astrology. They tell very accurately everything that has happened in my life past and present. I was surprised. I got clarity and pray to God for long life for them. Greetings and greetings",
            author:"Parthipan"
        },
        {
            content:"சிவநாடி ஜோதிடம் சென்று வந்தேன். என்னுடைய வாழ்க்கையில் நடந்த இறந்தகாலம் நிகழ்காலம் அனைத்தையும் மிக துல்லியமாக கூறுகின்றனர். எனக்கு  ஆச்சரியமாக இருந்தது. எனக்கு மனத்தெளிவு கிடைத்தது அவர்கள் நீண்ட காலம் வாழ இறைவனை மனதார பிரார்த்தனை செய்து கொள்கிறேன். வணக்கமும் வாழ்த்துக்களும் 🙏 I went to Shivnadi Astrology. They tell very accurately everything that has happened in my life past and present. I was surprised. I got clarity and pray to God for long life for them. Greetings and greetings",
            author:"Parthipan"
        },
        {
            content:"சிவநாடி ஜோதிடம் சென்று வந்தேன். என்னுடைய வாழ்க்கையில் நடந்த இறந்தகாலம் நிகழ்காலம் அனைத்தையும் மிக துல்லியமாக கூறுகின்றனர். எனக்கு  ஆச்சரியமாக இருந்தது. எனக்கு மனத்தெளிவு கிடைத்தது அவர்கள் நீண்ட காலம் வாழ இறைவனை மனதார பிரார்த்தனை செய்து கொள்கிறேன். வணக்கமும் வாழ்த்துக்களும் 🙏 I went to Shivnadi Astrology. They tell very accurately everything that has happened in my life past and present. I was surprised. I got clarity and pray to God for long life for them. Greetings and greetings",
            author:"Parthipan"
        }
    ]

  useEffect(() => {
    const updateDirection = () => {
      setMarqueeDirection(window.innerWidth <= 768 ? "up" : "left"); // Vertical for tablets
    };

    updateDirection(); // Set initial direction
    window.addEventListener("resize", updateDirection); // Listen for resize

    return () => window.removeEventListener("resize", updateDirection); // Cleanup on unmount
  }, []);
  
  return (
    <>
    
        <div className={style.Title}>
            <h2>Testimonials</h2>
            <div className={style.Divider}></div>
        </div>
     <div className={style.contain}>

     
        <div className={style.main}>
            
            <div className={style.slider_container}>
                <Marquee
                speed={50}
                gradientWidth={100}
                gradient={true}
                autoFill={true}
                direction={marqueeDirection} // Dynamic direction
                className={style.marquee}
                style={marqueeDirection === "up" ? { height: "320px" } : {}}
                >
                {images.map((image, index) => (
                  <div key={index} className={style.main_slid}>
                    {/* <img src={image.img} alt="Image Loading..." className={style.slid_img} /> */}
                    <div className={style.slid_content}>
                      <h4>{image.content}</h4>
                      <div className={style.parent_name}>
                          <p >-{image.author}</p>
                          
                      </div>
                    </div>
                  </div>
                ))}
                </Marquee>
            </div>
        </div>
      </div>
    </>
  );
}
