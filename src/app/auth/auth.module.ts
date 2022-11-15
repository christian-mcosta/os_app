import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { MaterialModule } from "../shared/material.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
