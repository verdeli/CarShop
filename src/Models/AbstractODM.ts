import { model, Schema, Model, models } from 'mongoose';

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
}