let numero = Number(prompt("Digite o valor para testar:"))
let i
let divisores = 0

i=2
while(i < numero){
    if(numero % i == 0){
        divisores++
    }
    i++
}

if(divisores == 0){
    console.log("É primo");
}else{
    console.log("NÃO é primo");
}