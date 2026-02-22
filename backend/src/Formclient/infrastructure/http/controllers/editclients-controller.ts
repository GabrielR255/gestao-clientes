import type { Request, Response } from "express";
import { Editclietsapplication } from "../../../application/editclients.js";
import { editClients } from "../database/prisma/editclients.js";


export class editclientController {
  async handle(req: Request, res: Response) {
    try {
      const repository = new editClients();
      const useCase = new Editclietsapplication(repository);
      const id = Number(req.params.id)

      await useCase.execute({
id,
        ...req.body
      }
      );

      return res.status(201).json({ message: "Dados de cliente alterado" });
    } catch (err:any) {
      return res.status(400).json({ error: err.message });
    }
  }
}