import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHelper } from '../helpers/http-helper.class';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ShellService extends HttpHelper {

  private menuDataSubject = new Subject<any>();
  onMenuDataChange = this.menuDataSubject.asObservable();

  private footerCategoryDataSubject = new Subject<any>();
  onFooterCategoryDataChange = this.footerCategoryDataSubject.asObservable();

  private bannerDataSubject = new Subject<any>();
  onBannerDataChange = this.bannerDataSubject.asObservable();

  private categoryBannerDataSubject = new Subject<any>();
  onCategoryBannerChange = this.categoryBannerDataSubject.asObservable();

  private bannerSliderConfigDataSubject = new Subject<any>();
  onbannerSliderConfigDataChange = this.bannerSliderConfigDataSubject.asObservable();

  private categorybannerConfigDataSubject = new Subject<any>();
  oncategorybannerConfigDataChange = this.categorybannerConfigDataSubject.asObservable();

  private wishlistsDataSubject = new Subject<any>();
  onWishlistsDataChange = this.wishlistsDataSubject.asObservable();

  private policyDataSubject = new Subject<any>();
  onPolicyDataChange = this.policyDataSubject.asObservable();

  private ruhameAddressDataSubject = new Subject<any>();
  onRuhameAddressDataChange = this.ruhameAddressDataSubject.asObservable();

  menuData: any = [];
  footerCategoryData: any = [];
  bannerData: any = [];
  categoryBannerData: any = [];
  bannerSliderConfig: any = {};
  categorybannerConfig: any = {};
  policyConfig: any = {};
  ruhameAddressConfig: any = '';
  wishlists: any = [];

  constructor(private http: HttpClient) {
    super();
  }

  // footer get, set and get data
  getfooterData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/footer/`, this.getHttpOptions({ cartInstance: true }));
  }

  setFooterData(data: any): void {
    this.footerCategoryData = data;
    this.footerCategoryDataSubject.next(data);
  }

  getFooterData(): any {
    return this.footerCategoryData;
  }

  // menu get and set data
  setMenuData(data: any): void {
    this.menuData = data;
    this.menuDataSubject.next(data);
  }

  getMenuData(): any {
    return this.menuData;
  }

  // wishlist set and get data
  setWishlistData(data: any): void {
    this.wishlists = data;
    this.wishlistsDataSubject.next(data);
  }

  getWishlistData(): any {
    return this.wishlists;
  }

  // banner set and get data
  setBannerData(data: any): void {
    this.bannerData = data;
    this.bannerDataSubject.next(data);
  }

  getBannerData(): any {
    return this.bannerData;
  }

  // categorybanner set and get data
  setCategoryBannerData(data: any): void {
    this.categoryBannerData = data;
    this.categoryBannerDataSubject.next(data);
  }

  getCategoryBannerData(): any {
    return this.categoryBannerData;
  }

  // banner slider set and get data
  setBannerSliderConfig(data: any): void {
    this.bannerSliderConfig = data;
    this.bannerSliderConfigDataSubject.next(data);
  }

  getbannerSliderConfigData(): any {
    return this.bannerSliderConfig;
  }

  // category banner set and get data
  setCategoryBannerConfig(data: any): void {
    this.categorybannerConfig = data;
    this.categorybannerConfigDataSubject.next(data);
  }

  getCategorybannerConfigData(): any {
    return this.categorybannerConfig;
  }

  // subscribe
  subscribe(data): Observable<any> {
    return this.http.post(`${this.apiUrl}/subscribe`, data);
  }

  // policyconfig set and get data
  setPolicyConfigData(data: any): void {
    this.policyConfig = data;
    this.policyDataSubject.next(data);
  }

  getPolicyConfigData(): any {
    return this.policyConfig;
  }

  // RuhameAddress set and get data
  setRuhameAddressConfigData(data: any): void {
    this.ruhameAddressConfig = data;
    this.ruhameAddressDataSubject.next(data);
  }

  getRuhameAddressConfigData(): any {
    return this.ruhameAddressConfig;
  }

}
