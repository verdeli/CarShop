import IVehicle from './IVehicle';

export default interface ICars extends IVehicle {
  doorsQty: number;
  seatsQty: number;
}