import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserinterceptService implements HttpInterceptor {

  token:any;

  constructor() { }

  intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
     this.token=sessionStorage.getItem('jwt');
     if(this.token){
       let tokenizedReq = request.clone({headers:request.headers.set('authorization','bearer '+this.token)})
       return next.handle(tokenizedReq)
     }
     return next.handle(request)
  }
}
