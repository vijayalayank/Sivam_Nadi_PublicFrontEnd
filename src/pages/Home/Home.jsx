import HomeAbout from "../../components/HomeComponents/HomeAbout/HomeAbout";
import WelcomeComponent from "../../components/HomeComponents/Welcome/Welcome";
import HistoryComponent from  "../../components/HomeComponents/HistoryComponent/HistoryComponent";
import DetailsComponents from "../../components/HomeComponents/DetailsComponents/DetailsComponents"
import Footer from "../../components/Shared/Footer/Footer";

const HomeIntagaration = () => {

    return (
        <div>
            <HomeAbout />
            <WelcomeComponent />
            <HistoryComponent/>
            <DetailsComponents/>
            <Footer />
        </div>
    )
}

export default HomeIntagaration;