import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewLoginComponent } from './view-login/view-login.component';
import { AuthComponent } from './auth/auth.component';

import { RouterModule } from '@angular/router';
import { ViewRegisterComponent } from './view-register/view-register.component';

@NgModule({
  declarations: [ViewLoginComponent, AuthComponent, ViewRegisterComponent],
  imports: [CommonModule, RouterModule],
})
export class AppAuthModule {}
