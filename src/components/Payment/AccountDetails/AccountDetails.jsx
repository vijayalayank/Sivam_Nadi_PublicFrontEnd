import style from "./AccountDetails.module.css"
import { AccountDetails } from "../../../LocalContent/payment"
import GoldenHeader from "../../GoldenHeader/GoldenHeader"

export default function AccountDetailes(){
    return(<>
        
            <GoldenHeader heading={AccountDetails.title}/>
           <div className={style.main}>
            <div className={style.image}>
                <img src={AccountDetails.image} alt="icici" />
            </div>

            <div>
                <strong>{AccountDetails.accountholder[0]}</strong>
            
                <span>{AccountDetails.accountholder[1]}</span>
            </div>
            <div>
                <strong>{AccountDetails.accountnumber[0]}</strong>
                <span>{AccountDetails.accountnumber[1]}</span>
            </div>
            <div>
                <strong>{AccountDetails.bankname[0]}</strong>
                <span>{AccountDetails.bankname[1]}</span>
            </div>
            <div>
                <strong>{AccountDetails.accounttype[0]}</strong>
                <span>{AccountDetails.accounttype[1]}</span>
            </div>
            <div>
                <strong>{AccountDetails.ifsccode[0]}</strong>
                <span>{AccountDetails.ifsccode[1]}</span>
            </div>
            

        </div>
    </>)
}