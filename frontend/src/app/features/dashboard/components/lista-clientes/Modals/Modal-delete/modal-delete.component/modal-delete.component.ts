import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Formclients } from '../../../../../../../core/models/clientformmodel/formclient.model';

@Component({
  selector: 'app-modal-delete',
  standalone: true,
  imports: [],
  templateUrl: './modal-delete.component.html',
  styleUrl: './modal-delete.component.css',
})
export class ModalDeleteComponent {
  
@Input() visibleDelete: Formclients | null = null; 

  @Output() confirmar = new EventEmitter<Formclients>();
  @Output() fechar = new EventEmitter<void>();

  confirmdelete() {
    this.confirmar.emit();
  }

  cancelardelete() {
    this.fechar.emit();
  }


}