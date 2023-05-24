import { Injectable } from '@angular/core';
import { User } from '../Interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user:User[] =[{name:'Joy',email:"joy@gmail.com",phone:713303567,password:"password"}]
    
  constructor() { }

  login(email:string, password:string){
   if( this.user.find(u=>u.email===email && u.password ===password)){
    return this.user.find(u=>u.email===email && u.password ===password)
    
   }return null
   
  }

  signup(userTrying:User){
    if(userTrying.email){
     if( this.user.find(u=>u.email===userTrying.email)){
      
      return null
     }else{return userTrying}
     
    }else{return null}
    

  }
  forgotPassword(){
    
  }

}
