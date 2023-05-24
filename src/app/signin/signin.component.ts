import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(private userService:UserService, private router:Router){

  }
  login(email:string, password:string){
     let result= this.userService.login(email, password)
     if(result){
      this.router.navigate(['home'])
     }
  }
}
