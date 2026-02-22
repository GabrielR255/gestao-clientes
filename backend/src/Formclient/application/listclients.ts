import type { ClientlistRepository } from "../domain/formusers.js";

export class ListClientsUseCase {
  constructor(private repository: ClientlistRepository ) {}

  async execute(userid: number) {
    return await this.repository.findAll(userid);
  }
}