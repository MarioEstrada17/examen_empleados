import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionsColumnTable, DisplayedColumns, TypeActionsTable } from '@Interfaces/atomic.interface';
import { AlertService } from '@Services/Alert/alert.service';
import { AreasService } from '@Services/Areas/areas.service';
import { ConfigService } from '@Services/Config/config.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent implements OnDestroy {

  displayColumns: Array<DisplayedColumns> = [
    {columnName: 'id_area', label: 'ID', actions: false},
    {columnName: 'descripcion', label: 'Descripción', actions: false},
    {columnName: 'acciones', label: 'Acciones', actions: true, typeActions: TypeActionsTable.buttons}
  ];
  actionsTable: Array<ActionsColumnTable> = [
    {icon: 'fa-solid fa-pen', action: 'editar', tooltip: 'Editar'},
    {icon: 'fa-regular fa-trash-can', action: 'eliminar', tooltip: 'Eliminar'},
  ];
  areas: Array<any> = [];

  destroy$ = new Subject<void>();

  constructor (
    private route: ActivatedRoute,
    private areasService: AreasService,
    private alert: AlertService,
    private configService: ConfigService
  ) {
    this.areas = this.route.snapshot.data['areas'];
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
  openDialog(): void {
    this.alert.openCommonDialog(
      'Crear área',
      this.configService.configModalAreas().form,
      this.configService.configModalAreas().fields,
      'form'
    ).pipe(takeUntil(this.destroy$)).subscribe((res) => {
      if (res !== false) {
        this.areasService.createArea(res).pipe(takeUntil(this.destroy$)).subscribe((resp) => {
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
          'Editar área',
          this.configService.configModalAreas().form,
          this.configService.configModalAreas().fields,
          'form',
          evt.data
        ).pipe(takeUntil(this.destroy$)).subscribe((res) => {
          if (res !== false) {
            this.areasService.updateArea(res, evt.data.id_area).pipe(takeUntil(this.destroy$)).subscribe((resp) => {
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
            this.areasService.deleteArea(evt.data.id_area).pipe(takeUntil(this.destroy$)).subscribe((resp) => {
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
    this.areasService.getAreas().pipe(takeUntil(this.destroy$)).subscribe((res) => {
      if (res.success) {
        this.areas = res.data.result;
      }
    });
  }
}
