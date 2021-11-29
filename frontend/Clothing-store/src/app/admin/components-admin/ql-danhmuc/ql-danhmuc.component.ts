import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/entity/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-ql-danhmuc',
  templateUrl: './ql-danhmuc.component.html',
  styleUrls: ['./../../../../assets/admin/css/styles.css']
})
export class QlDanhmucComponent implements OnInit {
  isToggle:boolean=true;
  isToggle2:boolean=true;
  categories:Array<Category>
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories()
  }
  public popup_themsp(){
    
    this.isToggle = !this.isToggle
  
  console.log(this.isToggle);
}
public popup_themsp2(){
    
  this.isToggle2 = !this.isToggle2

console.log(this.isToggle2);
}
getCategories(){
  this.categoryService.getCategories().subscribe(Response=>{
    this.categories = Response;
    console.log(Response)
  },(error)=>{
    console.log(error)
  });
  
}
}
