import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreasRoutingModule } from './areas-routing.module';
import { MaterialModule } from '@Material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AtomicDesignModule } from '@src/app/Atomic-design/atomic-design.module';
import { MenuModule } from '@Shared/menu/menu.module';
import { AreasComponent } from './areas.component';


@NgModule({
  declarations: [AreasComponent],
  imports: [
    CommonModule,
    AreasRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    AtomicDesignModule,
    MenuModule
  ]
})
export class AreasModule { }
