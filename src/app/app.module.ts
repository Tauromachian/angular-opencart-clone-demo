import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreFrontComponent } from './store-front/store-front.component';
import { StoreFrontNavComponent } from './store-front-nav/store-front-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreFrontComponent,
    StoreFrontNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
