var Dispatcher = require('../dispatcher/Dispatcher'),
    PokemonConstants = require('../constants/PokemonConstants');

var ApiActions = {
  receiveAllPokemons: function(pokemons){
    Dispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: pokemons
    })
  },

  receiveSinglePokemon: function(pokemon) {
    Dispatcher.dispatch({
      actionType: PokemonConstants.POKEMON_RECEIVED,
      pokemon: pokemon
    })
  }
};

module.exports = ApiActions;
