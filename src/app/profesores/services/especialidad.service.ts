import { Injectable } from '@angular/core';
import { Iespecialidad } from '../interfaces/iespecialidad';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {
  url: string = 'http://localhost:3000/specialisms/'

  constructor(  private _http: HttpClient ) { }

  private createAuthorizationHeader(): HttpHeaders {
    const token = localStorage.getItem('jwtToken');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getAll(): Observable<Iespecialidad[]> {
    const headers = this.createAuthorizationHeader()
    return this._http.get<Iespecialidad[]>(this.url, {headers})
  }
}
