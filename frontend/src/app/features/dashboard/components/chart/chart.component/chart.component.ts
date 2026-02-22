import { Component, inject, signal } from '@angular/core';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { ChartConfiguration, ChartData } from 'chart.js';
import { ChartService } from '../../../../services/service-charts/chart/chart.service';

@Component({
  selector: 'app-chart',
  imports: [BaseChartDirective],
  providers: [provideCharts(withDefaultRegisterables())],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
})
export class ChartComponent {

private statsService = inject(ChartService);
  
  public isLoading = signal<boolean>(true);
  public lineChartData = signal<ChartData<'line'> | undefined>(undefined);
  public pieChartData = signal<ChartData<'pie'> | undefined>(undefined);

  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: { 
      y: { beginAtZero: true, grid: { color: '#f3f4f6' } },
      x: { grid: { display: false } }
    },
    plugins: { legend: { display: false } }
  };

  public pieChartOptions: ChartConfiguration<'pie'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { 
      legend: { 
        position: 'right', 
        labels: { usePointStyle: true, padding: 20 } 
      } 
    }
  };

  ngOnInit() {

    this.statsService.getChart().subscribe({
      next: (data) => {
        this.lineChartData.set({
          labels: data.crescimento.meses,
          datasets: [{
            data: data.crescimento.valores,
            label: 'Clientes',
            borderColor: '#407bff',
            backgroundColor: (context) => {
              const canvas = context.chart.ctx;
              const gradient = canvas.createLinearGradient(0, 0, 0, 400);
              gradient.addColorStop(0, 'rgba(64, 123, 255, 0.4)');
              gradient.addColorStop(1, 'rgba(64, 123, 255, 0)');
              return gradient;
            },
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#fff',
            pointBorderColor: '#407bff'
          }]
        });

        this.pieChartData.set({
          labels: ['Ativos', 'Inativos', 'Pendentes'],
          datasets: [{
            data: [data.status.ativos, data.status.inativos, data.status.pendentes],
            backgroundColor: ['#4ade80', '#3b82f6', '#f87171']
          }]
        });
        
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Erro:', err);
        this.isLoading.set(false);
      }
    });
  }



}
