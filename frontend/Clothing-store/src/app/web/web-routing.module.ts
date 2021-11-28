import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductComponent } from './components/product/product.component';
import { SearchComponent } from './components/search/search.component';
import { WebComponent } from './web.component';

const routes: Routes = [
  {
    path:'web',
    component:WebComponent,
    children:[
      {
        path: '',
        redirectTo: '/web/index',
        pathMatch:'full',    
      },
      {
        path : "index",component:HomeComponent, pathMatch:'full'
      } ,
      {
        path : "login", component:LoginComponent ,pathMatch:'full',
      },
      {
        path:"cart",component:CartComponent
      },
      {path:"search",component:SearchComponent,pathMatch:'full'},
      {path:"product",component:ProductComponent,pathMatch:'full'},
      {path:"product-detail",component:ProductDetailComponent,pathMatch:'full'},
      {path:"contact",component:ContactsComponent}
    ]
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
