import { model, Schema, Model, models, isValidObjectId } from 'mongoose';
import IdInvalidError from '../errors/IdInvalidError';

const INVALID_FORMAT = 'Invalid mongo id';

export default class AbstractODM<T> {
  protected model;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] as Model<T>
     || model(this.modelName, this.schema) as Model<T>;
  }

  public async createVehicle(dto: T): Promise<T> {
    return this.model.create({ ...dto });
  }

  public async findAllVehicle(): Promise<T[]> {
    return this.model.find();
  }

  public async findById(id: string): Promise <T | null> {
    if (!isValidObjectId(id)) {
      throw new IdInvalidError(INVALID_FORMAT);
    } 
    return this.model.findById(id);
  }

  // public async update(id: string, dto: Partial<T>): Promise <T | null> {
  //   if (!isValidObjectId(id)) {
  //     throw new IdInvalidError(INVALID_FORMAT);
  //   }
  //   return this.model.findByIdAndUpdate(
  //     { id },
  //     { ...dto } as UpdateQuery<T>,
  //     { new: true },
  //   ); 
  // }
}