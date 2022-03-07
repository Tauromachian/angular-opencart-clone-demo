import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreFrontComponent } from './store-front/store-front.component';
import { StoreFrontNavComponent } from './nav/app-nav.component';
import { StoreFrontProductsNavComponent } from './store-front-products-nav/store-front-products-nav.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { StoreFrontCarouselComponent } from './store-front-carousel/store-front-carousel.component';
import { StoreFrontFeaturedComponent } from './store-front-featured/store-front-featured.component';
import { FooterComponent } from './footer/footer.component';
import { ViewCartComponent } from './view-cart/view-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreFrontComponent,
    StoreFrontNavComponent,
    StoreFrontProductsNavComponent,
    StoreFrontCarouselComponent,
    StoreFrontFeaturedComponent,
    FooterComponent,
    ViewCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
