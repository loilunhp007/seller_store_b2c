import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Account } from 'src/app/entity/account';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerForm')
  loginForm!: NgForm;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){

  }
}
