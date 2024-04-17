
let nomeUsuario, sobrenome, nomeCompleto

let precoGrama, peso, valor
function calcularOuro(){
    precoGrama = 368.95
    peso = Number(prompt('Qual o peso em gramas?'))
    valor = precoGrama * peso
    alert("Valor da coisa: R$" + valor.toFixed(2))
}

function calcularIdade(){
    let idade, idadeAnoQueVem
    idade = Number(prompt("Qual sua idade?"))
    idadeAnoQueVem = idade + 1

    console.log(idadeAnoQueVem);
}



function saudar(){
    nomeUsuario = prompt("Qual seu nome:")
    sobrenome = prompt("...e o sobrenome:")

    nomeCompleto = nomeUsuario + ' ' + sobrenome

    alert("Nome completo: " + nomeCompleto)
    alert(`Nome completo: ${nomeCompleto}`)
}