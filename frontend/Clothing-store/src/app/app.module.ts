import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './web/components/footer/footer.component';
import { SliderComponent } from './web/components/slider/slider.component';
import { MenuComponent } from './web/components/menu/menu.component';
import { HomeComponent } from './web/components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './web/components/product/product.component';
import { SearchComponent } from './web/components/search/search.component';
import { ContactsComponent } from './web/components/contacts/contacts.component';
import { PagenotfoundComponent } from './web/components/pagenotfound/pagenotfound.component';
import { UserprofileComponent } from './web/components/userprofile/userprofile.component';
import { LoginComponent } from './web/components/login/login.component';
import { RegisterComponent } from './web/components/register/register.component';
import { ProductDetailComponent } from './web/components/product-detail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './web/components/cart/cart.component';
import { OrderComponent } from './web/components/order/order.component';
import { AdminComponent } from './admin/admin.component';
import { AdminRouting } from './admin/admin-routing.module';
import { WebRoutingModule } from './web/web-routing.module';
import { WebComponent } from './web/web.component';
import { MenuAdminComponent } from './admin/components-admin/menu-admin/menu-admin.component';
import { AdminFooterComponent } from './admin/components-admin/admin-footer/admin-footer.component';
import { SidebarComponent } from './admin/components-admin/sidebar/sidebar.component';
import { QlSanphamComponent } from './admin/components-admin/ql-sanpham/ql-sanpham.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    WebComponent,
    MenuComponent,
    FooterComponent,
    SliderComponent,
    HomeComponent,
    ProductComponent,
    SearchComponent,
    ContactsComponent,
    PagenotfoundComponent,
    UserprofileComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    ProductDetailComponent,
    LoginComponent,
    CartComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRouting,
    WebRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
