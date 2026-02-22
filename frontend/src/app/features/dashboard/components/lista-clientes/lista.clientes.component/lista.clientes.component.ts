import { Component, inject, OnInit, ChangeDetectorRef, signal, computed } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

import { DeleteService } from '../Modals/services/service-del/delete.service';
import { ListclientsService } from '../../../../../core/services/listclients/listclients.service';
import { ServiceEditclient } from '../Modals/services/editclient/service.editclient';
import { ModalEditComponent } from '../Modals/Modal-edit/modal-edit.component/modal-edit.component';
import { ModalDeleteComponent } from '../Modals/Modal-delete/modal-delete.component/modal-delete.component';
import { Formclients } from '../../../../../core/models/clientformmodel/formclient.model';

@Component({
  selector: 'app-lista-clientes',
  standalone: true,
  imports: [NgClass, ModalDeleteComponent, ModalEditComponent, RouterLink],
  templateUrl: './lista.clientes.component.html',
  styleUrl: './lista.clientes.component.css',
})
export class ListaClientesComponent implements OnInit {
  private deleteService = inject(DeleteService);
  private editService = inject(ServiceEditclient);
  private listService = inject(ListclientsService);
  private cdr = inject(ChangeDetectorRef);
  
  clientes = signal<Formclients[]>([]);
  searchterm = signal<string>('');

  clientesFiltrados = computed(() => {
    const term = this.searchterm().toLowerCase();
    const lista = this.clientes();
    
    if (!term) return lista;

    return lista.filter(c =>
      c.name.toLowerCase().includes(term) ||
      c.email.toLowerCase().includes(term)
    );
  });

  clienteParaEditar: Formclients | null = null;
  clienteParaExcluir: Formclients | null = null;

  isModalEditOpen = false;
  isModalDeleteOpen = false;

  ngOnInit(): void {
    this.carregarClientes();
  }

  carregarClientes(): void {
    this.listService.getStats().subscribe({
      next: (dados) => {
        this.clientes.set(dados); 
        this.cdr.detectChanges(); 
      },
      error: (err) => console.error('Erro ao carregar clientes', err)
    });
  }

  atualizarBusca(event: Event): void {
    const valor = (event.target as HTMLInputElement).value;
    this.searchterm.set(valor);
  }

  abrirModalDelete(cliente: Formclients): void {
    this.clienteParaExcluir = cliente;
    this.isModalDeleteOpen = true;
  }

  fecharModalDelete(): void {
    this.isModalDeleteOpen = false;
    this.clienteParaExcluir = null;
    this.cdr.detectChanges();
  }

  confirmarExclusao(): void {
    if (!this.clienteParaExcluir?.id) return;

    this.deleteService.excluirCliente(this.clienteParaExcluir.id).subscribe({
      next: () => {
        this.clientes.update(prev => prev.filter(c => c.id !== this.clienteParaExcluir?.id));
        
        this.isModalDeleteOpen = false;
        this.clienteParaExcluir = null;
        
        this.cdr.markForCheck();
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Erro ao excluir: ' + err.message)
    });
  }

  abrirModalEdit(cliente: Formclients): void {
    this.clienteParaEditar = { ...cliente }; 
    this.isModalEditOpen = true;
  }

  fecharModalEdit(): void {
    this.isModalEditOpen = false;
    this.clienteParaEditar = null;
    this.cdr.detectChanges();
    (document.activeElement as HTMLElement)?.blur();
  }

  editClient(clienteEditado: Formclients): void {
    this.editService.editclients(clienteEditado).subscribe({
      next: () => {
        this.clientes.update(prev => 
          prev.map(c => c.id === clienteEditado.id ? clienteEditado : c)
        );

        this.isModalEditOpen = false;
        this.clienteParaEditar = null;
        this.cdr.markForCheck(); 
        this.cdr.detectChanges(); 
      }
    });
  }

  getStatuslist(status: string): string {
    switch (status?.toLowerCase()) {
      case 'ativo': return 'bg-green-600';
      case 'pendente': return 'bg-red-600';
      case 'inativo': return 'bg-black';
      default: return 'bg-gray-600';
    }
  }
}