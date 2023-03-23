import { Request, Response, NextFunction } from 'express';

export default interface IService<T, I> {
  create(dto: T): Promise<I>;
  readAll(): Promise<I[]>;
  readById(id: string): Promise<I>;
  update(id: string, dto: T): Promise<I>;
  // delete(id: string): Promise<void>;
  isValidBody(req: Request, res: Response, next: NextFunction): void;
}