import { Injectable, signal, inject } from '@angular/core';
import { Formclients } from '../../../../../../../core/models/clientformmodel/formclient.model';

import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';



@Injectable({
  providedIn: 'root',
})

export class DeleteService {
  
private http = inject(HttpClient);
  private readonly API_URL_DELETE = 'http://localhost:4000/formclient/delete'; 

  private listclientes = signal<Formclients[]>([]);
  public clientslist = this.listclientes.asReadonly();

  setClients(clients: Formclients[]) {
    this.listclientes.set(clients);
  }

  excluirCliente(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL_DELETE}/${id}`).pipe(
      tap(() => {
        this.listclientes.update(lista => lista.filter(c => c.id !== id));
      })
    );
  }


}
