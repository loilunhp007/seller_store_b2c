
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/entity/category';
import { Product } from 'src/app/entity/product';
import { CategoryService } from 'src/app/services/category.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']

})

export class MenuComponent implements OnInit {
  categories:Array<Category>
  constructor(
    private categoryService:CategoryService,
    private router:Router, 
    private formBuilder:FormBuilder,
    ) { }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(){
    this.categoryService.getCategories().subscribe(Response=>{
      this.categories = Response;
      console.log(Response)
    })
  }
  goSearch(){ 
      const keyword = this.getFormcontrols().searchValue.value ;
      this.router.navigate(['home','search'],{queryParams:{keyword}})
  }
  getFormcontrols(){
    return this.formSearch.controls;
  }
  formSearch=this.formBuilder.group({
    searchValue:['']
  });
}
