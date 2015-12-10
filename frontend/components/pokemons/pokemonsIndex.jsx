var React = require('react'),
    PokemonStore = require('../../stores/PokemonStore'),
    ApiUtil = require('../../util/ApiUtil'),
    PokemonIndexItem = require('./pokemonIndexItem');

var PokemonIndex = React.createClass({
  getInitialState: function(){
    return {pokemons: PokemonStore.all()}
  },

  _updateState: function(){
    this.setState({pokemons: PokemonStore.all()});
  },

  componentDidMount: function(){
    PokemonStore.addListener(this._updateState);
    ApiUtil.fetch();
  },

  componentWillUnmount: function(){
    PokemonStore.removeListener(this._updateState);
  },

  render: function(){
    var pokemons = [];
    for (key in this.state.pokemons) {
      if (this.state.pokemons.hasOwnProperty(key)) {
        pokemons.push(<PokemonIndexItem key={key} pokemon={this.state.pokemons[key]}/>);
      }
    }
    return(
      <div>
        <ul>
          {pokemons}
        </ul>
      </div>
    )
  }
});

module.exports = PokemonIndex;
