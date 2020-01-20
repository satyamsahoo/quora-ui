import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIRoute } from './api.routes';
import { HttpHelper,HTTPRESPONSE } from '../helpers/http-helper.class';
@Injectable({
  providedIn: 'root'
})

export class HomeService extends HttpHelper{
  constructor(private http: HttpClient) {
    super();
   }

  // Get Brands
  getBrands() {
    return this.http.get(APIRoute.getBrands());
  }

  // getCategoriesdata
  getCategoriesdata() {
    return this.http.get(APIRoute.getCategories());
  }

  // getallCategory
  getallCategory(id: any) {
    return this.http.get(APIRoute.getallCategory(id));
  }

  // contactForm
  contactForm(data) {
    return this.http.post(APIRoute.userContactFormDetails(), data, this.getHttpOptions({ token: true }));
  }

}
