import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '@Material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AtomicDesignModule } from '@src/app/Atomic-design/atomic-design.module';
import { MenuModule } from '@Shared/menu/menu.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    AtomicDesignModule,
    MenuModule
  ]
})
export class HomeModule { }
