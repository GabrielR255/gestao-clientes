import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Formclients } from '../../../../../../../core/models/clientformmodel/formclient.model';

@Injectable({
  providedIn: 'root',
})
export class ServiceEditclient {
  
private http = inject(HttpClient)



editclients(clietseditform:Formclients){
return this.http.put(`http://localhost:4000/formclient/${clietseditform.id}`,
    clietseditform)
}

}
