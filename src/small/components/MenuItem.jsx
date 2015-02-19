/** @jsx React.DOM */

var MenuItem = React.createClass({
  render: function(){
    var styles = {
      row: {padding:'3px 0', display:'block', width:'100%'},
      name: {width:150, paddingLeft:5},
      price: {width:45, color:'#3090c3', verticalAlign:'top', textAlign:'center'}
    };
    return(
      <tr style={styles.row}>
        <td style={styles.name}>{this.props.data[1]}</td>
        <td style={styles.price}>{this.props.data[2]} &euro;</td>
      </tr>
    );
  }
});

module.exports = MenuItem;
