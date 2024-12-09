import { IHorarioShow } from './../interfaces/i-horario-show';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Horario } from '../interfaces/horario';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {
  url: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }
  private createAuthorizationHeader(): HttpHeaders {
    const token = localStorage.getItem('jwtToken');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  addHorario(id: string, horario: Horario[]): Observable<any>{
    const headers = this.createAuthorizationHeader()
    return this.http.post(`${this.url}/schedules/${id}`, horario, { headers })
  }

  getHorario(id: string): Observable<IHorarioShow[]>{
    const headers = this.createAuthorizationHeader()
    return this.http.get<IHorarioShow[]>(`${this.url}/schedules/${id}`, { headers })
  }

  getHorarioByTeacher(id: string): Observable<IHorarioShow[]> {
    const headers = this.createAuthorizationHeader()
    return this.http.get<IHorarioShow[]>(`${this.url}/schedules/teacher/${id}`, { headers })
  }
}
