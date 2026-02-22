import { prisma } from "../../../../../../lib/prisma.js"; 
import type { CreateUserInput, Registerrepository } from "../../../../domain/usersregister.js";

export class PrismaRegisterRepository implements Registerrepository {
  async findByEmail(email: string) {
    const user = await prisma.registerusers.findUnique({
      where: { email }
    });
    return !!user;
  }

  async create(data:CreateUserInput) {
    await prisma.registerusers.create({ data });
  }


}