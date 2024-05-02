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


// ou assim:
function contagemRegressiva(num) {
  if (num < 0) {
    console.log('Erro: O número fornecido é negativo')
  }
  for (let i = num; i >= 0; i--) {
    console.log(i)
  }
}

contagemRegressiva(-5);
// ou assim:
function contagemRegressiva(num) {
  if (typeof num!== 'number' || isNaN(num) || num <= 0) {
    return `Número inválido. Por favor, forneça um número inteiro positivo.`
  } else {
    contagem = []
    for (let i = num; i > 0; i--) {
      contagem.push(i)
    }
    return contagem;
  }
}

console.log(contagemRegressiva(5))
