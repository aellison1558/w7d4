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
  }
}

module.exports = ApiUtil;
