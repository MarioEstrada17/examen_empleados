import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urls } from '@src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  common_url_login = urls.urlBack + '/user/';

  constructor(
    private http: HttpClient
  ) { }

  loginUser(data: any): Observable<any> {
    const params = data;
    return this.http.get<any>(`${this.common_url_login}loginUser`, {params});
  }
}
