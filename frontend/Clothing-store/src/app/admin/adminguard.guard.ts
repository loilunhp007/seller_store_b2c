import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminguardGuard implements CanActivate {
  constructor(private router:Router,
    private userService:UserService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     if(sessionStorage.getItem('uid')!=null ){
      let userId=JSON.parse(sessionStorage.getItem('uid'));
      this.userService.getUserByID(userId).subscribe(Response=>{
        let typeID = Response.typeMember.id;
        if(typeID ==1 || typeID ==3 ||typeID ==4){
          return true;
        }  else{
          this.router.navigate(['/adminlogin'])
          return false;
       }
      })
    
    }else{
      this.router.navigate(['/adminlogin'])
       return false;
     
     
}
  }
  
  
}
