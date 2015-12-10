var React = require('react'),
    ToyIndexItem = require('./toyIndexItem');

var ToyIndex = React.createClass({
  render: function(){
    var toys = this.props.toys.map(function(toy, idx){
      return <ToyIndexItem toy={toy} key={idx} />
    })

    return(
      <ul>
        {toys}
      </ul>
    )
  }
});

module.exports = ToyIndex;
