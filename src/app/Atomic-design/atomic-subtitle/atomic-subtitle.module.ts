import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtomicSubtitleRoutingModule } from './atomic-subtitle-routing.module';
import { MaterialModule } from '@Material/material.module';
import { AtomicSubtitleComponent } from './atomic-subtitle.component';


@NgModule({
  declarations: [AtomicSubtitleComponent],
  imports: [
    CommonModule,
    AtomicSubtitleRoutingModule,
    MaterialModule
  ],
  exports: [
    AtomicSubtitleComponent
  ]
})
export class AtomicSubtitleModule { }
