import { Request, Response } from 'express';
import sinon from 'sinon';
import { expect } from 'chai';
import CarService from '../../../src/Services/CarService';

describe('Testes de serviço: IsValidBody Car', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Caso 1: Deve passar com body valido', async function () {
    const responseMock = { } as Response;
    const requestMock = {
      body: {
        model: 'Uno',
        year: 2009,
        color: 'Prata',
        status: true,
        buyValue: 13.000,
        doorsQty: 2,
        seatsQty: 5,
      },
    } as unknown as Request;

    let result = false;
    try {
      const service = new CarService();
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
        doorsQty: 2,
        seatsQty: 5,
      },
    } as unknown as Request;

    let result = true;
    try {
      const service = new CarService();
      service.isValidBody(requestMock, responseMock, () => {});
      result = true;
    } catch (error) {
      result = false;
    }
    expect(result).to.be.equal(false);
  });

  it('Caso 3: Deve falhar sem informações de Car', async function () {
    const responseMock = { } as Response;
    const requestMock = {
      body: {
        model: 'Uno',
        year: 2009,
        color: 'Prata',
        status: true,
        buyValue: 13.000,
      },
    } as unknown as Request;

    let result = true;
    try {
      const service = new CarService();
      service.isValidBody(requestMock, responseMock, () => {});
      result = true;
    } catch (error) {
      result = false;
    }
    expect(result).to.be.equal(false);
  });
});