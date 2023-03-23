import IVehicles from './IVehicle';

export default interface IMotocycle extends IVehicles {
  category: string;
  engineCapacity: number;
}