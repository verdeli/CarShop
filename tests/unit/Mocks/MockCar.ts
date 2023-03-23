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
  id: '641c7c384aadffd89b2148b6',
  model: 'Uno',
  year: 2009,
  color: 'Prata',
  status: true,
  buyValue: 13000,
  doorsQty: 2,
  seatsQty: 5,
});

const inputMocks: Car[] = [new Car({
  id: '641c7c384aadffd89b2148b6',
  model: 'Uno',
  year: 2009,
  color: 'Prata',
  status: true,
  buyValue: 13000,
  doorsQty: 2,
  seatsQty: 5,
})];

const outputMocks: Car[] = [new Car({
  id: '641c7c384aadffd89b2148b6',
  model: 'Uno',
  year: 2009,
  color: 'Prata',
  status: true,
  buyValue: 13000,
  doorsQty: 2,
  seatsQty: 5,
})];

const ID_CARS = '641c7c384aadffd89b2148b6';
const ID_ERROR = '641c7c384aadffd89b2148b6#';
  
export { 
  inputMock, 
  outputMock,
  inputMocks,
  outputMocks,
  ID_CARS,
  ID_ERROR,
};