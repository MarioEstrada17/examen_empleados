import { Component, EventEmitter, Input, Optional, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActionsColumnTable, DisplayedColumns } from '@Interfaces/atomic.interface';

@Component({
  selector: 'app-atomic-table',
  templateUrl: './atomic-table.component.html',
  styleUrls: ['./atomic-table.component.scss']
})
export class AtomicTableComponent {

  displayedColumns: Array<DisplayedColumns> = []
  onlyDisplayedColumns: string[] = [];
  @Input () set setDisplayedColumns(value: Array<DisplayedColumns>) {
    this.displayedColumns = value;
    value.forEach((display) => {
      this.onlyDisplayedColumns.push(display.columnName);
    });
  }
  @Input () hasPaginator: boolean = false;
  tableInformation: Array<any> = [];
  @Input () set setTableInformation(value: Array<any>) {
    this.tableInformation = value;
    this.initDataSource();
  }
  @Input () configurationTable: Array<any> = [];
  @Output () actionLink = new EventEmitter();
  @Output () actionButton = new EventEmitter();
  @Output () clickButton = new EventEmitter();
  @Optional ()
  @Input () actionButtons: Array<ActionsColumnTable> = [];
  @Optional ()
  @Input () imgTag: string = '';
  dataSource!: MatTableDataSource<any>;
  tamanioTable = 0;
  @ViewChild('paginator', {static: false}) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    if (this.hasPaginator) {
      this.dataSource.paginator = this.paginator;
    }
  }
  initDataSource(): void {
    this.dataSource = new MatTableDataSource(this.tableInformation);
    this.tamanioTable = this.dataSource.data.length;
    if (this.hasPaginator) {
      this.dataSource.paginator = this.paginator;
    }
  }
  actionLinked(action: string, element: any): void {
    const data = {
      action,
      data: element
    };
    this.actionButton.emit(data);
  }
}
