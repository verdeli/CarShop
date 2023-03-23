import { NextFunction, Request, Response, Router } from 'express';
import Motor from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import IService from '../Interfaces/IService';
import MotorcycleService from '../Services/MotorcycleService';
import AbstractController from './AbstractController';

export default class MotorcycleController extends AbstractController<IService<IMotorcycle, Motor>> {
  constructor() {
    super(new MotorcycleService());
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const result = await this.service.create(req.body);
    return res.status(201).json(result);
  }

  public async readAll(req: Request, res: Response): Promise<Response> {
    const result = await this.service.readAll();
    return res.status(200).json(result);
  }

  public async readById(
    req: Request, 
    res: Response, 
    next: NextFunction,
  ): Promise<Response | undefined> {
    try {
      const result = await this.service.readById(req.params.id);
      return res.status(200).json(result);
    } catch (error) {
      next(error);      
    }
  }

  private async update(
    req: Request, 
    res: Response, 
    next: NextFunction,
  ): Promise<Response | undefined> {
    try {
      const result = await this.service.update(req.params.id, req.body);
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  initRoutes(): Router {
    this.router.post('/motorcycles', this.service.isValidBody, (req, res) => 
      this.create(req, res));

    this.router.get('/motorcycles', (req, res) => this.readAll(req, res));
    this.router.get('/motorcycles/:id', (req, res, next) => this.readById(req, res, next));
    this.router.put('/motorcycles/:id', this.service.isValidBody, (req, res, next) =>
      this.update(req, res, next));
    return this.router;
  }  
}