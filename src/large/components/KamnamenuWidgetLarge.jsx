/** @jsx React.DOM */

var DailyMenu = require('./DailyMenu.jsx');

var KamnamenuWidgetLarge = React.createClass({
  render: function(){
    var days = this.props.data.map(function(item,i){
      return (
        <DailyMenu data={item} dayIndex={i} key={i} />
      );
    });

    var styles = {
      widget: {width:'100%', border:'1px solid #e1e1e8',background:'#fafafc', borderRadius:5,MozBorderRadius:5, WebkitBorderRadius:5, marginBottom:20},
      header: {width:'100%', height:60, padding:'0 1em', background:"url('#IMAGES_LOCATION#/widget-big-logo.png') no-repeat 10px 5px", borderRadius:'5px 5px 0 0', MozBorderRadius:'5px 5px 0 0',WebkitBorderRadius:'5px 5px 0 0'},
      headerLink: {position:'relative', top:15, left:0, width:195, height:30, float:'left'},
      body: {clear:'both', padding:0}
    };

    return(
      <div style={styles.widget}>
        <div style={styles.header}>
          <a href="http://www.kamnamenu.sk/" title="www.kamnamenu.sk" target="_blank" style={styles.headerLink}></a>
        </div>
        <div style={styles.body}>
          {days}
        </div>
      </div>
    );
  }
});

module.exports = KamnamenuWidgetLarge;
