import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import style from "./MapComponent.module.css"

const center = { lat: 11.1436938, lng: 79.7654279 }; 


const MapComponent = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY, // Replace with actual API Key
    });

    if (!isLoaded) return <p>Loading Map...</p>;

    return(
        <>  
        <div className={style.main}>
            <GoogleMap zoom={14} center={center} mapContainerStyle={{ width: "60%", height: "50vh" ,margin:"1rem",borderRadius:"1rem"}}>
            <Marker position={center} label={{
                text: "Sivam Nadi Astrology Centre",
                color: "black",
                fontSize: "14px",
                fontWeight: "bold",
                // padding: "5px",
            }} />   
            </GoogleMap>
        </div>
        </>
    )
}


export default MapComponent;