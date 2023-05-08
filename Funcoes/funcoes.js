function sayHello(){
    console.log("Hello world!")
}

function linha(){
    console.log("========================")
}

function print(msg){
    console.log(msg)
}

print("Oi mais uma vez")

linha()
console.log("Oi")
linha()

function soma(numero1, numero2){ // parâmetros
    return  numero1 + numero2
}

const x = soma(5, 6)
console.log(x) // o que eu passo dentro das funções são os arguementos

// função anônima

const soma2 = function(numero1, numero2){
    return numero1 + numero2
}

console.log(soma2(2, 5))

// Arrow function

const multiplicacao = (numero1, numero2) => {
    return numero1 * numero2
}

console.log(multiplicacao(3, 6))
