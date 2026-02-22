import { subMonths, startOfMonth, endOfMonth, isWithinInterval, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import type { FormClientRepository } from '../domain/formusers.js';

export class GetDashboardStatsUseCase {
  constructor(private repository: FormClientRepository) {}

  async execute() {
    const { statsByStatus, allClients } = await this.repository.getDashboardStats();

    const hoje = new Date();
    const mesesLabels: string[] = [];
    const valoresCrescimento: number[] = [];

    for (let i = 5; i >= 0; i--) {
      const dataReferencia = subMonths(hoje, i);
      const inicioMes = startOfMonth(dataReferencia);
      const fimMes = endOfMonth(dataReferencia);

      const nomeMes = format(dataReferencia, 'MMM', { locale: ptBR });
      mesesLabels.push(nomeMes.charAt(0).toUpperCase() + nomeMes.slice(1));

      const contagemMes = allClients.filter(cliente =>
        isWithinInterval(new Date(cliente.createdAt), {
          start: inicioMes,
          end: fimMes
        })
      ).length;

      valoresCrescimento.push(contagemMes);
    }

    const formattedStatus = {
      ativos: statsByStatus.find(s => s.status === 'ativo')?._count.status || 0,
      inativos: statsByStatus.find(s => s.status === 'inativo')?._count.status || 0,
      pendentes: statsByStatus.find(s => s.status === 'pendente')?._count.status || 0,
    };

    return {
      status: formattedStatus,
      crescimento: {
        meses: mesesLabels,
        valores: valoresCrescimento
      }
    };
  }
}