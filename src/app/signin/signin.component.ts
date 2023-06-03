import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../Services/user.service';
import { Router, RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
})
export class SigninComponent {
  form!: FormGroup;
  errorMessage!: null;

  constructor(
    private fb: FormBuilder,
    private authservice: AuthService,
    private userService: UserService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  showParagraph = false;

  logIn() {
    if (this.form.valid) {
      // Submit the form
      this.userService.loginUser(this.form.value).subscribe(
        (res) => {
          console.log(this.form.value);
          this.errorMessage = null;
          this.authservice.login(res);
          this.router.navigateByUrl('/');
        },
        (err) => {
          this.errorMessage = err.error.message;
        }
      );
    } else {
      // Mark all fields as touched to display validation errors
      Object.keys(this.form.controls).forEach((field) => {
        const control = this.form.get(field);
        control!.markAsTouched({ onlySelf: true });
      });
    }
  }

  sendEmail() {
    this.userService.forgotPassword(this.form.value).subscribe((res) => {
      console.log(this.form.value);
    });
  }
}
