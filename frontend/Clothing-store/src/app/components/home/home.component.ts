import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/entity/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  text:string
  products:Array<Product>
  hotproducts:Array<Product> = [];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(){
    this.productService.getProducts().subscribe(Response =>{
        this.products = Response;
        this.fetchDiscountProduct();
        console.log(this.products);
    })
  }
  fetchDiscountProduct(){
    this.products.forEach( (e)=>{
      if(e.inventory.percent_discount >= 10){
        this.hotproducts.push(e);
        this.text= ((100-e.inventory.percent_discount)/100* e.inventory.price)+"";
      }
    });
  }
}
