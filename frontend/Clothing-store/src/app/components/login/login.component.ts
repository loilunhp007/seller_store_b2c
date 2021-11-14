import { AppModule } from './../../app.module';
import { Component, Directive, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms';
import { Account } from 'src/app/entity/account';
import { LoginService } from 'src/app/services/login.service';

// export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
//   return (control: AbstractControl): ValidationErrors | null => {
//     const forbidden = nameRe.test(control.value);
//     return forbidden ? {forbiddenName: {value: control.value}} : null;
//   };
// }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm')
  loginForm!: NgForm;
  account: Account;
  form: FormGroup;
  constructor(private loginService:LoginService, private fb: FormBuilder ) { }

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
