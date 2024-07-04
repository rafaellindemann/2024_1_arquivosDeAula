
let produtos = []

let nome = document.getElementById('productName')
let descricao = document.getElementById('productDescription')
let preco = document.getElementById('productPrice')
let painel = document.getElementById('painel')
let alvo = -1

function cadastrar(){
    let produto = {
        nome: nome.value,
        descricao: descricao.value,
        preco: Number(preco.value)
    }

    produtos.push(produto)

    nome.value = ''
    descricao.value = ''
    preco.value = ''
    nome.focus()

    console.log(produtos)
}

function pesquisar(){
    let pesquisa = nome.value

    // let resultado = produtos.filter(produto => produto.nome.includes(pesquisa))
    let resultado

    for(i=0; i<produtos.length; i++){
        if(produtos[i].nome.includes(pesquisa)){
            alvo = i;
            nome.value = produtos[i].nome
            descricao.value = produtos[i].descricao
            preco.value = produtos[i].preco

            console.log('Produto encontrado: ', produtos[i])
            console.log('Alvo: '+alvo);
        }
    }
}

function editar(){
    if(alvo == -1){
        alert('Nenhum produto selecionado')
        console.log('Nenhum produto selecionado')
        return
    }
    produtos[alvo].nome = nome.value
    produtos[alvo].descricao = descricao.value
    produtos[alvo].preco = preco.value

    nome.value = ''
    descricao.value = ''
    preco.value = ''
    nome.focus()
    alvo = -1;
    mostrarTodos()

    console.log(produtos)
}

function deletar(){
    if(alvo == -1){
        alert('Nenhum produto selecionado')
        console.log('Nenhum produto selecionado')
        return
    }

    produtos.splice(alvo, 1)

    nome.value = ''
    descricao.value = ''
    preco.value = ''
    nome.focus()
    alvo = -1;
    mostrarTodos()
    console.log(produtos)

}

function mostrarTodos(){
    console.log(produtos)
    painel.innerHTML = ''
    for(i=0; i<produtos.length; i++){
        painel.innerHTML += '<h2>'+produtos[i].nome+'</h2>'+
                '<p>'+produtos[i].descricao+'</p>'+
                '<p>R$'+produtos[i].preco.toFixed(2)+'</p>'
    }
}

function fakes(){
    let fake = {
        nome: 'Sapato Fake',
        descricao: 'Sapato de mentirinha',
        preco: 100
    }
    produtos.push(fake)

    fake = {
        nome: 'Pochete Fake',
        descricao: 'Pochete de mentirinha',
        preco: 10
    }
    produtos.push(fake)

    fake = {
        nome: 'Boné Fake',
        descricao: 'Boné de lagartixa',
        preco: 8
    }
    produtos.push(fake)

    console.log(produtos);
}

