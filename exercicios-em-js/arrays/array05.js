/*
5) Calcular a média de valores em um array.
*/

// CODIGO

function calcularMedia(array) {
  let soma = 0
  for (let i = 0; i < array.length; i++) {
    soma += array[i]
  }
  return (soma / array.length).toFixed(2)
  // return soma / array.length
}

const valores = [1, 2, 3, 4, 5]
const media = calcularMedia(valores)
console.log(`A média dos valores é de: ${media}`)
