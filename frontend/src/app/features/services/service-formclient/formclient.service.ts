import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formclients } from '../../../core/models/clientformmodel/formclient.model';

@Injectable({
  providedIn: 'root',
})


export class FormclientService {
  
private http = inject(HttpClient)
private readonly API_URL = 'http://localhost:4000/formclient/clientcreate'

clientcad(clientsform: Formclients ): Observable<Formclients>{
  return this.http.post<Formclients>(this.API_URL, clientsform)
}

}
