import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  email:any
  password:any
  result:any

  constructor(private userService:UserService,private route:Router) { }

  public signIn(){
    this.userService.signIn(this.email,this.password).subscribe((data: any)=>{
      // alert(data.result._id);
      console.log(data);
      this.result=data

      sessionStorage.setItem('userId',data.result._id)
      sessionStorage.setItem('jwt',this.result.token)
      if(data){
        alert("signin success")
        this.route.navigate(["edit-user"])
      }
    })
  }

  ngOnInit(): void {
  }

}
