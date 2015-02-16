/** @jsx React.DOM */

var MenuItem = require('./MenuItem.jsx');

var DailyMenu = React.createClass({
  render: function(){
    var soups = this.props.data['soups'].map(function(item){
      return (
        <MenuItem data={item} key="soup-{i}" />
      );
    });
    var mains = this.props.data['mains'].map(function(item, i){
      return (
        <MenuItem data={item} key="main-{i}"/>
      );
    });
    var styles = {
      div: {clear:'both', padding:'1em'}
    };

    return(
      <div style={styles.div}>
        <h4>Polievky</h4>
        <ol>
          {soups}
        </ol>
        <hr />
        <h4>Hlavné jedlá</h4>
        <ol>
          {mains}
        </ol>
      </div>
    );
  }
});

module.exports = DailyMenu;
