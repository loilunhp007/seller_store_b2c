import { Category } from "./category"
import { Inventory } from "./inventory"

export class Product {
    productID:string
    name:string
    cate:Category
    productName:String
    images:Array<string>
    info:String
    likes:number
    views:number
    state:number
    price:number;
    percent_discount:number;
    special_from_time:Date;
    special_to_time:Date;
    inventory:Inventory
}
