/** @jsx React.DOM */

var MenuItem = React.createClass({
  render: function(){
    var styles = {
      row: {padding:'3px 0', float:'left', width:'100%'},
      name: {width:'90%', float:'left', paddingLeft:'1em'},
      price: {width:'10%', float:'left', color:'#3090c3', verticalAlign:'top', textAlign:'center'},
    };
    return(
      <tr style={styles.row}>
        <td style={styles.name}>{this.props.data[0]} - {this.props.data[1]}</td>
        <td style={styles.price}>{this.props.data[2]} &euro;</td>
      </tr>
    );
  }
});

module.exports = MenuItem;
