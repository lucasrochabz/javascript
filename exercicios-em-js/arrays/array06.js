/*
  Ordenar em ordem decrescente
*/

function ordenarDecrescente(array) {
  return array.sort((a, b) => b - a);
}

const valores = [2, 4, 6, 5, 3];
console.log(ordenarDecrescente(valores));
