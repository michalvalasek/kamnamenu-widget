/** @jsx React.DOM */

var KamnamenuWidget = require('./components/KamnamenuWidget.jsx');

// Data for the whole week
// var widget_data = [
//   {'soups':[['karfiolova','1,50'],['zeleninova','1,50']],'mains':[['madarsky gulas','3,20'],['rezen so zemiakovou kasou','3,20'],['vyprazany syr s hranolkami','3,00']]},
//   {'soups':[['rajcinova','1,50'],['gulasova','1,50']],'mains':[['madarsky gulas','3,20'],['rezen so zemiakovou kasou','3,20'],['vyprazany syr s hranolkami','3,00']]},
//   {'soups':[['slepacia','1,50'],['zeleninova','1,50']],'mains':[['madarsky gulas','3,20'],['rezen so zemiakovou kasou','3,20'],['vyprazany syr s hranolkami','3,00']]},
//   {'soups':[['hlivova','1,50'],['karfiolova','1,50']],'mains':[['madarsky gulas','3,20'],['rezen so zemiakovou kasou','3,20'],['vyprazany syr s hranolkami','3,00']]},
//   {'soups':[['francuzska','1,50'],['minestrone','1,50']],'mains':[['madarsky gulas','3,20'],['rezen so zemiakovou kasou','3,20'],['vyprazany syr s hranolkami','3,00']]},
// ];
var widget_data = [
  [[['Polievka','karfiolova','1.00'],['Polievka','karfiolova','1.00'],['Hlavné jedlo','madarsky gulas','2.00'],['Hlavné jedlo','madarsky gulas','2.00']], 'dodatocne informacie'],
  [[['Polievka','rajcinova','3.00'],['Polievka','karfiolova','1.00'],['Hlavné jedlo','nazov jedla 7','3.00']],['Hlavné jedlo','rezen so zemiakovou kasou','2.00'], 'dodatocne informacie'],
  [[['Polievka','slepacia','1.00'],['Polievka','karfiolova','1.00'],['Hlavné jedlo','rezen so zemiakovou kasou','3.00']], 'dodatocne informacie'],
  [[['Polievka','hlivova','1.00'],['Hlavné jedlo','rezen so zemiakovou kasou','4.00']], 'dodatocne informacie'],
  [[['Polievka','francuzska','2.00'],['Dezert','panna cotta','4.00']], 'dodatocne informacie']
];

var holder = document.getElementById('kamnamenu-widget-holder-small');
var store_id = holder.getAttribute('data-store-id');

React.render(
  <KamnamenuWidget data={widget_data} />,
  holder
);
