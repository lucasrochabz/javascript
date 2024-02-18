/* 
1) Somar elementos de um array:
  Escreva uma função que recebe um array de números e retorna a soma de todos os elementos.
*/

// CODIGO

function somarElementos(array) {
  let soma = 0
  for (let i = 0; i < array.length; i++) {
    soma += array[i]
  }
  return `A soma de todos os elementos é ${soma}`
}

const numeros = [1, 2, 3, 4, 5]
console.log(somarElementos(numeros))
