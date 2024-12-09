import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iuser } from '../interface/iuser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) {}

  private createAuthorizationHeader(): HttpHeaders {
    const token = localStorage.getItem('token'); // Asumiendo que el token se almacena en localStorage
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  login(user: Iuser): Observable<any> {
    return this.http.post(`${this.url}/login`, {
      username: user.name,
      password: user.password,
    });
  }

  register(user: Iuser): Observable<any> {
    return this.http.post(`${this.url}/users`, {
      username: user.name,
      password: user.password,
    });
  }

  logout(): void {
    localStorage.removeItem('jwtToken');
    this.router.navigate(['/login']);
  }
}
