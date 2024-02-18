/*
7) Calculadora de IMC:
  Escreva uma função em JavaScript que calcule o Índice de Massa Corporal (IMC) de uma pessoa. O IMC é calculado usando a fórmula:

IMC = peso em quilogramas / (altura em metros)²

A função deve receber dois parâmetros: peso (em quilogramas) e altura (em metros), e retornar o IMC calculado.

Além disso, escreva outra função que, com base no IMC calculado, retorne uma mensagem indicando a faixa de peso da pessoa, de acordo com a seguinte tabela:

IMC < 18.5: "Abaixo do peso"
18.5 <= IMC < 25: "Peso normal"
25 <= IMC < 30: "Sobrepeso"
IMC >= 30: "Obeso"
Escreva também um pequeno código para testar suas funções, onde você pedirá ao usuário que insira seu peso e altura, calculará o IMC e exibirá o resultado junto com a faixa de peso correspondente.
*/

// CODIGO

function calcularIMC(peso, altura) {
  return peso / (altura * altura)
}

function determinarFaixadePeso(imc) {
  if(imc < 18.5) {
    return 'Abaixo do peso'
  } else if(imc < 25) {
    return 'Peso normal'
  } else if(imc < 30) {
    return 'Sobrepeso'
  } else {
    return 'Obeso'
  }
}

const peso = parseFloat(prompt('Digite seu peso em quilogrmas:'))
const altura = parseFloat(prompt('Digite sua altura em metros:'))

const imc = calcularIMC(peso, altura)
const faixaDePeso = determinarFaixadePeso(imc)

console.log('Seu IMC é: ' + imc.toFixed(2))
console.log('Vocé está classificado como: ' + faixaDePeso)

document.write(`<h1>Seu IMC é: ${imc.toFixed(2)}</h1>`)
document.write(`<h1>Vocé está classificado como: ${faixaDePeso}</h1>`)
