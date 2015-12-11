var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    ApiUtil = require('../../util/ApiUtil');

var PokemonForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {name: "", attack: "", defense: "", poke_type: "", moves: [], image_url: ""};
  },

  handleSubmit: function(e) {
    e.preventDefault();

    ApiUtil.createPoke({
      name: this.state.name,
      attack: this.state.attack,
      defense: this.state.defense,
      poke_type: this.state.poke_type,
      moves: this.state.moves,
      image_url: this.state.image_url
    });

    this.setState({name: "", attack: "", defense: "", poke_type: "", moves: [], image_url: ""})
  },

  handleChange: function(e) {
    var moveClone = this.state.moves.slice();
    moveClone[e.target.id] = e.target.value;
    this.setState({moves: moveClone});
  },

  render: function() {
    return(
      <form className="new-pokemon" onSubmit={this.handleSubmit}>
        <label>Pokemon Name</label>
        <input type="text" valueLink={this.linkState("name")}></input>
        <br></br>
        <label>Attack Value</label>
        <input type="number" valueLink={this.linkState("attack")}></input>
        <br></br>
        <label>Defense Value</label>
        <input type="number" valueLink={this.linkState("defense")}></input>
        <br></br>
        <label>Pokemon Type</label>
        <select valueLink={this.linkState("poke_type")}>
          {pokemonTypes.map(function(type) {
            return <option key={type} value={type}>{type}</option>
          })}
        </select>
        <br></br>
        <label>Moves</label>
        <br></br>
        <input type="text" onInput={this.handleChange} id="0" placeholder="move 1"></input>
        <input type="text" onInput={this.handleChange} id="1" placeholder="move 2"></input>
        <input type="text" onInput={this.handleChange} id="2" placeholder="move 3"></input>
        <input type="text" onInput={this.handleChange} id="3" placeholder="move 4"></input>
        <br></br>
        <label>Upload Image</label>
        <input type="text" valueLink={this.linkState("image_url")}></input>
        <br></br>
        <input type="submit" value="Submit"></input>
      </form>
    )
  }
});

module.exports = PokemonForm;
