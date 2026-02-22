import { prisma } from "../../../../../../lib/prisma.js";
import type { AuthRepository } from "../../../../domain/usersregister.js";

export class PrismaAuthRepository implements AuthRepository {
  async findByEmail(email: string) {
    const user = await prisma.registerusers.findUnique({
      where: { email }
    });

    if (!user) return null;

    return {
      id: String(user.id),
      email: user.email,
      password: user.password
    };
  }
}