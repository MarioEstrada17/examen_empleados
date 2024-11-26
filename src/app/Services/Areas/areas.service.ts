import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urls } from '@src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreasService {

  common_url_areas = urls.urlBack + '/areas/';

  constructor(
    private http: HttpClient
  ) { }

  createArea(data: any): Observable<any> {
    const params = data;
    return this.http.post<any>(`${this.common_url_areas}createArea`, params);
  }
  updateArea(data: any, id_area: number): Observable<any> {
    const params = data;
    return this.http.put<any>(`${this.common_url_areas}updateArea/${id_area}`, params);
  }
  deleteArea(id_area: number): Observable<any> {
    return this.http.delete<any>(`${this.common_url_areas}deleteArea/${id_area}`, {});
  }
  getAreas(): Observable<any> {
    return this.http.get<any>(`${this.common_url_areas}getAreas`, {});
  }
}
