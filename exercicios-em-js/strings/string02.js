/*
4) Verificação de Palíndromo:
  Escreva uma função que verifique se uma palavra é um palíndromo (ou seja, se pode ser lida da mesma forma de trás para frente e vice-versa).
*/

// CODIGO

function verificarPalindromo(palavra) {
  const palavraInvertida = palavra.split('').reverse().join('')
  console.log(palavraInvertida)
  return palavra === palavraInvertida
}

console.log(verificarPalindromo('radar'))


// ANOTAÇÕES
/* 
  split(''): Este método divide a string em um array de substrings, utilizando um caractere de separação.

  reverse(): Este método inverte a ordem dos elementos em um array.

  join(''): Este método junta todos os elementos de um array em uma string. 
*/
