/** @jsx React.DOM */

var KamnamenuWidget = require('./components/KamnamenuWidget.jsx');

var holder = document.getElementById('kamnamenu-widget-holder-small');
var store_id = holder.getAttribute('data-store-id');

React.render(
  <KamnamenuWidget storeId={store_id} />,
  holder
);
