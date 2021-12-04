import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminguardGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let userId=JSON.parse(sessionStorage.getItem('iid'));
      let type = JSON.parse(sessionStorage.getItem('type'));
      if(userId!=null && (type==1||type==3)){
        return true;
      }else{
        this.router.navigate(['/admin/loginadmin'])
        return false;
}
  }
  
  
}
