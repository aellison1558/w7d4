var React = require('react'),
    PokemonsIndex = require('./pokemons/pokemonsIndex'),
    PokemonForm = require('./pokemons/PokemonForm');

var App = React.createClass({
  render: function() {
    return(
      <div id="pokedex">
        <div className="pokemon-index-pane"><PokemonForm /><PokemonsIndex /></div>
        {this.props.children}
      </div>
    )
  }
});

module.exports = App;
