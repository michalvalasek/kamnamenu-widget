/** @jsx React.DOM */

var MenuItem = require('./MenuItem.jsx');

var DailyMenu = React.createClass({
  getInitialState: function(){
    var now = Date.now();
    var date = new Date(now + this.props.dayIndex * 24 * 3600 * 1000);
    return { date: date };
  },

  dayName: function() {
    var dayNumber = this.state.date.getDay();
    var days = ['Pondelok','Utorok','Streda','Štvrtok','Piatok','Sobota','Nedeľa'];
    return days[dayNumber];
  },

  formattedDate: function() {
    var d = this.state.date;
    return (d.getDay()+1) + '.' + (d.getMonth()+1) + '.' + (d.getFullYear()+1);
  },

  render: function(){
    var menuItems = this.props.data[0].map(function(item,i){
      return (
        <MenuItem data={item} key={i} />
      );
    });

    var styles = {
      date: {margin:0, backgroundColor:'#E1E9EF', color:'#4A3D3D', fontSize:13, padding:'5px 10px', color:'#415464', fontFamily:'Arial, Helvetica, sans-serif'},
      table: {width:'100%', fontSize:11, marginTop:5, marginBottom:5, color:'#415464'}
    };

    return(
      <div>
        <h4 style={styles.date}>{this.dayName()} - {this.formattedDate()}</h4>
        <table style={styles.table}>
          {menuItems}
        </table>
      </div>
    );
  }
});

module.exports = DailyMenu;
