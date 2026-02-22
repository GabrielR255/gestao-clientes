// application/RegisterUserUseCase.ts
import type { PasswordHasher, Registerrepository } from "../domain/usersregister.js"; 



interface RegisterUserRequest {
  name: string;
  email: string;
  password: string;
}

export class RegisterUserUseCase {
  constructor(
    private registerRepository: Registerrepository,
    private hasher: PasswordHasher,
  ) {}

  async execute({ name, email, password }: RegisterUserRequest) {
   
   
    if (!name || !email || !password) {
      throw new Error("Dados inválidos");
    }

    const userExists = await this.registerRepository.findByEmail(email);
    if (userExists) {
      throw new Error("Usuário já existe");
    }

    const passwordHash = await this.hasher.hash(password);

    await this.registerRepository.create({
      name,
      email,
      password: passwordHash
    });
  }



}
