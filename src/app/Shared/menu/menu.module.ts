import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { MaterialModule } from '@Material/material.module';


@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MaterialModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
