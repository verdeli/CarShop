import IMotocycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motocycle extends Vehicle {
  private category: string;
  private engineCapacity: number;
  constructor(motocycle: IMotocycle) {
    super({
      id: motocycle.id,
      model: motocycle.model,
      year: motocycle.year,
      color: motocycle.color,
      status: motocycle.status,
      buyValue: motocycle.buyValue,
    });
    this.category = motocycle.category;
    this.engineCapacity = motocycle.engineCapacity;
  }
}