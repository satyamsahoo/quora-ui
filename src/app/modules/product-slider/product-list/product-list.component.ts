
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from "ngx-bootstrap";
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  //quickBuypopup and orderNowpopup
  @ViewChild('quickBuypopup', { static: false }) public quickBuypopupPopupModal: ModalDirective;
  @ViewChild('orderNowpopup', { static: false }) public orderNowPopupModal: ModalDirective;

  // bannerSliderOptions
  bannerSliderOptions = {
    items: 3,
    margin: 40,
    nav: true,
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
        nav: true,
        loop: true
      },
      600: {
        items: 3,
        nav: true,
        loop: true
      },
      1000: {
        items: 4,
        nav: true,
        loop: true
      }
    },
  };

  constructor(
    public router: Router,
  ) {
    
   }

  ngOnInit() {
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
public orderNowPopup(){
  this.quickBuypopupPopupModal.hide();
  this.orderNowPopupModal.show();
}

 // hideorderNowPopup Modal
public hideorderNowPopup(){
  this.orderNowPopupModal.hide();
}

//Redirect
card(){
  this.router.navigate(['/product-details']);
}

}
