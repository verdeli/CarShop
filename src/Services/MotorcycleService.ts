import { Request, Response, NextFunction } from 'express';
import Motor from '../Domains/Motorcycle';
import BodyNotFound from '../errors/BodyNotFound';
import IdNotFoundError from '../errors/IdNotFoundError';
import IMotocycle from '../Interfaces/IMotorcycle';
import IService from '../Interfaces/IService';
import MotocycleODM from '../Models/MotorcycleODM';

const ID_NOT_FOUND = 'Motocycle not found'; 

export default class Motocycle implements IService<IMotocycle, Motor> {
  private odm: MotocycleODM = new MotocycleODM();
  
  public async create(dto: IMotocycle): Promise<Motor> {
    const motocycle = await this.odm.createVehicle(dto);
    return new Motor(motocycle);
  }

  public async readAll(): Promise<Motor[]> {
    const cars = await this.odm.findAllVehicle();
    return cars.map((car) => new Motor(car));
  }

  public async readById(id: string): Promise<Motor> {
    const car = await this.odm.findById(id);
    if (!car) throw new IdNotFoundError(ID_NOT_FOUND);
    return new Motor(car);
  }
  
  async update(id: string, dto: IMotocycle): Promise<Motor> {
    const car = await this.odm.update(id, dto);
    if (!car) throw new IdNotFoundError(ID_NOT_FOUND);
    return new Motor(car);
  }
  // delete(id: string): Promise<void> {
  //   throw new Error('Method not implemented Again.');
  // }

  isValidBody(req: Request, res: Response, next: NextFunction): void {
    function isValidVehicle(moto: IMotocycle) {
      if (!moto.model || !moto.year || !moto.buyValue || !moto.color) { 
        throw new BodyNotFound('Body is not Found');  
      }
    }
    function isValidMoto(moto: IMotocycle): void {
      if (!moto.category || !moto.engineCapacity) { 
        throw new BodyNotFound('Body not found car');
      }
    }
    
    const motocycle: IMotocycle = {
      ...req.body,
    } as IMotocycle;
    isValidVehicle(motocycle);
    isValidMoto(motocycle);
    next();
  }
}