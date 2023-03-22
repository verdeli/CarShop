import { Request, Response, Router } from 'express';
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

  initRoutes(): Router {
    this.router.post('/cars', this.service.isValidBody, (req, res) => 
      this.create(req, res));
    return this.router;
  }  
}