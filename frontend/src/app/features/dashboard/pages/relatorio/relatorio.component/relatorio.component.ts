import { Component } from '@angular/core';
import { SidebarNav } from '../../../components/sidebarnav/sidebar-nav/sidebar-nav';
import { ListaClientesComponent } from '../../../components/lista-clientes/lista.clientes.component/lista.clientes.component';

@Component({
  selector: 'app-relatorio.component',
  standalone:true,
  imports: [SidebarNav, ListaClientesComponent],
  templateUrl: './relatorio.component.html',
  styleUrl: './relatorio.component.css',
})
export class RelatorioComponent {

}
