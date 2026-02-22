import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Formclients } from '../../models/clientformmodel/formclient.model';


@Injectable({
  providedIn: 'root',
})

export class ListclientsService {
  private http = inject(HttpClient);

  
getStats() {
  const urlComCacheBuster = `http://localhost:4000/formclient/list-clients?t=${new Date().getTime()}`;
  
  return this.http.get<Formclients[]>(urlComCacheBuster, {
    headers: {
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache'
    }
  });
}


}