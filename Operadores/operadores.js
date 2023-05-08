// OPERADORES ARITMÉTICOS

// Multiplicação *

console.log(3.2 * 5)

// divisão /

let div = 13 / 7

console.log(div.toFixed(2))

// soma +

console.log(10 + 15)

// subtração -

console.log(23 - 4)

// resto da divisão %

console.log(10 % 5)

// Incremento ++

let incremento = 0
incremento++

console.log(incremento++) // o resultado será 1 porque ele está imprimindo primeiro e depois incrementando

// decremento --

let decremento = 2

console.log(decremento--)

// Exponencial **

console.log(2 ** 3)


// APERADORES LÓGICOS
// valores booleanos, quando verificados resultará em verdadeiro ou falso

let condicao1 = false
let condicao2 = false

// AND: só será verdadeiro quando todas as condições também forem

console.log(condicao1 && condicao2)

// OR: só será verdadeiro quando ao menos uma condição for verdadeira

console.log(condicao1 || condicao2)

// NOT

console.log(!condicao1)


// Exemplo: verificar se um valor está entre 5 e 6

let valor = 5.7

console.log(valor > 5 && valor < 6)


// Diferença entre == e ===

console.log(1 === "1")