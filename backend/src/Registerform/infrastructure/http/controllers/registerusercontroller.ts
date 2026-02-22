import type { Request, Response } from "express";
import { RegisterUserUseCase } from "../../../application/register.usecase.js";
import { PrismaRegisterRepository } from "../database/prisma/data.repository.js"; 
import { BcryptPasswordHasher } from "../crypto/bcrypt.password.js";

export class RegisterUserController {
  async handle(req: Request, res: Response) {
    try {
      const repository = new PrismaRegisterRepository();
      const hasher = new BcryptPasswordHasher();
      const useCase = new RegisterUserUseCase(repository, hasher);

      await useCase.execute(req.body);

      return res.status(201).json({ message: "Usuário criado" });
    } catch (err:any) {
      return res.status(400).json({ error: err.message });
    }
  }
}