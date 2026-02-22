import type { AuthRepository } from "../domain/usersregister.js";
import type { PasswordHasher } from "../domain/usersregister.js";
import type { Tokenservice } from "../domain/usersregister.js";

interface LoginRequest {
  email: string;
  password: string;
}

export class LoginUseCase {
  constructor(
    private authRepository: AuthRepository,
    private hasher: PasswordHasher,
    private tokenService: Tokenservice
  ) {}

  async execute({ email, password }: LoginRequest) {
    const user = await this.authRepository.findByEmail(email);

    if (!user) {
      throw new Error("Credenciais inválidas");
    }

    const passwordMatch = await this.hasher.compare(
      password,
      user.password
    );

    if (!passwordMatch) {
      throw new Error("Credenciais inválidas");
    }

    const token = await this.tokenService.generate({
      userid: Number(user.id)
    });

    return { token };
  }
}