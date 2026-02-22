import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { registerusers } from '../../../../core/models/cadastromodel/cadastro.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  
private http = inject(HttpClient)
private readonly API_URL = 'http://localhost:4000/registerusers/Createusers'


cadastro(users:registerusers): Observable<registerusers>{
return this.http.post<registerusers>(this.API_URL, users);
}


}


