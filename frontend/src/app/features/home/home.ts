import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

funcionalidades = [
    {
      icon: 'icons/gerenciamento.png',
      title: 'Gerenciamento centralizado',
      description: 'Controle e organize seus clientes em um só lugar'
    },
    {
      icon: 'icons/Notas.svg',
      title: 'Controle de atividades',
      description: 'Realize e registre todas as atividades dos seus clientes'
    },
    {
      icon: 'icons/Analise.png',
      title: 'Análises e relatórios',
      description: 'Visualize dados e acompanhe o crescimento do seu negócio'
    }
  ];


}
