import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewLoginComponent } from './view-login/view-login.component';
import { AuthComponent } from './auth/auth.component';



@NgModule({
  declarations: [
    ViewLoginComponent,
    AuthComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AppAuthModule { }
