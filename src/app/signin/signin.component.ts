import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';

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
}
