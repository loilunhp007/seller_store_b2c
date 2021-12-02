
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/entity/category';
import { Product } from 'src/app/entity/product';
import { CategoryService } from 'src/app/services/category.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Cart } from 'src/app/entity/cart';
import { CartService } from 'src/app/services/cart.service';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { UserDetail } from 'src/app/entity/user-detail';
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
  isLogged = false;
  userdetail:UserDetail
  constructor(private categoryService:CategoryService,
    private cartService:CartService,
    private router:Router, 
    private formBuilder:FormBuilder,
    private loginService:LoginService,
    private userService:UserService) { 
    }

  ngOnInit(): void {
    this.userdetail = new UserDetail();
    if(sessionStorage.getItem("uid")!=null){
      this.uid=JSON.parse(sessionStorage.getItem("uid"));
      this.getCart();
      this.getUserDetail(this.uid);
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
  getUserDetail(id:string){
    this.userService.getUserByID(id).subscribe(Response=>{
      this.userdetail=Response;
    })
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
      this.router.navigate(['/web/search'],{queryParams:{keyword}})
  }
  getFormcontrols(){
    return this.formSearch.controls;
  }
  getCartTotal(carts:Array<Cart>){
    carts.forEach(element => {
      this.cartTotal+=(element.product.price*(100-element.product.percent_discount)/100)*element.soluong
    });
  }
  isLoggedIn(){
    this.isLogged = this.loginService.isLogged();
    return this.isLogged;
  }
  logout(){
    this.isLogged = this.loginService.logOut();
    return this.router.navigate(["/login"]);
  }
}
