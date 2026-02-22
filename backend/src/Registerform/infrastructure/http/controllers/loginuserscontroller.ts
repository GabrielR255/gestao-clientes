import type { Request, Response } from "express";
import { LoginUseCase } from "../../../application/login.usercase.js";
import { BcryptPasswordHasher } from "../crypto/bcrypt.password.js";
import { JwtTokenService } from "../../../../shared/middleware/authjwtrepository.js";
import { PrismaAuthRepository } from "../database/prisma/prismaauthrespository.js";

export class LoginController {
  async handle(req: Request, res: Response) {
    try {
      const repository = new PrismaAuthRepository();
      const hasher = new BcryptPasswordHasher();
      const tokenService = new JwtTokenService();

      const useCase = new LoginUseCase(
        repository,
        hasher,
        tokenService
      );

      const result = await useCase.execute(req.body);

      return res.status(200).json(result);
    } catch (err: any) {
      return res.status(401).json({ error: err.message });
    }
  }
}
