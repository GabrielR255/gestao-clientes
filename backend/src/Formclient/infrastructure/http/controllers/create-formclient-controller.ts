import type { Request, Response } from 'express';
import { CreateFormClientUseCase } from '../../../application/formclientuser.js';
import { PrismaFormClientRepository } from '../database/prisma/data.repository.js';

export class CreateFormClientController {
  async handle(req: Request, res: Response) {
    try {
      const repository = new PrismaFormClientRepository();
      const useCase = new CreateFormClientUseCase(repository);

      await useCase.execute({
        name: req.body.name,
        email: req.body.email,
        cpf: req.body.cpf,
        phone: req.body.phone,
        status: req.body.status,
        userid: req.user!.id, 
      });

      return res.status(201).json({ message: 'Cliente criado' });
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }
}
