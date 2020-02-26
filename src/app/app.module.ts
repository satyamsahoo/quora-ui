import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
import {AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BannerModule } from './modules/banner/banner.module';

import { SearchComponent } from './components/search/search.component';
import { ProductSliderModule } from './modules/product-slider/product-slider.module';
import { AuthModule } from './modules/auth/auth.module';
import { OwlModule } from 'ngx-owl-carousel';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ModalModule } from 'ngx-bootstrap';

import { OrderStepsModule } from './modules/order-steps/order-steps.module';
import { TeaStoriesComponent } from './components/tea-stories/tea-stories.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    ShoppingCartComponent,
    ProductDetailsComponent,
    TeaStoriesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    BannerModule,
    FormsModule,
    ReactiveFormsModule,
    ProductSliderModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    HttpClientModule,
    AuthModule,
    OwlModule,
    OrderStepsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
