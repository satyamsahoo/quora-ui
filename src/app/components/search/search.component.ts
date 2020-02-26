import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from "ngx-bootstrap";
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { UtilsService, toastTypes } from 'src/app/services/utils.service';
import { CartService, CartData } from 'src/app/services/cart.service';


declare let $: any;
declare var jQuery: any;
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  //quickBuypopup and orderNowpopup
  @ViewChild('quickBuypopup', { static: false }) public quickBuypopupPopupModal: ModalDirective;
  @ViewChild('orderNowpopup', { static: false }) public orderNowPopupModal: ModalDirective;


  // Decalartion of Variables
  selectedProductid: any;
  selectedProductName: any;
  public productsSearchData: any;
  selectedtocartProduct = null;
 
  
  constructor(
    public router: Router,
    private productService: ProductService,
    private utilService: UtilsService,
    private cartService: CartService
  ) {

  }

  ngOnInit() {
    this.getAllproducts();
  }


  // Show addToCartPopup Popup Modal
  public quickBuyPopup() {
    this.quickBuypopupPopupModal.show();
  }

  // Hide addToCartPopup Popup Modal
  public hideQuickBuyPopup() {
    this.quickBuypopupPopupModal.hide();
  }

  // Show orderNowPopup Modal
  public orderNowPopup() {
    this.quickBuypopupPopupModal.hide();
    this.orderNowPopupModal.show();
  }

  // hideorderNowPopup Modal
  public hideorderNowPopup() {
    this.orderNowPopupModal.hide();
  }

  //getAllproducts
  public getAllproducts() {
    this.productService.getProducts().subscribe((product: any) => {
      this.productsSearchData = product.data.products;
      console.log('productsSearchData', this.productsSearchData);
    });
  }

  //Redirect to specific product
  specificProduct(product) {
    this.selectedProductid = product._id;
    this.selectedProductName = product.productName;
    const myurl = `product-details/${this.selectedProductid}`;
    this.router.navigateByUrl(myurl);
  }
  // addToCart
  addToCart(addCartproduct) {
    console.log('addCartproduct', addCartproduct);
    this.selectedtocartProduct = addCartproduct;
    this.cartService
      .addProductToCart({ productId: addCartproduct.productId, quantity: 1 })
      .subscribe(
        res => {
          console.log('resInCart', res);
         // this.cartService.updateCartCount();
          this.utilService.showToast(
            toastTypes.success,
            'Product added successfully'
          );
        },
        err => {
          if (err.status === 406) {
            this.utilService.showToast(toastTypes.error, 'Product out of stock');
          }
        }
      );
    if (addCartproduct.inStockCount <= 0) {
      this.utilService.showToast(toastTypes.error, '', 'Product out of stock');
      return;
    }
  }
  
}    
 
