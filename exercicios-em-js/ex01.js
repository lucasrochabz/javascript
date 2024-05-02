/*
1) Calculadora de Média:
  Escreva uma função que aceite três números como entrada e retorne a média desses números.
*/

// CODIGO

function media(num1, num2, num3) {
  return (num1 + num2 + num3) / 3
}

console.log(media(10,20,30))

//Outra forma:
function calcularMedia(numeros) {
  if (numeros.length === 0) {
    return 0;
  }
  const soma = numeros.reduce((acumulador, numero) => {
    return acumulador + numero
  }, 0)

  const media = soma / numeros.length;
  return media
}

const numeros = [2,4,6]

console.log(calcularMedia(numeros));
