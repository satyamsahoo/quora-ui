import { Injectable } from "@angular/core";
import { AppSettings } from '../config/app.config';

@Injectable({
  providedIn: "root"
})

export class SessionStorageService {
  getState = null;
  constructor() {
  }

  // session set,get & reset api
  setsessionStorage(data) {
    localStorage.setItem("userInfo", JSON.stringify(data));
    localStorage.setItem(AppSettings.localStorage_keys.token, data.token);
  }

  getsessionStorage(): any {
    return JSON.parse(localStorage.getItem("userInfo"));
  }

  resetStorage() {
    localStorage.clear();
  }
  
}
