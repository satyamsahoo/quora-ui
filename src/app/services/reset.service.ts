import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIRoute } from './api.routes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResetService {
  HttpHelper: any;

  constructor(private http: HttpClient) {
  }

//reset api
  reset(data): Observable<any> {
    return this.http.post(APIRoute.resetPasswordemail(), data);
  }
  resetpassword(data) {
    return this.http.put(APIRoute.resetPassword(), data);
  }
}
