import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  name:any
  email:any
  password:any

  constructor(private userService:UserService, private route:Router) { }

  public signup(){
    this.userService.signUp(this.name,this.email,this.password).subscribe((data: any)=>{
      console.log(data);
       if(data){
         alert("signup success");
         this.route.navigate(["signin"])
       }
    })

  }

  ngOnInit(): void {
  }

}
