/** @jsx React.DOM */

var MenuItem = React.createClass({
  render: function(){
    var styles = {
      row: {padding:'3px 0', float:'left', width:'100%'},
      name: {width:'90%', float:'left', fontFamily:'Arial, Helvetica, sans-serif'},
      price: {width:'10%', float:'left', color:'#3090c3', verticalAlign:'top', textAlign:'center', fontFamily:'Arial, Helvetica, sans-serif'},
      padder: {width:'1em', display:'inline-block'}
    };
    return(
      <tr style={styles.row}>
        <td style={styles.name}>
          <span style={styles.padder}></span>
          {this.props.data[0]} - {this.props.data[1]}
        </td>
        <td style={styles.price}>{this.props.data[2]} &euro;</td>
      </tr>
    );
  }
});

module.exports = MenuItem;
