
// let pessoa = {
//     nome: "Douglas",
//     idade: 22,
//     profissao: "Físico :P"
// }

const pessoas = [
    { nome: "Maria", idade: 10, profissao: "Engenheira" },
    { nome: "Juca", idade: 21, profissao: "Designer" },
    { nome: "João", idade: 22, profissao: "Cozinheiro" },
    { nome: "Adolfa", idade: 33, profissao: "Pintora" },
    { nome: "Ana", idade: 54, profissao: "Professor" }
];
root = document.getElementById('root')




// =====================
// Array de objetos contaPagar
const contasPagar = [
    { nome: "Aluguel", data: "2024-02-10", valor: 1500, situacao: "pendente" },
    { nome: "Energia", data: "2024-02-15", valor: 200, situacao: "pendente" },
    { nome: "Internet", data: "2024-02-20", valor: 100, situacao: "pendente" },
    { nome: "Água", data: "2024-02-25", valor: 80, situacao: "pendente" }
];

// Usando reduce para somar o valor de todas as contas a pagar
const totalAPagar = contasPagar.reduce(
    function(acumulador, conta) {
        return acumulador + conta.valor;
    }, 0);

console.log(totalAPagar); // Saída: 1880


// =====================
// =====================
// filtrando pessoas com 30 anos ou mais
let pessoasMaduras = pessoas.filter(function(pessoa){
    return pessoa.idade >= 30
})
console.log(pessoasMaduras);

pessoasMaduras.forEach(function(pessoa){
    let p = document.createElement('p')
    p.textContent = `Nome: ${pessoa.nome} - Idade: ${pessoa.idade} - Profissão: ${pessoa.profissao}`
    p.setAttribute('class', 'pPessoa')
    p.setAttribute('id', `pessoa${pessoas.indexOf(pessoa)}`)
    root.appendChild(p)
})

// =====================
//========================
pessoas.filter(function(pessoa){
    return pessoa.idade >= 30
}).forEach(function(pessoa){
    let p = document.createElement('p')
    p.textContent = `Nome: ${pessoa.nome} - Idade: ${pessoa.idade} - Profissão: ${pessoa.profissao}`
    p.setAttribute('class', 'vermelho')
    p.setAttribute('id', `pessoa${pessoas.indexOf(pessoa)}`)
    root.appendChild(p)
})
//========================

pessoas.forEach(function(pessoa){
    let p = document.createElement('p')
    p.textContent = `Nome: ${pessoa.nome} - Idade: ${pessoa.idade} - Profissão: ${pessoa.profissao}`
    p.setAttribute('class', 'pPessoa')
    p.setAttribute('id', `pessoa${pessoas.indexOf(pessoa)}`)
    root.appendChild(p)
})



// for(i=0; i<pessoas.length; i++){
//     let p = document.createElement('p')
//     p.textContent = `Nome: ${pessoas[i].nome} - Idade: ${pessoas[i].idade} - Profissão: ${pessoas[i].profissao}`
//     p.setAttribute('class', 'pPessoa')
//     p.setAttribute('id', `pessoa${i}`)
//     root.appendChild(p)
// }





