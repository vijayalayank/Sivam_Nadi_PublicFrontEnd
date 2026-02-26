import HomeAbout from "../../components/HomeComponents/HomeAbout/HomeAbout";
import WelcomeComponent from "../../components/HomeComponents/Welcome/Welcome";
import HistoryComponent from  "../../components/HomeComponents/HistoryComponent/HistoryComponent";
import DetailsComponents from "../../components/HomeComponents/DetailsComponents/DetailsComponents"
import HomeSection from "../../components/HomeComponents/SlicderComponent/SlicderComponent";
import style from "./Home.module.css";

const HomeIntagaration = () => {

    return (
        <div className={style.outerContainer}>
            <HomeSection />
            <HomeAbout />
            <WelcomeComponent />
            <HistoryComponent/>
            <DetailsComponents/>
        </div>
    )
}

export default HomeIntagaration;