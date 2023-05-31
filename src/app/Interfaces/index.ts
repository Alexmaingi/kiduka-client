export interface NewUser {
  name: string;
  email: string;
  phoneNumber: number;
  password: string;
  confirmPassword?: string;
}

export interface AddUserSuccess {
  message: string;
}

export interface Login {
  email: string;
  password: string;
}
export interface LogUserSuccess {
  message: string;
  token: string;
}
