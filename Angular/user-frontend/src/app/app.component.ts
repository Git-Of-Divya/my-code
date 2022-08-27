import { Component } from '@angular/core';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-frontend';

  constructor(private userService:UserService) { }

  public isLoggedIn(){
    if(this.userService.checkToken()){
      return true;
    }else{
      return false
    }
  }
}
