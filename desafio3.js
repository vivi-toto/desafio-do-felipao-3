class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
}

let guerreiro = new heroi("Ragnar", 28, "guerreiro"); 
let mago = new heroi("Alaric", 35, "mago");
let monge = new heroi("Balbornas", 47, "monge");
let ninja = new heroi("Hatori", 32, "ninja");

console.log(guerreiro);
console.log(mago);
console.log(monge);
console.log(ninja);


