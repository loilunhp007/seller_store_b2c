import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/entity/order';
import { OrderDetail } from 'src/app/entity/order-detail';
import { OrderDetailService } from 'src/app/services/order-detail.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private orderService:OrderService,
    private orderDetailService:OrderDetailService) { }
  orderdetails:Array<OrderDetail>
  orders:Array<Order>
  order:Order
  details:OrderDetail
  uid:string
  isToggle:boolean=true
  p:number=1
  ngOnInit(): void {
    if(sessionStorage.getItem("uid")!=null){
      this.uid = JSON.parse(sessionStorage.getItem("uid"));
      this.getAllOrder();
    }
  }
  getAllOrder(){
    this.orderService.getAllOrderByTvmua(this.uid).subscribe(
      Response=>{
        this.orders=Response;
        console.log(this.orders);}
    )
  }
  getOrderDetail(order:Order){
    this.order=order
    this.orderDetailService.getOrderDetail(order.orderID).subscribe(Response=>{
      this.orderdetails = Response;
      this.details = this.orderdetails[0];
      console.log(this.orderdetails)
    })
  }
  public popup_themsp(){
    
    this.isToggle = !this.isToggle
  
  console.log(this.isToggle);
}

}
