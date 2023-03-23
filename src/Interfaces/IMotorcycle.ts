import IVehicles from './IVehicles';

export default interface IMotocycle extends IVehicles {
  category: string;
  engineCapacity: number;
}