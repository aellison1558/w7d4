var ApiActions = require('../actions/ApiActions');

var ApiUtil = {
  fetch: function(){
    $.get('/api/pokemon', {}, function(pokemons){
      ApiActions.receiveAllPokemons(pokemons);
    })
  },

  fetchPoke: function(id) {
    $.get('/api/pokemon/' + id, {}, function(pokemon) {
      ApiActions.receiveSinglePokemon(pokemon);
    })
  },

  createPoke: function(data) {
    $.post('/api/pokemon/', {pokemon: data}, function(response) {
      ApiActions.createPokemon(response);
    })
  }
}

module.exports = ApiUtil;
