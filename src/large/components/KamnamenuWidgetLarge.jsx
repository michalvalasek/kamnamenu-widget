/** @jsx React.DOM */

var embeddedImages = require('./../embeddedImages.js');
var WeeklyMenu = require('./WeeklyMenu.jsx');

var KamnamenuWidgetLarge = React.createClass({

  getInitialState: function(){
    return {
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

  render: function(){
    var styles = {
      widget: {width:'100%', border:'1px solid #e1e1e8',background:'#fafafc', borderRadius:5,MozBorderRadius:5, WebkitBorderRadius:5, marginBottom:20},
      header: {width:'100%', height:60, padding:'0 1em', background:"url("+embeddedImages.logo+") no-repeat 10px 5px", borderRadius:'5px 5px 0 0', MozBorderRadius:'5px 5px 0 0',WebkitBorderRadius:'5px 5px 0 0'},
      headerLink: {position:'relative', top:15, left:0, width:195, height:30, float:'left'}
    };

    return(
      <div style={styles.widget}>
        <div style={styles.header}>
          <a href="http://www.kamnamenu.sk/" title="www.kamnamenu.sk" target="_blank" style={styles.headerLink}></a>
        </div>
        <WeeklyMenu data={this.state.data} />
      </div>
    );
  }
});

module.exports = KamnamenuWidgetLarge;
