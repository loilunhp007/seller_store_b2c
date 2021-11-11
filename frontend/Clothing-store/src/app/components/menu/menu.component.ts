import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/entity/cart';
import { Category } from 'src/app/entity/category';
import { CartService } from 'src/app/services/cart.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  categories:Array<Category>
  carts:Array<Cart>
  cartLength:number
  constructor(private categoryService:CategoryService,
    private cartService:CartService) { }

  ngOnInit(): void {
    this.getCategories();
    this.getCart();
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
    this.cartService.getCartItems(1+'').subscribe(Response=>{
      this.carts=Response;
      this.cartLength = this.carts.length;
      console.log(this.carts);
    },(error)=>{
      console.log(error);
    })
  }
}
