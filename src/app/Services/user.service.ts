import {
  AddUserSuccess,
  LogUserSuccess,
  Login,
  NewUser,
} from './../Interfaces/index';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  addUser(newUser: NewUser): Observable<AddUserSuccess> {
    return this.http.post<AddUserSuccess>(
      'http://192.168.77.127:4000/users',
      newUser
    );
  }

  loginUser(loginUser: Login): Observable<LogUserSuccess> {
    return this.http.post<LogUserSuccess>(
      'http://192.168.77.127:4000/users/login',
      loginUser
    );
  }
}

// 'http://192.168.43.156:4000/users',
