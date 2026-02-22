import type { Request, Response, NextFunction } from 'express';
import { JwtTokenService } from './authjwtrepository.js';

const tokenService = new JwtTokenService();

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction) {
  const authHeader = req.headers.authorization;

    if (!authHeader) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const parts = authHeader.split(' ');

  if (parts.length !== 2) {
    return res.status(401).json({ message: 'Invalid authorization format' });
  }

  const [scheme, token] = parts;

  if (scheme !== 'Bearer' || !token) {
    return res.status(401).json({ message: 'Invalid authorization token' });
  }


  try {
    const payload = await tokenService.verify(token);

req.user = {
  id: Number(payload.userid),
};



    next();
  } catch {
    return res.status(401).json({ message: 'Invalid token' });
  }
}
