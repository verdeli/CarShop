import IVehicles from './IVehicle';

export default interface ICars extends IVehicles {
  doorsQty: number;
  seatsQty: number;
}