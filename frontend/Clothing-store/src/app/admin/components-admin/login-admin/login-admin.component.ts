import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./../../../../assets/admin/css/styles.css']
})
export class LoginAdminComponent implements OnInit {

  constructor() { }
  @ViewChild('loginForm')
  loginForm!: NgForm;
  ngOnInit(): void {
  }
  onSubmit(){}
}
