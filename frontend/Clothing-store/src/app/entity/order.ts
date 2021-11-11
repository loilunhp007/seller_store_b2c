import { UserDetail } from "./user-detail"

export class Order {
    orderID:string
    userDetail:UserDetail
    startTime:Date
    endTime:Date
    total:number
    state:number
}
