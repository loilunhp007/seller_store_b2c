import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/entity/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-ql-sanpham',
  templateUrl: './ql-sanpham.component.html',
  styleUrls: ['./../../../../assets/admin/css/styles.css']
})
export class QlSanphamComponent implements OnInit {
  isToggle:boolean;
  constructor(private productService:ProductService) { }
  product:Product
  products:Array<Product>
  ngOnInit(): void {
    this.isToggle=false;
    this.getProduct();
  }
  public popup_themsp(){
   this.isToggle = !this.isToggle;
  }
  getProduct(){
    this.productService.getProducts().subscribe(Response =>{
        this.products = Response;
        console.log(this.products);
    },(error)=>{
      alert("empty products")
    })
  }
}
