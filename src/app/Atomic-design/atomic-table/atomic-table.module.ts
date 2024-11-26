import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtomicTableRoutingModule } from './atomic-table-routing.module';
import { MaterialModule } from '@Material/material.module';
import { AtomicTableComponent } from './atomic-table.component';


@NgModule({
  declarations: [AtomicTableComponent],
  imports: [
    CommonModule,
    AtomicTableRoutingModule,
    MaterialModule
  ],
  exports: [
    AtomicTableComponent
  ]
})
export class AtomicTableModule { }
