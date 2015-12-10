var React = require('react'),
    PokemonStore = require('../../stores/PokemonStore'),
    ApiUtil = require('../../util/ApiUtil'),
    History = require('react-router').History;

var PokemonIndexItem = React.createClass({
  mixins: [History],

  showDetail: function() {
    var url = "/pokemon/" + (this.props.pokemon.id);
    this.history.push(url);
  },

  render: function(){
    return(
      <li className="poke-list-item" onClick={this.showDetail}>
        Name: {this.props.pokemon.name}
        <br/>
        Type: {this.props.pokemon.poke_type}
      </li>
    )
  }
});

module.exports = PokemonIndexItem;
