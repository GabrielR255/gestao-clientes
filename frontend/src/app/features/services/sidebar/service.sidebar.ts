import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root',
})

export class ServiceSidebar {
  
private router = inject(Router)

logout(){

localStorage.removeItem('auth_token')

setTimeout(() => {
 this.router.navigate(['/login'])
}, 2000)

}



}
