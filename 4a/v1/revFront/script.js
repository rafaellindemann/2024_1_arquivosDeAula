const pessoas = [
    { nome: "Maria", idade: 30, profissao: "Engenheira" },
    { nome: "João", idade: 21, profissao: "Designer" },
    { nome: "Juca", idade: 22, profissao: "CEO de MEI" },
    { nome: "Melancia", idade: 43, profissao: "Dev Junior" },
    { nome: "Olivia", idade: 24, profissao: "Dev fullstack overflow" },
    { nome: "Ana", idade: 35, profissao: "Professor" }
];
let root = document.getElementById('root')



let pessoasMaduras = pessoas.filter(function(pessoa){
    return pessoa.idade >= 30
    // return pessoa.idade % 2 === 0
})

pessoasMaduras.forEach( (pessoa) => {
    const p = document.createElement("p");
    p.textContent = `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Profissão: ${pessoa.profissao}`;
    p.setAttribute('id', `campo${pessoas.indexOf(pessoa)}`)
    root.appendChild(p);
})

console.log(pessoasMaduras);

// pessoas.forEach(
//     function(pessoa){
//         const p = document.createElement("p");
//         p.textContent = `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Profissão: ${pessoa.profissao}`;
//         p.setAttribute('id', `campo${pessoas.indexOf(pessoa)}`)
//         root.appendChild(p);
//     }
// )




// for(i=0; i<pessoas.length; i++){
//     const p = document.createElement("p");
//     p.textContent = `Nome: ${pessoas[i].nome}, Idade: ${pessoas[i].idade}, Profissão: ${pessoas[i].profissao}`;
//     p.setAttribute('id', `campo${i}`)
//     root.appendChild(p);
// }


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
    } 
, 0);

 console.log(contasPagar);

console.log(totalAPagar); // Saída: 1880

// *** verificar o return do map
// const pessoasMapeadas = pessoas.map(function(pessoa) {
//     const p = document.createElement("p");
//     p.textContent = `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Profissão: ${pessoa.profissao}`;
//     root.appendChild(p);
//     return p.textContent
// });

// console.log(pessoasMapeadas)
pessoas.map(function(pessoa) {
    const p = document.createElement("p");
    p.textContent = `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Profissão: ${pessoa.profissao}`;
    root.appendChild(p);
});


