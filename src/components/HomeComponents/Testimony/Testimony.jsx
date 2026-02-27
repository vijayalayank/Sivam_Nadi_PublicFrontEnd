import { useState, useEffect } from "react";
import style from "./Testimony.module.css";
import Marquee from "react-fast-marquee";
import {TestimonyData} from  "../../../LocalContent/Home"

export default function ParentsReview() {

  const [marqueeDirection, setMarqueeDirection] = useState("left"); // Default: horizontal

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
                {TestimonyData.map((image, index) => (
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
