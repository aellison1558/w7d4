var React = require('react'),
    History = require('react-router').History;

var ToyIndexItem = React.createClass({
  mixins: [History],
  showDetail: function(){
    var url = "/pokemon/" + (this.props.toy.pokemon_id) + "/toys/" + (this.props.toy.id);
    this.history.push(url);
  },

  render: function(){
    return(
      <li className="toy" onClick={this.showDetail}>{this.props.toy.name}</li>
    );
  }
});

module.exports = ToyIndexItem;
