import { expect } from 'chai';
import Connection from '../../../src/Models/Connection';

describe('Testes de model: Mongo', function () {
  it('Caso 1: Deve existir uma conexão', async function () {
    let result = false;
    try {
      await Connection();
      result = true;
    } catch (error) {
      result = false;
    }
    expect(result).to.be.equal(true);
  });
});