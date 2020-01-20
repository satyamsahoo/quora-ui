import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIRoute } from './api.routes';
import { HttpHelper } from '../helpers/http-helper.class';

@Injectable({
  providedIn: 'root'
})
export class UpdateuserService extends HttpHelper {

  //Declaration of variables
  HttpHelper: any;
  userId: any;

  constructor(private http: HttpClient) {
    super();
  }

  //updateUser
  updateUser(data) {
    return this.http.put(
      APIRoute.updateUserDetail(),
      data,
      this.getHttpOptions({ token: true })
    );
  }

  //updateUseraddress
  updateUseraddress(data) {
    return this.http.post(
      APIRoute.updateUseraddress(),
      data,
      this.getHttpOptions({ token: true })
    );
  }

}
