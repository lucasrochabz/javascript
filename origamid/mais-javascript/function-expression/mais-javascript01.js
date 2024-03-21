// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
priceNumber('R$ 99,99');
console.log(priceNumber('R$ 99,99'));

// Crie uma IIFE e isole o escopo
// de qualquer código JS.

(function() {
  const nome = 'Lucas';
  console.log(nome);
})();

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();

active(function() {
  console.log('Teste de Active');
});
