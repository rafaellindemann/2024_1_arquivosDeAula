
let nome = document.getElementById('productName')
let descricao = document.getElementById('productDescription')
let preco = document.getElementById('productPrice')

let produtos = []

function cadastrar(){
    let produto = {
        nome: nome.value,
        descricao: descricao.value,
        preco: Number(preco.value)
    }
    produtos.push(produto) 
    console.log(produtos);

    nome.value = ''
    descricao.value = ''
    preco.value = ''
    nome.focus()
}

function pesquisar(){
    let pesquisa = nome.value
    for(i=0;i<produtos.length;i++){
        console.log(produtos[i].nome)
        // testar se é o certo
    }

    console.log(pesquisa);
}