export interface CreateFormClientInput {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  status: 'Ativo' | 'Inativo' | 'Pendente';
  userid: number;
  createdAt?: Date;
}


export interface DashboardStatsRaw {
  statsByStatus: {
    status: string;
    _count: {
      status: number;
    };
  }[];
  allClients: {
    createdAt: Date;
  }[];
}

export interface FormClientRepository {
  create(data: CreateFormClientInput): Promise<void>;
  getDashboardStats(): Promise<DashboardStatsRaw>;
}

export interface ClientlistRepository {
  create(data: CreateFormClientInput): Promise<void>;
  findAll(userid: number): Promise<any[]>; 
  getDashboardStats(): Promise<DashboardStatsRaw>;
}


export interface Deleteclient {
  delete(id: number): Promise<void>
  findByIdAndUser(id: number, userid: number): Promise<any | null>
}


export type ClientStatus = 'ativo' | 'inativo' | 'pendente';


export interface Editclients {
id: number;
name: string;
email: string;
cpf: string;
phone: string;
status: ClientStatus

}


export interface Editclientsrepository{
  update(data: Editclients): Promise<Editclients>;
}