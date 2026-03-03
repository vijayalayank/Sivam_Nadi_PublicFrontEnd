import style from "./Payment.module.css"
import { PaymentHeaderImage,FeeStruc } from "../../LocalContent/payment"
import HeaderComp from "../../components/AboutUs/HeaderComp/HeaderComp"
import FeeStructure from "../../components/Payment/FeeStructure/FeeStructure"
import AccountDetailes from "../../components/Payment/AccountDetails/AccountDetails"
import seoData from "../../data/seoData";
import SEO from "../../components/SEO/SEO"


export default function Payment(){
    return(<>
    
<SEO {...seoData.payment} />
    <div className={style.main}> 
            <HeaderComp headerimage={PaymentHeaderImage}/>
            
                <FeeStructure  FeeStruc={FeeStruc}/>
                <AccountDetailes />
            </div>
    </>)
}