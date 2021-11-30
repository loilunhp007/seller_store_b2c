import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/entity/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:Array<Product>
  productID:string;
  product:Product;
  constructor(
    private productService:ProductService,
    private Actroute: ActivatedRoute,
    private router:Router,
    ) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.goDetail(this.product)
  }
  getAllProducts(){
    this.productService.getAllProducts().subscribe(Response =>{
        this.products = Response;
        console.log(this.products);
    })
  }
  goDetail(product2:Product){
    this.Actroute.queryParams.subscribe( params  =>{
      const id = product2.productID;
      this.router.navigate(['/web/product-detail'],{queryParams:{id}})
    })
  }
}
