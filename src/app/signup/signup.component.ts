import { Component, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { UserService } from '../Services/user.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone: true,
  imports: [FormsModule, RouterModule, ReactiveFormsModule, CommonModule],
})

// handling validation from backend
export class SignupComponent {
  form!: FormGroup;
  errorMessage!: null;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      password: ['', [Validators.required]],
      // confirmPassword: ['', [Validators.required]],
    });
  }

  signUp() {
    this.userService
      .addUser({
        ...this.form.value,
        phoneNumber: +this.form.value.phoneNumber,
      })
      .subscribe(
        (res) => {
          console.log(res.message);
          this.router.navigateByUrl('/');
        },
        (err) => {
          this.errorMessage = err.message;
        }
      );
    console.log(this.form.value);
  }
}
