import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadosRoutingModule } from './empleados-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@Material/material.module';
import { AtomicDesignModule } from '@src/app/Atomic-design/atomic-design.module';
import { MenuModule } from '@Shared/menu/menu.module';
import { EmpleadosComponent } from './empleados.component';


@NgModule({
  declarations: [EmpleadosComponent],
  imports: [
    CommonModule,
    EmpleadosRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    AtomicDesignModule,
    MenuModule
  ]
})
export class EmpleadosModule { }
