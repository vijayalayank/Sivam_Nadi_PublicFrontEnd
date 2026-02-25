import style from "./GetDirection.module.css"

export default function GetDirection(){
     const orgLocation = { lat:  11.1436938, lng: 79.7654279 };
    return(<>
        <div className={style.main}>
            <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${orgLocation.lat},${orgLocation.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                display: "inline-block",
                marginTop: "20px",
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#007bff",
                color: "white",
                textDecoration: "none",
                borderRadius: "5px",
            }}
        >
            Get Directions
        </a>
        </div>
    </>)
}