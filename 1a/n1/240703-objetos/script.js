

let produto = {
    nome: 'Bala',
    preco: 1
}
// console.log(produto);

// console.log(produto.preco);
// produto.preco = 3

// console.log(produto);
// produto.preco = 2
// console.log(produto);

// produto.nome = 'Bala normal'
// produto.preco = 15
// console.log(produto);

let produtos = []

produtos.push(produto)

produto = {
    nome: 'Chiclé',
    preco: 0.25
}
produtos.push(produto)

console.log(produtos);

// console.log("Nome valendo adesivo: ", produtos[0].nome);

console.log('Produto: ' + produtos[0].nome)
console.log('R$: ' + produtos[0].preco)

for(i=0;i<produtos.length;i++){
    console.log('Produto: ' + produtos[i].nome)
    console.log('R$: ' + produtos[i].preco)
}
