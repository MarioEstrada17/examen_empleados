import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtomicButtonRoutingModule } from './atomic-button-routing.module';
import { AtomicButtonComponent } from './atomic-button.component';
import { MaterialModule } from '@Material/material.module';


@NgModule({
  declarations: [AtomicButtonComponent],
  imports: [
    CommonModule,
    AtomicButtonRoutingModule,
    MaterialModule
  ],
  exports: [
    AtomicButtonComponent
  ]
})
export class AtomicButtonModule { }
