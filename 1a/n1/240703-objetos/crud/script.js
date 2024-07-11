
let nome = document.getElementById('productName')
let descricao = document.getElementById('productDescription')
let preco = document.getElementById('productPrice')

let produtos = []
let encontrado = -1

function cadastrar(){
    let produto = {
        nome: nome.value,
        descricao: descricao.value,
        preco: Number(preco.value)
    }
    produtos.push(produto) 
    console.log(produtos);

    limparFormulario()
}

function limparFormulario(){
    nome.value = ''
    descricao.value = ''
    preco.value = ''
    nome.focus()
}

function pesquisar(){
    let pesquisa = nome.value
    for(i=0;i<produtos.length;i++){
        if(produtos[i].nome == pesquisa){
            // console.log(produtos[i])
            descricao.value = produtos[i].descricao
            preco.value = produtos[i].preco
            encontrado = i
        }
    }
}

function gerarFakes(){
    let produto

    // 1o produto
    produto = {
        nome: 'Kichute',
        descricao: 'A melhor chuteira não chuteira da história',
        preco: 123
    }
    produtos.push(produto)

    //2o produto
    produto = {
        nome: 'Bamba',
        descricao: 'Eu não lembro como era',
        preco: 33
    }
    produtos.push(produto)

    // 3o produto
    produto = {
        nome: 'Caixa de ovo',
        descricao: 'Linda caixa de papelão com ovos dentro',
        preco: 12
    }
    produtos.push(produto)

    // 4o produto
    produtos.push({
        nome: 'Garrafa',
        descricao: 'Garrafa de tomar no gargalo',
        preco: 222
    })

    
    console.log(produtos);

}

function salvar(){
    produtos[encontrado].nome = nome.value
    produtos[encontrado].descricao = descricao.value
    produtos[encontrado].preco = Number(preco.value)

    limparFormulario()
    alert("Produto alterado com baita sucesso")
}

function deletar(){
    if(encontrado != -1){
        produtos.splice(encontrado,1);
    
        limparFormulario()
        alert("Produto removido pra nunca mais")
        encontrado = -1
    }else{
        alert('Epaaaaa, pesquisa aí primeiro')
    }
}

