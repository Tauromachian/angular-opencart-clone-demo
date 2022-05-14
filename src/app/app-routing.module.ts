import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoreFrontComponent } from './store-front/store-front.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchResultComponent } from './search-result/search-result.component';

// auth routes
import { AuthComponent } from './app-auth/auth/auth.component';
import { ViewLoginComponent } from './app-auth/view-login/view-login.component';
import { ViewRegisterComponent } from './app-auth/view-register/view-register.component';

const routes: Routes = [
  { path: '', component: StoreFrontComponent },
  { path: 'cart', component: ViewCartComponent },
  { path: 'product-details/:productId', component: ProductDetailsComponent },
  { path: 'search/:searchText', component: SearchResultComponent },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: '', component: ViewLoginComponent },
      { path: 'register', component: ViewRegisterComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
