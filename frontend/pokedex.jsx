var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    App = require('./components/App'),
    PokemonDetail = require('./components/pokemons/pokemonDetail'),
    ToyDetail = require('./components/toys/ToyDetail');

  var PokeRouter = (
    <Router>
      <Route path="/" component={App}>
        <Route path="pokemon/:pokemonid" component={PokemonDetail} >
          <Route path="toys/:toyid" component={ToyDetail} ></Route>
        </Route>
      </Route>
    </Router>
  )

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(PokeRouter, document.getElementById('root'));
})
