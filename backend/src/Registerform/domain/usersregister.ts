export interface CreateUserInput {
  name: string;
  email: string;
  password: string;
}


export interface Editusers{
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface Editusersrepository{
update(data: Editusers): Promise<unknown>;
}

export interface userAuth {
  id: string;
  email: string;
  password: string;
}

export interface Registerrepository {
create(data: CreateUserInput): Promise<unknown>;
findByEmail(email: string): Promise<boolean>;
}


export interface PasswordHasher {
  hash(password: string): Promise<string>;
  compare(password: string, hash: string): Promise<boolean>;
}


export interface AuthRepository {
  findByEmail(email: string): Promise<userAuth | null>;
}


export interface TokenPayload {
  userid: number;
}

export interface Tokenservice {
  generate(payload: TokenPayload): Promise<string>;
  verify(token: string): Promise<TokenPayload>;
}