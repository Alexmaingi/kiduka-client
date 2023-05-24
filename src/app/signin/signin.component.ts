import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  imports: [CommonModule, FormsModule, RouterModule],
  standalone: true,
})
export class SigninComponent {
  @ViewChild('form') form!: NgForm;
  onSubmit() {
    this.form.resetForm();
  }
  constructor(private userService: UserService, private router: Router) {}
  login(email: string, password: string) {
    let result = this.userService.login(email, password);
    if (result) {
      this.form.resetForm();
      this.router.navigate(['home']);
    }
  }
}
