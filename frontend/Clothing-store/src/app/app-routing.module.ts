import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  
  
  {
    path: '',
    redirectTo: '/index',
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
  {path:"product",component:ProductComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
