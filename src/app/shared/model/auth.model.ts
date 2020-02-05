export interface LoginRequest {
  userName: string;
  password: string;
}

export interface LoginResponse {
  access: any;
  code: any;
  firstName: string;
  lastName: string;
  message: string;
  randomAccessToken: string;
  role: string;
  sessionToken: string;
  status: any;
}
