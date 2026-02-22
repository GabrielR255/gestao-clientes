import type { Editusersrepository, Editusers} from "../domain/usersregister.js"; 




export class EditUserseCase {
  constructor(
    private userseditrepository: Editusersrepository,
  ) {}

  async execute({id, name, email, password }: Editusers) {
   
   
    if (!name || !email || !password) {
      throw new Error("Dados inválidos");
    }

   await this.userseditrepository.update({
      id,
      name,
      email,
      password,
    });
  }



}
