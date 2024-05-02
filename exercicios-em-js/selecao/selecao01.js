/*
Fazer um código que conte de 1 até 100, sendo que sempre que um número

for múltiplo de 03, deve retornar "Mar"
for múltiplo de 04, deve retornar "Minino"
for múltiplo de 03 e 04, deve retornar "MarMinino"
*/
// CÓDIGO
for(let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 4 === 0) {
    console.log('MarMinino')
  } else if (i % 3 === 0) {
    console.log('Mar')
  } else if (i % 4 === 0) {
    console.log('Minino')
  } else {
    console.log(i)
  }
}
