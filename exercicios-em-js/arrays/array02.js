/*
2) Encontrar o maior número em um array:
  Escreva uma função que recebe um array de números e retorna o maior número presente nesse array.
*/

// CODIGO
function encontrarMaiorNumero(array) {
  let maior = array[0]
  for (let i = 1; i < array.length; i++) {
    if(array[i] > maior) {
      maior = array[i]
    }
  }
  return `o maior é ${maior}`
}

const numeros = [2, 1, 5, 4, 3]
console.log(encontrarMaiorNumero(numeros))
