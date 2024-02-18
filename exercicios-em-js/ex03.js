/*
3) Contagem Regressiva:
  Escreva uma função que aceite um número como entrada e imprima uma contagem regressiva a partir desse número até 0.
*/

// CODIGO

function contagemRegressiva(num) {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
}

contagemRegressiva(5)
