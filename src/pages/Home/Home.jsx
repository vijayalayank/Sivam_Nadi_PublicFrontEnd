import HomeAbout from "../../components/HomeComponents/HomeAbout/HomeAbout";
import WelcomeComponent from "../../components/HomeComponents/Welcome/Welcome";
import HistoryComponent from  "../../components/HomeComponents/HistoryComponent/HistoryComponent";
import DetailsComponents from "../../components/HomeComponents/DetailsComponents/DetailsComponents"
import HomeSection from "../../components/HomeComponents/SlicderComponent/SlicderComponent";
import style from "./Home.module.css";
import ParentsReview from "../../components/HomeComponents/Testimony/Testimony";
import ScrollerComponent from "../../components/HomeComponents/ScrollerComponent/ScrollerComponent"
import seoData from "../../data/seoData";
import SEO from "../../components/SEO/SEO"


const HomeIntagaration = () => {

    return (
        <>
        
<SEO {...seoData.home} />
        <div className={style.outerContainer}>
            <HomeSection />
            <ScrollerComponent />
            <HomeAbout />
            <WelcomeComponent />
            <HistoryComponent/>
            <ParentsReview />
            <DetailsComponents/>
        </div>

        </>
    )
}

export default HomeIntagaration;