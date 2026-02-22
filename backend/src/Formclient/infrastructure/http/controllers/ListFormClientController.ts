import { PrismaFormClientRepository } from "../database/prisma/data.repository.js";
import { ListClientsUseCase } from "../../../application/listclients.js";
import type { Request,Response } from "express";

export class ListFormClientController {
  async handle(req: Request, res: Response) {
    try {
      const repository = new PrismaFormClientRepository();
      const useCase = new ListClientsUseCase(repository);

      const userId = req.user!.id; 

      const clients = await useCase.execute(userId);

      return res.status(200).json(clients);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }
}