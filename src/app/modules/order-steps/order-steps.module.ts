
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderStepsWrapperComponent } from './order-steps-wrapper/order-steps-wrapper.component';
import { DeliveryAddressComponent } from './delivery-address/delivery-address.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { OrderStepsRoutingModule } from './order-steps-routing.module';



@NgModule({
  declarations: [OrderStepsWrapperComponent, DeliveryAddressComponent, PaymentMethodComponent, OrderConfirmationComponent],
  imports: [
    CommonModule,
    OrderStepsRoutingModule
  ],
  exports:[
    OrderStepsWrapperComponent, 
    DeliveryAddressComponent, 
    PaymentMethodComponent,
    OrderConfirmationComponent
  ]

})
export class OrderStepsModule { }

