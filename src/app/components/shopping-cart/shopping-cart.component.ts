import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { UtilsService, toastTypes } from 'src/app/services/utils.service';
import { CartService, CartData } from 'src/app/services/cart.service';
import { AuthService, AuthState } from 'src/app/modules/auth/auth.service';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cartData: any;
  constructor(
    public router: Router,
    private authService: AuthService,
    private cartService: CartService,
    private utilService: UtilsService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    console.log('getcartallDahhhhhhhta');
    this.getCartdata();
  }
    // getCartdata 
    getCartdata() {
      this.cartService.getcartallData().subscribe((res: any) => {
     console.log('getcartallData',res);
     this.cartData = res.data.finalJSONForUser;
        // Initial Total
     
        // for (let i = 0; i > this.dataArray.length; i++) {
        //   const data = this.dataArray[i].product;
        // }
        // if (this.dataArray.length > 0) {
        //   this.itemQuantity = res.data.finalJSONForUser[0].quantity;
        //   if (this.itemQuantity === 0) {
        //     this.itemQuantity = 'No';
        //   }
        //   this.itemPrice = res.data.finalJSONForUser[0].product.price;
        // } else {
        //   this.itemQuantity = 'No';
        //   this.itemPrice = 0;
        // }
      });
    }

      // onClickview
  onClickview(productId) {
    const myurl = `product-details/${productId}`;
    this.router.navigateByUrl(myurl);
  }

  continueOrder(){
    this.router.navigate(['/order-steps']);
  }
  continueShopping(){
    this.router.navigate(['/search']); 
  }
  
   

}
