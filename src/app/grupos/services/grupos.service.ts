import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Igrupo } from '../interfaces/igrupo';

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  url: string = 'http://localhost:3000/groups/'

  constructor(private _http: HttpClient) { }

  private createAuthorizationHeader(): HttpHeaders {
    const token = localStorage.getItem('jwtToken');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getAll(): Observable<any> {
    const headers = this.createAuthorizationHeader()
    return this._http.get(this.url, { headers })
  }

  add(grupo: Igrupo){
    const headers = this.createAuthorizationHeader()
    return this._http.post(this.url, grupo, { headers });
  }
}
