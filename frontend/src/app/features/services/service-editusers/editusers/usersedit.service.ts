import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Editusers } from '../../../../core/models/editusersmodel/editusers';


@Injectable({
  providedIn: 'root',
})
export class UserseditService {
  
  private http = inject(HttpClient)
 


usersedit(usersform:Editusers){
return this.http.put(`http://localhost:4000/formclient/${usersform.id}`,
    usersform)

}



}
