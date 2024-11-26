import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urls } from '@src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  common_url_empleados = urls.urlBack + '/empleados/';

  constructor(
    private http: HttpClient
  ) {}

  createEmpleado(data: any): Observable<any> {
    const params = data;
    return this.http.post<any>(`${this.common_url_empleados}createEmpleado`, params);
  }
  updateEmpleado(data: any, id_empleados: number): Observable<any> {
    const params = data;
    return this.http.put<any>(`${this.common_url_empleados}updateEmpleado/${id_empleados}`, params);
  }
  deleteEmpleado(id_empleados: number): Observable<any> {
    return this.http.delete<any>(`${this.common_url_empleados}deleteEmpleado/${id_empleados}`, {});
  }
  getEmpleados(): Observable<any> {
    return this.http.get<any>(`${this.common_url_empleados}getEmpleados`, {});
  }
}
