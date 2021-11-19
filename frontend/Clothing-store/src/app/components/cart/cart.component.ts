import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/entity/cart';
import { Product } from 'src/app/entity/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  input:number;
  uid:string
  constructor(private cartService:CartService,
    private router:Router) { }
  carts:Array<Cart>
  cartLength:number
  ngOnInit(): void {
    if(sessionStorage.getItem("uid")!=null){
      this.uid = JSON.parse(sessionStorage.getItem("uid"));
      this.getCart();
    }
  }
  getCart(){
    this.cartService.getCartItems(this.uid).subscribe(Response=>{
      this.carts=Response;
      this.cartLength = this.carts.length;
      console.log(this.carts);
    },(error)=>{
      console.log(error);
    })
  }
  plusCart(pid:string){
    this.cartService.plusCart(this.uid,pid).subscribe(Response=>{
      console.log(Response);
      this.reloadCurrentRoute();
    })
  }
  minusCart(pid:string){
    this.cartService.minusCart(this.uid,pid).subscribe(Response=>{
      console.log(Response);
      this.reloadCurrentRoute();
    })
  }
  deleteCartItem(product:Product){
    this.cartService.deleteCartItem(this.uid,product.productID).subscribe(Response=>{
      console.log(Response);
      this.reloadCurrentRoute();
    })
  }
 
  public onChange(event:Event,cart:Cart): void {
    const input = event.target as HTMLInputElement;
    this.input = Number(input.value);
    console.log(input.value);
    console.log(cart);
    if(cart.soluong>this.input){
        this.minusCart(cart.product.productID);
    }else{
      if(cart.soluong<this.input){
        this.plusCart(cart.product.productID);
      }
    }
    }
    reloadCurrentRoute() {
      let currentUrl = this.router.url;
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate([currentUrl]);
          console.log(currentUrl);
      });
    }
}
