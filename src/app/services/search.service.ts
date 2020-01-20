import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { APIRoute } from './api.routes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

constructor(private _http: HttpClient) { }

// search
  search(data): Observable<any> {
    const httpParams = new HttpParams()
    .set('query', data);
    return this._http.post(
      APIRoute.search(),
      httpParams
    );
  }
}
