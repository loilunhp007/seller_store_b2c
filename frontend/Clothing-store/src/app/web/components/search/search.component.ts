
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/entity/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  s:String;
  products: Array<Product>;
  constructor(
    private actRoute: ActivatedRoute,
    private productService: ProductService,
    private route :Router
  ) { }

  ngOnInit(): void {
    this.actRoute.queryParams.subscribe(
      data=>{
        const key = data.keyword;
        this.getProductByLikeTensp(key);
      })
      
  }
  getProductByLikeTensp(tensp:String){
    this.productService.getProductByLikeTensp(tensp).subscribe(
      Response =>{ this.products = Response}
    )
  }
  goDetail(product:Product){
    this.actRoute.queryParams.subscribe( params  =>{
      const id = product.productID;
      this.route.navigate(['/web/product-detail'],{queryParams:{id}})
    })

  }
}
