/** @jsx React.DOM */

var MenuItem = React.createClass({
  render: function(){
    return(
      <li>
        {this.props.data[0]}: {this.props.data[1]}
      </li>
    );
  }
});

module.exports = MenuItem;
