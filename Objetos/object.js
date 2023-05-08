// Object - dado que cria uma estrutura
// propriedade e métodos

/*

{ propriedade: "valor" }

*/

console.log({
    nome: "Kayky",
    idade: 23,
    jaComeu: true
})

// exemplo

let pessoa = {
    nome: "Carla",
    idade: 65,
    peso: 87,
    filhos: false,
    soma: function(a, b){
        return a + b
    }
}

//pessoa.nome = "Lari"
console.log(`${pessoa.nome} tem ${pessoa.idade} anos.`)
console.log(`${pessoa.soma(3, 6)}`)

// O console, por exemplo, é um objeto; e log() um método associado a ele.


