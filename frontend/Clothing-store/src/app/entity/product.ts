import { Category } from "./category"
import { Inventory } from "./inventory"

export class Product {
    productID:string
    name:string
    cate:Category
    productName:String
    images={}
    info:String
    likes:number
    views:number
    state:number
    inventory:Inventory
}
