import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { SearchComponent } from './components/search/search.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { WebComponent } from './web.component';
import { WebRoutingModule } from './web-routing.module';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { InfoComponent } from './components/info/info.component';

@NgModule({
  declarations: [
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
    CheckoutComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WebRoutingModule
  ],
  exports:[
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
    CheckoutComponent,
  ],
  providers: [],
  bootstrap: [WebComponent]
})
export class WebModule { }
