export default interface IVehicles {
  id?: string;
  model: string;
  year: number; 
  color: string;
  status?: boolean | undefined;
  buyValue: number;
}