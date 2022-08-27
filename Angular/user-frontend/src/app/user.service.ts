import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http:HttpClient) { }

  signupApi = "http://localhost:3000/user/signUp";
  signUp(name:any,email:any,password:any){
     return this.http.post(this.signupApi,{
       userName:name,
       userEmail:email,
       userPassword:password
     })
  }

 signinApi = "http://localhost:3000/user/signIn";
 signIn(email:any,password:any){
    return this.http.post(this.signinApi,{
      userEmail:email,
      userPassword:password
    })
 }

 updateApi = "http://localhost:3000/user/update";
 update(name:any,email:any,password:any,userId:any){
   return this.http.post(this.updateApi,{
     userName:name,
     userEmail:email,
     userPassword:password,
     userId:userId
   })
 }

 public checkToken(){
    return !!sessionStorage.getItem('jwt');

 }

}
