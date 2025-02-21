const pessoa = {
    nome: "Bruno",
    idade: 22,
    usuario: "aluno",
    saudar: function (){
        return "Oi, meu nome é " + this.nome + " e eu sou " + this.usuario + " e tenho " + this.idade + "anos.";
    }
};

console.log(pessoa.nome);
console.log(pessoa.saudar());

class Animal{
    constructor(nome, tipoAnimal){
        this.nome = nome;
        this.tipoAnimal = tipoAnimal;
    }

    exibirInfos(){
        return `Este é um ${this.tipoAnimal} chamado ${this.nome}, `;
    }
}

const cachorro = new Animal("Duck", "Cachorro");
const gato = new Animal ("Tom", "gato");
console.log(cachorro.exibirInfos());
console.log(gato.exibirInfos());
