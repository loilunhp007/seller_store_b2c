import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { MenuAdminComponent } from './components-admin/menu-admin/menu-admin.component';
import { SidebarComponent } from './components-admin/sidebar/sidebar.component';
import { AdminFooterComponent } from './components-admin/admin-footer/admin-footer.component';
import { AdminRouting } from './admin-routing.module';
import { QlSanphamComponent } from './components-admin/ql-sanpham/ql-sanpham.component';
import { QlAccountComponent } from './components-admin/ql-account/ql-account.component';
import { QlDanhmucComponent } from './components-admin/ql-danhmuc/ql-danhmuc.component';
import { QlDonhangComponent } from './components-admin/ql-donhang/ql-donhang.component';
import { QlKhachhangComponent } from './components-admin/ql-khachhang/ql-khachhang.component';
import { LoginAdminComponent } from './components-admin/login-admin/login-admin.component';
import { ThongkeComponent } from './components-admin/thongke/thongke.component';
import { DpDatePickerModule } from 'ng2-date-picker';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AdminComponent,
    MenuAdminComponent,
    SidebarComponent,
    LoginAdminComponent,
    ThongkeComponent,
    AdminFooterComponent,
    QlSanphamComponent,
    QlAccountComponent,
    QlDanhmucComponent,
    QlDonhangComponent,
    QlKhachhangComponent
  ],
  imports: [
    CommonModule,
    AdminRouting,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DpDatePickerModule,
    NgxPaginationModule,
    FontAwesomeModule
  ],
  exports:[
    AdminComponent,
    MenuAdminComponent,
    SidebarComponent,
    LoginAdminComponent,
    ThongkeComponent,
    AdminFooterComponent,
    QlSanphamComponent,
    QlAccountComponent,
    QlDanhmucComponent,
    QlDonhangComponent,
    QlKhachhangComponent
  ]
})
export class AdminModule { }
