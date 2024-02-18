/*
6) Conversão de Celsius para Fahrenheit:
  Escreva uma função que converta uma temperatura de Celsius para Fahrenheit.
*/

// CODIGO

function converterTemperatura(celsius) {
  const fahrenheit = (celsius * 1.8) + 32
  return `${celsius} graus Celsius é equivalente a ${fahrenheit} graus Fahrenheit.`
}

console.log(converterTemperatura(28))

