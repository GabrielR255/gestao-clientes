import { prisma } from "../../../../../../lib/prisma.js";
import type { ClientStatus, Editclients, Editclientsrepository } from "../../../../domain/formusers.js";

export class editClients implements Editclientsrepository {

  async update(clientsedit:Editclients):Promise<Editclients>{

 const updated = await prisma.clientusers.update({
where:{
id: Number(clientsedit.id)
},
data: {
name: clientsedit.name,
email: clientsedit.email,
cpf: clientsedit.cpf,
phone: clientsedit.phone,
status: clientsedit.status
}
    });

return{

id: updated.id,
    name: updated.name,
    email: updated.email,
    cpf: updated.cpf,
    phone: updated.phone,
    status: updated.status as ClientStatus
}

  }

}
