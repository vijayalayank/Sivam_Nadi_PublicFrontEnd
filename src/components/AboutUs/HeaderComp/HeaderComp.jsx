import s from "./HeaderComp.module.css";

export default function HeaderComp({ headerimage }) {

  return (
    <div className={s.parent}>
      <img
        className={s.head}
        src={headerimage.image}
        alt="Header"
      />

      <h1
        style={{ color: headerimage.text_color || "#ffffff" }}
        className={s.title}
      >
        {headerimage.title}
      </h1>
    </div>
  );
}