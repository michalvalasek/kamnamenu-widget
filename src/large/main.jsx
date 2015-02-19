/** @jsx React.DOM */

var KamnamenuWidgetLarge = require('./components/KamnamenuWidgetLarge.jsx');

var holder = document.getElementById('kamnamenu-widget-holder-large');
var store_id = holder.getAttribute('data-store-id');

React.render(
  <KamnamenuWidgetLarge storeId={store_id} />,
  holder
);
