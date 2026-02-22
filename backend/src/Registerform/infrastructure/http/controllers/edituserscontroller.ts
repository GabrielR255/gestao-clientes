import type { Request, Response } from "express";
import { EditUserseCase } from "../../../application/editusers.js";
import { Edit } from "../database/prisma/editusers.repository.js";


export class editUserController {
  async handle(req: Request, res: Response) {
    try {
      const repository = new Edit();
      const useCase = new EditUserseCase(repository);
      const id = Number(req.params.id)

      await useCase.execute({
id,
        ...req.body
      }
      );

      return res.status(201).json({ message: "Dados alterados" });
    } catch (err:any) {
      return res.status(400).json({ error: err.message });
    }
  }
}