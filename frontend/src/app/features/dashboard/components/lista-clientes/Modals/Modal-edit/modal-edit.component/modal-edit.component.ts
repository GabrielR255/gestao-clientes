import { Component, Input, Output, EventEmitter, inject, OnChanges } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { createClientForm } from '../../../../../../factories/client-form/client-form.factory';
import { ClientStatus, Formclients } from '../../../../../../../core/models/clientformmodel/formclient.model';

@Component({
  selector: 'app-modal-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal-edit.component.html',
  styleUrl: './modal-edit.component.css',
})


export class ModalEditComponent implements OnChanges {
  private fb = inject(FormBuilder);

  @Input() visibleEdit: Formclients | null = null; 
  @Output() salvar = new EventEmitter<Formclients>();
  @Output() fechar = new EventEmitter<void>();

  clientedit = createClientForm(this.fb);

  ngOnChanges() {
    if (this.visibleEdit) {
      this.clientedit.patchValue(this.visibleEdit);
      this.clientedit.markAsPristine(); 
    }
  }

  submit(event: Event) {
    event.preventDefault();
    event.stopPropagation(); 
    if (this.clientedit.invalid || !this.visibleEdit) return;

    const formValue = this.clientedit.getRawValue();
    const clienteAtualizado: Formclients = {
      ...this.visibleEdit,
      ...formValue,
      status: formValue.status as ClientStatus
    };

    this.salvar.emit(clienteAtualizado);
  }

  cancelar() {
    this.fechar.emit();
  }
}