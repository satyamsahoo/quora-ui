import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpHelper } from '../helpers/http-helper.class';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIRoute } from '../services/api.routes';
import { AppSettings } from '../config/app.config';

// interface
export interface AuthState {
  is_logged_in: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService extends HttpHelper {

  // Declaration of variables
  private authSubject = new Subject<AuthState>();
  authState = this.authSubject.asObservable();
  private applicationAuthState: AuthState;
  currentData: any = {};
  isUserAuthenticated = false;

  constructor(
    private router: Router,
    private http: HttpClient // private utilService: UtilsService
  ) {
    super();
    this.applicationAuthState = {
      is_logged_in: AuthService.isAuthenticated()
    };
  } static isAuthenticated(): boolean {
    return !!localStorage.getItem(AppSettings.localStorage_keys.token);
  }

  // signin
  signin(data: { email: string; password: string }): Observable<any> {
    return this.http.post(
      APIRoute.login(),
      data,
      this.getHttpOptions({ token: true })
    );
  }

  // signup
  signup(data: { [key: string]: any }): Observable<any> {
    return this.http.post(
      APIRoute.signUp(),
      data,
      this.getHttpOptions({ token: true })
    );
  }

  // setAuthState
  setAuthState(data: AuthState) {
    this.applicationAuthState = data;
    this.authSubject.next(data);
  }

  // updateUSerDetail
  updateUSerDetail(data: { [key: string]: any }): any {
    return this.http.put(
      APIRoute.updateUserDetail(),
      data,
      this.getHttpOptions({ token: true })
    );
  }

  // changeUserLoginPassword
  changeUserLoginPassword(data: { [key: string]: any }): any {
    return this.http.put(
      APIRoute.updateUserCreditial(),
      data,
      this.getHttpOptions({ token: true })
    );
  }

  // getAuthState
  getAuthState(): AuthState {
    return this.applicationAuthState;
  }

  // logout
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('userInfo');
    localStorage.removeItem(AppSettings.localStorage_keys.token);
    this.setAuthState({ is_logged_in: false });
  }

  // getUsers
  getUsers(): Observable<any> {
    return Observable.create((observer: any) => {
      this.http.get(APIRoute.signUp()).subscribe(
        res => {
          observer.next(res);
          observer.complete();
        },
        err => {
          observer.error(err);
        }
      );
    });
  }
}
