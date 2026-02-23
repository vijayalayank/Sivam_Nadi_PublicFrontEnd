import Payment_Header from "../../public/ImageFolder/Payment/Payment Header.png"
import bankimg from "../../public/ImageFolder/Payment/Bank.png"
import Feestrucimg from "../../public/ImageFolder/Payment/FeeStructure.png"


const PaymentHeaderImage = {
    image:Payment_Header
}

const FeeStruc = {
    title:"Siva Nadi Fees Structure",
    image:Feestrucimg,
    content:`We believe trust is earned, not demanded.
Your satisfaction is our highest priority, and we stand by the accuracy and integrity of our guidance.
There are no hidden conditions — you decide the value of our service after experiencing it.
We are committed to delivering clarity, honesty, and meaningful insights in every consultation.
Only when you feel truly satisfied and confident in the service provided should you proceed with payment.
Your peace of mind matters more to us than anything else.`
}

const AccountDetails = {
    title:"Bank Account Details",
    image:bankimg,
    accountholder:["Account Holder Name : ","KUMARAGOVINDAN KALIYAMOORTHY"],
    accountnumber:["Account Number : ", "608801514324"],
    bankname:["Bank Name : ","ICICI BANK"],
    accounttype:["Account Type : ","Saving"],
    ifsccode:["IFSC CODE : ","ICIC0006088"]

}

export {PaymentHeaderImage,FeeStruc,AccountDetails}