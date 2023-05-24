import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone:true,
  imports: [FormsModule]
  
  
})

// handling validation from backend 
export class SignupComponent {
  constructor( private userService:UserService , private router:Router){}
 formData:any ={}
 @ViewChild('signUpForm')
  signUpForm!: NgForm;
 signUp(){
  if (this.signUpForm.invalid) {
    console.log("invalid");
    return null
  }
  let userTrying = this.userService.signup(this.formData)
  if (userTrying) {
    console.log("success");
   return  this.router.navigate(['home'])
  } else{console.log("fail"); 
return null}
  
 }
}
