import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`Request...`);
    next();
  }
}

// Functional middleware
// Use when middleware doesn't have any dependencies
export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Request...`);
  next();
}
