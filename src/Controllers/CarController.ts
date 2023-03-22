import { NextFunction, Request, Response, Router } from 'express';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import IService from '../Interfaces/IService';
import CarService from '../Services/CarService';
import AbstractController from './AbstractController';

export default class CarController extends AbstractController<IService<ICar, Car>> {
  constructor() {
    super(new CarService());
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

  initRoutes(): Router {
    this.router.post('/cars', this.service.isValidBody, (req, res) => 
      this.create(req, res));

    this.router.get('/cars', (req, res) => this.readAll(req, res));
    this.router.get('/cars/:id', (req, res, next) => this.readById(req, res, next));

    return this.router;
  }  
}