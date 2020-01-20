import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient,HttpParams} from '@angular/common/http';
import { APIRoute } from './api.routes';


@Injectable({
  providedIn: 'root'
})
export class LabelService {
  HttpHelper: any;

  constructor(private http: HttpClient) { }
  
//getAllLabel
  getAllLabel(data): Observable<any> {
   return this.http.get(
      APIRoute.getAllLabel(data)
      );
  }
}
