import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceSidebar } from '../../../../services/sidebar/service.sidebar';


@Component({
  selector: 'app-sidebar-nav',
  standalone:true,
  imports: [RouterLink],
  templateUrl: './sidebar-nav.html',
  styleUrl: './sidebar-nav.css',
})
export class SidebarNav {

  private Servicesidebar = inject(ServiceSidebar)

ismenuOpen = false

onLogout(){
  this.Servicesidebar.logout()
}

closeMenu(){
this.ismenuOpen = false

}



}
