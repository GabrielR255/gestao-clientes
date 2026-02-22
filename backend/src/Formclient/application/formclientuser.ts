import type { FormClientRepository, CreateFormClientInput } from '../domain/formusers.js';





export class CreateFormClientUseCase  {
  constructor(
    private readonly repository: FormClientRepository
  ) {}

  async execute(data: CreateFormClientInput): Promise<void> {
    if (!data.name || !data.email || !data.cpf) {
      throw new Error('Dados obrigatórios ausentes');
    }

    await this.repository.create(data);
  }
}
