import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoreFrontComponent } from './store-front/store-front.component';
import { ViewCartComponent } from './view-cart/view-cart.component';

const routes: Routes = [
  { path: '', component: StoreFrontComponent },
  { path: 'cart', component: ViewCartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
