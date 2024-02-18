/*
1) Contagem regressiva de 10 a 1:
*/

// CODIGO

function contagemRegressiva(num) {
  for (let i = 10; i >= 1; i--) {
    console.log(i)
  }
  return 'Fim'
}

console.log(contagemRegressiva(10))

// pode deixar fora do for. Lembrando que sempre em uma função se não tiver return ele retorna undefined.