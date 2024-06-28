const convertToCelsius = function(f) {
  let celsius=(f-32)*(5/9);
  if(Number.isInteger(celsius)) {return Number(celsius.toFixed(0));}
  else {return Number(celsius.toFixed(1));}
};

const convertToFahrenheit = function(c) {
  let fahrenheit=(c*(9/5)+32);
  if(Number.isInteger(fahrenheit)) {return Number(fahrenheit.toFixed(0));}
  else {return Number(fahrenheit.toFixed(1));}
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
