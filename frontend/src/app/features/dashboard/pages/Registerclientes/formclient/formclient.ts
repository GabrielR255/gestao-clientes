import { Component, inject } from '@angular/core';
import { SidebarNav } from '../../../components/sidebarnav/sidebar-nav/sidebar-nav';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { Formclients } from '../../../../../core/models/clientformmodel/formclient.model';
import { FormclientService } from '../../../../services/service-formclient/formclient.service';
import { Router } from '@angular/router';
import { createClientForm } from '../../../../factories/client-form/client-form.factory';

@Component({
  selector: 'app-formclient',
  standalone: true,
  imports: [SidebarNav, ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './formclient.html',
  styleUrl: './formclient.css',
})
export class Formclient {

  private fb = inject(FormBuilder);
  private serviceFormclient = inject(FormclientService);
  private router = inject(Router);

  estaCarregando = false;

  clientform = createClientForm(this.fb);

  submit(): void {

    if (this.estaCarregando) return;
    if (this.clientform.invalid) {
      this.clientform.markAllAsTouched();
      return;
    }

    this.estaCarregando = true;

    const formclientsdate = this.clientform.value as Formclients;

    this.serviceFormclient.clientcad(formclientsdate).subscribe({
      next: () => {

        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 1500);

      },
      error: (err) => {

        console.error(err);

        this.estaCarregando = false;

        alert(err.error?.message || 'Erro ao cadastrar. Tente novamente.');

      }
    });
  }
}