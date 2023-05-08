// for

for (let i = 0; i < 20; i++){
    console.log(i)
}

// Não falar

/* for (let i = 0; i < 20; i++){
    if (i === 5){
        continue  // ignora o que vem sem seguida 
    }
    console.log(i)
} */


// while

let numero = 24824

while (numero > 20){
    console.log(numero)
    numero /= 2 // numero = numero / 2
}

// for...of - serve tanto para Strings quanto para arrays

let nome = "Adriano"

for (let letra of nome){
    console.log(letra)
}

let array = [
    "Fra", 
    "Liam"
]

for (let item of array){
    console.log(item)
}


// for... in - cria um loop/itera dentro de um objeto

let pessoa = {
    name: 'Ana',
    age: 40
}

for (let propriedade in pessoa){
    console.log(pessoa[propriedade])
}
