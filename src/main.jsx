/** @jsx React.DOM */

var KamnamenuWidget = require('./components/KamnamenuWidget.jsx');

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
