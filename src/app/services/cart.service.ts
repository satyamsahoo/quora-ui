import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { HttpHelper, HTTPRESPONSE } from '../helpers/http-helper.class';
import { map } from 'rxjs/operators';

// interface Product
export interface Product {
  productId: number;
  sku?: string;
  productName: string;
  description?: string;
  images?: Array<{ id: string, name: string, path: string }>;
  specification?: string;
  additionalAttributes?: Array<any>;
  categoryId: number;
  price: number;
  inStockCount: number;
  soldCount: number;
  brand: string;
  weight: number;
  sortOrder: number;
  tag: Array<any>;
  isActive: boolean;
  isDeleted: boolean;
  views: Array<any>;
  createdBy: string;
  createdAt: string;
  updatedBy: string;
  updatedAt: string;
}

// interface CartData
export interface CartData {
  total: number;
  shippingCost: number;
  products: Array<{
    sessionId: number,
    product: Product,
    quantity: number
  }>;
}

// enum SlugType
export enum SlugType {
  Popular = 'popular',
  Tranding = 'tranding'
}

@Injectable({
  providedIn: 'root'
})

export class CartService extends HttpHelper {

  // Declaration of variables
  private cartData: CartData = {
    total: 0,
    shippingCost: 0,
    products: []
  };
  cartTotal: Number;

  subTotal:any;
  ab:any;
  ac:boolean=false;

  private cartDataSubject = new Subject<CartData>();
  onCartDataChange = this.cartDataSubject.asObservable();

  constructor(private http: HttpClient) {
    super();
  }

  // cart get, set and change data
  cartDataChanged() {
    this.cartDataSubject.next(this.cartData);
  }

  setCartData(data: CartData): void {
    this.cartData = data;
    this.cartDataChanged();
  }

  getCartData(): CartData {
    return this.cartData;
  }

  // addProductToCart
  addProductToCart(data: { productId: number; quantity: number }): Observable<any> {
    console.log('data', data);
    return this.http.post(this.apiUrl + '/cart/add', data, this.getHttpOptions({ cartInstance: true }));
  }
  // getcartallData
  getcartallData(): Observable<any> {
    return this.http.get(this.apiUrl + '/cart/', this.getHttpOptions({ cartInstance: true }));
  }

  // updateCartCount
  updateCartCount(){
    this.getcartallData().subscribe((res=>{
        if (res.data.finalJSONForUser!=null || res.data.finalJSONForUser!=undefined ) {
          this.cartData.products=res.data.finalJSONForUser;
          this.cartDataChanged();
        }

    }));
  }

  updateCartCountAfterOrderPlaced(){
    this.getcartallData().subscribe((res=>{
        if (res.data.finalJSONForUser!=null || res.data.finalJSONForUser!=undefined ) {
          this.cartData.products=res.data.finalJSONForUser;
          this.cartData.products= [];
          this.cartDataChanged();
        }
    }));
  }

  // increaseQty
  increaseQty(data: { productId: number; quantity: number; }): Observable<any> {
    return this.http.post(this.apiUrl + '/cart/increase-quantity', data, this.getHttpOptions({ cartInstance: true }))
      // .pipe(
      //   map((res: HTTPRESPONSE) => {
      //     console.log('cart service functin decre', res.data)
      //     const cartData = res.data.cart;
      //     cartData.forEach((cart: any) => {
      //       if (cart.productId === res.data.cart.productId) {
      //         cart.quantity = res.data.cart.quantity;
      //       }
      //     });
      //     this.cartData.products[0].quantity = res.data.cart.quantity;
      //     this.cartData.total = res.data.cart.total;
      //     this.cartData.shippingCost = res.data.cart.shippingCost;
      //     this.cartDataChanged();
      //   })
      // );
  }

  // decreaseQty
  decreaseQty(data: { productId: number; quantity: number; }): Observable<any> {
    return this.http.post(this.apiUrl + '/cart/decrease-quantity', data, this.getHttpOptions({ cartInstance: true }))
      // .pipe(
      //   map((res: any) => {
      //     console.log('cart service functin decre', res.data)
      //     this.cartData.products.forEach((cart: any) => {
      //       if (cart.product.productId === res.data.product.productId) {
      //         cart.product = res.data.cart.product;
      //         cart.quantity = res.data.cart.quantity;
      //       }
      //     });
      //     this.cartData.total = res.data.cart.total;
      //     this.cartData.shippingCost = res.data.cart.shippingCost;
      //     this.cartDataChanged();
      //   })
      // );
  }

  // removeProduct
  // removeProduct(productId: number): Observable<any> {
  //   const body = { productId };
  //   return this.http.post(this.apiUrl + '/cart/removeproduct', body, this.getHttpOptions({ cartInstance: true }))
  //     .pipe(
  //       map((res: HTTPRESPONSE) => {
  //         this.cartData.products = this.cartData.products.filter((cart) => {
  //           return cart.sessionId !== productId;
  //         });
  //         this.cartData.total = res.data.cart.total;
  //         this.cartData.shippingCost = res.data.cart.shippingCost;
  //         this.cartDataChanged();
  //       })
  //     );
  // }
}
