import { Paymentmethod } from "./paymentMethod"
import { UserDetail } from "./user-detail"

export class Order {
    orderID:string
    userDetail:UserDetail
    startTime:String
    endTime:String
    total:number
    state:number
    payment_id:number
    paymentmethod:Paymentmethod
}
