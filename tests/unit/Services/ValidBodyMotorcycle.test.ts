import { Request, Response } from 'express';
import sinon from 'sinon';
import { expect } from 'chai';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Testes de serviço: IsValidBody Motocycles', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Caso 1: Deve passar com body valido', async function () {
    const responseMock = { } as Response;
    const requestMock = {
      body: {
        model: 'XJ6',
        year: 2023,
        color: 'Branca',
        status: true,
        buyValue: 35.000,
        category: 'SPORT',
        engineCapacity: 600,
      },
    } as unknown as Request;

    let result = false;
    try {
      const service = new MotorcycleService();
      service.isValidBody(requestMock, responseMock, () => {});
      result = true;
    } catch (error) {
      result = false;
    }
    expect(result).to.be.equal(true);
  });

  it('Caso 2: Deve falhar sem informações de Vehicle', async function () {
    const responseMock = { } as Response;
    const requestMock = {
      body: {
        category: 'STREET',
        engineCapacity: 125,
      },
    } as unknown as Request;

    let result = true;
    try {
      const service = new MotorcycleService();
      service.isValidBody(requestMock, responseMock, () => {});
      result = true;
    } catch (error) {
      result = false;
    }
    expect(result).to.be.equal(false);
  });

  it('Caso 3: Deve falhar sem informações de Motocycles', async function () {
    const responseMock = { } as Response;
    const requestMock = {
      body: {
        model: 'Titan',
        year: 2021,
        color: 'Preta',
        status: true,
        buyValue: 2.000,
      },
    } as unknown as Request;

    let result = true;
    try {
      const service = new MotorcycleService();
      service.isValidBody(requestMock, responseMock, () => {});
      result = true;
    } catch (error) {
      result = false;
    }
    expect(result).to.be.equal(false);
  });
});