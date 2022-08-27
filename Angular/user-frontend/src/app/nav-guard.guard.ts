import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class NavGuardGuard implements CanActivate {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  constructor(private userService:UserService){}
  //  canActivate():boolean{
  //    if(sessionStorage.getItem('token'))
  //     return true
  //   else{
  //     this.router.navigate(['sign-in']);
  //     return false
  //   }
  //  }

   canActivate():boolean {
    return this.userService.checkToken();
    }

}
