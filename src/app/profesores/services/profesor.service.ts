import { Injectable } from '@angular/core';
import { Iprofesor } from '../interfaces/Iprofesor';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  url: string = 'http://localhost:3000'

  constructor( private _http: HttpClient ) { }

  private createAuthorizationHeader(): HttpHeaders {
    const token = localStorage.getItem('jwtToken');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getAll(): Observable<any> {
    const headers = this.createAuthorizationHeader()
    return this._http.get(`${this.url}/teachers/`, { headers })
  }

  add(profesor: Iprofesor, password: string): Observable<any> {
    const headers = this.createAuthorizationHeader()
    return this._http.post(`${this.url}/register/`, 
                            {username: profesor.name, password: password, isTeacher: true, teacher: profesor}, 
                            { headers });
  }

  edit(index: number, profesor: Iprofesor): Observable<any> {
    const headers = this.createAuthorizationHeader()
    return this._http.put(`${this.url}/teachers/${index}`, {
      name: profesor.name,
      lastname: profesor.lastname,
      phone: profesor.phone,
      specialism: profesor.specialism,
      degree: profesor.degree
    }, { headers })
  }

  delete(index: number): Observable<any>{
    const headers = this.createAuthorizationHeader()
    return this._http.delete(`${this.url}/teachers/${index}`, { headers })
  }
}
