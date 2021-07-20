function cToF(celcius) {
    var celcTemp = celcius;
    var celcToFahr = celcTemp * 9 / 5 + 32;
    return celcToFahr;
  }
  console.log(cToF(8));
  
  function fToC(fahrenheit) {
    var fahrTemp = fahrenheit;
    var fahrToCelc = (fahrTemp - 32) * 5 / 9;
    return fahrToCelc;
  }
  console.log(fToC(46.4));