import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path : "login", component:LoginComponent,
  },
  {
    path : "register", component:RegisterComponent,
  },
  {
    path : "index",component:HomeComponent,
  } ,
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
