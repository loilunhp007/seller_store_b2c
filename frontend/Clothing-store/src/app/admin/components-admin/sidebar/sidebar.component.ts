import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./../../../../assets/admin/css/styles.css']
})
export class SidebarComponent implements OnInit {

  constructor(private userService:UserService) { }
  uid:string
  type:number
  role:number
  isAdmin:boolean=false
  isManager:boolean=false
  ngOnInit(): void {
    if(sessionStorage.getItem('uid')!=null && sessionStorage.getItem('type')!=null){
      this.uid=JSON.parse(sessionStorage.getItem('uid'));
      this.getRole(this.uid);
    }
  }
  getRole(uid:string){
    this.userService.getUserByID(this.uid).subscribe(Response=>{
      this.role = Response.typeMember.id;
      if(this.role==1){
        this.isAdmin=true;
      }else{
        this.isManager=true;
      }
    })
  }



}
