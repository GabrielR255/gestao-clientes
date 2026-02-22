// infrastructure/crypto/BcryptPasswordHasher.ts
import bcrypt from "bcrypt";
import type { PasswordHasher } from "../../../domain/usersregister.js"; 

export class BcryptPasswordHasher implements PasswordHasher {
  async hash(password: string) {
    return bcrypt.hash(password, 10);
  }

  async compare(password: string, hash: string) {
    return bcrypt.compare(password, hash);
  }
}
