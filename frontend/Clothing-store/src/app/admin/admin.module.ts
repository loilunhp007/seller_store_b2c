import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component';

import { HttpClientModule } from '@angular/common/http';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuAdminComponent } from './components-admin/menu-admin/menu-admin.component';
import { LoginAdminComponent } from './components-admin/login-admin/login-admin.component';
import { PhanquyenComponent } from './components-admin/phanquyen/phanquyen.component';
import { QlAccountComponent } from './components-admin/ql-account/ql-account.component';
import { QlDanhmucComponent } from './components-admin/ql-danhmuc/ql-danhmuc.component';
import { QlDonhangComponent } from './components-admin/ql-donhang/ql-donhang.component';
import { QlKhachhangComponent } from './components-admin/ql-khachhang/ql-khachhang.component';
import { QlSanphamComponent } from './components-admin/ql-sanpham/ql-sanpham.component';
import { RouterModule } from '@angular/router';
import { AdminRouting } from './admin-routing.module';
import { ThongkeComponent } from './components-admin/thongke/thongke.component';
import { AdminFooterComponent } from './components-admin/admin-footer/admin-footer.component';
import { SidebarComponent } from './components-admin/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AdminComponent,
    LoginAdminComponent,
    PhanquyenComponent,
    QlAccountComponent,
    QlDanhmucComponent,
    QlDonhangComponent,
    QlKhachhangComponent,
    QlSanphamComponent,
    ThongkeComponent,
    AdminFooterComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    AdminRouting
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
