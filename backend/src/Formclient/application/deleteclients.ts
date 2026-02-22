import  type { Deleteclient } from "../domain/formusers.js";



export class DeleteClientUseCase {
  constructor(private repository: Deleteclient) {}

  async execute(id: number, userid: number) {
    const client = await this.repository.findByIdAndUser(id, userid);

    if (!client) {
      throw new Error("Cliente não encontrado");
    }

    await this.repository.delete(id);
  }
}