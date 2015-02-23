/** @jsx React.DOM */

var embeddedImages = require('./../embeddedImages.js');
var DaysSwitcher = require('./DaysSwitcher.jsx');
var DailyMenu = require('./DailyMenu.jsx');

var KamnamenuWidget = React.createClass({

  getInitialState: function(){
    return {
      day: this.getCurrentWeekDay(),
      data: []
    }
  },
  componentDidMount: function(){
    var _this = this;
    var cb_name = 'kamnamenuWidgetUpdate' + Date.now();
    var script = document.createElement("script");
        script.src = 'http://www.kamnamenu.sk/widget/export/' + this.props.storeId + '/' + cb_name;

    // create the JSONP response handler
    window[cb_name] = function(resp) {
      if (_this.isMounted()) {
        _this.setState({data: resp});
      }
    }

    // do the ajax request (JSONP)
    document.head.appendChild(script);
  },

  previousDay: function(){
    var limit = this.state.data.length - 1;
    var newDay = this.state.day > 0 ? this.state.day - 1 : limit;
    this.setState({day: newDay});
  },
  nextDay: function(){
    var limit = this.state.data.length - 1;
    var newDay = this.state.day < limit ? this.state.day + 1 : 0;
    this.setState({day: newDay});
  },
  getCurrentWeekDay: function(){
    var us_weekday = (new Date()).getDay();
    return (us_weekday==0 ? 6 : (us_weekday - 1));
  },

  render: function(){
    var styles = {
      widget: {width:200, border:'1px solid #e1e1e8', background:'#fafafc', borderRadius:5, MozBorderRadius:5, WebkitBorderRadius:5, marginBottom:20},
      header: {width:'100%', height:73, padding:0, background:'#cccccc url('+embeddedImages.header+') no-repeat 0 0', borderRadius:'5px 5px 0 0', MozBorderRadius:'5px 5px 0 0', WebkitBorderRadius:'5px 5px 0 0'},
      headerLink: {position:'relative', top:10, left:10, width:180, height:25, float:'left'},
      headerTitle: {margin:0, color:'#fafafc'},
      headerSubtitle: {margin:0, color:'#f7f7f9'},
      footer: {width:'100%', height:15, padding:'0 1em', background:'#cccccc url('+embeddedImages.footer+') no-repeat 0 -6px', borderRadius:'0 0 5px 5px', MozBorderRadius:'0 0 5px 5px', WebkitBorderRadius:'0 0 5px 5px', borderTop:'1px solid #e1e1e8'},
      nocontent: {textAlign:'center', color:'#999999', padding:'2em 0'}
    };

    var content = this.state.data && this.state.data.length>0 ?
      (<div>
          <DaysSwitcher day={this.state.day} onPreviousDay={this.previousDay} onNextDay={this.nextDay} />
          <DailyMenu day={this.state.day} data={this.state.data[this.state.day]} />
        </div>)
      :
      (<div style={styles.nocontent}>Sťahujem dáta...</div>);

    return(
      <div style={styles.widget}>
        <div style={styles.header}>
           <a href="http://www.kamnamenu.sk/" title="www.kamnamenu.sk" target="_blank" style={styles.headerLink}></a>
        </div>
        {content}
        <div style={styles.footer}></div>
      </div>
    );
  }
});

module.exports = KamnamenuWidget;
