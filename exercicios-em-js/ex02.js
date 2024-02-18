/* 
2) Verificação de Número Par ou Ímpar:
  Escreva uma função que verifique se um número é par ou ímpar e retorne uma mensagem correspondente.
*/

// CODIGO

function parOuImpar(num) {
  if(num === 0) {
    return `O número ${num} é zero`
  } else if(num % 2 === 0) {
    return `O número ${num} é par`
  } else {
    return `O número ${num} é impar`
  }
}

console.log(parOuImpar(0))
console.log(parOuImpar(2))
console.log(parOuImpar(5))
