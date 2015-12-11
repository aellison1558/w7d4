var React = require('react'),
    PokemonStore = require('../../stores/PokemonStore'),
    ApiUtil = require('../../util/ApiUtil');

var ToyDetail = React.createClass({
  listeners: [],
  getInitialState: function(){
    return {toy: this.getStateFromStore(this.props.params.pokemonid, this.props.params.toyid)}
  },

  getStateFromStore: function(pokemonid, id){
    var pokemon = PokemonStore.find(parseInt(pokemonid));
    var toy = pokemon.toys.find(function(toy){ return toy.id === parseInt(id);});
    return toy;
  },

  onChange: function(){
    this.setState({toy: this.getStateFromStore(this.props.params.pokemonid, this.props.params.toyid)})
  },

  componentDidMount: function(){
    this.listeners.push(PokemonStore.addListener(this.onChange));
  },

  componentWillUnmount: function(){
    this.listeners.forEach(function(listener) {
      listener.remove();
    });
  },

  componentWillReceiveProps: function(newProps){
    ApiUtil.fetchPoke(newProps.params.pokemonid);
  },

  render: function(){
    var prop;
    var img;
    var toy = this.state.toy;

    if (toy) {

      prop = "Name: " +
      toy.name + " Price: " +
      toy.price + " Happiness: " +
      toy.happiness;
      img = toy.image_url;
    } else {
      prop = ""
      img = ""
    }

    return(
      <div className="toy-detail-pane">
        {prop}
        <img src={img} />
      </div>
    )
  },
});

module.exports = ToyDetail;
