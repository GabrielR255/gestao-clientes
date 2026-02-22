import { Component, inject, OnInit, ChangeDetectorRef, signal } from '@angular/core';
import { SidebarNav } from '../../../components/sidebarnav/sidebar-nav/sidebar-nav';
import { ChartComponent } from '../../../components/chart/chart.component/chart.component';
import { ListclientsService } from '../../../../../core/services/listclients/listclients.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-layoutdashboard',
  standalone: true,
  imports: [SidebarNav, ChartComponent],
  templateUrl: './layoutdashboard.component.html',
  styleUrl: './layoutdashboard.component.css',
})
export class LayoutdashboardComponent implements OnInit {
  private dashboardService = inject(ListclientsService);
  private cdr = inject(ChangeDetectorRef);

  listacomponent = signal<any[]>([]);

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados() {
    this.dashboardService.getStats().pipe(
      map((clients: any[]) => {
        const total = clients.length;
        const ativos = clients.filter(c => c.status?.toLowerCase() === 'ativo').length;

        const trintaDiasAtras = new Date();
        trintaDiasAtras.setDate(trintaDiasAtras.getDate() - 30);

        const novos = clients.filter(c => {
          if (!c.createdAt) return false;
          return new Date(c.createdAt) >= trintaDiasAtras;
        }).length;

        return [
          { title: 'Total de clientes', subtitle: 'Cadastrados', number: total, icon: 'icons/perfil-de-usuario.png' },
          { title: 'Clientes ativos', subtitle: 'Em operação', number: ativos, icon: 'icons/verificacao.png' },
          { title: 'Novos cadastros', subtitle: 'Este mês', number: novos, icon: 'icons/adicionar-usuario.png' }
        ];
      })
    ).subscribe({
      next: (dados) => {
        this.listacomponent.set(dados);
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Erro ao carregar dashboard', err)
    });
  }
}