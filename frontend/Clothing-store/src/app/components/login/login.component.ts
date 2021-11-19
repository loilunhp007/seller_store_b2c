import { AppModule } from './../../app.module';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Account } from 'src/app/entity/account';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm')
  loginForm!: NgForm;
  account: Account;
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
      this.loginService.login(new Account(this.loginForm.value.email, this.loginForm.value.password))
      .subscribe(Response =>{
        sessionStorage.setItem("uid",JSON.stringify(Response.userDetail.id))
        this.router.navigate(["/"])
        console.log(Response);
        
      },(error) => {
        console.log("Đăng nhập không thành công");
      });

  }
}
