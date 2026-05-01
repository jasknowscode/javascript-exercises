

const convertToCelsius = function(x) {
  celcius = ((x - 32) * (5/9))
  return celcius.Math.round((number * 10) / 10);
};

const convertToFahrenheit = function(y) {
  fahrenheight = ((y * (9/5)) + 32)
  return fahrenheight.Math.round((number * 10) / 10);
};

console.log(convertToCelsius(100));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
