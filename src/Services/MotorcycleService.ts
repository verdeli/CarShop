import { Request, Response, NextFunction } from 'express';
import Motor from '../Domains/Motorcycle';
import BodyNotFound from '../errors/BodyNotFound';
import IdNotFoundError from '../errors/IdNotFoundError';
import IMotorcycle from '../Interfaces/IMotorcycle';
import IService from '../Interfaces/IService';
import MotorcycleODM from '../Models/MotorcycleODM';

const ID_NOT_FOUND = 'Motorcycle not found'; 

export default class Motocycle implements IService<IMotorcycle, Motor> {
  private odm: MotorcycleODM = new MotorcycleODM();
  
  public async create(dto: IMotorcycle): Promise<Motor> {
    const motocycle = await this.odm.createVehicle(dto);
    return new Motor(motocycle);
  }

  public async readAll(): Promise<Motor[]> {
    const motorcycle = await this.odm.findAllVehicle();
    return motorcycle.map((moto) => new Motor(moto));
  }

  public async readById(id: string): Promise<Motor> {
    const moto = await this.odm.findById(id);
    if (!moto) throw new IdNotFoundError(ID_NOT_FOUND);
    return new Motor(moto);
  }
  
  async update(id: string, dto: IMotorcycle): Promise<Motor> {
    const moto = await this.odm.update(id, dto);
    if (!moto) throw new IdNotFoundError(ID_NOT_FOUND);
    return new Motor(moto);
  }
  // delete(id: string): Promise<void> {
  //   throw new Error('Method not implemented Again.');
  // }

  isValidBody(req: Request, res: Response, next: NextFunction): void {
    function isValidVehicle(moto: IMotorcycle) {
      if (!moto.model || !moto.year || !moto.buyValue || !moto.color) { 
        throw new BodyNotFound('Body is not Found');  
      }
    }
    function isValidMoto(moto: IMotorcycle): void {
      if (!moto.category || !moto.engineCapacity) { 
        throw new BodyNotFound('Body not found motorcycle'); 
      }
    }
    
    const motocycle: IMotorcycle = {
      ...req.body,
    } as IMotorcycle;
    isValidVehicle(motocycle);
    isValidMoto(motocycle);
    next();
  }
}