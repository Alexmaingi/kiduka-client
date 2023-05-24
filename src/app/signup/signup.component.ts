import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports: [CommonModule, FormsModule, RouterModule],
  standalone: true,
})
export class SignupComponent {
  @ViewChild('form') form!: NgForm;
  onSubmit() {
    this.form.resetForm();
  }
}
