import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MaterialModule } from '@Material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AtomicDesignModule } from '@src/app/Atomic-design/atomic-design.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    AtomicDesignModule
  ]
})
export class LoginModule { }
