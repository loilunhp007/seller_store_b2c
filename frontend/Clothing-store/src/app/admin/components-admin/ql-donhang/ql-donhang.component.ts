import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/entity/order';
import { OrderDetail } from 'src/app/entity/order-detail';
import { Product } from 'src/app/entity/product';
import { OrderDetailService } from 'src/app/services/order-detail.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-ql-donhang',
  templateUrl: './ql-donhang.component.html',
  styleUrls: ['./../../../../assets/admin/css/styles.css']
})
export class QlDonhangComponent implements OnInit {

  constructor(private orderService:OrderService,
    private route:Router,
    private actRouter:ActivatedRoute,
    private productService:ProductService,
    private orderDetailService:OrderDetailService) { }
    orders:Array<Order>
    p:number=1
  ngOnInit(): void {
  }
  getAllOrder(){
    this.orderService.getAllOrder().subscribe(
      Response=>{
        this.orders=Response;
        console.log(this.orders);}
    )
  }
  updateOrder(order:Order){
    let ss = order.orderID+''
    if(order.state == 1){
    this.orderService.updateOrderStatus(ss,2).subscribe(
      Response=>{
        let order2 = new Order(); 
        order2 = Response
        this.reloadCurrentRoute();
      }
    );
    }
    if(order.state == 2){
    this.orderService.updateOrderStatus(ss,3).subscribe(
      Response=>{
        let order2 = new Order(); 
        order2 = Response
        this.reloadCurrentRoute();
      })
    }
    if(order.state == 3){
      this.orderService.updateOrderStatus(ss,4).subscribe(
        Response=>{
          let order2 = new Order(); 
          order2 = Response

          this.reloadCurrentRoute();
        })
      }
      
  }
  updateOrderCancel(order:Order){
    this.orderService.updateOrderStatus(order.orderID,0).subscribe(
      Response=>{
        let order2 = new Order(); 
        order2 = Response
        this.orderDetailService.getOrderDetail(order.orderID).subscribe(
          Response2=>{
            let orderDetail =new OrderDetail();
            orderDetail=Response2[0]
            console.log(orderDetail)
            let sss = orderDetail.productID+''
            console.log(sss)
    

            
          
          }
        )

      }
    );
    }
  goDetail(order:Order){
    this.actRouter.queryParams.subscribe(
      params=>{
        const id=order.orderID;
        this.route.navigate(['admin','orderdetail'],{queryParams: {id}})
      }
    )
  }
  reloadCurrentRoute() {
    let currentUrl = this.route.url;
    this.route.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.route.navigate([currentUrl]);
        console.log(currentUrl);
    });
  }
}
