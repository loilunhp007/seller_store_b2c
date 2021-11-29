import { Component, OnInit, SystemJsNgModuleLoaderConfig } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private cartService:CartService,
    private Actroute:ActivatedRoute,private route:Router) { }
    flag:boolean=false;
  ngOnInit(): void {
    this.getProduct();
    if(sessionStorage.getItem("uid")!=null){
      this.uid = JSON.parse(sessionStorage.getItem("uid"))
    }
    this.sampleMethodCall()
   
    
   
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
      this.products.forEach( (e)=>{
        if(e.percent_discount >= 20){
          this.hotproducts.push(e); 
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
  public sampleMethodCall() {
    
    setInterval(function() {
      document.getElementById("next_featured").click(); },4000); 
    }
    goDetail(product:Product){
      this.Actroute.queryParams.subscribe( params  =>{
        const id = product.productID;
        this.route.navigate(['/web/product-detail'],{queryParams:{id}})
      })
    }
}
