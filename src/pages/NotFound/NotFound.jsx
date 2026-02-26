import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./NotFound.module.css";

export default function NotFound() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  return (
    <div className={style.container}>
      <h1 className={style.code}>404</h1>
      <h2 className={style.title}>Page Not Found</h2>
      <p className={style.desc}>
        The page you are looking for does not exist or has been moved.
      </p>

      <button
        className={`${style.button} ${hovered ? style.hovered : ""}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => navigate("/")}
      >
        Go Back Home
      </button>
    </div>
  );
}