import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';

const inputMock: ICar = {
  model: 'Uno',
  year: 2009,
  color: 'Prata',
  status: true,
  buyValue: 13000,
  doorsQty: 2,
  seatsQty: 5,
};

const outputMock: Car = new Car({
  id: '9123789128937891273hj123',
  model: 'Uno',
  year: 2009,
  color: 'Prata',
  status: true,
  buyValue: 13000,
  doorsQty: 2,
  seatsQty: 5,
});

const inputMocks:Car[] = [new Car({
  id: '9123789128937891273hj123',
  model: 'Uno',
  year: 2009,
  color: 'Prata',
  status: true,
  buyValue: 13000,
  doorsQty: 2,
  seatsQty: 5,
})];

const outputMocks: Car[] = [new Car({
  id: '9123789128937891273hj123',
  model: 'Uno',
  year: 2009,
  color: 'Prata',
  status: true,
  buyValue: 13000,
  doorsQty: 2,
  seatsQty: 5,
})];

const ID_CARS = '9123789128937891273hj123';
const ID_ERROR = '9123789128937891273hj12#';
  
export { 
  inputMock, 
  outputMock,
  inputMocks,
  outputMocks,
  ID_CARS,
  ID_ERROR,
};