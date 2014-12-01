/** @jsx React.DOM */

var DaysSwitcher = require('./DaysSwitcher.jsx');
var DailyMenu = require('./DailyMenu.jsx');

var KamnamenuWidget = React.createClass({
  getInitialState: function(){
    return {
      day: 0 // set the current day of the week
    }
  },
  previousDay: function(){
    var limit = this.props.data.length - 1;
    var newDay = this.state.day > 0 ? this.state.day - 1 : limit;
    this.setState({day: newDay});
  },
  nextDay: function(){
    var limit = this.props.data.length - 1;
    var newDay = this.state.day < limit ? this.state.day + 1 : 0;
    this.setState({day: newDay});
  },

  render: function(){
    var styles = {
      widget: {width:'300px', border:'1px solid #e1e1e8', background: '#fafafc'},
      header: {background:'#428bca', padding:'0 1em'},
      headerTitle: {margin:'0', color:'#fafafc'},
      headerSubtitle: {margin:'0',color:'#f7f7f9'}
    };
    return(
      <div style={styles.widget}>
        <div style={styles.header}>
          <h3 style={styles.headerTitle}>kamnamenu.sk</h3>
          <p style={styles.headerSubtitle}>Prehlad menu na tento tyzden</p>
        </div>
        <DaysSwitcher day={this.state.day} onPreviousDay={this.previousDay} onNextDay={this.nextDay} />
        <DailyMenu day={this.state.day} data={this.props.data[this.state.day]} />
      </div>
    );
  }
});

module.exports = KamnamenuWidget;
