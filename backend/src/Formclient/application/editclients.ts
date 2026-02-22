import type { Editclientsrepository, Editclients } from "../domain/formusers.js"; 





export class Editclietsapplication {
  constructor(
    private userseditrepository: Editclientsrepository,
  ) {}

  async execute({id, name, email, cpf, phone, status  }: Editclients) {
   
   
    if (!name || !email || !cpf || !phone || !status) {
      throw new Error("Dados inválidos");
    }

   await this.userseditrepository.update({
      id,
      name,
      email,
      cpf,
      phone,
      status
    });
  }



}
