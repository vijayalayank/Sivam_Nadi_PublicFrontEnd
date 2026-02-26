import { useEffect, useState } from "react";
import style from "./ScrollerComponent.module.css";
import Marquee from "react-fast-marquee";
import axios from "axios";

const ScrollerComponent = () => {
  const [value, setValue] = useState("");
  const domain = import.meta.env.VITE_DOMAIN;

  useEffect(() => {
    
    const fetchText = async () => {
      try {
        const res = await axios.get(`${domain}/api/text`);
        console.log(res.data);
        setValue(res.data.text); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchText();
  }, []);

  return (
    <div className={style.continer}>
      <Marquee speed={window.innerWidth < 768 ? 80 : 150} direction="right">
        <h1 className={style.Title}>
          {value || "Loading announcement..."}
        </h1>
      </Marquee>
    </div>
  );
};

export default ScrollerComponent;