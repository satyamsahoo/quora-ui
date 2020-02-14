import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { OwlModule } from 'ngx-owl-carousel';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    OwlModule,
    ModalModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductSliderModule { }
