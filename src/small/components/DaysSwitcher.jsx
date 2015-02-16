/** @jsx React.DOM */

var DaysSwitcher = React.createClass({
  dayName: function() {
    dayNumber = Math.min(this.props.day, 6);
    var days = ['Pondelok','Utorok','Streda','Stvrtok','Piatok','Sobota','Nedela'];
    return days[dayNumber];
  },
  render: function(){
    var styles = {
      div: {background:'#f7f7f9', borderBottom:'1px solid #e1e1e8'},
      leftArr: {width:'24px', float:'left'},
      rightArr: {width:'24px', float:'right'},
      day: {display:'inline-block', width:'250px', fontSize:'18px', textAlign:'center'}
    };
    return(
      <div style={styles.div}>
        <button onClick={this.props.onPreviousDay} style={styles.leftArr}>&lt;</button>
        <span style={styles.day}>{this.dayName()}</span>
        <button onClick={this.props.onNextDay} style={styles.rightArr}>&gt;</button>
      </div>
    );
  }
});

module.exports = DaysSwitcher;
