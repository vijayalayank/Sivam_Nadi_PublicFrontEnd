import Payment_Header from "../../public/ImageFolder/Payment/Payment Header.png"
import bankimg from "../../public/ImageFolder/Payment/Bank.png"
import Feestrucimg from "../../public/ImageFolder/Payment/FeeStructure.png"


const PaymentHeaderImage = {
    image:Payment_Header,
    title:"Payment"
}

const FeeStruc = {
    title:"Siva Nadi Fees Structure",
    image:Feestrucimg,
    content:`We believe trust is earned through transparency and genuine service.
Your satisfaction is our promise, and we confidently stand behind the accuracy and integrity of our guidance.
There are no hidden conditions — if you are not completely satisfied, we offer a full refund.
Our commitment is to provide clarity, honesty, and meaningful spiritual insights in every consultation.
We encourage you to experience our service with complete peace of mind and confidence.
Your happiness and trust matter more to us than anything else.`
}

const AccountDetails = {
    title:"Bank Account Details",
    image:bankimg,
    accountholder:["Account Holder Name : ","Mr. ARUL SIVAM KN"],
    accountnumber:["Account Number : ", "38807307821"],
    bankname:["Bank Name : ","STATE BANK OF INDIA"],
    accounttype:["Account Type : ","REGULAR SAVINGS BANK ACCOUNT"],
    ifsccode:["IFSC CODE : ","SBIN0012789"]

}

export {PaymentHeaderImage,FeeStruc,AccountDetails}