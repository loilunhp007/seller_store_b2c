import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Userdetail } from 'src/app/entity/userdetail';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-ql-khachhang',
  templateUrl: './ql-khachhang.component.html',
  styleUrls: ['./../../../../assets/admin/css/styles.css']
})
export class QlKhachhangComponent implements OnInit {

  constructor(private userService:UserService,
    public datepipe: DatePipe,
    private route:Router) { }
  users:Array<Userdetail> = [] 
  date:Date = new Date();
  days:string;
  ngOnInit(): void {
    this.getUser();
  }
  getUser(){
    this.userService.getUsers().subscribe(Response=>{
      this.users = Response;
      for(let i=0;i<this.users.length;i++){
        let date2 = new Date(this.users[i].timestamp);
        this.days=Math.floor((this.date.getTime() -  date2.getTime())/(1000*3600*24))+'';
        this.datepipe.transform(this.users[i].timestamp, 'yyyy-mm-dd')
      }
      console.log(this.users)
    },(error)=>{
      alert("something wrong happens")
    })
     
   
  }

  reloadCurrentRoute() {
    let currentUrl = this.route.url;
    this.route.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.route.navigate([currentUrl]);
        console.log(currentUrl);
    });
  }
  deleteUserDetail(user:Userdetail){
    console.log("delete");
  }
  blockUser(user:Userdetail){
        if(user.state == 1){
          user.state=0
          this.userService.updateUser(user).subscribe(
            Response1=>{
              console.log(Response1)
              this.reloadCurrentRoute();
            }
          )
        }
        else{
          if(user.state == 0){
            user.state= 1
          this.userService.updateUser(user).subscribe(
            Response1=>{
              console.log(Response1)
              this.reloadCurrentRoute();
            }
          )
          }
        }
    
}
}
