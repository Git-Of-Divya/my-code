import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  name:any
  email:any
  password:any
  result:any
  userId:any

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  public updateUser(){
    this.userId=sessionStorage.getItem('userId');
    this.userService.update(this.name,this.email,this.password,this.userId).subscribe((data: any)=>{
      console.log(data)
      this.result=data;
      sessionStorage.setItem('userId',this.result._id)
      sessionStorage.setItem('jwt',this.result.token)
      if(data){
        alert("update success")
      }
    })
  }



}
