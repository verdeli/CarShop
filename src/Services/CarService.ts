import { Request, Response, NextFunction } from 'express';
import Car from '../Domains/Car';
import BodyNotFound from '../errors/BodyNotFound';
import IdNotFoundError from '../errors/IdNotFoundError';
import ICar from '../Interfaces/ICar';
import IService from '../Interfaces/IService';
import CarODM from '../Models/CarODM';

const ID_NOT_FOUND = 'Car not found'; 

export default class CarService implements IService<ICar, Car> {
  private odm: CarODM = new CarODM();
  
  public async create(dto: ICar): Promise<Car> {
    const cars = await this.odm.createVehicle(dto);
    return new Car(cars);
  }

  public async readAll(): Promise<Car[]> {
    const cars = await this.odm.findAllVehicle();
    return cars.map((car) => new Car(car));
  }

  public async readById(id: string): Promise<Car> {
    const car = await this.odm.findById(id);
    if (!car) throw new IdNotFoundError(ID_NOT_FOUND);
    return new Car(car);
  }
  
  async update(id: string, dto: ICar): Promise<Car> {
    const car = await this.odm.update(id, dto);
    if (!car) throw new IdNotFoundError(ID_NOT_FOUND);
    return new Car(car);
  }
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