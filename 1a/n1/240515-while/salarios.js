let qtd_salarios = Number(prompt("Quantos salarios?"))
let contador = 0
let percentualAumento = 10
let salario, salarioNovo, folhaAntiga=0, folhaNova=0, maiorSalario=0
while(contador < qtd_salarios){
    salario = Number(prompt("Salario:"))
    folhaAntiga += salario
    if(salario < 2500){
        // let aumento = (10*salario) / 100
        let aumento = salario * percentualAumento/100
        // let aumento = salario * 0.1
        salarioNovo = salario + aumento
    }else{
        salarioNovo = salario
    }
    folhaNova += salarioNovo
    if(salario > maiorSalario){
        maiorSalario = salario
    }
    contador++
}
console.log("Folha antiga: " + folhaAntiga);
console.log("Folha nova: " + folhaNova);
console.log("Maior salário: " + maiorSalario);


