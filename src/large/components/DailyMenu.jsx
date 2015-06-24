/** @jsx React.DOM */

var MenuItem = require('./MenuItem.jsx');

var DailyMenu = React.createClass({
  getInitialState: function(){
    var date = new Date(); // today
    var diff = this.props.dayIndex - date.getDay() + 1; // how many days between today and the current day?
    var date = new Date(date.getTime() + diff * 24 * 3600 * 1000); // current day's Date
    return { date: date };
  },

  dayName: function() {
    var dayNumber = this.state.date.getDay();
    var days = ['Nedeľa','Pondelok','Utorok','Streda','Štvrtok','Piatok','Sobota'];
    return days[dayNumber];
  },

  formattedDate: function() {
    var d = this.state.date;
    return (d.getDate()) + '.' + (d.getMonth()+1) + '.' + (d.getFullYear());
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
