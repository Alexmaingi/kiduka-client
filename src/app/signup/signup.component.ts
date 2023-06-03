import { Component, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormsModule,
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
  myForm!: FormGroup;
  errorMessage!: null;
  form: any;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{9}')]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  signUp() {
    if (this.myForm.valid) {
      // Submit the form
      this.userService
        .addUser({
          ...this.myForm.value,
          phoneNumber: +this.myForm.value.phoneNumber,
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
      console.log(this.myForm.value);
    } else {
      // Mark all fields as touched to display validation errors
      Object.keys(this.myForm.controls).forEach((field) => {
        const control = this.myForm.get(field);
        control!.markAsTouched({ onlySelf: true });
      });
    }
  }
}
