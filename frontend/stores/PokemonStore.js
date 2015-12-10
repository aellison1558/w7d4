var Dispatcher = require('../dispatcher/Dispatcher'),
    Store = require('flux/utils').Store,
    PokemonConstants = require('../constants/PokemonConstants');

var PokemonStore = new Store(Dispatcher);
var _pokemons = {};

PokemonStore.all = function(){
  var pokemons = {}
  for (key in _pokemons) {
    if (_pokemons.hasOwnProperty(key)) {
      pokemons[key] = _pokemons[key];
    }
  }
  return pokemons;
};

PokemonStore.resetPokemons = function(pokemons){
  _pokemons = {};
  pokemons.forEach(function(pokemon){
    _pokemons[pokemon.id] = pokemon;
  });
  PokemonStore.__emitChange();
};

PokemonStore.resetSinglePokemon = function(pokemon) {
  _pokemons[pokemon.id] = pokemon;
  PokemonStore.__emitChange();
};

PokemonStore.__onDispatch = function(payload){
  switch(payload.actionType) {
    case PokemonConstants.POKEMONS_RECEIVED:
      PokemonStore.resetPokemons(payload.pokemons);
      break;
    case PokemonConstants.POKEMON_RECEIVED:
      PokemonStore.resetSinglePokemon(payload.pokemon);
      break;
  }
};

PokemonStore.find = function(id) {
  return _pokemons[id];
}

module.exports = PokemonStore;
