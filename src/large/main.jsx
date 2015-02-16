/** @jsx React.DOM */

var KamnamenuWidgetLarge = require('./components/KamnamenuWidgetLarge.jsx');

// Data for the whole week
var widget_data = [
  [[['Polievka','karfiolova','1.00'],['Polievka','karfiolova','1.00'],['Hlavné jedlo','madarsky gulas','2.00'],['Hlavné jedlo','madarsky gulas','2.00']], 'dodatocne informacie'],
  [[['Polievka','rajcinova','3.00'],['Polievka','karfiolova','1.00'],['Hlavné jedlo','nazov jedla 7','3.00'],['Hlavné jedlo','rezen so zemiakovou kasou','2.00']], 'dodatocne informacie'],
  [[['Polievka','slepacia','1.00'],['Polievka','karfiolova','1.00'],['Hlavné jedlo','rezen so zemiakovou kasou','3.00']], 'dodatocne informacie'],
  [[['Polievka','hlivova','1.00'],['Hlavné jedlo','rezen so zemiakovou kasou','4.00']], 'dodatocne informacie'],
  [[['Polievka','francuzska','2.00'],['Dezert','panna cotta','4.00']], 'dodatocne informacie']
];
var holder = document.getElementById('kamnamenu-widget-holder-large');
var store_id = holder.getAttribute('data-store-id');

React.render(
  <KamnamenuWidgetLarge data={widget_data} />,
  holder
);
