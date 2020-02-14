import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerListComponent } from './banner-list/banner-list.component';

@NgModule({
  declarations: [BannerListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BannerListComponent
  ]
})
export class BannerModule { }
