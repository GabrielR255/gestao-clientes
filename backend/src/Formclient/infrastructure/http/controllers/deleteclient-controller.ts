import { PrismaFormClientRepository } from "../database/prisma/data.repository.js";
import { DeleteClientUseCase } from "../../../application/deleteclients.js";
import type {Request, Response} from 'express'


export class DeleteClientController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const clientId = Number(id);
      const userid = Number(req.user!.id); 

      if (!id || isNaN(clientId)) {
        return res.status(400).json({ error: "ID inválido." });
      }

      const repository = new PrismaFormClientRepository();
      const useCase = new DeleteClientUseCase(repository);

      await useCase.execute(clientId, userid);

      return res.status(200).json({
        message: "Cliente deletado com sucesso"
      });

    } catch (err: any) {
      console.error(err);
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }
}

