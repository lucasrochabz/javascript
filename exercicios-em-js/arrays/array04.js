/*
4) Contar o número de elementos pares em um array:
  Escreva uma função que recebe um array de números e retorna a quantidade de elementos pares presentes nesse array.
*/

// CODIGO

function contarNumerosPares(array) {
  let contador = 0
  for (let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0) {
      contador++
    }
  }
  return `A quantidade de elementos pares presentes no array é de ${contador}`
}

const numeros = [1, 2, 3, 4, 5]
console.log(contarNumerosPares(numeros))
