/** @jsx React.DOM */

var MenuItem = React.createClass({
  render: function(){
    var styles = {
      row: {padding:'3px 0', float:'left', width:'100%'},
      padder: {width:'2%', float:'left'},
      name: {width:'88%', float:'left', fontFamily:'Arial, Helvetica, sans-serif'},
      price: {width:'8%', float:'left', color:'#3090c3', verticalAlign:'top', textAlign:'center', fontFamily:'Arial, Helvetica, sans-serif'}
    };
    return(
      <tr style={styles.row}>
        <td style={styles.padder}>&nbsp;</td>
        <td style={styles.name}>
          {this.props.data[0]} - {this.props.data[1]}
        </td>
        <td style={styles.price}>{this.props.data[2]}&nbsp;&euro;</td>
      </tr>
    );
  }
});

module.exports = MenuItem;
