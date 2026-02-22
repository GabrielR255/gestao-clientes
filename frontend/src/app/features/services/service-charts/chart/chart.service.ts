import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ChartService {
  
private http = inject(HttpClient)
private readonly API_URL = 'http://localhost:4000/formclient/dashboardstatus' 


getChart(): Observable<any> {
    return this.http.get<any>(this.API_URL);
  }

}
