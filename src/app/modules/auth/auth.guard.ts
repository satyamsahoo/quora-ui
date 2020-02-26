
import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  
  //Declaration of variables
  excludingUrls: Array<string>;
  getState = null;
  usersinfo = null;
  constructor(private router: Router, private authService: AuthService) {
    this.excludingUrls = ["/login", "/register", "/reset"];
  }

  //canActivate
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const usersinfo = JSON.parse(localStorage.getItem('userInfo')) || {};
    if (usersinfo.hasOwnProperty('token')) {
      return true;
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate(["login"]);
    return false;
  }
}

