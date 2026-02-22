
export type ClientStatus = 'ativo' | 'pendente' | 'inativo'

export interface Formclients {

id: number;
name: string;
email: string;
cpf: string;
phone: string;
status: ClientStatus


}