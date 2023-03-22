import { Request, Response, NextFunction } from 'express';
import Car from '../Domains/Car';
import BodyNotFound from '../errors/BodyNotFound';
import ICar from '../Interfaces/ICar';
import IService from '../Interfaces/IService';
import CarODM from '../Models/CarODM';

export default class CarService implements IService<ICar, Car> {
  private odm: CarODM = new CarODM();
  
  public async create(dto: ICar): Promise<Car> {
    const cars = await this.odm.createVehicle(dto);
    return new Car(cars);
  }
  // readAll(): Promise<Car[]> {
  //   throw new Error('Method not implemented.');
  // }
  // readById(id: string): Promise<Car> {
  //   throw new Error('Method not implemented yet.');
  // }
  // update(id: string, dto: ICars): Promise<Car> {
  //   throw new Error('Method not implemented');
  // }
  // delete(id: string): Promise<void> {
  //   throw new Error('Method not implemented Again.');
  // }

  isValidBody(req: Request, res: Response, next: NextFunction): void {
    function isValidVehicle(car: ICar) {
      if (!car.model || !car.year || !car.buyValue || !car.color) { 
        throw new BodyNotFound('Body is not Found');  
      }
    }
    function isValidCar(car: ICar): void {
      if (!car.doorsQty || !car.seatsQty) { 
        throw new BodyNotFound('Body not found car');
      }
    }
    
    const car: ICar = {
      ...req.body,
    } as ICar;
    isValidVehicle(car);
    isValidCar(car);
    next();
  }
}