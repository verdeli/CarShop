import Motor from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

const inputMock: IMotorcycle = {
  model: 'XJ6',
  year: 2023,
  color: 'Branca',
  status: true,
  buyValue: 30,
  category: 'SPORT',
  engineCapacity: 600,
};

const outputMock: Motor = new Motor({
  id: '641c9f9a4ba66c6473983179',
  model: 'XJ6',
  year: 2023,
  color: 'Branca',
  status: true,
  buyValue: 30,
  category: 'SPORT',
  engineCapacity: 600,
});

const inputMocks: Motor[] = [new Motor({
  id: '641c9f9a4ba66c6473983179',
  model: 'XJ6',
  year: 2023,
  color: 'Branca',
  status: true,
  buyValue: 30,
  category: 'SPORT',
  engineCapacity: 600,
})];

const outputMocks: Motor[] = [new Motor({
  id: '641c9f9a4ba66c6473983179',
  model: 'XJ6',
  year: 2023,
  color: 'Branca',
  status: true,
  buyValue: 30,
  category: 'SPORT',
  engineCapacity: 600,
})];

const ID_MOTO = '641c9f9a4ba66c6473983179';
const ID_ERROR = '6641c9f9a4ba66c6473983179#';
  
export { 
  inputMock, 
  outputMock,
  inputMocks,
  outputMocks,
  ID_MOTO,
  ID_ERROR,
};