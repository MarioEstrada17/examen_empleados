import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtomicBackSectionRoutingModule } from './atomic-back-section-routing.module';
import { MaterialModule } from '@Material/material.module';
import { AtomicBackSectionComponent } from './atomic-back-section.component';


@NgModule({
  declarations: [AtomicBackSectionComponent],
  imports: [
    CommonModule,
    AtomicBackSectionRoutingModule,
    MaterialModule
  ],
  exports: [
    AtomicBackSectionComponent
  ]
})
export class AtomicBackSectionModule { }
