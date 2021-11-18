import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private actroute: ActivatedRoute,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
      this.getProductByLikeTensp(this.s);
  }
  getProductByLikeTensp(tensp:String){
    this.productService.getProductByLikeTensp(tensp).subscribe(
      Response =>{ this.products = Response}
    )
  }

}
