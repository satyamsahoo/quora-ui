import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { APIRoute } from './api.routes';
import { HttpHelper } from '../helpers/http-helper.class';
@Injectable({
  providedIn: 'root'
})
export class OrderstepsService extends HttpHelper{
  HttpHelper: any;
  constructor(private http: HttpClient) {
    super();
   }
  //addDeliveryaddress
  addDeliveryaddress(data) {
   return this.http.post(
      APIRoute.addDelivery(),
      data,this.getHttpOptions({ token: true })
      );
  }
}





