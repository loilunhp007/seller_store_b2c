
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/entity/category';
import { Product } from 'src/app/entity/product';
import { CategoryService } from 'src/app/services/category.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Cart } from 'src/app/entity/cart';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']

})

export class MenuComponent implements OnInit {
  formSearch = this.formBuilder.group({
    searchValue:[''],
  });
    searchText;
  categories:Array<Category>
  carts:Array<Cart>
  cartTotal=0;
  cartLength:number
  uid:string
  img:string
 
  constructor(private categoryService:CategoryService,
    private cartService:CartService,
    private router:Router, 
    private formBuilder:FormBuilder,) { 
    }

  ngOnInit(): void {
    if(sessionStorage.getItem("uid")!=null){
      this.uid=JSON.parse(sessionStorage.getItem("uid"));
      this.getCart();
     
    }
    
    this.getCategories();
  }
  getCategories(){
    this.categoryService.getCategories().subscribe(Response=>{
      this.categories = Response;
      console.log(Response)
    },(error)=>{
      console.log(error)
    });
    
  }
  getCart(){
    this.cartService.getCartItems(this.uid).subscribe(Response=>{
      this.carts=Response;
      this.cartLength = this.carts.length;
      this.getCartTotal(this.carts);
      console.log(this.carts);
      console.log(Response);
    },(error)=>{
      console.log(error);
    })
  }
  goSearch(){ 
      const keyword = this.getFormcontrols().searchValue.value ;
      this.router.navigate(['','search'],{queryParams:{keyword}})
  }
  getFormcontrols(){
    return this.formSearch.controls;
  }
  getCartTotal(carts:Array<Cart>){
    carts.forEach(element => {
      this.cartTotal+=(element.product.price*(100-element.product.percent_discount)/100)*element.soluong
    });
  }
}
