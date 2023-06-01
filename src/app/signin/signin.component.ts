
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
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  logIn() {
    this.userService.loginUser(this.form.value).subscribe(
      (res) => {
        console.log(this.form.value);
        this.errorMessage = null;
        this.authservice.login(res);
        if(res.role === 'user'){
          this.router.navigateByUrl('/');
        }else{
          this.router.navigateByUrl('/adminProduct');
        }
        
      },
      (err) => {
        this.errorMessage = err.error.message;
      }
    );
  }
}
