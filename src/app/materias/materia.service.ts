import { Injectable } from '@angular/core';
import { Imateria } from './interfaces/imateria';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {
  url: string = 'http://localhost:3000/subjects/'

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

  add(materia: Imateria): Observable<any> {
    const headers = this.createAuthorizationHeader()
    return this._http.post(this.url, materia, { headers });
  }

  edit(index: number, materia: Imateria): Observable<any> {
    const headers = this.createAuthorizationHeader()
    return this._http.put(`this.url${index}`, materia, { headers })
  }

  delete(index: number): Observable<any>{
    const headers = this.createAuthorizationHeader()
    return this._http.delete(`this.url${index}`, { headers })
  }
}
