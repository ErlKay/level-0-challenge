function temperatureInCelc(celcius) {
    var celcTemp = celcius;
    var celcToFahr = celcTemp * 9 / 5 + 32;
    return celcToFahr;
  }
  console.log(temperatureInCelc(8));
  
  function temperatureInFahren(fahrenheit) {
    var fahrTemp = fahrenheit;
    var fahrToCelc = (fahrTemp - 32) * 5 / 9;
    return fahrToCelc;
  }
  console.log(temperatureInFahren(46.4));
