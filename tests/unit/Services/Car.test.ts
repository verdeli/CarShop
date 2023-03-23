import sinon from 'sinon';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import { 
  ID_CARS,
  ID_ERROR,
  inputMock,
  outputMock,
  outputMocks,
} from '../Mocks/MockCar';

describe('Testando os serviços do carro: ', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('Deverá criar um carro com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(outputMock);
    const service = new CarService();
    const result = await service.create(inputMock);

    expect(result).to.be.deep.equal(outputMock);
  });

  it('Deverá listar todos os carros com sucesso', async function () {
    sinon.stub(Model, 'find').resolves(outputMocks);
    const service = new CarService();
    const result = await service.readAll();

    expect(result).to.be.deep.equal(outputMocks);
    expect(result.length).to.be.equal(1);
  });

  it('Deverá listar um carro por ID com sucesso', async function () {
    sinon.stub(Model, 'findById').resolves(outputMock);
    const service = new CarService();
    const result = await service.readById(ID_CARS);

    expect(result).to.be.deep.equal(outputMock);
  });
  it('Deverá aparecer a mensagem de erro quando o ID não existir', async function () {
    try {
      sinon.stub(Model, 'findById').resolves(null);
      const service = new CarService();
      await service.readById(ID_CARS);
    } catch (error) {
      expect((error as Error).message).to.equal('Car not found');
    }
  });
  it('Deverá aparecer a mensagem de erro do mongo id', async function () {
    try {
      sinon.stub(Model, 'findById').resolves(null);
      const service = new CarService();
      await service.readById(ID_ERROR);
    } catch (error) {
      expect((error as Error).message).to.equal('Invalid mongo id');
    }
  });
});