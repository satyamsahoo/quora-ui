import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderStepsWrapperComponent } from './order-steps-wrapper/order-steps-wrapper.component';
import { DeliveryAddressComponent } from './delivery-address/delivery-address.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';


const routes: Routes = [
  { path: 'order-steps-wrapper', component: OrderStepsWrapperComponent},
  { path: 'deliver-address', component: DeliveryAddressComponent},
  { path: 'payment-method', component: PaymentMethodComponent},
  { path: 'order-confirmation', component: OrderConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderStepsRoutingModule { }
