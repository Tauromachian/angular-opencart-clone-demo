import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewLoginComponent } from './view-login/view-login.component';
import { AuthComponent } from './auth/auth.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ViewLoginComponent, AuthComponent],
  imports: [CommonModule, RouterModule],
})
export class AppAuthModule {}
