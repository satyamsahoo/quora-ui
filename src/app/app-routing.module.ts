import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

// Routes
const routes: Routes = [
  { path: 'search', component: SearchComponent},
  { path: 'shopping-cart', component: ShoppingCartComponent},
  { path: 'product-details', component: ProductDetailsComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: '404', pathMatch: 'full' },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
