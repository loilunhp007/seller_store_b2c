import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { QlAccountComponent } from './components-admin/ql-account/ql-account.component';
import { QlDanhmucComponent } from './components-admin/ql-danhmuc/ql-danhmuc.component';
import { QlDonhangComponent } from './components-admin/ql-donhang/ql-donhang.component';
import { QlKhachhangComponent } from './components-admin/ql-khachhang/ql-khachhang.component';
import { QlSanphamComponent } from './components-admin/ql-sanpham/ql-sanpham.component';
import { ThongkeComponent } from './components-admin/thongke/thongke.component';


const routes: Routes = [
  {path:'admin',component:AdminComponent,
  children:[
    {path:'',redirectTo:'/admin/thongke',pathMatch:'full'},
    {path:'thongke',component:ThongkeComponent,pathMatch:'full'},
    {path:'account',component:QlAccountComponent,pathMatch:'full'},
    {path:'danhmuc',component:QlDanhmucComponent,pathMatch:'full'},
    {path:'donhang',component:QlDonhangComponent,pathMatch:'full'},
    {path:'khachhang',component:QlKhachhangComponent,pathMatch:'full'},
    {path:'sanpham',component:QlSanphamComponent,pathMatch:'full'}
  ]},
];

export const AdminRouting = RouterModule.forRoot(routes);