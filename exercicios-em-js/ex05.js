/*
5) Cálculo de Fatorial:
  Escreva uma função que calcule o fatorial de um número.
*/

// CODIGO

function calculeFatorial(num) {
  if(num === 0 || num === 1) {
    return 1
  } else {
    return num * calculeFatorial(num - 1)
  }
}

console.log(calculeFatorial(5))

// ANOTAÇÕES
/* 
  Apesar de não ser um loop na forma tradicional, este código utiliza recursão para calcular o fatorial do número fornecido. Recursão é um conceito onde uma função chama a si mesma em seu próprio corpo. 
*/
