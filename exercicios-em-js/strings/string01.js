/* 
1) Verificar se uma palavra é um palíndromo.
*/

// CODIGO

function verificarPalindromo(palavra) {
  const reverso = palavra.split('').reverse().join('')
  return palavra === reverso 
}

const palavra = 'arara'
if(verificarPalindromo(palavra)) {
  console.log(`${palavra} é um palíndromo.`)
} else {
  console.log(`${palavra} não é um palíndromo.`)
}
