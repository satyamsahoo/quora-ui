import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from "ngx-bootstrap";
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { UtilsService, toastTypes } from 'src/app/services/utils.service';
import { AuthService, AuthState } from 'src/app/modules/auth/auth.service';
import { ENVIRONMENT } from 'src/environments/environment';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  //Declaration of variables
  @ViewChild('addtocartpopup', { static: false }) public addToCartPopupPopupModal: ModalDirective;
  urlprefix = ENVIRONMENT.API.hostUrl;
  id: any;
  productName:any;
  brandName:any;
  price:any;
  productImg:any;
  slideImg: void;
  productId: any;
  liveURL: boolean;
  inStockCount:any;
  public selectedSlideImages: any;
  public selectedSlideId: any;
  public a:boolean =true;

constructor(
  private router: Router,
  private route: ActivatedRoute,
  private productService: ProductService,
  private utilService: UtilsService,
  private authService: AuthService,
  private cartService: CartService
) { }

  ngOnInit() {

    this.id = this.route.snapshot.params.id;
    console.log('selectedProductID', this.id);
    this.getproductData();
  }
   // Show addToCartPopup Popup Modal
   public addToCartPopup() {
    this.addToCartPopupPopupModal.show();
    this.addToCart();
  }

  // Hide addToCartPopup Popup Modal
  public hideaddToCartPopup() {
    this.addToCartPopupPopupModal.hide();
  }

    // getproductData
    getproductData() {
      this.productService.getspecificProduct(this.id).subscribe((res: any) => {
       console.log('getSpecificProductData', res);
        this.productName = res.data.productDetail.productName;
        this.brandName = res.data.productDetail.brand.brandName;
        this.liveURL = res.data.productDetail.images[0].liveURL;  
        this.productImg = res.data.productDetail.images[0].path;
        this.slideImg = res.data.productDetail.images;
        this.price = res.data.productDetail.finalPrice;
        this.productId = res.data.productDetail.productId;
        this.inStockCount = res.data.productDetail.inStockCount;
      });
    }
     // imgClicked
  public imgClicked(selectedSlideImageId, slideImages, event) {
    let selectedSlideImage = Array(slideImages).filter(
      (x) => x.id == selectedSlideImageId
    );
    this.selectedSlideImages = selectedSlideImage[0].path;
    this.selectedSlideId = selectedSlideImage[0].id;
    this.productImg = this.selectedSlideImages;
  }

// addToCart
addToCart() {

  this.cartService
    .addProductToCart({ productId: this.productId, quantity: 1 })
    .subscribe(
      res => {
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
  if (this.inStockCount <= 0) {
    this.utilService.showToast(toastTypes.error, '', 'Product out of stock');
    return;
  }
}

order(){
  this.router.navigate(['/order-steps']);
}
continueShopping(){
  this.router.navigate(['/search']); 
}

goToCart(){
  this.router.navigate(['/shopping-cart']); 
}

}
