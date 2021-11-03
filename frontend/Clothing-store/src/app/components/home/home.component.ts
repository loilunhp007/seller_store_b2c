import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/entity/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  product:Array<Product>

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(){
    this.productService.getProducts().subscribe(Response =>{
        this.product = Response;
    })
  }
}
