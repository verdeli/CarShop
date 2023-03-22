import IVehicles from './IVehicles';

export default interface ICars extends IVehicles {
  doorsQty: number;
  seatsQty: number;
}