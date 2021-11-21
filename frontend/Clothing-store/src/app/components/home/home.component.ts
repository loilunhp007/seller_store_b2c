import { Component, OnInit, SystemJsNgModuleLoaderConfig } from '@angular/core';
import { Cart } from 'src/app/entity/cart';
import { Product } from 'src/app/entity/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  text:string
  img:String
  percent_discounts=[]
  products:Array<Product>
  hotproducts:Array<Product> = [];
  uid:string
  constructor(private productService:ProductService,
    private cartService:CartService) { }

  ngOnInit(): void {
    this.getProduct();
    if(sessionStorage.getItem("uid")!=null){
      this.uid = JSON.parse(sessionStorage.getItem("uid"))
    }
  }
  getProduct(){
    this.productService.getProducts().subscribe(Response =>{
        this.products = Response;
        this.fetchDiscountProduct();
        console.log(this.products);
    },(error)=>{
      alert("empty products")
    })
  }
  fetchDiscountProduct(){
    if(this.products!=null){
      let i=1
      this.products.forEach( (e)=>{
        if(e.inventory[0].percent_discount >= 20){
          this.hotproducts.push(e); 
          this.percent_discounts.push(e.inventory[0].percent_discount);
          i++;
        }
      });
    }
    console.log(this.hotproducts)
    
  }
  addTocart(product:Product){
    let pid =product.productID
    console.log(pid)
    if(this.uid!=null){
      console.log(this.uid)
      this.cartService.addToCart(this.uid,pid).subscribe(Response=>{
        console.log(Response);
    },)
    }

  }
  
}
