import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHelper,HTTPRESPONSE } from '../helpers/http-helper.class';

//interface ProductsParams
export interface ProductsParams {
  categoryId?: string;
  search?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PaymentService extends HttpHelper {
  constructor(private http: HttpClient) {
    super();
  }

  //createCustomer
 createCustomer(data): Observable<any> {
   return this.http.post(
    `${this.apiUrl}/customers` ,
    data,
    this.getHttpOptions({ token: true })
  );
 }

 // setPaymentmethod
 setPaymentmethod(data): Observable<any> {
  return this.http.post(
    `${this.apiUrl}/payment/payment_method` ,
    data,
    this.getHttpOptions({ token: true })
  );
 }

 //doPayment
 doPayment(data): Observable<any> {
  return this.http.post(
    `${this.apiUrl}/payment/charge` ,
    data,
    this.getHttpOptions({ token: true })
  );
 }

 //Ordercreate
 Ordercreate(data): Observable<any> {
  return this.http.post(
    `${this.apiUrl}/orders/create` ,
    data,
    this.getHttpOptions({ token: true, cartInstance: true })
  );
 }

 createIdealPaymentSource(data) : Observable<any> {
  return this.http.post(
   `${this.apiUrl}/payment/idealSource`,
   data,
   this.getHttpOptions({ token: true })
  )
}

//idealSourceCharge
createIdealPaymentCharge(data) : Observable<any>{
  return this.http.post(
   `${this.apiUrl}/payment/idealCharge`,
   data,
   this.getHttpOptions({token: true})
  )
}

//getIdealPaymentSource
getIdealPaymentSource(data) : Observable<any> {
  return this.http.post(
   `${this.apiUrl}/payment/getIdealSource`,
   data,
   this.getHttpOptions({ token: true })
  )
}

}
