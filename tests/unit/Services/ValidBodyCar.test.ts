import { Request, Response } from 'express';
import sinon from 'sinon';
import CarService from '../../../src/Services/CarService';

describe('Testes de serviço: IsValidBody Car', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Caso 1: Deve passar com body valido', async function () {
    // GIVEN
    const resMock = { } as Response;
    const reqMock = {
      body: {
        model: 'Marea',
        year: 1992,
        color: 'Black',
        status: true,
        buyValue: 10.990,
        doorsQty: 2,
        seatsQty: 5,
      },
    } as unknown as Request;

    let result = false;
    try {
      // WHEN
      const service = new CarService();
      service.isValidBody(reqMock, resMock, () => {});
      result = true;
    } catch (error) {
      result = false;
    }
    // THEN
    expect(result).toBeTruthy();
  });

  it('Caso 2: Deve falhar sem informações de Vehicle', async function () {
    // GIVEN
    const resMock = { } as Response;
    const reqMock = {
      body: {
        doorsQty: 2,
        seatsQty: 5,
      },
    } as unknown as Request;

    let result = true;
    try {
      // WHEN
      const service = new CarService();
      service.isValidBody(reqMock, resMock, () => {});
      result = true;
    } catch (error) {
      result = false;
    }
    // THEN
    expect(result).toBeFalsy();
  });

  it('Caso 3: Deve falhar sem informações de Car', async function () {
    // GIVEN
    const resMock = { } as Response;
    const reqMock = {
      body: {
        model: 'Marea',
        year: 1992,
        color: 'Black',
        status: true,
        buyValue: 10.990,
      },
    } as unknown as Request;

    let result = true;
    try {
      // WHEN
      const service = new CarService();
      service.isValidBody(reqMock, resMock, () => {});
      result = true;
    } catch (error) {
      result = false;
    }
    // THEN
    expect(result).toBeFalsy();
  });
});