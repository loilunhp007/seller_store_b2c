import { AppModule } from './../../app.module';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Account } from 'src/app/entity/account';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm')
  loginForm!: NgForm;
  account: Account;
  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

  onSubmit(){
    if(!this.loginForm.valid){
      console.log("Invalid data");
      return;
    };
    console.log(this.loginForm.value);
      this.loginService.login(new Account(this.loginForm.value.email, this.loginForm.value.password))
      .subscribe(Response =>{
        console.log(Response);
      },(error) => {
        console.log("Đăng nhập không thành công");
      });

  }
}
