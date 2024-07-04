
let produtos = []

function cadastrarProduto(){
    let produto = {
        nome: prompt("Nome do produto:"),
        preco: Number(prompt("Preço: "))
    }

    produtos.push(produto)
    console.log(produtos);
}

