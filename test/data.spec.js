global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('sortData', () => {
  it('debería ser una function', () => {
    assert.equal(typeof window.dataPokemon.sortData, 'function');
  });
  it('deberia retornar objetos Kabuto y Blastoise al ordenar de la AM a la PM', () => {
    assert.deepEqual(window.dataPokemon.sortData(sample, "pawn_time", "ascendente"), [{"id": 140, "num": "140", "name": "Kabuto","spawn_time": "00:05"}, {"id": 144, "num": "144", "name": "Articumo","spawn_time": "N/A"}]);
  });
  it('deberia retornar Blastoise y Kabuto al ordenar de la PM a la AM', () => {
    assert.deepEqual(window.dataPokemon.sortData(sample, "pawn_time", "descendente"), [{"id": 144, "num": "144", "name": "Articumo","spawn_time": "N/A"}, {"id": 140, "num": "140", "name": "Kabuto","spawn_time": "00:05"}]);
  });
}); 