import 'dotenv/config';
import jwt from 'jsonwebtoken';
import type { Tokenservice, TokenPayload } from '../../Registerform/domain/usersregister.js';

export class JwtTokenService implements Tokenservice {
  private readonly secret: string;

constructor() {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error('JWT_SECRET not defined');
  }

  this.secret = secret; 
}


  async generate(payload: TokenPayload): Promise<string> {
    return jwt.sign(payload, this.secret, {
      expiresIn: '1d',
    });
  }

  async verify(token: string): Promise<TokenPayload> {
    const decoded = jwt.verify(token, this.secret);

    if (typeof decoded !== 'object' || !('userid' in decoded)) {
      throw new Error('token invalido');
    }

    return {

  userid:Number(decoded.userid),

    };
  }
}