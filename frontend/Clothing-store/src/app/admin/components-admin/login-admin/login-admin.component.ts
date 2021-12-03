import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/entity/account';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  account: Account;
  constructor(private loginService:LoginService,
    private router:Router) { }
    loginForm!: NgForm;
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
      this.loginService.login(account)
      .subscribe(Response =>{
        sessionStorage.setItem("adminid",JSON.stringify(Response.userDetail.id))
        sessionStorage.setItem("type",JSON.stringify(Response.userDetail.typeMember.id))
        this.router.navigate(["/"])
        console.log(Response);
        
      },(error) => {
        console.log("Đăng nhập không thành công");
      });

  }
}
