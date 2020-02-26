import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHelper} from '../helpers/http-helper.class';
import {Observable} from 'rxjs';
import { AuthService } from '../modules/auth/auth.service';


// Enum
export enum OrderStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  CANCEL = 'cancel',
  RETURN = 'return',
  RETURN_APPROVED = 'return-approved',
  EXCHANGE = 'exchange',
  EXCHANGE_APPROVED = 'exchange-approved',
  DELIVERED = 'delivered'
}

@Injectable({
  providedIn: 'root'
})
export class AccountService extends HttpHelper {
  constructor(private http: HttpClient,
              private authService: AuthService) {
    super();
  }

  //getUserData
  getUserData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/auth`, this.getHttpOptions({ token : true }));
  }

   //saveUserData
  saveUserData(id , data) {
    return this.http.put(`${this.apiUrl}/users/` + id, data);
  }

   //getOrdersData
  getOrdersData() {
    return this.http.get(`${this.apiUrl}/orders`, this.getHttpOptions({ token : true }));
  }

   //cancelOrder
  cancelOrder(orderId, data: { cancelReason: string }) {
    return this.http.post(`${this.apiUrl}/orders/cancelOrder/${orderId}`, data, this.getHttpOptions());
  }

   //returnOrder
  returnOrder(orderId, data: { reason: string, images: string[] }) {
    return this.http.post(`${this.apiUrl}/orderreturn/save/${orderId}`, data, this.getHttpOptions());
  }
 //exchangeOrder
  exchangeOrder(orderId, data: { reason: string, images: string[] }) {
    return this.http.post(`${this.apiUrl}/orderexchange/save/${orderId}`, data, this.getHttpOptions());
  }

}
