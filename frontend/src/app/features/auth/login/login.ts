import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/service-login/login.service';
import { loginusers } from '../../../core/models/loginmodel';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private fb = inject(FormBuilder);
  private loginservices = inject(LoginService);
  private router = inject(Router);

  mensagemFeedback: { tipo: 'sucesso' | 'erro'; texto: string } | null = null;
  isLoading = false;

  Formlogin = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  submit(): void {
    if (this.Formlogin.invalid) {
      this.Formlogin.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    const dadoslogin = this.Formlogin.value as loginusers;

    this.loginservices.cadastro(dadoslogin).subscribe({
      next: (res) => {
        this.mensagemFeedback = { 
          tipo: 'sucesso', 
          texto: 'Login realizado! Redirecionando...' 
        };

        // Redireciona após 2 segundos
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 2000);
      },
      error: (err) => {
        this.isLoading = false;
        // Define a mensagem de erro
        this.mensagemFeedback = { 
          tipo: 'erro', 
          texto: 'E-mail ou senha incorretos.' 
        };
        
        // Limpa o erro após 4 segundos para o usuário tentar de novo
        setTimeout(() => this.mensagemFeedback = null, 4000);
      }
    });
  }
}