import { Injectable } from '@angular/core';
import { LogUserSuccess } from '../Interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  role!: string | null;
  token!: string | null;

  constructor() {}

  login(res: LogUserSuccess) {
    localStorage.setItem('token', res.token);
  }
  logout() {
    localStorage.clear();
  }
  isloggedIn() {
    let token = localStorage.getItem('token');
    this.token = token ? token : null;

    return this.token ? true : false;
  }
}
