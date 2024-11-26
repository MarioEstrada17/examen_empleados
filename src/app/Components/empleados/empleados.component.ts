import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DisplayedColumns, TypeActionsTable, ActionsColumnTable } from '@Interfaces/atomic.interface';
import { AlertService } from '@Services/Alert/alert.service';
import { ConfigService } from '@Services/Config/config.service';
import { EmpleadosService } from '@Services/Empleados/empleados.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnDestroy {

  areas: Array<any> = [];
  displayColumns: Array<DisplayedColumns> = [
    {columnName: 'id_empleados', label: 'ID', actions: false},
    {columnName: 'nombreCompleto', label: 'Nombre completo', actions: false},
    {columnName: 'correo', label: 'Correo', actions: false},
    {columnName: 'telefono', label: 'Teléfono', actions: false},
    {columnName: 'desc_area', label: 'Área', actions: false},
    {columnName: 'acciones', label: 'Acciones', actions: true, typeActions: TypeActionsTable.buttons}
  ];
  actionsTable: Array<ActionsColumnTable> = [
    {icon: 'fa-solid fa-pen', action: 'editar', tooltip: 'Editar'},
    {icon: 'fa-regular fa-trash-can', action: 'eliminar', tooltip: 'Eliminar'},
  ];
  empleados: Array<any> = [];

  destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private alert: AlertService,
    private empleadosService: EmpleadosService,
    private configService: ConfigService
  ) {
    this.empleados = this.route.snapshot.data['empleados'];
    this.areas = this.route.snapshot.data['areas'];
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
  openDialog(): void {
    this.alert.openCommonDialog(
      'Crear empleado',
      this.configService.configModalEmpleados(this.areas).form,
      this.configService.configModalEmpleados(this.areas).fields,
      'form-2col',
      undefined,
      900,
      900
    ).pipe(takeUntil(this.destroy$)).subscribe((res) => {
      if (res !== false) {
        this.empleadosService.createEmpleado(res).pipe(takeUntil(this.destroy$)).subscribe((resp) => {
          if (resp.success) {
            this.getAreas();
          }
        });
      }
    });
  }
  actionButton(evt: any): void {
    switch(evt.action) {
      case 'editar':
        this.alert.openCommonDialog(
          'Crear empleado',
          this.configService.configModalEmpleados(this.areas).form,
          this.configService.configModalEmpleados(this.areas).fields,
          'form-2col',
          evt.data,
          900,
          900
        ).pipe(takeUntil(this.destroy$)).subscribe((res) => {
          if (res !== false) {
            this.empleadosService.updateEmpleado(res, evt.data.id_empleados).pipe(takeUntil(this.destroy$)).subscribe((resp) => {
              if (resp.success) {
                this.getAreas();
              }
            });
          }
        });
        break;
      case 'eliminar':
        this.alert.open('DELETE').subscribe((res) => {
          if (res) {
            this.empleadosService.deleteEmpleado(evt.data.id_empleados).pipe(takeUntil(this.destroy$)).subscribe((resp) => {
              if (resp.success) {
                this.getAreas();
              }
            });
          }
        });
        break;
    }
  }
  getAreas(): void {
    this.empleadosService.getEmpleados().pipe(takeUntil(this.destroy$)).subscribe((res) => {
      if (res.success) {
        this.empleados = res.data.result;
      }
    });
  }
}
