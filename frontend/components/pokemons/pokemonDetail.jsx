var React = require('react'),
    PokemonStore = require('../../stores/PokemonStore'),
    ApiUtil = require('../../util/ApiUtil'),
    ToyIndex = require('../toys/ToysIndex');

var PokemonDetail = React.createClass({
  getInitialState: function() {
    return {pokemon: this.getStateFromStore()};
  },

  updateState: function() {
    this.setState({pokemon: this.getStateFromStore()});
  },

  getStateFromStore: function() {
    return PokemonStore.find(parseInt(this.props.params.pokemonid));
  },

  componentWillReceiveProps: function(newProps) {
    ApiUtil.fetchPoke(newProps.params.pokemonid);
  },

  componentDidMount: function() {
    PokemonStore.addListener(this.updateState);
    ApiUtil.fetchPoke(this.props.params.pokemonid);
  },

  render: function() {
    var prop;
    var img;
    var pokemon = this.state.pokemon;
    var toys = ""

    if (pokemon) {
      if (pokemon.toys) {
        toys = <ToyIndex toys={pokemon.toys}/>
      }
      prop = "Attack: " +
        pokemon.attack + " Defense: " +
        pokemon.defense + " Moves: " +
        pokemon.moves;
      img = pokemon.image_url;
    } else {
      prop = ""
      img = ""
    }
    return(
      <div>
        <div className="pokemon-detail-pane">
          <div className="detail" >
            {prop}
            <br></br>
            <img src={img} />
          </div>
          <h2>Toys</h2>
          {toys}
        </div>

        {this.props.children}
      </div>
    )
  }
});

module.exports = PokemonDetail;
