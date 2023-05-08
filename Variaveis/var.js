// Variáveis: quando criamos uma, estamos reservando um espaço na memória para aquele conteúdo
// Nomes simbólicos para receber um valor

/*
var 
let
const
*/

var marca = "LG" // declarando uma variável chamada marca que está recebendo um valor
marca = "Motorola"
console.log(marca)

const nome = "Claudia"
// nome = "Joao" - não pode. Gera um erro
console.log(nome)

// Nomes de variáveis

/*
    JS é case sensitive (maiusculas e minusculas fazem diferença)

    Posso: iniciar com caracteres especiais $ e _, iniciar com letras, colocar acentos
    Não posso: iniciar com numeros, colocar espaços vazios. Dá erro
    Ideal: caramelCase, snake_case. nomes que expliquem o que a variável é/faz

*/



// JS é uma linguagem fracamente tipada e dinâmica. Não é necessário declarar o tipo de uma variável como em algumas linguagens

// não precisa, por exemplo - let clima: String

// dinamica: o tipo de uma variável pode mudar

// O tipo existe a partir do momento que eu atribuo um valor

let clima = "Quente"
console.log(typeof clima)

// Escopo: determina a visibilidade de alguma variável no JS
// global: tudo que está executando na aplicação. Local: só existe dentro de algum escopo

/*
    var: global. Pode funcionar fora de um escopo de bloco. Evitamos usar por conta de sua fleixibidade; pode causar bugs
    let e const: local

*/

{
    var x = 0
}

console.log(`Valor da variável x: ${x}`)


{
    let y = 0
}

console.log(`Valor da variável y: ${y}`) // dá erro




/*let y = 1

{
    y = 0 // "subiu" um escopo para procurar essa variável
    console.log(`Valor da variável y: ${y}`)
}

console.log(`Valor da variável y: ${y}`)

*/


const z = 1

{

    const z = 2
    console.log(`Valor da variável z: ${z}`)
    
}


console.log(`Valor da variável z: ${z}`)





