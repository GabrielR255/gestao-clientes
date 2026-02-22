import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginusers } from '../../../../core/models/loginmodel';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class LoginService {
  private http = inject(HttpClient);
  private readonly API_URL = 'http://localhost:4000/registerusers/Loginusers';

  cadastro(userslog: loginusers): Observable<any> {
    return this.http.post<any>(this.API_URL, userslog).pipe(
      tap((res) => {
        if (res && res.token) {
          localStorage.setItem('auth_token', res.token);
        }
      })
    );
  }

  getToken() {
    return localStorage.getItem('auth_token');
  }

  logout() {
    localStorage.removeItem('auth_token');
  }
}