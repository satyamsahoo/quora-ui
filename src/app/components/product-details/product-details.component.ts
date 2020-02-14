import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from "ngx-bootstrap";
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  @ViewChild('addtocartpopup', { static: false }) public addToCartPopupPopupModal: ModalDirective;
  constructor(
    public router: Router
  ) { }
public a:boolean =true;
  ngOnInit() {
  }
   // Show addToCartPopup Popup Modal
   public addToCartPopup() {

    this.addToCartPopupPopupModal.show();
  }

  // Hide addToCartPopup Popup Modal
  public hideaddToCartPopup() {
    this.addToCartPopupPopupModal.hide();
  }
//   test(){
// this.a =true;
// console.log('this.a,',this.a);
//   }
order(){
  this.router.navigate(['/order-steps-wrapper']);
}

}
