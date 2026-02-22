import { prisma } from "../../../../../../lib/prisma.js"; 
import type { Editusersrepository, Editusers } from "../../../../domain/usersregister.js";

export class Edit implements Editusersrepository {

  async update(usersedit:Editusers){

    await prisma.registerusers.update({
where:{
id: Number(usersedit.id)
},
data: {
name: usersedit.name,
email: usersedit.email,
password: usersedit.password,
}
    });
  }
}
