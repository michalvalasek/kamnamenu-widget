/** @jsx React.DOM */

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
    var divStyle = {
      width: '300px',
      border: '1px solid #e1e1e8',
      background: '#fafafc'
    };
    return(
      <div style={divStyle}>
        <WidgetHeader  />
        <DaysSwitcher day={this.state.day} onPreviousDay={this.previousDay} onNextDay={this.nextDay} />
        <DailyMenu day={this.state.day} data={this.props.data[this.state.day]} />
      </div>
    );
  }
});

var WidgetHeader = React.createClass({
  render: function(){
    var styles = {
      div: {background:'#428bca', padding:'0 1em'},
      title: {margin:'0', color:'#fafafc'},
      subtitle: {margin:'0',color:'#f7f7f9'}
    };
    return(
      <div style={styles.div}>
        <h3 style={styles.title}>kamnamenu.sk</h3>
        <p style={styles.subtitle}>Prehlad menu na tento tyzden</p>
      </div>
    );
  }
});

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

var DailyMenu = React.createClass({
  render: function(){
    var soups = this.props.data['soups'].map(function(item){
      return (
        <MenuItem data={item} />
      );
    });
    var mains = this.props.data['mains'].map(function(item){
      return (
        <MenuItem data={item} />
      );
    });
    var styles = {
      div: {clear:'both', padding:'1em'}
    };
    return(
      <div style={styles.div}>
        <h4>Polievky</h4>
        <ol>
          {soups}
        </ol>
        <hr />
        <h4>Hlavné jedlá</h4>
        <ol>
          {mains}
        </ol>
      </div>
    );
  }
});

var MenuItem = React.createClass({
  render: function(){
    return(
      <li>
        {this.props.data[0]}: {this.props.data[1]}
      </li>
    );
  }
});

// END OF THE COMPONENTS DEFINITIONS

// Data for the whole week
var widget_data = [
  {'soups':[['karfiolova','1,50'],['zeleninova','1,50']],'mains':[['madarsky gulas','3,20'],['rezen so zemiakovou kasou','3,20'],['vyprazany syr s hranolkami','3,00']]},
  {'soups':[['rajcinova','1,50'],['gulasova','1,50']],'mains':[['madarsky gulas','3,20'],['rezen so zemiakovou kasou','3,20'],['vyprazany syr s hranolkami','3,00']]},
  {'soups':[['slepacia','1,50'],['zeleninova','1,50']],'mains':[['madarsky gulas','3,20'],['rezen so zemiakovou kasou','3,20'],['vyprazany syr s hranolkami','3,00']]},
  {'soups':[['hlivova','1,50'],['karfiolova','1,50']],'mains':[['madarsky gulas','3,20'],['rezen so zemiakovou kasou','3,20'],['vyprazany syr s hranolkami','3,00']]},
  {'soups':[['francuzska','1,50'],['minestrone','1,50']],'mains':[['madarsky gulas','3,20'],['rezen so zemiakovou kasou','3,20'],['vyprazany syr s hranolkami','3,00']]},
];

React.render(
  <KamnamenuWidget data={widget_data} />,
  document.getElementById('kamnamenu-widget-holder')
);
