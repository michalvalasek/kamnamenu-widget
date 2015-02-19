/** @jsx React.DOM */

var MenuItem = require('./MenuItem.jsx');

var DailyMenu = React.createClass({
  render: function(){
    var styles = {
      div: {clear:'both', padding:0},
      section: {margin:0, backgroundColor:'#E1E9EF', color:'#4A3D3D', fontSize:13, padding:5, color:'#415464'},
      table: {fontSize:11, marginTop:5, marginBottom:5, color:'#415464'},
      nocontent: {textAlign:'center', color:'#999999', padding:'2em 0'}
    };

    var meals = this.props.data[0];
    var info = this.props.data[1];

    if (!meals) {
      return (
        <div style={styles.nocontent}>
          Menu na tento deň nie je dostupné.
        </div>
      );
    }

    var componentizeMeal = function(meal,index) {
      return (
        <MenuItem data={meal} key={index} />
      );
    };

    var sections_data = {
      'Špeciálna ponuka':{header:'Špeciálne ponuky',items:[]},
      'Raňajky': {header:'Raňajky',items:[]},
      'Polievka': {header:'Polievky',items:[]},
      'Hlavné jedlo': {header:'Hlavné jedlá',items:[]},
      'Šalát': {header:'Šaláty',items:[]},
      'Dezert': {header:'Dezerty',items:[]}
    };
    var sections_data_keys = Object.keys(sections_data);
    meals.forEach(function(meal){
      if (sections_data_keys.indexOf(meal[0])!=-1) {
        var idx = (sections_data[meal[0]].items.length) + 1;
        sections_data[meal[0]].items.push(componentizeMeal(meal,idx));
      }
    });

    var sections = sections_data_keys.map(function(i){
      if (sections_data[i].items.length > 0) {
        return (
          <div>
            <h4 style={styles.section}>{sections_data[i].header}</h4>
            <table style={styles.table}>
              <tbody>
                {sections_data[i].items}
              </tbody>
            </table>
          </div>
        );
      }
    });

    return(
      <div style={styles.div}>
        {sections}
      </div>
    );
  }
});

module.exports = DailyMenu;
