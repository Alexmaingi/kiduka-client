import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(public authService: AuthService, private route:Router) {}
  uid=localStorage.getItem('uid')

  navigate(){
  
    this.route.navigateByUrl('/cart')
  }
  toSignin(){
    
    this.route.navigateByUrl('/sigin')
  }

  
}
