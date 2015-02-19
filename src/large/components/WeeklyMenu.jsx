/** @jsx React.DOM */

var DailyMenu = require('./DailyMenu.jsx');

var WeeklyMenu = React.createClass({

  render: function(){
    var styles = {
      week: {clear:'both', padding:0},
      nocontent: {textAlign:'center', color:'#999999', padding:'2em 0'}
    };

    var content = this.props.data && this.props.data.length>0 ?
      // daily menus for the whole week
      this.props.data.map(function(item,i){
        if (item.length>0) {
          return (
            <DailyMenu data={item} dayIndex={i} key={i} />
          );
        }
      })
      :
      // or just the "loading" message
      (<div style={styles.nocontent}>Sťahujem dáta...</div>);

    return(
      <div style={styles.week}>
        {content}
      </div>
    );
  }
});

module.exports = WeeklyMenu;
