import type { Request, Response } from 'express';
import { PrismaFormClientRepository } from '../database/prisma/data.repository.js';
import { GetDashboardStatsUseCase } from '../../../application/get-dashboard-stats.usecase.js';

export class DashboardStatsController {
  async handle(req: Request, res: Response) {
    try {
      const repository = new PrismaFormClientRepository();
      const useCase = new GetDashboardStatsUseCase(repository);

      const result = await useCase.execute();

      return res.json(result);
    } catch {
      return res.status(500).json({ error: 'Erro ao processar estatísticas' });
    }
  }
}