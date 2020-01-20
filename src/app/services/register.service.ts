import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIRoute } from './api.routes';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  HttpHelper: any;

  constructor(private http: HttpClient) {}

  // registered & otp api
  registerEmail(data) {
    return this.http.post(APIRoute.addEmail(), data);
  }
  getregisteredEmail() {
    return this.http.get(APIRoute.getEmail());
  }
  machOtp(data) {
    return this.http.post(APIRoute.otpData(), data);
  }
  registerUser(data) {
    return this.http.post(APIRoute.registerUser(), data);
  }
  getUser() {
    return this.http.get(APIRoute.getUser());
  }
}
