import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHelper } from '../helpers/http-helper.class';

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends HttpHelper {
  constructor(private http: HttpClient) {
    super();
  }

  //getAddress
  getAddress(id): Observable<any> {
    return this.http.post(this.apiUrl + '/delivery/userAddress/' + id, {});
  }

  //updateAddress
  updateAddress(id: { [key: string]: any }, data): Observable<any> {
    return this.http.put( `${this.apiUrl}/delivery/address/` + id , data,  this.getHttpOptions({ token: true }));
  }

  // deleteAddress
  deleteAddress(id): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delivery/delete/` + id, this.getHttpOptions({ token: true }));
  }
  
}
