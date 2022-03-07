import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreFrontComponent } from './store-front/store-front.component';
import { StoreFrontNavComponent } from './store-front-nav/store-front-nav.component';
import { StoreFrontProductsNavComponent } from './store-front-products-nav/store-front-products-nav.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { StoreFrontCarouselComponent } from './store-front-carousel/store-front-carousel.component';
import { StoreFrontFeaturedComponent } from './store-front-featured/store-front-featured.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreFrontComponent,
    StoreFrontNavComponent,
    StoreFrontProductsNavComponent,
    StoreFrontCarouselComponent,
    StoreFrontFeaturedComponent,
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
