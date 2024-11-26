import { AreasService } from '@Services/Areas/areas.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AreasResolver implements Resolve<any> {

  constructor (
    private areas: AreasService
  ) {}

  resolve(): Observable<any> {
    return this.areas.getAreas().pipe(map(res => res.data.result));
  }
}
