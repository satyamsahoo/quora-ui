import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { APIRoute } from './api.routes';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  HttpHelper: any;

  constructor(private http:HttpClient) { }

  // login
  login(data){
   return this.http.post(
      APIRoute.login(),
      data,
      );
  }
 
}
