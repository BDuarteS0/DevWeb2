function exibirDados(produto){
    return `Produto ${produto.nome}, Preço: R$${produto.preco}, Estoque: ${produto.estoque} unidades`;
}

const produto ={
    nome:"Mouse",
    preco:200.00,
    estoque:2
};

console.log(exibirDados(produto));


const numeros=[1,2,3];
numeros.forEach(num => {
    console.log(`Numero: ${num}`);
});

const dobrado = (numeros.map(num => num*2));
console.log(dobrado);