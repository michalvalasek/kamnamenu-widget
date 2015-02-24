/** @jsx React.DOM */

var DaysSwitcher = React.createClass({
  dayName: function() {
    dayNumber = Math.min(this.props.day, 6);
    var days = ['Pondelok','Utorok','Streda','Štvrtok','Piatok','Sobota','Nedeľa'];
    return days[dayNumber];
  },
  render: function(){
    var styles = {
      div: {background:'#f7f7f9', borderBottom:'1px solid #e1e1e8'},
      leftArr: {width:24, height:25, float:'left', backgroundColor:'#D24E4C', border:0, color:'#ffffff'},
      rightArr: {width:24, height:25, float:'right', backgroundColor:'#D24E4C', border:0, color:'#ffffff'},
      day: {display:'inline-block', width:148, fontSize:13, textAlign:'center', color:'#415464', lineHeight:'25px', fontWeight:'bold', fontFamily:'Arial, Helvetica, sans-serif'}
    };
    return(
      <div style={styles.div}>
        <button onClick={this.props.onPreviousDay} style={styles.leftArr}>&lang;</button>
        <span style={styles.day}>{this.dayName()}</span>
        <button onClick={this.props.onNextDay} style={styles.rightArr}>&rang;</button>
      </div>
    );
  }
});

module.exports = DaysSwitcher;
