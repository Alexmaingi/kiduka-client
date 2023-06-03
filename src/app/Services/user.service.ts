import {
  AddUserSuccess,
  LogUserSuccess,
  Login,
  NewUser,
  emailSentSuccess,
} from './../Interfaces/index';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  addUser(newUser: NewUser): Observable<AddUserSuccess> {
    return this.http.post<AddUserSuccess>(
      'http://192.168.101.13:4000/users',
      newUser
    );
  }

  loginUser(loginUser: Login): Observable<LogUserSuccess> {
    return this.http.post<LogUserSuccess>(
      'http://192.168.101.13:4000/users/login',
      loginUser
    );
  }
  forgotPassword(email: string): Observable<emailSentSuccess> {
    return this.http.get<emailSentSuccess>(
      `http://192.168.101.13:4000/users/forgotPassword${email}`
    );
  }
}
