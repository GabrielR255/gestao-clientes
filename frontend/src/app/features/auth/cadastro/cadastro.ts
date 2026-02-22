import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router'; // Importe o Router
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CadastroService } from '../services/service-cadastro/cadastro.service';
import { registerusers } from '../../../core/models/cadastromodel/cadastro.model';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  private fb = inject(FormBuilder);
  private cadastroService = inject(CadastroService);
  private router = inject(Router); 

  estaCarregando = false;

  registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  submit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.estaCarregando = true;

    const dadosUsuario = this.registerForm.value as registerusers;

    this.cadastroService.cadastro(dadosUsuario).subscribe({
      next: (res) => {
       
        setTimeout(() => {
          this.router.navigate(['/login']); 
        }, 3000);
      },
      error: (err) => {
       console.error(err)
      }
    });
  }
}