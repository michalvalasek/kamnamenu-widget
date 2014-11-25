/** @jsx React.DOM */

var KamnamenuWidget = React.createClass({
  render: function(){
    return(
      <h3>Kamnamenu Widget</h3>
    )
  }
});

React.renderComponent(
  <KamnamenuWidget/>,
  document.getElementById('kamnamenu-widget-holder')
);
