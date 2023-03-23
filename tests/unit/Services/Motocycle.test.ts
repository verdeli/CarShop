import sinon from 'sinon';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import { 
  ID_MOTO,
  ID_ERROR,
  inputMock,
  outputMock,
  outputMocks,
} from '../Mocks/MockMotorcycle';

describe('Testando os serviços das motos: ', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('Deverá criar uma moto com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(outputMock);
    const service = new MotorcycleService();
    const result = await service.create(inputMock);

    expect(result).to.be.deep.equal(outputMock);
  });

  it('Deverá listar todos as motos com sucesso', async function () {
    sinon.stub(Model, 'find').resolves(outputMocks);
    const service = new MotorcycleService();
    const result = await service.readAll();

    expect(result).to.be.deep.equal(outputMocks);
    expect(result.length).to.be.equal(1);
  });

  it('Deverá listar uma moto por ID com sucesso', async function () {
    sinon.stub(Model, 'findById').resolves(outputMock);
    const service = new MotorcycleService();
    const result = await service.readById(ID_MOTO);

    expect(result).to.be.deep.equal(outputMock);
  });
  it('Deverá aparecer a mensagem de erro quando o ID não existir', async function () {
    try {
      sinon.stub(Model, 'findById').resolves(null);
      const service = new MotorcycleService();
      await service.readById(ID_MOTO);
    } catch (error) {
      expect((error as Error).message).to.equal('Motocycle not found');
    }
  });
  it('Deverá aparecer a mensagem de erro do mongo id', async function () {
    try {
      sinon.stub(Model, 'findById').resolves(null);
      const service = new MotorcycleService();
      await service.readById(ID_ERROR);
    } catch (error) {
      expect((error as Error).message).to.equal('Invalid mongo id');
    }
  });
  it('Deverá atualizar uma moto com sucesso', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(outputMock);
    const service = new MotorcycleService();
    const result = await service.update(ID_MOTO, inputMock);
    expect(result).to.be.deep.equal(outputMock);
  });
});