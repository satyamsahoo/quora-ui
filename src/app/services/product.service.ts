import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHelper } from '../helpers/http-helper.class';
import { APIRoute } from 'src/app/services/api.routes';

// interface ProductsParams
export interface ProductsParams {
  categoryId?: string;
  search?: string;
}

@Injectable({
  providedIn: 'root'
})


export class ProductService extends HttpHelper {

  public wishlistCartData: any;
  cartTotal: Number;

  subTotal: any;
  ab: any;
  ac: boolean = false;

  private wishlistCartDataSubject = new Subject<any>();
  onWishlistCartDataChange = this.wishlistCartDataSubject.asObservable();

  // wishlist get, set and change data
  wishlistDataChanged() {
    this.wishlistCartDataSubject.next(this.wishlistCartData);
  }

  setWishlistCartData(data): void {
    this.wishlistCartData = data;
    this.wishlistDataChanged();
  }

  getWishlistCartData() {
    return this.wishlistCartData;
  }

  public selectedOnCategoryId: any;



  constructor(private http: HttpClient) {
    super();
  }

  //getProducts
  getProducts(): Observable<any> {
    let params = new HttpParams();
    params = params.append('limit', '10');
    params = params.append('skip', '0');
    return this.http.get(this.apiUrl + '/products/', { params });
  }

  //getspecificProduct
  getspecificProduct(data: { [key: string]: any }): Observable<any> {
    console.log('data', data);
    return this.http.get(this.apiUrl + '/products/specific?id=' + data, {});
  }

  //getProductById
  public getProductById(prodId): Observable<any> {
    const params = new HttpParams()
      .set('prodId', prodId);
    return this.http.post(APIRoute.getProductById(), params);
  }

  //getbannerData
  getbannerData() {
    return this.http.get(
      `${this.apiUrl}/banners/getAllBanners`,
      this.getHttpOptions({ token: true })
    );
  }

  //getbannerImages
  getbannerImages() {
    return this.http.get(`${this.apiUrl}/images/banner`);
  }

  //getProductByPopularity
  getProductByPopularity({ limit, skip }): Observable<any> {
    return this.http.get(
      this.apiUrl + '/products/popular' + '?limit=' + limit + '&skip=' + skip,
      {}
    );
  }

  //getProductlatestadded
  getProductlatestadded({ limit, skip }): Observable<any> {
    return this.http.get(
      this.apiUrl + '/products/tranding' + '?limit=' + limit + '&skip=' + skip,
      {}
    );
  }

  //getProductbyslug
  getProductbyslug(slug, { limit, skip }): Observable<any> {
    return this.http.get(
      this.apiUrl + '/products/' + slug + '?limit=' + limit + '&skip=' + skip,
      {}
    );
  }

  //setRatingProduct
  setRatingProduct(id: { [key: string]: any }, data): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/reviews/productreview?id=` + id,
      data,
      this.getHttpOptions({ token: true })
    );
  }

  //getWishlistData
  getWishlistData() {
    return this.http.get(
      `${this.apiUrl}/wishlist`,
      this.getHttpOptions({ token: true })
    );
  }

  // updateWishlistCartCount
  updateWishlistCartCount() {
    this.getWishlistData().subscribe(((res:any)=>   {
      console.log('res2@wish', res);
      if (res.data.products != null || res.data.products != undefined) {
        this.wishlistCartData = res.data.products;
        console.log('this.wishlistData.products', this.wishlistCartData);
        this.wishlistDataChanged();
      }

    }));
  }


  //removeProductFromWishlistData
  removeProductFromWishlistData(data) {
    return this.http.post(
      `${this.apiUrl}/wishlist/removeproduct`,
      data,
      this.getHttpOptions()
    );
  }

  //wishlistProduct
  wishlistProduct(data): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/wishlist`,
      data,
      this.getHttpOptions({ token: true })
    );
  }

  //gertProductReview
  gertProductReview(data: { [key: string]: any }): Observable<any> {
    return this.http.post(this.apiUrl + '/reviews/getreviews?id=' + data, {}, this.getHttpOptions({ token: true }));
  }

  // updateReview
  updateReview(id: { [key: string]: any }, data): Observable<any> {
    return this.http.put(`${this.apiUrl}/reviews/updatereview/` + id, data, this.getHttpOptions({ token: true }));
  }

  //getAddress
  getAddress(id): Observable<any> {
    return this.http.post(this.apiUrl + '/delivery/userAddress/' + id, {});
  }

  //getProductByCategory
  getProductByCategory(id: any, params: ProductsParams = {}): Observable<any> {
    return this.http.get(this.apiUrl + '/products/categorywise/' + id, {
      // @ts-ignores
      params
    });
  }

  //getcategoryByid
  getcategoryByid(id): Observable<any> {
    return this.http.get(this.apiUrl + '/category/' + id, {});
  }

  // addProcuctClicked
  addProcuctClicked(data): Observable<any> {
    return this.http.post(this.apiUrl + '/viewed/add', data, {}
    );
  }

  //getOrderedProducts
  getOrderedProducts(id): Observable<any> {
    return this.http.get(this.apiUrl + '/orders/products/' + id, {});
  }
}
