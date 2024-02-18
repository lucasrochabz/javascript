/*
3) Inverter um array:
  Escreva uma função que recebe um array e retorna um novo array com os elementos na ordem inversa.
*/

// CODIGO
function inverterArray (array) {
  const novoArray = []
  for (let i = array.length -1; i >= 0; i--) {
    novoArray.push(array[i])
  }
  return novoArray
}

const arrayOriginal = [1,2,3,4,5]
console.log(inverterArray(arrayOriginal));
console.log(arrayOriginal)
