import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/entity/account';
import { UserDetail } from 'src/app/entity/user-detail';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  @ViewChild('loginForm')
  loginForm!: NgForm;
  account: Account;
  account2:Account
  userDetail:UserDetail
  constructor(private loginService:LoginService,
    private router:Router) { }
  uid:String;
  ngOnInit() {
  }

  onSubmit(){
    if(!this.loginForm.valid){
      console.log("Invalid data");
      alert("Invalid login")
      return;
    };
    console.log(this.loginForm.value);
    let account = new Account();
    account.email = this.loginForm.value.email
    account.password = this.loginForm.value.password
    console.log(account)
      this.loginService.login(account)
      .subscribe(Response =>{
        this.account2=Response;
        if(this.account2.userDetail.typeMember.typeID ==2){
          alert("you are not allowed")
          this.router.navigate(["/web/index"])
        }else{
          sessionStorage.setItem("uid",JSON.stringify(this.account2.userDetail.id))
          this.router.navigate(["/admin/thongke"])
          console.log(Response);
        }


      },(error) => {
        console.log("Đăng nhập không thành công");
      });

  }
}
