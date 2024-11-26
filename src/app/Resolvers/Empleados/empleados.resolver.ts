import { EmpleadosService } from '@Services/Empleados/empleados.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpleadosResolver implements Resolve<any> {

  constructor (
    private empleados: EmpleadosService
  ) {}

  resolve(): Observable<any> {
    return this.empleados.getEmpleados().pipe(map(res => res.data.result));
  }
}
