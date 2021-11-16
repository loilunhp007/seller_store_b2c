import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/entity/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  s:String;
  constructor(
    private actroute: ActivatedRoute,
    private productService: ProductService,
    //private router:Router,
    ) { }

  ngOnInit(): void {
    //const routeParams = this.route.snapshot.paramMap;
    //const productIdFromRoute = Number(routeParams.get('productId'));
    //this.productService.findProductByID(product => product.id === productIdFromRoute);
    this.actroute.queryParams.subscribe(data =>{
      this.s = data.id
      console.log(data)
      this.getProductByID(this.s);
    })
  }
  getProductByID(masp:String){
    this.productService.getProductByID(masp).subscribe(
      Response =>{ this.product=Response}
    )
  }

}
