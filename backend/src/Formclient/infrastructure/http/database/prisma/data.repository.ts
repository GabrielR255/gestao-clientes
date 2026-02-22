import { prisma } from '../../../../../../lib/prisma.js';
import type { FormClientRepository, CreateFormClientInput } from '../../../../domain/formusers.js';

export class PrismaFormClientRepository implements FormClientRepository {
async create(data: CreateFormClientInput) {
  await prisma.clientusers.create({
    data: {
      name: data.name,
      email: data.email,
      cpf: data.cpf,
      phone: data.phone,
      status: data.status,
      user: {
        connect: {
          id: data.userid
        }
      }
    }
  })
}

  async getDashboardStats() {
    const statsByStatus = await prisma.clientusers.groupBy({
       by: ['status'],
       _count: { status: true }
    });
    const allClients = await prisma.clientusers.findMany({ select: { createdAt: true } });
    
    return { statsByStatus, allClients };
  }


async findAll(userid: number):Promise<any[]> {
  return await prisma.clientusers.findMany({
    where: {
      userid: userid
    },
    orderBy: {
      name: 'asc'
    }
  });
}

async findByIdAndUser(id: number, userid: number) {
    return prisma.clientusers.findFirst({
      where: {
        id,
        userid
      }
    });
  }

  async delete(id: number) {
    await prisma.clientusers.delete({
      where: {
        id
      }
    });
  }

}



