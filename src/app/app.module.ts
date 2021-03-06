import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { StoreFrontComponent } from './store-front/store-front.component';
import { StoreFrontNavComponent } from './nav/app-nav.component';
import { StoreFrontProductsNavComponent } from './store-front-products-nav/store-front-products-nav.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { StoreFrontCarouselComponent } from './store-front-carousel/store-front-carousel.component';
import { StoreFrontFeaturedComponent } from './store-front-featured/store-front-featured.component';
import { FooterComponent } from './footer/footer.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BaseCardComponent } from './base-card/base-card.component';

import { AppAuthModule } from "./app-auth/app-auth.module";

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
    PageNotFoundComponent,
    BaseCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    AppAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
